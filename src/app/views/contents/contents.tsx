import { useEffect, useState } from "react";
import { CheatSheetData } from "../../models/types";
import CheatSheetDataSlicer from "../../models/cheatSheetDataSlicer";
import { useAtomValue } from "jotai";
import { cheatSheetDataAtom } from "../../appStates";
import { CheatSheet } from "./cheatSheet/cheatSheet";
import {
    BreakpointPrefix,
    getBreakpointPrefix,
} from "../../models/breakpointPrefix";

const Contents = (): JSX.Element => {
    const cheatSheetData = useAtomValue(cheatSheetDataAtom);
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
            const sliced = slicer.sliced(cheatSheetData);
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
        const sliced = slicer.sliced(cheatSheetData);
        setFirstRow(sliced.firstRow);
        setSecondRow(sliced.secondRow);
        setThirdRow(sliced.thirdRow);
        setFourthRow(sliced.fourthRow);
    }, [cheatSheetData]);

    return (
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="flex flex-col">
                {firstRow.map((v) => (
                    <CheatSheet
                        key={v.category}
                        category={v.category}
                        detailedDocumentations={v.detailedDocumentations}
                    />
                ))}
            </div>
            <div className="flex flex-col">
                {secondRow.map((v) => (
                    <CheatSheet
                        key={v.category}
                        category={v.category}
                        detailedDocumentations={v.detailedDocumentations}
                    />
                ))}
            </div>
            <div className="flex flex-col">
                {thirdRow.map((v) => (
                    <CheatSheet
                        key={v.category}
                        category={v.category}
                        detailedDocumentations={v.detailedDocumentations}
                    />
                ))}
            </div>
            <div className="flex flex-col">
                {fourthRow.map((v) => (
                    <CheatSheet
                        key={v.category}
                        category={v.category}
                        detailedDocumentations={v.detailedDocumentations}
                    />
                ))}
            </div>
        </div>
    );
};

export default Contents;
