import { CategoryEnum } from "../models/category";
import { Translation } from "../models/types";
import DetailTable from "../views/detailTable";

const flexboxAndGridJA = new Map<string, Translation>([
    [
        CategoryEnum.FlexboxAndGrid,
        {
            entry: "フレックスボックス＆グリッド",
            description: "",
            detail: null,
        },
    ],
    [
        "Flex Basis",
        {
            entry: "フレックスベーシス",
            description:
                "親要素にflexが指定されている場合の、自身の初期サイズを指定する\n親要素にflex-rowが指定されている場合はwidth、flex-colが指定されている場合はheightとして動作する",
            detail: null,
        },
    ],
    [
        "Flex Direction",
        {
            entry: "フレックスの方向",
            description: "flexの子要素の並べ方を指定する",
            detail: (
                <DetailTable
                    value={[
                        ["row", "左から右へ並べる"],
                        ["row-reverse", "右から左へ並べる"],
                        ["col", "上から下へ並べる"],
                        ["col-reverse", "下から上へ並べる"],
                    ]}
                />
            ),
        },
    ],
    [
        "Flex Wrap",
        {
            entry: "フレックスラップ",
            description:
                "flexの子要素を配置する際に、はみ出す場合の折り返し動作を指定する",
            detail: (
                <DetailTable
                    value={[
                        ["wrap", "複数行に折り返す"],
                        [
                            "wrap-reverse",
                            "複数行に折り返す。折り返した行は上に積み上がる",
                        ],
                        ["nowrap", "折り返さない"],
                    ]}
                />
            ),
        },
    ],
    [
        "Flex",
        {
            entry: "フレックス",
            description:
                "Flex Basis、Flex Grow、Flex Shrinkを一度に設定し、親要素のサイズに合わせた自身の伸び縮みを指定する",
            detail: (
                <DetailTable
                    value={[
                        [
                            "1",
                            "自身のwidth、またはheightのサイズを無視して伸び縮みする",
                        ],
                        [
                            "auto",
                            "自身のwidth、またはheightのサイズを考慮して伸び縮みする",
                        ],
                        [
                            "initial",
                            "縮みはするが、親要素の空きを埋めるために伸びはしない",
                        ],
                        ["none", "初期サイズのまま固定する"],
                    ]}
                />
            ),
        },
    ],
    [
        "Flex Grow",
        {
            entry: "フレックスの伸び",
            description:
                "flexが指定されている親要素に空間があれば、自身を伸ばすかどうかを指定する",
            detail: (
                <DetailTable
                    value={[
                        ["grow", "伸ばす"],
                        ["grow-0", "伸ばさない"],
                    ]}
                />
            ),
        },
    ],
    [
        "Flex Shrink",
        {
            entry: "フレックスの縮み",
            description:
                "flexが指定されている親要素からはみ出す場合に、自身を縮めるかどうかを指定する",
            detail: (
                <DetailTable
                    value={[
                        ["shrink", "縮める"],
                        ["shrink-0", "縮めない"],
                    ]}
                />
            ),
        },
    ],
    [
        "Order",
        {
            entry: "オーダー",
            description:
                "flexやgridの子要素の並びに対して、自身を何番目に差し込むかを指定する",
            detail: null,
        },
    ],
    [
        "Grid Template Columns",
        {
            entry: "グリッドテンプレートの列",
            description: "gridの列を指定する",
            detail: (
                <DetailTable
                    value={[
                        ["*", "指定した数だけ等間隔の列を作成する"],
                        ["none", "グリッドレイアウトを解除する"],
                        [
                            "subgrid",
                            "グリッドの中にグリッドを配置する場合に、親グリッドのレイアウトを子グリッドに引き継がせる",
                        ],
                    ]}
                />
            ),
        },
    ],
    [
        "Grid Column Start / End",
        {
            entry: "グリッド列スタート／エンド",
            description: "gridの複数のセルを水平方向に連結する",
            detail: (
                <DetailTable
                    value={[
                        ["auto", "自動"],
                        ["span-*", "指定した数だけセルを連結する"],
                        ["start-*", "連結の開始位置を指定する"],
                        ["end-*", "連結の終端位置を指定する"],
                    ]}
                />
            ),
        },
    ],
    [
        "Grid Template Rows",
        {
            entry: "グリッドテンプレートの行",
            description: "gridの行を指定する",
            detail: (
                <DetailTable
                    value={[
                        ["*", "指定した数だけ等間隔の行を作成する"],
                        ["none", "グリッドレイアウトを解除する"],
                        [
                            "subgrid",
                            "グリッドの中にグリッドを配置する場合に、親グリッドのレイアウトを子グリッドに引き継がせる",
                        ],
                    ]}
                />
            ),
        },
    ],
    [
        "Grid Row Start / End",
        {
            entry: "グリッド行スタート／エンド",
            description: "gridの複数のセルを垂直方向に連結する",
            detail: (
                <DetailTable
                    value={[
                        ["auto", "自動"],
                        ["span-*", "指定した数だけセルを連結する"],
                        ["start-*", "連結の開始位置を指定する"],
                        ["end-*", "連結の終端位置を指定する"],
                    ]}
                />
            ),
        },
    ],
    [
        "Grid Auto Flow",
        {
            entry: "グリッドオートフロー",
            description: "gridの子要素の並べ方を指定する",
            detail: (
                <DetailTable
                    value={[
                        ["row", "右方向へ子要素を並べ、下に向かって折り返す"],
                        ["col", "下方向へ子要素を並べ、右に向かって折り返す"],
                        ["dense", "可能な限りセルを埋めるように子要素を並べる"],
                        ["row-dense", "row + denseの効果"],
                        ["col-dense", "col + denseの効果"],
                    ]}
                />
            ),
        },
    ],
    [
        "Grid Auto Columns",
        {
            entry: "グリッドオート列",
            description:
                "セルの連結具合を元に、gridの列数を自動的に決定。その際の列の幅の計算方法を指定する",
            detail: (
                <DetailTable
                    value={[
                        ["auto", "自動"],
                        [
                            "min",
                            "子要素のコンテンツの最小幅を元に、列の幅を決定する（例えば「Hello, world!」というテキストの場合、半角スペースの箇所で折り返せるため6文字分が最小幅）",
                        ],
                        [
                            "max",
                            "子要素のコンテンツの最大幅を元に、列の幅を決定する（例えば「Hello, world!」であれば全体の13文字分が最大幅）",
                        ],
                        ["fr", "等間隔の列を作る"],
                    ]}
                />
            ),
        },
    ],
    [
        "Grid Auto Rows",
        {
            entry: "グリッドオート行",
            description:
                "セルの連結具合を元に、gridの行数を自動的に決定。その際の行の高さの計算方法を指定する",
            detail: (
                <DetailTable
                    value={[
                        ["auto", "自動"],
                        [
                            "min",
                            "子要素のコンテンツの最小高さを元に、行の高さを決定する（縦書きで有効）",
                        ],
                        [
                            "max",
                            "子要素のコンテンツの最大高さを元に、行の高さを決定する（縦書きで有効）",
                        ],
                        ["fr", "等間隔の行を作る"],
                    ]}
                />
            ),
        },
    ],
    [
        "Gap",
        {
            entry: "隙間",
            description: "flexやgridの子要素同士の隙間の長さを指定する",
            detail: (
                <DetailTable
                    value={[
                        ["*", "水平、垂直の両方向に指定した長さの隙間を挟む"],
                        ["x-*", "水平方向に指定した幅の隙間を挟む"],
                        ["y-*", "垂直方向に指定した高さの隙間を挟む"],
                    ]}
                />
            ),
        },
    ],
    [
        "Justify Content",
        {
            entry: "コンテンツの行揃え",
            description: "flexやgridの行揃えを指定する",
            detail: (
                <DetailTable
                    value={[
                        ["normal", "flexではstart、gridではstretchの動作"],
                        ["start", "水平方向の開始側に寄せる"],
                        ["end", "水平方向の終端側に寄せる"],
                        ["center", "中央揃え"],
                        [
                            "between",
                            "行の最初と最後の子要素を両端に配置し、残りの子要素を均等に配置する",
                        ],
                        [
                            "around",
                            "各子要素が持つ両脇の空間の幅が等しくなるように配置する",
                        ],
                        ["evenly", "各空間の幅が等しくなるように配置する"],
                        [
                            "stretch",
                            "隙間を埋めるように子要素を引き延ばして配置する（gridで有効）",
                        ],
                    ]}
                />
            ),
        },
    ],
    [
        "Justify Items",
        {
            entry: "アイテムの行揃え",
            description: "gridのセル内での配置方法を指定する",
            detail: (
                <DetailTable
                    value={[
                        ["start", "水平方向の開始側に寄せる"],
                        ["end", "水平方向の終端側に寄せる"],
                        ["center", "中央揃え"],
                        ["stretch", "隙間を埋めるように子要素を引き延ばす"],
                    ]}
                />
            ),
        },
    ],
    [
        "Justify Self",
        {
            entry: "自身の行揃え",
            description:
                "Justify Itemsの効果を打ち消し、セル内での自身の配置方法を強制する",
            detail: (
                <DetailTable
                    value={[
                        ["auto", "Justify Itemsの効果を受け入れる"],
                        ["start", "水平方向の開始側に寄せる"],
                        ["end", "水平方向の終端側に寄せる"],
                        ["center", "中央揃え"],
                        ["stretch", "隙間を埋めるように子要素を引き延ばす"],
                    ]}
                />
            ),
        },
    ],
    [
        "Align Content",
        {
            entry: "コンテンツの整列",
            description: "flexやgridの垂直方向の揃えを指定する",
            detail: (
                <DetailTable
                    value={[
                        ["normal", "flexではstart、gridではstretchの動作"],
                        ["start", "垂直方向の開始側に寄せる"],
                        ["end", "垂直方向の終端側に寄せる"],
                        ["center", "中央揃え"],
                        [
                            "between",
                            "列の最初と最後の子要素を両端に配置し、残りの子要素を均等に配置する",
                        ],
                        [
                            "around",
                            "各子要素が持つ上下の空間の高さが等しくなるように配置する",
                        ],
                        ["evenly", "各空間の高さが等しくなるように配置する"],
                        ["baseline", "startと同じ動作"],
                        [
                            "stretch",
                            "隙間を埋めるように子要素を引き延ばす（gridで有効）",
                        ],
                    ]}
                />
            ),
        },
    ],
    [
        "Align Items",
        {
            entry: "アイテムの整列",
            description: "gridのセル内での配置方法を指定する",
            detail: (
                <DetailTable
                    value={[
                        ["start", "垂直方向の開始側に寄せる"],
                        ["end", "垂直方向の終端側に寄せる"],
                        ["center", "中央揃え"],
                        [
                            "baseline",
                            "コンテンツのベースラインが横に揃うように配置する",
                        ],
                        ["stretch", "隙間を埋めるように子要素を引き延ばす"],
                    ]}
                />
            ),
        },
    ],
    [
        "Align Self",
        {
            entry: "自身の整列",
            description:
                "Align Itemsの効果を打ち消し、セル内での自身の配置方法を強制する",
            detail: (
                <DetailTable
                    value={[
                        ["auto", "Align Itemsの効果を受け入れる"],
                        ["start", "垂直方向の開始側に寄せる"],
                        ["end", "垂直方向の終端側に寄せる"],
                        ["center", "中央揃え"],
                        ["baseline", "startと同じ動作"],
                        ["stretch", "隙間を埋めるように子要素を引き延ばす"],
                    ]}
                />
            ),
        },
    ],
    [
        "Place Content",
        {
            entry: "コンテンツの場所",
            description: "Justify ContentとAlign Contentを一度に指定する",
            detail: (
                <DetailTable
                    value={[
                        ["center", "子要素を中央に引き寄せるように配置する"],
                        [
                            "start",
                            "子要素を開始側の角に引き寄せるように配置する",
                        ],
                        ["end", "子要素を終端側の角に引き寄せるように配置する"],
                        ["between", "子要素を中心から離れるように配置する"],
                        [
                            "around",
                            "子要素が持つ周囲の空間が同じ広さになるように配置する",
                        ],
                        [
                            "evenly",
                            "子要素を縦に通るライン上の空間の高さと、横に通るライン上の空間の幅が、それぞれ同じ長さになるように配置する",
                        ],
                        ["baseline", "startと同じ動作"],
                        [
                            "stretch",
                            "セルの隙間を埋めるように子要素を引き延ばす（gridで有効）",
                        ],
                    ]}
                />
            ),
        },
    ],
    [
        "Place Items",
        {
            entry: "アイテムの場所",
            description: "Justify ItemsとAlign Itemsを一度に指定する",
            detail: (
                <DetailTable
                    value={[
                        ["start", "セルの開始側の角に配置する"],
                        ["end", "セルの終端側の角に配置する"],
                        ["center", "セルの中央に配置する"],
                        [
                            "baseline",
                            "セルの水平方向の開始側に寄せつつ、コンテンツのベースラインが横に揃うように配置する",
                        ],
                        [
                            "stretch",
                            "セルの隙間を埋めるように子要素を引き延ばす",
                        ],
                    ]}
                />
            ),
        },
    ],
    [
        "Place Self",
        {
            entry: "自身の場所",
            description: "Justify SelfとAlign Selfを一度に指定する",
            detail: (
                <DetailTable
                    value={[
                        ["auto", "Place Itemsの効果を受け入れる"],
                        ["start", "セルの開始側の角に配置する"],
                        ["end", "セルの終端側の角に配置する"],
                        ["center", "セルの中央に配置する"],
                        [
                            "stretch",
                            "セルの隙間を埋めるように子要素を引き延ばす",
                        ],
                    ]}
                />
            ),
        },
    ],
]);

export default flexboxAndGridJA;
