import { CategoryEnum } from "../models/category";
import { Translation } from "../models/types";
import DetailTable from "../views/detailTable";

const typographyJA = new Map<string, Translation>([
    [
        CategoryEnum.Typography,
        {
            entry: "タイポグラフィー",
            description: "",
            detail: null,
        },
    ],
    [
        "Font Family",
        {
            entry: "フォントファミリー",
            description: "フォントファミリーを指定する",
            detail: (
                <DetailTable
                    value={[
                        ["sans", "ゴシック体"],
                        ["serif", "明朝体"],
                        ["mono", "等幅フォント"],
                    ]}
                />
            ),
        },
    ],
    [
        "Font Size",
        {
            entry: "フォントサイズ",
            description: "フォントサイズを指定する",
            detail: null,
        },
    ],
    [
        "Font Smoothing",
        {
            entry: "フォントのなめらかさ",
            description: "アンチエイリアスの方式を指定する（macOSで有効）",
            detail: (
                <DetailTable
                    value={[
                        [
                            "antialiased",
                            "グレースケール方式（線がわずかに細く見える）",
                        ],
                        [
                            "subpixel-antialiased",
                            "サブピクセル方式（線がわずかに太く見える）。デフォルト",
                        ],
                    ]}
                />
            ),
        },
    ],
    [
        "Font Style",
        {
            entry: "フォントスタイル",
            description: "斜体で表示するかどうかを指定する",
            detail: null,
        },
    ],
    [
        "Font Weight",
        {
            entry: "フォントウェイト",
            description: "フォントの太さを指定する",
            detail: null,
        },
    ],
    [
        "Font Variant Numeric",
        {
            entry: "数字の異形",
            description:
                "数字の表記形式を指定する\n正しく表示するには、フォント側がそれぞれの形式に対応している必要がある",
            detail: (
                <DetailTable
                    value={[
                        ["normal-nums", "標準"],
                        [
                            "ordinal",
                            "「1st」などの序数詞を数字の右肩に小さく表記する",
                        ],
                        ["slashed-zero", "斜線付き「0」を使用する"],
                        ["lining-nums", "高さが揃った数字"],
                        ["oldstyle-nums", "高さが不揃いな数字"],
                        [
                            "proportional-nums",
                            "プロポーショナルフォント（幅が不揃い）を使用する",
                        ],
                        ["tabular-nums", "等幅フォントを使用する"],
                        [
                            "diagonal-fractions",
                            "「1/2」などの分数をコンパクトに表記する",
                        ],
                        [
                            "stacked-fractions",
                            "分数の分母と分子を積み上げる形で表記する",
                        ],
                    ]}
                />
            ),
        },
    ],
    [
        "Letter Spacing",
        {
            entry: "文字間隔",
            description: "文字間隔を指定する",
            detail: null,
        },
    ],
    [
        "Line Clamp",
        {
            entry: "行の固定",
            description: "固定する行数を指定する",
            detail: (
                <DetailTable
                    value={[
                        ["*", "固定する行数"],
                        ["none", "固定しない"],
                    ]}
                />
            ),
        },
    ],
    [
        "Line Height",
        {
            entry: "行の高さ",
            description: "行の高さを指定する",
            detail: null,
        },
    ],
    [
        "List Style Image",
        {
            entry: "リストスタイルの画像",
            description: "リスト項目のマーカーとして使用する画像を指定する",
            detail: (
                <DetailTable
                    value={[
                        ["list-image-none", "マーカーを指定しない"],
                        [
                            "list-image-[url(***.png)]",
                            "特定の画像をマーカーとして使用する例",
                        ],
                    ]}
                />
            ),
        },
    ],
    [
        "List Style Position",
        {
            entry: "リストスタイルの位置",
            description: "リスト項目のマーカー位置を指定する",
            detail: (
                <DetailTable
                    value={[
                        ["inside", "マーカーを要素の内側に収める"],
                        ["outside", "マーカーを要素の外側に置く"],
                    ]}
                />
            ),
        },
    ],
    [
        "List Style Type",
        {
            entry: "リストスタイルの種類",
            description: "リスト項目のマーカー種類を指定する",
            detail: (
                <DetailTable
                    value={[
                        ["none", "マーカーなし"],
                        ["disc", "箇条書き（「・」で表す）"],
                        ["decimal", "数値リスト（「1.」「2.」のように表す）"],
                    ]}
                />
            ),
        },
    ],
    [
        "Text Align",
        {
            entry: "テキストの整列",
            description: "テキストの行揃えを指定する",
            detail: (
                <DetailTable
                    value={[
                        ["left", "左揃え"],
                        ["center", "中央揃え"],
                        ["right", "右揃え"],
                        ["justify", "両端揃え"],
                        ["start", "テキストの開始側に揃える"],
                        ["end", "テキストの終端側に揃える"],
                    ]}
                />
            ),
        },
    ],
    [
        "Text Color",
        {
            entry: "テキストの色",
            description: "テキストの色を指定する",
            detail: (
                <DetailTable
                    value={[
                        [
                            "inherit",
                            "親要素からスタイルを引き継ぐ",
                            <td className="w-10 bg-transparent"></td>,
                        ],
                        [
                            "current",
                            "テキスト色",
                            <td className="w-10 bg-transparent"></td>,
                        ],
                        [
                            "transparent",
                            "透明",
                            <td className="w-10 bg-transparent"></td>,
                        ],
                        ["black", "黒", <td className="w-10 bg-black"></td>],
                        ["white", "白", <td className="w-10 bg-white"></td>],
                        [
                            "slate-500",
                            "粘板岩",
                            <td className="w-10 bg-slate-500"></td>,
                        ],
                        [
                            "gray-500",
                            "グレー",
                            <td className="w-10 bg-gray-500"></td>,
                        ],
                        [
                            "zinc-500",
                            "亜鉛",
                            <td className="w-10 bg-zinc-500"></td>,
                        ],
                        [
                            "neutral-500",
                            "ニュートラル",
                            <td className="w-10 bg-neutral-500"></td>,
                        ],
                        [
                            "stone-500",
                            "石",
                            <td className="w-10 bg-stone-500"></td>,
                        ],
                        [
                            "red-500",
                            "赤",
                            <td className="w-10 bg-red-500"></td>,
                        ],
                        [
                            "orange-500",
                            "オレンジ",
                            <td className="w-10 bg-orange-500"></td>,
                        ],
                        [
                            "amber-500",
                            "琥珀",
                            <td className="w-10 bg-amber-500"></td>,
                        ],
                        [
                            "yellow-500",
                            "黄色",
                            <td className="w-10 bg-yellow-500"></td>,
                        ],
                        [
                            "lime-500",
                            "ライム",
                            <td className="w-10 bg-lime-500"></td>,
                        ],
                        [
                            "green-500",
                            "緑",
                            <td className="w-10 bg-green-500"></td>,
                        ],
                        [
                            "emerald-500",
                            "エメラルド",
                            <td className="w-10 bg-emerald-500"></td>,
                        ],
                        [
                            "teal-500",
                            "コガモ",
                            <td className="w-10 bg-teal-500"></td>,
                        ],
                        [
                            "cyan-500",
                            "シアン",
                            <td className="w-10 bg-cyan-500"></td>,
                        ],
                        [
                            "sky-500",
                            "スカイ",
                            <td className="w-10 bg-sky-500"></td>,
                        ],
                        [
                            "blue-500",
                            "青",
                            <td className="w-10 bg-blue-500"></td>,
                        ],
                        [
                            "indigo-500",
                            "藍色",
                            <td className="w-10 bg-indigo-500"></td>,
                        ],
                        [
                            "violet-500",
                            "スミレ",
                            <td className="w-10 bg-violet-500"></td>,
                        ],
                        [
                            "purple-500",
                            "紫",
                            <td className="w-10 bg-purple-500"></td>,
                        ],
                        [
                            "fuchsia-500",
                            "フクシア",
                            <td className="w-10 bg-fuchsia-500"></td>,
                        ],
                        [
                            "pink-500",
                            "ピンク",
                            <td className="w-10 bg-pink-500"></td>,
                        ],
                        [
                            "rose-500",
                            "バラ",
                            <td className="w-10 bg-rose-500"></td>,
                        ],
                        [
                            "red-500/25",
                            "不透明度25％で指定する例",
                            <td className="w-10 bg-red-500/25"></td>,
                        ],
                    ]}
                />
            ),
        },
    ],
    [
        "Text Decoration",
        {
            entry: "テキストの装飾",
            description: "テキストの装飾を指定する",
            detail: (
                <DetailTable
                    value={[
                        [
                            "underline",
                            "下線を引く",
                            <td>
                                <p className="pr-1 underline">Aa</p>
                            </td>,
                        ],
                        [
                            "overline",
                            "上線を引く",
                            <td>
                                <p className="pr-1 overline">Aa</p>
                            </td>,
                        ],
                        [
                            "line-through",
                            "取り消し線を引く",
                            <td>
                                <p className="pr-1 line-through">Aa</p>
                            </td>,
                        ],
                        [
                            "no-underline",
                            "装飾しない",
                            <td>
                                <p className="pr-1 no-underline">Aa</p>
                            </td>,
                        ],
                    ]}
                />
            ),
        },
    ],
    [
        "Text Decoration Color",
        {
            entry: "テキスト装飾の色",
            description: "テキスト装飾の色を指定する",
            detail: (
                <DetailTable
                    value={[
                        [
                            "inherit",
                            "親要素からスタイルを引き継ぐ",
                            <td className="w-10 bg-transparent"></td>,
                        ],
                        [
                            "current",
                            "テキスト色",
                            <td className="w-10 bg-transparent"></td>,
                        ],
                        [
                            "transparent",
                            "透明",
                            <td className="w-10 bg-transparent"></td>,
                        ],
                        ["black", "黒", <td className="w-10 bg-black"></td>],
                        ["white", "白", <td className="w-10 bg-white"></td>],
                        [
                            "slate-500",
                            "粘板岩",
                            <td className="w-10 bg-slate-500"></td>,
                        ],
                        [
                            "gray-500",
                            "グレー",
                            <td className="w-10 bg-gray-500"></td>,
                        ],
                        [
                            "zinc-500",
                            "亜鉛",
                            <td className="w-10 bg-zinc-500"></td>,
                        ],
                        [
                            "neutral-500",
                            "ニュートラル",
                            <td className="w-10 bg-neutral-500"></td>,
                        ],
                        [
                            "stone-500",
                            "石",
                            <td className="w-10 bg-stone-500"></td>,
                        ],
                        [
                            "red-500",
                            "赤",
                            <td className="w-10 bg-red-500"></td>,
                        ],
                        [
                            "orange-500",
                            "オレンジ",
                            <td className="w-10 bg-orange-500"></td>,
                        ],
                        [
                            "amber-500",
                            "琥珀",
                            <td className="w-10 bg-amber-500"></td>,
                        ],
                        [
                            "yellow-500",
                            "黄色",
                            <td className="w-10 bg-yellow-500"></td>,
                        ],
                        [
                            "lime-500",
                            "ライム",
                            <td className="w-10 bg-lime-500"></td>,
                        ],
                        [
                            "green-500",
                            "緑",
                            <td className="w-10 bg-green-500"></td>,
                        ],
                        [
                            "emerald-500",
                            "エメラルド",
                            <td className="w-10 bg-emerald-500"></td>,
                        ],
                        [
                            "teal-500",
                            "コガモ",
                            <td className="w-10 bg-teal-500"></td>,
                        ],
                        [
                            "cyan-500",
                            "シアン",
                            <td className="w-10 bg-cyan-500"></td>,
                        ],
                        [
                            "sky-500",
                            "スカイ",
                            <td className="w-10 bg-sky-500"></td>,
                        ],
                        [
                            "blue-500",
                            "青",
                            <td className="w-10 bg-blue-500"></td>,
                        ],
                        [
                            "indigo-500",
                            "藍色",
                            <td className="w-10 bg-indigo-500"></td>,
                        ],
                        [
                            "violet-500",
                            "スミレ",
                            <td className="w-10 bg-violet-500"></td>,
                        ],
                        [
                            "purple-500",
                            "紫",
                            <td className="w-10 bg-purple-500"></td>,
                        ],
                        [
                            "fuchsia-500",
                            "フクシア",
                            <td className="w-10 bg-fuchsia-500"></td>,
                        ],
                        [
                            "pink-500",
                            "ピンク",
                            <td className="w-10 bg-pink-500"></td>,
                        ],
                        [
                            "rose-500",
                            "バラ",
                            <td className="w-10 bg-rose-500"></td>,
                        ],
                        [
                            "red-500/25",
                            "不透明度25％で指定する例",
                            <td className="w-10 bg-red-500/25"></td>,
                        ],
                    ]}
                />
            ),
        },
    ],
    [
        "Text Decoration Style",
        {
            entry: "テキスト装飾のスタイル",
            description: "テキスト装飾のスタイルを指定する",
            detail: (
                <DetailTable
                    value={[
                        [
                            "solid",
                            "一本のつながった線",
                            <td>
                                <p className="pr-1 text-center underline decoration-solid">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "double",
                            "二重線",
                            <td>
                                <p className="pr-1 text-center underline decoration-double">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "dotted",
                            "点線",
                            <td>
                                <p className="pr-1 text-center underline decoration-dotted">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "dashed",
                            "破線",
                            <td>
                                <p className="pr-1 text-center underline decoration-dashed">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "wavy",
                            "波線",
                            <td>
                                <p className="pr-1 text-center underline decoration-wavy">
                                    Aa
                                </p>
                            </td>,
                        ],
                    ]}
                />
            ),
        },
    ],
    [
        "Text Decoration Thickness",
        {
            entry: "テキスト装飾の太さ",
            description: "テキスト装飾の太さを指定する",
            detail: (
                <DetailTable
                    value={[
                        ["auto", "自動"],
                        [
                            "from-font",
                            "推奨される太さがフォントに埋め込まれていれば、その値を使用する",
                        ],
                        ["*", "ピクセル値で指定する"],
                    ]}
                />
            ),
        },
    ],
    [
        "Text Underline Offset",
        {
            entry: "テキストアンダーラインのオフセット",
            description: "指定した距離だけアンダーラインを下にずらす",
            detail: (
                <DetailTable
                    value={[
                        ["auto", "自動"],
                        ["*", "ピクセル値で指定する"],
                    ]}
                />
            ),
        },
    ],
    [
        "Text Transform",
        {
            entry: "テキストの変換",
            description: "アルファベットを変換するルールを指定する",
            detail: (
                <DetailTable
                    value={[
                        ["uppercase", "大文字に変換"],
                        ["lowercase", "小文字に変換"],
                        [
                            "capitalize",
                            "小文字に変換するが、単語の先頭のみ大文字にする",
                        ],
                        ["normal-case", "変換しない"],
                    ]}
                />
            ),
        },
    ],
    [
        "Text Overflow",
        {
            entry: "テキストのオーバーフロー",
            description: "テキストが要素からはみ出す場合の動作を指定する",
            detail: (
                <DetailTable
                    value={[
                        [
                            "truncate",
                            "折り返さない。あふれた部分は「…」で省略される",
                        ],
                        [
                            "text-ellipsis",
                            "折り返す。折り返してもあふれる部分は「…」で省略される（overflow-hiddenと組み合わせて使う）",
                        ],
                        [
                            "text-clip",
                            "折り返す。折り返してもあふれる部分は切り取られる（overflow-hiddenと組み合わせて使う）",
                        ],
                    ]}
                />
            ),
        },
    ],
    [
        "Text Wrap",
        {
            entry: "テキストの折り返し",
            description: "テキストを折り返す動作を指定する",
            detail: (
                <DetailTable
                    value={[
                        ["wrap", "バランス調整せずに折り返す"],
                        ["nowrap", "折り返さない"],
                        ["balance", "各行にテキストを均等に配分する"],
                        [
                            "pretty",
                            "最終行に単語がひとつだけとならないように折り返す",
                        ],
                    ]}
                />
            ),
        },
    ],
    [
        "Text Indent",
        {
            entry: "テキストのインデント",
            description: "テキストの先頭に挿入する空白の長さを指定する",
            detail: null,
        },
    ],
    [
        "Vertical Align",
        {
            entry: "垂直方向の整列",
            description: "垂直方向にテキストを揃える際の基準を指定する",
            detail: (
                <DetailTable
                    value={[
                        ["baseline", "親要素のベースラインに揃える"],
                        ["top", "行の上端に揃える"],
                        [
                            "middle",
                            "親要素のベースラインに、小文字のxの高さを足した位置に揃える",
                        ],
                        ["bottom", "行の下端に揃える"],
                        ["text-top", "親要素のテキストの上端に揃える"],
                        ["text-bottom", "親要素のテキストの下端に揃える"],
                        ["sub", "親要素の下付き文字の位置に揃える"],
                        ["super", "親要素の上付き文字の位置に揃える"],
                    ]}
                />
            ),
        },
    ],
    [
        "Whitespace",
        {
            entry: "ホワイトスペース",
            description:
                "ホワイトスペース（タブ、改行、スペースなど）の扱い方を指定する",
            detail: (
                <DetailTable
                    value={[
                        [
                            "normal",
                            "連続するホワイトスペースをひとつのスペースにまとめる。折り返す",
                        ],
                        [
                            "nowrap",
                            "連続するホワイトスペースをひとつのスペースにまとめる。折り返さない",
                        ],
                        [
                            "pre",
                            "連続するホワイトスペースをそのまま残す。折り返さない",
                        ],
                        [
                            "pre-line",
                            "改行以外のホワイトスペースをひとつのスペースにまとめる。折り返す",
                        ],
                        [
                            "pre-wrap",
                            "連続するホワイトスペースをそのまま残す。折り返す",
                        ],
                        [
                            "break-spaces",
                            "pre-wrapに近しいが、行末での動作が異なる",
                        ],
                    ]}
                />
            ),
        },
    ],
    [
        "Word Break",
        {
            entry: "単語の区切り",
            description: "単語の折り返す動作を指定する",
            detail: (
                <DetailTable
                    value={[
                        ["normal", "単語の途中で折り返さない"],
                        ["words", "必要に応じて単語の途中で折り返す"],
                        ["all", "単語を考慮せずに折り返す"],
                        [
                            "keep",
                            "CJK（中国語、日本語、韓国語）において、文章の中では折り返さずに記号などの箇所で折り返す",
                        ],
                    ]}
                />
            ),
        },
    ],
    [
        "Hyphens",
        {
            entry: "ハイフン",
            description: "「&shy;」（ソフトハイフン）の扱い方を指定する",
            detail: (
                <DetailTable
                    value={[
                        [
                            "none",
                            "ハイフネーション（単語内にハイフンを挿入して改行すること）をしない",
                        ],
                        ["manual", "「&shy;」を目印にハイフネーションする"],
                        ["auto", "単語を判定して自動的にハイフネーションする"],
                    ]}
                />
            ),
        },
    ],
    [
        "Content",
        {
            entry: "コンテンツ",
            description: "before、またはafter修飾子を用いた疑似要素を指定する",
            detail: (
                <DetailTable
                    value={[
                        [
                            "before:content-none",
                            "要素の前側に疑似要素を使用しない",
                        ],
                        [
                            "after:content-none",
                            "要素の後ろ側に疑似要素を使用しない",
                        ],
                        [
                            `before:content-["✅"]`,
                            "要素の前側に絵文字の疑似要素を挿入する例",
                        ],
                        [
                            `after:content-["✅"]`,
                            "要素の後ろ側に絵文字の疑似要素を挿入する例",
                        ],
                    ]}
                />
            ),
        },
    ],
]);

export default typographyJA;
