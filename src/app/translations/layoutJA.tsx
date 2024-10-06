import { CategoryEnum } from "../models/category";
import { Translation } from "../models/types";
import DetailTable from "../views/detailTable";

const layoutJA = new Map<string, Translation>([
    [
        CategoryEnum.Layout,
        {
            entry: "レイアウト",
            description: "",
            detail: null,
        },
    ],
    [
        "Aspect Ratio",
        {
            entry: "アスペクト比",
            description: "要素のアスペクト比を指定する",
            detail: (
                <DetailTable
                    value={[
                        ["auto", "自動"],
                        ["square", "1:1で固定"],
                        ["video", "16:9で固定"],
                    ]}
                />
            ),
        },
    ],
    [
        "Container",
        {
            entry: "コンテナー",
            description:
                "ビューポートの幅に応じて要素の最大幅を640px未満、640px、768px、1024px、1280px、1536pxと段階的に変化させる",
            detail: null,
        },
    ],
    [
        "Columns",
        {
            entry: "列",
            description:
                "要素のコンテンツ領域を縦に分割する\n分割する数、または幅を指定する",
            detail: null,
        },
    ],
    [
        "Break After",
        {
            entry: "後の区切り",
            description:
                "要素の後における、印刷時の改ページや段区切りの動作を指定する",
            detail: (
                <DetailTable
                    value={[
                        ["auto", "自動"],
                        ["avoid", "改ページや段区切りを禁止する"],
                        ["all", "強制的に改ページする"],
                        ["avoid-page", "改ページを禁止する"],
                        ["page", "改ページする"],
                        ["left", "次のページが左側に来るよう改ページする"],
                        ["right", "次のページが右側に来るよう改ページする"],
                        ["column", "段区切りする"],
                    ]}
                />
            ),
        },
    ],
    [
        "Break Before",
        {
            entry: "前の区切り",
            description:
                "要素の前における、印刷時の改ページや段区切りの動作を指定する",
            detail: (
                <DetailTable
                    value={[
                        ["auto", "自動"],
                        ["avoid", "改ページや段区切りを禁止する"],
                        ["all", "強制的に改ページする"],
                        ["avoid-page", "改ページを禁止する"],
                        ["page", "改ページする"],
                        ["left", "次のページが左側に来るよう改ページする"],
                        ["right", "次のページが右側に来るよう改ページする"],
                        ["column", "段区切りする"],
                    ]}
                />
            ),
        },
    ],
    [
        "Break Inside",
        {
            entry: "中の区切り",
            description:
                "要素の中における、印刷時の改ページや段区切りの動作を指定する",
            detail: (
                <DetailTable
                    value={[
                        ["auto", "自動"],
                        ["avoid", "改ページや段区切りを禁止する"],
                        ["avoid-page", "改ページを禁止する"],
                        ["avoid-column", "段区切りを禁止する"],
                    ]}
                />
            ),
        },
    ],
    [
        "Box Decoration Break",
        {
            entry: "区切られたボックスの装飾",
            description:
                "要素が複数の行、段、ページに区切られる場合の装飾方法を指定する",
            detail: (
                <DetailTable
                    value={[
                        ["clone", "それぞれの断片ごとに装飾する"],
                        [
                            "slice",
                            "断片化していない状態で装飾。それから行、段、ページに区切られる",
                        ],
                    ]}
                />
            ),
        },
    ],
    [
        "Box Sizing",
        {
            entry: "ボックス寸法",
            description: "要素の幅と高さを求めるための領域を指定する",
            detail: (
                <DetailTable
                    value={[
                        ["border", "境界や余白を含めて要素の寸法とする"],
                        ["content", "コンテンツ領域を要素の寸法とする"],
                    ]}
                />
            ),
        },
    ],
    [
        "Display",
        {
            entry: "ディスプレイ",
            description: "要素の表示方法を指定する",
            detail: (
                <DetailTable
                    value={[
                        ["block", "前後に改行を生成し、要素を縦に並べる"],
                        ["inline-block", "前後に改行を生成しない"],
                        [
                            "inline",
                            "前後に改行を生成しない。垂直方向の境界や余白を無視する",
                        ],
                        [
                            "flex",
                            "Flexboxカテゴリーのクラス名と併用することで、複雑なレイアウトを実現する",
                        ],
                        ["inline-flex", "inline + flexの効果"],
                        ["table", "<table>要素と同じく動作する"],
                        ["inline-table", "inline + tableの効果"],
                        ["table-caption", "<caption>要素と同じく動作する"],
                        ["table-cell", "<td>要素と同じく動作する"],
                        ["table-column", "<col>要素と同じく動作する"],
                        [
                            "table-column-group",
                            "<colgroup>要素と同じく動作する",
                        ],
                        ["table-footer-group", "<tfoot>要素と同じく動作する"],
                        ["table-header-group", "<thead>要素と同じく動作する"],
                        ["table-row-group", "<tbody>要素と同じく動作する"],
                        ["table-row", "<tr>要素と同じく動作する"],
                        [
                            "flow-root",
                            "子要素がFloatsのクラス名を使用している場合に、その回り込みを解除する",
                        ],
                        ["grid", "子要素をタイル状に配置する"],
                        ["inline-grid", "inline + gridの効果"],
                        [
                            "contents",
                            "ボックスを生成せずに、コンテンツ領域だけを表示する",
                        ],
                        ["list-item", "<li>要素と同じく動作する"],
                        ["hidden", "要素を非表示にする"],
                    ]}
                />
            ),
        },
    ],
    [
        "Floats",
        {
            entry: "フロート",
            description:
                "要素を左右どちらかに配置し、その横に余白があれば続く要素を回り込ませる",
            detail: (
                <DetailTable
                    value={[
                        ["start", "テキストの開始側に配置"],
                        ["end", "テキストの終端側に配置"],
                        ["right", "右端に配置"],
                        ["left", "左端に配置"],
                        ["none", "フロートしない"],
                    ]}
                />
            ),
        },
    ],
    [
        "Clear",
        {
            entry: "クリアー",
            description:
                "Floatsの効果を打ち消し、自身の要素が回り込もうとするのを防ぐ",
            detail: (
                <DetailTable
                    value={[
                        [
                            "start",
                            "テキストの開始側にある要素のFloatsの効果を打ち消す",
                        ],
                        [
                            "end",
                            "テキストの終端側にある要素のFloatsの効果を打ち消す",
                        ],
                        ["left", "左端にある要素のFloatsの効果を打ち消す"],
                        ["right", "右端にある要素のFloatsの効果を打ち消す"],
                        ["both", "左右どちらでもFloatsの効果を打ち消す"],
                        ["none", "Floatsの効果を受け入れる"],
                    ]}
                />
            ),
        },
    ],
    [
        "Isolation",
        {
            entry: "隔離",
            description:
                "子要素の存在を内に留め、外部の要素と相互に作用させない",
            detail: (
                <DetailTable
                    value={[
                        ["isolate", "子要素を隔離する"],
                        ["isolation-auto", "自動"],
                    ]}
                />
            ),
        },
    ],
    [
        "Object Fit",
        {
            entry: "オブジェクトフィット",
            description: "コンテンツの表示方法を指定する",
            detail: (
                <DetailTable
                    value={[
                        [
                            "contain",
                            "コンテンツ全体が要素に収まるように拡大縮小する",
                        ],
                        ["cover", "要素全体を覆うように拡大縮小する"],
                        [
                            "fill",
                            "元のアスペクト比を無視して、要素全体を覆うように拡大縮小する",
                        ],
                        ["none", "等倍で表示する"],
                        [
                            "scale-down",
                            "等倍で表示する。ただし、はみ出す場合は縮小する",
                        ],
                    ]}
                />
            ),
        },
    ],
    [
        "Object Position",
        {
            entry: "オブジェクト位置",
            description:
                "コンテンツが要素からはみ出す場合に、メインで見せたい位置を指定する",
            detail: (
                <DetailTable
                    value={[
                        ["bottom", "下"],
                        ["center", "中央"],
                        ["left", "左"],
                        ["left-bottom", "左下"],
                        ["left-top", "左上"],
                        ["right", "右"],
                        ["right-bottom", "右下"],
                        ["right-top", "右上"],
                        ["top", "上"],
                    ]}
                />
            ),
        },
    ],
    [
        "Overflow",
        {
            entry: "オーバーフロー",
            description: "コンテンツが要素からはみ出す場合の動作を指定する",
            detail: (
                <DetailTable
                    value={[
                        ["auto", "自動"],
                        [
                            "hidden",
                            "切り取る。ユーザーからのスクロール操作は受け付けないが、プログラムからは許可する",
                        ],
                        ["clip", "切り取る。全てのスクロール操作を禁止する"],
                        ["visible", "切り取らない"],
                        ["scroll", "スクロール可能にする"],
                        ["x-*", "水平方向に対する動作"],
                        ["y-*", "垂直方向に対する動作"],
                    ]}
                />
            ),
        },
    ],
    [
        "Overscroll Behavior",
        {
            entry: "オーバースクロール動作",
            description: "スクロール領域の限界に達したときの動作を指定する",
            detail: (
                <DetailTable
                    value={[
                        [
                            "auto",
                            "バウンスする。限界に達した状態でさらにスクロールすると、親要素へ伝播する",
                        ],
                        [
                            "contain",
                            "バウンスする。スクロールを親要素へ伝播させない",
                        ],
                        [
                            "none",
                            "バウンスしない。スクロールを親要素へ伝播させない",
                        ],
                        ["y-*", "垂直方向に対する動作"],
                        ["x-*", "水平方向に対する動作"],
                    ]}
                />
            ),
        },
    ],
    [
        "Position",
        {
            entry: "位置",
            description: "要素の配置方法を指定する",
            detail: (
                <DetailTable
                    value={[
                        [
                            "static",
                            "デフォルトの動作。オフセット操作（Top、Right、Bottom、Left、Z-Index）を受け付けない",
                        ],
                        [
                            "fixed",
                            "ブラウザの表示領域を基準に、オフセット操作を受け付ける",
                        ],
                        [
                            "absolute",
                            "relativeが指定された親要素を基準に、オフセット操作を受け付ける",
                        ],
                        [
                            "relative",
                            "デフォルトの動作で配置しつつ、オフセット操作を受け付ける",
                        ],
                        [
                            "sticky",
                            "fixedのように振る舞うが、親要素が画面外に押し出されると自身も押し出される",
                        ],
                    ]}
                />
            ),
        },
    ],
    [
        "Top / Right / Bottom / Left",
        {
            entry: "トップ、ライト、ボトム、レフト",
            description: "指定した位置に要素を配置する",
            detail: (
                <DetailTable
                    value={[
                        [
                            "inset-*",
                            "top、right、bottom、leftに同じ値を指定する",
                        ],
                        ["inset-x-*", "leftとrightに同じ値を指定する"],
                        ["inset-y-*", "topとbottomに同じ値を指定する"],
                        ["start-*", "テキストの開始側に値を指定する"],
                        ["end-*", "テキストの終端側に値を指定する"],
                        ["top-*", "上からの距離の位置に配置"],
                        ["right-*", "右からの距離の位置に配置"],
                        ["bottom-*", "下からの距離の位置に配置"],
                        ["left-*", "左からの距離の位置に配置"],
                    ]}
                />
            ),
        },
    ],
    [
        "Visibility",
        {
            entry: "可視性",
            description: "要素の可視状態を指定する",
            detail: (
                <DetailTable
                    value={[
                        ["visible", "表示"],
                        [
                            "invisible",
                            "レイアウトは維持したまま非表示（完全に非表示にしたい場合はhiddenを指定）",
                        ],
                        [
                            "collapse",
                            "テーブル列の幅を維持したまま、一部の行を非表示",
                        ],
                    ]}
                />
            ),
        },
    ],
    [
        "Z-Index",
        {
            entry: "Zインデックス",
            description: "要素の高さを指定する",
            detail: null,
        },
    ],
]);

export default layoutJA;
