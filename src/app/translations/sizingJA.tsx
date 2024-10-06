import { CategoryEnum } from "../models/category";
import { Translation } from "../models/types";
import DetailTable from "../views/detailTable";

const sizingJA = new Map<string, Translation>([
    [
        CategoryEnum.Sizing,
        {
            entry: "寸法",
            description: "",
            detail: null,
        },
    ],
    [
        "Width",
        {
            entry: "幅",
            description: "要素の幅を指定する",
            detail: (
                <DetailTable
                    value={[
                        [
                            "*",
                            "指定した長さ、または親要素に対する割合で指定する",
                        ],
                        ["auto", "自動"],
                        ["full", "親要素の幅で指定する"],
                        ["screen", "ビューポートの幅で指定する"],
                        ["svw", "スモールビューポートの幅で指定する"],
                        ["lvw", "ラージビューポートの幅で指定する"],
                        ["dvw", "ダイナミックビューポートの幅で指定する"],
                        [
                            "min",
                            "コンテンツの最小幅で指定する（例えば「Hello, world!」というテキストの場合、半角スペースの箇所で折り返せるため6文字分が最小幅）",
                        ],
                        [
                            "max",
                            "コンテンツの最大幅で指定する（例えば「Hello, world!」であれば全体の13文字分が最大幅）",
                        ],
                        [
                            "fit",
                            "親要素からはみ出す場合にmaxでは折り返しが発生しないが、fitでは折り返す",
                        ],
                    ]}
                />
            ),
        },
    ],
    [
        "Min-Width",
        {
            entry: "最小幅",
            description: "要素の最小幅を指定する",
            detail: (
                <DetailTable
                    value={[
                        ["*", "指定した長さで指定する"],
                        ["full", "親要素の幅で指定する"],
                        [
                            "min",
                            "コンテンツの最小幅で指定する（例えば「Hello, world!」というテキストの場合、半角スペースの箇所で折り返せるため6文字分が最小幅）",
                        ],
                        [
                            "max",
                            "コンテンツの最大幅で指定する（例えば「Hello, world!」であれば全体の13文字分が最大幅）",
                        ],
                        [
                            "fit",
                            "親要素からはみ出す場合にmaxでは折り返しが発生しないが、fitでは折り返す",
                        ],
                    ]}
                />
            ),
        },
    ],
    [
        "Max-Width",
        {
            entry: "最大幅",
            description: "要素の最大幅を指定する",
            detail: (
                <DetailTable
                    value={[
                        ["*", "指定した長さで指定する"],
                        ["none", "最大幅を指定しない"],
                        ["full", "親要素の幅で指定する"],
                        [
                            "min",
                            "コンテンツの最小幅で指定する（例えば「Hello, world!」というテキストの場合、半角スペースの箇所で折り返せるため6文字分が最小幅）",
                        ],
                        [
                            "max",
                            "コンテンツの最大幅で指定する（例えば「Hello, world!」であれば全体の13文字分が最大幅）",
                        ],
                        [
                            "fit",
                            "はみ出す場合にmaxでは折り返しが発生しないが、fitでは折り返す",
                        ],
                        [
                            "prose",
                            "半角数字0の幅を基準に、65文字分が収まる幅で指定する",
                        ],
                        [
                            "screen-*",
                            "sm = 640px、md = 768px、lg = 1024px、lx = 1280px、2xl = 1536px",
                        ],
                    ]}
                />
            ),
        },
    ],
    [
        "Height",
        {
            entry: "高さ",
            description: "要素の高さを指定する",
            detail: (
                <DetailTable
                    value={[
                        [
                            "*",
                            "指定した長さ、または親要素に対する割合で指定する",
                        ],
                        ["auto", "自動"],
                        ["full", "親要素の高さで指定する"],
                        ["screen", "ビューポートの高さで指定する"],
                        ["svw", "スモールビューポートの高さで指定する"],
                        ["lvw", "ラージビューポートの高さで指定する"],
                        ["dvw", "ダイナミックビューポートの高さで指定する"],
                        [
                            "min",
                            "コンテンツの最小高さで指定する（縦書きで有効）",
                        ],
                        [
                            "max",
                            "コンテンツの最大高さで指定する（縦書きで有効）",
                        ],
                        [
                            "fit",
                            "親要素からはみ出す場合にmaxでは折り返しが発生しないが、fitでは折り返す（縦書きで有効）",
                        ],
                    ]}
                />
            ),
        },
    ],
    [
        "Min-Height",
        {
            entry: "最小高さ",
            description: "要素の最小高さを指定する",
            detail: (
                <DetailTable
                    value={[
                        ["*", "指定した長さで指定する"],
                        ["full", "親要素の高さで指定する"],
                        ["screen", "ビューポートの高さで指定する"],
                        ["svw", "スモールビューポートの高さで指定する"],
                        ["lvw", "ラージビューポートの高さで指定する"],
                        ["dvw", "ダイナミックビューポートの高さで指定する"],
                        [
                            "min",
                            "コンテンツの最小高さで指定する（縦書きで有効）",
                        ],
                        [
                            "max",
                            "コンテンツの最大高さで指定する（縦書きで有効）",
                        ],
                        [
                            "fit",
                            "親要素からはみ出す場合にmaxでは折り返しが発生しないが、fitでは折り返す（縦書きで有効）",
                        ],
                    ]}
                />
            ),
        },
    ],
    [
        "Max-Height",
        {
            entry: "最大高さ",
            description: "要素の最大高さを指定する",
            detail: (
                <DetailTable
                    value={[
                        ["*", "指定した長さで指定する"],
                        ["none", "最大高さを指定しない"],
                        ["full", "親要素の高さで指定する"],
                        ["screen", "ビューポートの高さで指定する"],
                        ["svw", "スモールビューポートの高さで指定する"],
                        ["lvw", "ラージビューポートの高さで指定する"],
                        ["dvw", "ダイナミックビューポートの高さで指定する"],
                        [
                            "min",
                            "コンテンツの最小高さで指定する（縦書きで有効）",
                        ],
                        [
                            "max",
                            "コンテンツの最大高さで指定する（縦書きで有効）",
                        ],
                        [
                            "fit",
                            "親要素からはみ出す場合にmaxでは折り返しが発生しないが、fitでは折り返す（縦書きで有効）",
                        ],
                    ]}
                />
            ),
        },
    ],
    [
        "Size",
        {
            entry: "サイズ",
            description: "widthとheightを一度に指定する",
            detail: (
                <DetailTable
                    value={[
                        [
                            "*",
                            "指定した長さ、または親要素に対する割合で指定する",
                        ],
                        ["auto", "自動"],
                        ["full", "親要素の幅と高さで指定する"],
                        ["min", "コンテンツの最小幅と最小高さで指定する"],
                        ["max", "コンテンツの最大幅と最大高さで指定する"],
                        [
                            "fit",
                            "親要素からはみ出す場合にmaxでは折り返しが発生しないが、fitでは折り返す",
                        ],
                    ]}
                />
            ),
        },
    ],
]);

export default sizingJA;
