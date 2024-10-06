import { ReactNode, useContext, useEffect, useRef, useState } from "react";
import { DetailedDocumentation } from "../models/types";
import { KeyboardArrowDown, KeyboardArrowUp, Link } from "./icons";
import { AppContext } from "./contextProvider";
import RoundedButton from "./roundedButton";

/**
 * カテゴリー名とその項目の説明を表示する
 */
export const CheatSheet = ({
    category,
    detailedDocumentations,
}: {
    category: string;
    detailedDocumentations: DetailedDocumentation[];
}): JSX.Element => {
    return (
        <div className="mb-8 inline-block w-full">
            <FloatingCard>
                <CategoryBar category={category} />
                {detailedDocumentations.map((doc) => {
                    return (
                        <DocumentationGroupBox
                            key={doc.entry}
                            detailedDocumentation={doc}
                        />
                    );
                })}
            </FloatingCard>
        </div>
    );
};

/**
 * 浮いたように見える角丸のカード
 */
const FloatingCard = ({ children }: { children?: ReactNode }): JSX.Element => {
    return (
        <div className="rounded-xl bg-neutral-50 shadow-md shadow-neutral-400 dark:bg-neutral-700 dark:shadow-neutral-950">
            {children}
        </div>
    );
};

/**
 * 中央揃えでカテゴリー名を表示する
 */
const CategoryBar = ({ category }: { category: string }): JSX.Element => {
    return (
        <h2 className="whitespace-pre-line break-keep p-2 text-center text-xl font-bold text-orange-500">
            {category}
        </h2>
    );
};

/**
 * 項目、リンクボタン、説明、詳細、パラメーターを表示する
 */
const DocumentationGroupBox = ({
    detailedDocumentation,
}: {
    detailedDocumentation: DetailedDocumentation;
}): JSX.Element => {
    const [shouldExpand, setShouldExpand] = useState(false);
    const { shouldExpandAll, setShouldExpandAll } = useContext(AppContext);

    // 「全て展開」「全て折りたたむ」が押された状態に合わせて詳細エリアを開閉する
    useEffect(() => {
        if (shouldExpandAll != null) {
            setShouldExpand(shouldExpandAll);
        }
    }, [shouldExpandAll]);

    // 項目エリアをクリックすると詳細エリアを開閉する
    const handleEntryClick: React.MouseEventHandler<HTMLDivElement> = () => {
        setShouldExpand(!shouldExpand);
        setShouldExpandAll(null);
    };

    return (
        <div>
            <EntryAndLinkBar
                detailedDocumentation={detailedDocumentation}
                handleEntryClick={handleEntryClick}
            />
            <div className="space-y-2 p-2">
                <DescriptionBox detailedDocumentation={detailedDocumentation} />
                {shouldExpand && (
                    <>
                        {detailedDocumentation.detail}
                        <ParametersTable
                            detailedDocumentation={detailedDocumentation}
                        />
                    </>
                )}
            </div>
        </div>
    );
};

/**
 * 項目とリンクを表示する
 */
const EntryAndLinkBar = ({
    detailedDocumentation,
    handleEntryClick,
}: {
    detailedDocumentation: DetailedDocumentation;
    handleEntryClick: React.MouseEventHandler<HTMLDivElement>;
}): JSX.Element => {
    return (
        <div
            className="flex cursor-pointer justify-between whitespace-pre-line border-t-2 border-neutral-500 bg-neutral-200 p-2 transition hover:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-600"
            onClick={handleEntryClick}
        >
            <h3>{detailedDocumentation.entry}</h3>
            <a
                className="content-center"
                href={detailedDocumentation.url}
                target="_blank"
                onClick={(event) => {
                    // handleEntryClick()が呼び出されないよう、
                    // クリックイベントの伝播を止める
                    event.stopPropagation();
                }}
            >
                <Link className="w-10 rounded-full fill-neutral-500 transition hover:bg-neutral-200 hover:fill-sky-400 dark:hover:bg-neutral-500" />
            </a>
        </div>
    );
};

/**
 * 説明を表示する
 */
const DescriptionBox = ({
    detailedDocumentation,
}: {
    detailedDocumentation: DetailedDocumentation;
}): JSX.Element => {
    return (
        <p className="whitespace-pre-line text-sm">
            {detailedDocumentation.description}
        </p>
    );
};

/**
 * クラス名とそれに対応するCSSを表示する\
 * 高さが192pxを超える場合、コンパクトに表示する
 */
const ParametersTable = ({
    detailedDocumentation,
}: {
    detailedDocumentation: DetailedDocumentation;
}): JSX.Element => {
    const [shouldExpand, setShouldExpand] = useState(false);
    const [shouldShowButton, setShouldShowButton] = useState(false);
    const tableElement = useRef<HTMLTableElement>(null);

    // レンダリング直後に<table>要素の高さを取得する
    useEffect(() => {
        const tableHeight =
            tableElement.current?.getBoundingClientRect().height;
        if (tableHeight == null) return;

        if (tableHeight > 192) {
            setShouldShowButton(true);
        }
    }, []);

    return (
        <>
            <div
                className={`overflow-clip ${shouldExpand ? "" : "max-h-[192px]"}`}
            >
                <table
                    className={`w-full table-fixed border-collapse overflow-clip whitespace-pre-line rounded-lg outline outline-2 -outline-offset-2 outline-stone-400 dark:outline-stone-500`}
                    ref={tableElement}
                >
                    {detailedDocumentation.entry.includes("Container") ? (
                        // Layout > Containerの項目だけ、専用の<tbody>要素を使用する
                        <TbodyUsedOnlyForContainer
                            documentation={detailedDocumentation}
                        />
                    ) : (
                        // それ以外で使用する<tbody>要素
                        <TbodyOfParameters
                            documentation={detailedDocumentation}
                            shouldExpand={shouldExpand}
                        />
                    )}
                </table>
            </div>
            {shouldShowButton && (
                <RoundedButton
                    className="w-full"
                    Icon={
                        shouldExpand ? (
                            <KeyboardArrowUp className="fill-neutral-500" />
                        ) : (
                            <KeyboardArrowDown className="fill-neutral-500" />
                        )
                    }
                    text=""
                    onClick={() => setShouldExpand(!shouldExpand)}
                />
            )}
        </>
    );
};

/**
 * Parameterの値を表示するための<tbody>要素
 */
const TbodyOfParameters = ({
    documentation,
    shouldExpand,
}: {
    documentation: DetailedDocumentation;
    shouldExpand: boolean;
}): JSX.Element => {
    return (
        <tbody>
            {documentation.parameters
                .filter((_, i) => {
                    // 描画コストを減らすために折りたたみ時は9行分まで表示する
                    if (!shouldExpand) {
                        return i < 9;
                    }

                    return true;
                })
                .map((parameters, i) => {
                    return (
                        <tr
                            key={i}
                            className="odd:bg-stone-100 even:bg-stone-200 dark:odd:bg-stone-700 dark:even:bg-stone-800"
                        >
                            {parameters.map((parameter) => {
                                return (
                                    <td
                                        key={parameter}
                                        className="px-2 py-1 text-xs text-neutral-700 first:text-blue-700 last:text-green-700 dark:text-neutral-300 dark:first:text-blue-300 dark:last:text-green-300"
                                    >
                                        {parameter}
                                    </td>
                                );
                            })}
                        </tr>
                    );
                })}
        </tbody>
    );
};

/**
 * 「Layout > Container」のみで使用する<tbody>要素
 */
const TbodyUsedOnlyForContainer = ({
    documentation,
}: {
    documentation: DetailedDocumentation;
}): JSX.Element => {
    return (
        <tbody>
            {documentation.parameters.map((parameters, i) => {
                return (
                    <tr
                        key={i}
                        className="odd:bg-neutral-100 even:bg-stone-200 dark:odd:bg-stone-700 dark:even:bg-stone-800"
                    >
                        {parameters.map((parameter, j) => {
                            return (
                                <td
                                    key={parameter}
                                    className={`px-2 py-1 text-xs text-neutral-700 last:text-green-700 dark:text-neutral-300 dark:last:text-green-300 ${i === 0 ? "first:text-blue-700 dark:first:text-blue-300" : ""}`}
                                    // 最初のセルだけ縦方向に連結する
                                    rowSpan={i === 0 && j === 0 ? 6 : undefined}
                                >
                                    {parameter}
                                </td>
                            );
                        })}
                    </tr>
                );
            })}
        </tbody>
    );
};
