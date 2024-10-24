import { BreakpointPrefix, BreakpointPrefixEnum } from "./breakpointPrefix";
import { CheatSheetData } from "./types";

type CheatSheetGridRow = {
    readonly firstRow: CheatSheetData[];
    readonly secondRow: CheatSheetData[];
    readonly thirdRow: CheatSheetData[];
    readonly fourthRow: CheatSheetData[];
};

interface ICheatSheetDataSlicer {
    sliced(translations: CheatSheetData[]): CheatSheetGridRow;
}

/**
 * チートシートを1列で表示する場合のデータの分割
 */
class CheatSheetDataSlicerSM implements ICheatSheetDataSlicer {
    sliced(translations: CheatSheetData[]): CheatSheetGridRow {
        return {
            firstRow: [...translations],
            secondRow: [],
            thirdRow: [],
            fourthRow: [],
        };
    }
}

/**
 * チートシートを2列で表示する場合のデータの分割
 */
class CheatSheetDataSlicerMD implements ICheatSheetDataSlicer {
    sliced(translations: CheatSheetData[]): CheatSheetGridRow {
        return {
            firstRow: translations.slice(0, 5),
            secondRow: translations.slice(5),
            thirdRow: [],
            fourthRow: [],
        };
    }
}

/**
 * チートシートを3列で表示する場合のデータの分割
 */
class CheatSheetDataSlicerLG implements ICheatSheetDataSlicer {
    sliced(translations: CheatSheetData[]): CheatSheetGridRow {
        return {
            firstRow: translations.slice(0, 4),
            secondRow: translations.slice(4, 8),
            thirdRow: translations.slice(8),
            fourthRow: [],
        };
    }
}

/**
 * チートシートを4列で表示する場合のデータの分割
 */
class CheatSheetDataSlicerXL implements ICheatSheetDataSlicer {
    sliced(translations: CheatSheetData[]): CheatSheetGridRow {
        return {
            firstRow: translations.slice(0, 2),
            secondRow: translations.slice(2, 6),
            thirdRow: translations.slice(6, 10),
            fourthRow: translations.slice(10),
        };
    }
}

export default class CheatSheetDataSlicer {
    private static values = new Map<BreakpointPrefix, ICheatSheetDataSlicer>([
        [BreakpointPrefixEnum.sm, new CheatSheetDataSlicerSM()],
        [BreakpointPrefixEnum.md, new CheatSheetDataSlicerMD()],
        [BreakpointPrefixEnum.lg, new CheatSheetDataSlicerLG()],
        [BreakpointPrefixEnum.xl, new CheatSheetDataSlicerXL()],
    ]);

    static get = (prefix: BreakpointPrefix): ICheatSheetDataSlicer => {
        const result = this.values.get(prefix);
        if (result == null) return new CheatSheetDataSlicerSM();

        return result;
    };
}
