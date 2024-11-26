import { CategoryEnum } from "../models/category";
import { Translation } from "../models/types";
import DetailTable from "../views/common/detailTable";

const tableJA = new Map<string, Translation>([
    [
        CategoryEnum.Tables,
        {
            entry: "テーブル",
            description: "",
            detail: null,
        },
    ],
    [
        "Border Collapse",
        {
            entry: "境界の折りたたみ",
            description: "テーブルセルの境界線の種類を指定する",
            detail: (
                <DetailTable
                    value={[
                        ["collapse", "隣接するセルの境界線をひとつに結合する"],
                        ["separate", "セルの境界線を独立する"],
                    ]}
                />
            ),
        },
    ],
    [
        "Border Spacing",
        {
            entry: "境界の空間",
            description: "セルの周辺に設ける隙間の広さを指定する",
            detail: (
                <DetailTable
                    value={[
                        ["*", "上下左右の隙間の広さ"],
                        ["x-*", "水平方向の隙間の広さ"],
                        ["y-*", "垂直方向の隙間の広さ"],
                    ]}
                />
            ),
        },
    ],
    [
        "Table Layout",
        {
            entry: "テーブルレイアウト",
            description: "テーブル列の割り当て方を指定する",
            detail: (
                <DetailTable
                    value={[
                        [
                            "auto",
                            "セルの内容に合わせて自動的に列の幅を調整する",
                        ],
                        ["fixed", "均等に割り当てる"],
                    ]}
                />
            ),
        },
    ],
    [
        "Caption Side",
        {
            entry: "キャプションサイド",
            description: "テーブルの<caption>要素を表示する位置を指定する",
            detail: (
                <DetailTable
                    value={[
                        ["top", "上側"],
                        ["bottom", "下側"],
                    ]}
                />
            ),
        },
    ],
]);

export default tableJA;
