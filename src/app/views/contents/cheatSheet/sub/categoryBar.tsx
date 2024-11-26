import { CheatSheetData } from "../../../../models/types";
import { FontSize, TextColor } from "../../../common/classNames";

/**
 * 中央揃えでカテゴリー名を表示する
 */
const CategoryBar = ({
    cheatSheetData,
}: {
    cheatSheetData: CheatSheetData;
}): JSX.Element => {
    return (
        <h2
            className={`-mt-[126px] whitespace-pre-line break-keep px-2 pb-2 pt-[134px] text-center font-bold sm:-mt-[80px] sm:pt-[88px] ${FontSize.textXl} ${TextColor.orange500}`}
            id={cheatSheetData.categoryEN}
        >
            {cheatSheetData.category}
        </h2>
    );
};

export default CategoryBar;
