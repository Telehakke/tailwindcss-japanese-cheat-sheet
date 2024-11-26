import { FontSize, TextColor } from "../../../common/classNames";

/**
 * 中央揃えでカテゴリー名を表示する
 */
const CategoryBar = ({ category }: { category: string }): JSX.Element => {
    return (
        <h2
            className={`whitespace-pre-line break-keep p-2 text-center font-bold ${FontSize.textXl} ${TextColor.orange500}`}
        >
            {category}
        </h2>
    );
};

export default CategoryBar;
