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
            className={`scroll-mt-[126px] whitespace-pre-line break-keep p-2 pb-2 text-center font-bold sm:scroll-mt-[80px] ${FontSize.textXl} ${TextColor.orange500}`}
            id={cheatSheetData.categoryEN}
        >
            {cheatSheetData.category}
        </h2>
    );
};

export default CategoryBar;
