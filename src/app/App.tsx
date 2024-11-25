import { useEffect, useRef, useState } from "react";
import { CheatSheet } from "./views/cheatSheet";
import { Close, Search, UnfoldLess, UnfoldMore } from "./views/icons";
import RoundedButton from "./views/roundedButton";
import { version } from "./data/Layout_v3.4.13";
import { CheatSheetData, DetailedDocumentation } from "./models/types";
import DelayAction from "./models/delayAction";
import {
    BreakpointPrefix,
    getBreakpointPrefix,
} from "./models/breakpointPrefix";
import CheatSheetDataSlicer from "./models/cheatSheetDataSlicer";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import {
    translationsAtom,
    shouldExpandAllAtom,
    translatorEN,
    translatorJA,
    isJapaneseAtom,
} from "./appStates";
import githubMarkSVG from "./assets/github-mark.svg";
import githubMarkWhiteSVG from "./assets/github-mark-white.svg";

const App = (): JSX.Element => {
    const translations = useAtomValue(translationsAtom);
    const [firstRow, setFirstRow] = useState<CheatSheetData[]>([]);
    const [secondRow, setSecondRow] = useState<CheatSheetData[]>([]);
    const [thirdRow, setThirdRow] = useState<CheatSheetData[]>([]);
    const [fourthRow, setFourthRow] = useState<CheatSheetData[]>([]);

    // レスポンシブデザインによるレイアウト変更に合わせて、
    // チートシートの列ごとの配分を変更する
    useEffect(() => {
        let beforePrefix: BreakpointPrefix | null = null;
        window.addEventListener("resize", () => {
            const prefix = getBreakpointPrefix(window.innerWidth);
            if (beforePrefix === prefix) return;

            beforePrefix = prefix;
            const slicer = CheatSheetDataSlicer.get(prefix);
            const sliced = slicer.sliced(translations);
            setFirstRow(sliced.firstRow);
            setSecondRow(sliced.secondRow);
            setThirdRow(sliced.thirdRow);
            setFourthRow(sliced.fourthRow);
        });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // 初回、または言語切り替え時のレンダリング
    useEffect(() => {
        const prefix = getBreakpointPrefix(window.innerWidth);
        const slicer = CheatSheetDataSlicer.get(prefix);
        const sliced = slicer.sliced(translations);
        setFirstRow(sliced.firstRow);
        setSecondRow(sliced.secondRow);
        setThirdRow(sliced.thirdRow);
        setFourthRow(sliced.fourthRow);
    }, [translations]);

    return (
        <>
            <div className="space-y-4 bg-gray-800 py-4 text-neutral-100">
                <h1 className="break-keep text-center text-2xl font-bold drop-shadow-[0_0_5px_rgba(0,255,255,0.75)]">
                    Tailwind CSS 日本語チートシート
                </h1>
                <div className="flex justify-between px-4">
                    <p className="my-auto -ml-4 bg-gradient-to-r from-purple-500 to-transparent px-4 text-sm">
                        {`Documentation ${version}`}
                    </p>
                    <LanguageSelectionButton />
                </div>
            </div>
            <div className="space-y-4 p-4 text-neutral-950 dark:text-neutral-100">
                <ExpandAndCollapseButtons />
                <SearchTextBox />
                <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <div className="flex flex-col">
                        {firstRow.map((v) => (
                            <CheatSheet
                                key={v.category}
                                category={v.category}
                                detailedDocumentations={
                                    v.detailedDocumentations
                                }
                            />
                        ))}
                    </div>
                    <div className="flex flex-col">
                        {secondRow.map((v) => (
                            <CheatSheet
                                key={v.category}
                                category={v.category}
                                detailedDocumentations={
                                    v.detailedDocumentations
                                }
                            />
                        ))}
                    </div>
                    <div className="flex flex-col">
                        {thirdRow.map((v) => (
                            <CheatSheet
                                key={v.category}
                                category={v.category}
                                detailedDocumentations={
                                    v.detailedDocumentations
                                }
                            />
                        ))}
                    </div>
                    <div className="flex flex-col">
                        {fourthRow.map((v) => (
                            <CheatSheet
                                key={v.category}
                                category={v.category}
                                detailedDocumentations={
                                    v.detailedDocumentations
                                }
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center gap-2 pb-4">
                <a
                    href="https://github.com/Telehakke/tailwindcss-japanese-cheat-sheet"
                    target="_blank"
                >
                    <picture className="transition hover:opacity-70">
                        <source
                            srcSet={githubMarkWhiteSVG}
                            media="(prefers-color-scheme: dark)"
                        />
                        <img src={githubMarkSVG} className="h-6 w-6" />
                    </picture>
                </a>
                <small className="text-neutral-950 dark:text-neutral-100">
                    © 2024 Telehakke
                </small>
            </div>
        </>
    );
};

export default App;

/**
 * 日本語、英語を切り替えるボタン
 */
const LanguageSelectionButton = (): JSX.Element => {
    const setTranslations = useSetAtom(translationsAtom);
    const [isJapanese, setIsJapanese] = useAtom(isJapaneseAtom);

    return (
        <div>
            <button
                className={`rounded-l-full border-y-2 border-l-2 border-purple-500 px-2 transition ${isJapanese ? "bg-purple-500" : "hover:bg-white/20"}`}
                onClick={() => {
                    setTranslations(translatorJA.getTranslations());
                    setIsJapanese(true);
                }}
            >
                日本語
            </button>
            <button
                className={`rounded-r-full border-y-2 border-r-2 border-purple-500 px-2 transition ${isJapanese ? "hover:bg-white/20" : "bg-purple-500"}`}
                onClick={() => {
                    setTranslations(translatorEN.getTranslations());
                    setIsJapanese(false);
                }}
            >
                English
            </button>
        </div>
    );
};

/**
 * 全て展開、全て折りたたむボタン
 */
const ExpandAndCollapseButtons = (): JSX.Element => {
    const isJapanese = useAtomValue(isJapaneseAtom);
    const setShouldExpandAll = useSetAtom(shouldExpandAllAtom);

    return (
        <div className="flex justify-center gap-4">
            <RoundedButton
                className="px-2"
                Icon={<UnfoldMore className="fill-neutral-500" />}
                text={isJapanese ? "全て展開" : "Expand All"}
                onClick={() => setShouldExpandAll(true)}
            />
            <RoundedButton
                className="px-2"
                Icon={<UnfoldLess className="fill-neutral-500" />}
                text={isJapanese ? "全て折りたたむ" : "Collapse All"}
                onClick={() => setShouldExpandAll(false)}
            />
        </div>
    );
};

/**
 * 検索テキストボックス
 */
const SearchTextBox = (): JSX.Element => {
    const setTranslations = useSetAtom(translationsAtom);
    const isJapanese = useAtomValue(isJapaneseAtom);
    const [isFocus, setIsFocus] = useState(false);
    const [inputString, setInputString] = useState("");
    const inputElement = useRef<HTMLInputElement>(null);

    // 虫眼鏡アイコンの表示・非表示のためにフォーカスの状態を取得する
    useEffect(() => {
        inputElement.current?.addEventListener("focus", () => {
            setIsFocus(true);
        });
        inputElement.current?.addEventListener("focusout", () => {
            setIsFocus(false);
        });
    }, []);

    // 項目、説明、パラメーターに対し、検索文字列が含まれる説明書だけを抽出する
    const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (
        event,
    ) => {
        const searchString = event.target.value;
        setInputString(searchString);
        const lowerCaseSearchString = searchString.toLowerCase();

        // フィルタリングのロジックをまとめた関数
        const FilterOutNonMatchingDocumentations = (
            src: DetailedDocumentation[],
            searchString: string,
        ): DetailedDocumentation[] => {
            const result = src.filter((doc) => {
                if (doc.entry.toLowerCase().includes(searchString)) {
                    return true;
                }

                if (doc.description.toLowerCase().includes(searchString)) {
                    return true;
                }

                for (const parameters of doc.parameters) {
                    for (const parameter of parameters) {
                        if (parameter.toLowerCase().includes(searchString)) {
                            return true;
                        }
                    }
                }
                return false;
            });
            return result;
        };

        DelayAction.run(() => {
            const translations = isJapanese
                ? translatorJA.getTranslations()
                : translatorEN.getTranslations();
            const result = translations.map((translation) => {
                const documentations = FilterOutNonMatchingDocumentations(
                    translation.detailedDocumentations,
                    lowerCaseSearchString,
                );
                return {
                    category: translation.category,
                    detailedDocumentations: documentations,
                };
            });
            setTranslations(result);
        }, 400);
    };

    // 入力ボックスを空にしてフィルタリングを解除する
    const handleCloseClick: React.MouseEventHandler<HTMLButtonElement> = () => {
        setInputString("");
        setTranslations(
            isJapanese
                ? translatorJA.getTranslations()
                : translatorEN.getTranslations(),
        );
    };

    return (
        <div className="relative mx-auto max-w-80">
            <label className="sr-only" htmlFor="search">
                クラス名の検索
            </label>
            <input
                className="h-8 w-full rounded-md bg-transparent px-2"
                id="search"
                type="text"
                onChange={handleInputChange}
                value={inputString}
                ref={inputElement}
            />

            <div className="absolute inset-0 -z-10 rounded-md bg-neutral-50 dark:bg-neutral-700">
                {!isFocus && inputString.length === 0 ? (
                    <Search className="absolute inset-y-0 left-2 my-auto fill-neutral-500" />
                ) : null}
            </div>
            {inputString.length > 0 && (
                <button onClick={handleCloseClick}>
                    <Close className="absolute inset-y-0 right-2 my-auto rounded-full fill-neutral-500 transition hover:bg-neutral-200 dark:hover:bg-neutral-600 dark:hover:fill-neutral-400" />
                </button>
            )}
        </div>
    );
};
