import { useAtom, useSetAtom } from "jotai";
import { version } from "../data/Layout_v3.4.13";
import { Bg, Border, FontSize, TextColor } from "./common/classNames";
import {
    cheatSheetDataAtom,
    isJapaneseAtom,
    translatorEN,
    translatorJA,
} from "../appStates";

const Header = (): JSX.Element => {
    return (
        <div className={`space-y-4 py-4 ${Bg.gray800} ${TextColor.neutral100}`}>
            <Title />
            <div className="flex items-center justify-between px-4">
                <DocumentationVersion />
                <LanguageSelectionButton />
            </div>
        </div>
    );
};

export default Header;

const Title = (): JSX.Element => {
    return (
        <h1
            className={`break-keep text-center font-bold drop-shadow-[0_0_5px_rgba(0,255,255,0.75)] ${FontSize.text2xl}`}
        >
            Tailwind CSS 日本語チートシート
        </h1>
    );
};

const DocumentationVersion = (): JSX.Element => {
    return (
        <p
            className={`-ml-4 bg-gradient-to-r from-purple-500 to-transparent px-4 ${FontSize.textSm}`}
        >
            {`Documentation ${version}`}
        </p>
    );
};

/**
 * 日本語、英語を切り替えるボタン
 */
const LanguageSelectionButton = (): JSX.Element => {
    const setCheatSheetData = useSetAtom(cheatSheetDataAtom);
    const [isJapanese, setIsJapanese] = useAtom(isJapaneseAtom);

    return (
        <div>
            <button
                className={`rounded-l-full border-y-2 border-l-2 px-2 transition ${Border.purple500} ${isJapanese ? Bg.purple500 : Bg.hoverWhiteAlpha20}`}
                onClick={() => {
                    setCheatSheetData(translatorJA.getCheatSheetData());
                    setIsJapanese(true);
                }}
            >
                日本語
            </button>
            <button
                className={`rounded-r-full border-y-2 border-r-2 px-2 transition ${Border.purple500} ${isJapanese ? Bg.hoverWhiteAlpha20 : Bg.purple500}`}
                onClick={() => {
                    setCheatSheetData(translatorEN.getCheatSheetData());
                    setIsJapanese(false);
                }}
            >
                English
            </button>
        </div>
    );
};
