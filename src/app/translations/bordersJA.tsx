import { CategoryEnum } from "../models/category";
import { Translation } from "../models/types";
import DetailTable from "../views/common/detailTable";

const bordersJA = new Map<string, Translation>([
    [
        CategoryEnum.Borders,
        {
            entry: "境界",
            description: "",
            detail: null,
        },
    ],
    [
        "Border Radius",
        {
            entry: "境界の半径",
            description: "角の丸みを指定する",
            detail: (
                <DetailTable
                    value={[
                        ["none", "角丸なし"],
                        ["sm〜3xl", "角丸"],
                        ["full", "円、またはカプセル型"],
                        ["s-*", "テキストの開始側を丸める"],
                        ["e-*", "テキストの終端側を丸める"],
                        ["t-*", "上側を丸める"],
                        ["r-*", "右側を丸める"],
                        ["b-*", "下側を丸める"],
                        ["l-*", "左側を丸める"],
                        ["ss-*", "左上を丸める（左横書きの場合）"],
                        ["se-*", "右上を丸める（左横書きの場合）"],
                        ["ee-*", "右下を丸める（左横書きの場合）"],
                        ["es-*", "右下を丸める（左横書きの場合）"],
                        ["tl-*", "左上を丸める"],
                        ["tr-*", "右上を丸める"],
                        ["br-*", "右下を丸める"],
                        ["bl-*", "左下を丸める"],
                    ]}
                />
            ),
        },
    ],
    [
        "Border Width",
        {
            entry: "境界の太さ",
            description: "境界線の太さを指定する",
            detail: (
                <DetailTable
                    value={[
                        ["*", "指定した太さの枠で囲む"],
                        ["x-*", "左右の側面に線を引く"],
                        ["y-*", "上下の側面に線を引く"],
                        ["s-*", "テキストの開始側に線を引く"],
                        ["e-*", "テキストの終端側に線を引く"],
                        ["t-*", "上の側面に線を引く"],
                        ["r-*", "右の側面に線を引く"],
                        ["b-*", "下の側面に線を引く"],
                        ["l-*", "左の側面に線を引く"],
                    ]}
                />
            ),
        },
    ],
    [
        "Border Color",
        {
            entry: "境界の色",
            description: "境界線の色を指定する",
            detail: (
                <DetailTable
                    value={[
                        [
                            "inherit",
                            "親要素からスタイルを引き継ぐ",
                            <td className="w-10"></td>,
                        ],
                        ["current", "テキスト色", <td className="w-10"></td>],
                        ["transparent", "透明", <td className="w-10"></td>],
                        [
                            "black",
                            "黒",
                            <td className="w-10 border border-black"></td>,
                        ],
                        [
                            "white",
                            "白",
                            <td className="w-10 border border-white"></td>,
                        ],
                        [
                            "slate-500",
                            "粘板岩",
                            <td className="w-10 border border-slate-500"></td>,
                        ],
                        [
                            "gray-500",
                            "グレー",
                            <td className="w-10 border border-gray-500"></td>,
                        ],
                        [
                            "zinc-500",
                            "亜鉛",
                            <td className="w-10 border border-zinc-500"></td>,
                        ],
                        [
                            "neutral-500",
                            "ニュートラル",
                            <td className="w-10 border border-neutral-500"></td>,
                        ],
                        [
                            "stone-500",
                            "石",
                            <td className="w-10 border border-stone-500"></td>,
                        ],
                        [
                            "red-500",
                            "赤",
                            <td className="w-10 border border-red-500"></td>,
                        ],
                        [
                            "orange-500",
                            "オレンジ",
                            <td className="w-10 border border-orange-500"></td>,
                        ],
                        [
                            "amber-500",
                            "琥珀",
                            <td className="w-10 border border-amber-500"></td>,
                        ],
                        [
                            "yellow-500",
                            "黄色",
                            <td className="w-10 border border-yellow-500"></td>,
                        ],
                        [
                            "lime-500",
                            "ライム",
                            <td className="w-10 border border-lime-500"></td>,
                        ],
                        [
                            "green-500",
                            "緑",
                            <td className="w-10 border border-green-500"></td>,
                        ],
                        [
                            "emerald-500",
                            "エメラルド",
                            <td className="w-10 border border-emerald-500"></td>,
                        ],
                        [
                            "teal-500",
                            "コガモ",
                            <td className="w-10 border border-teal-500"></td>,
                        ],
                        [
                            "cyan-500",
                            "シアン",
                            <td className="w-10 border border-cyan-500"></td>,
                        ],
                        [
                            "sky-500",
                            "スカイ",
                            <td className="w-10 border border-sky-500"></td>,
                        ],
                        [
                            "blue-500",
                            "青",
                            <td className="w-10 border border-blue-500"></td>,
                        ],
                        [
                            "indigo-500",
                            "藍色",
                            <td className="w-10 border border-indigo-500"></td>,
                        ],
                        [
                            "violet-500",
                            "スミレ",
                            <td className="w-10 border border-violet-500"></td>,
                        ],
                        [
                            "purple-500",
                            "紫",
                            <td className="w-10 border border-purple-500"></td>,
                        ],
                        [
                            "fuchsia-500",
                            "フクシア",
                            <td className="w-10 border border-fuchsia-500"></td>,
                        ],
                        [
                            "pink-500",
                            "ピンク",
                            <td className="w-10 border border-pink-500"></td>,
                        ],
                        [
                            "rose-500",
                            "バラ",
                            <td className="w-10 border border-rose-500"></td>,
                        ],
                        [
                            "red-500/25",
                            "不透明度25％で指定する例",
                            <td className="w-10 border border-red-500/25"></td>,
                        ],
                        [
                            "x-（色）",
                            "左右の線の色",
                            <td className="w-10 border border-transparent border-x-black dark:border-x-white"></td>,
                        ],
                        [
                            "y-（色）",
                            "上下の線の色",
                            <td className="w-10 border border-transparent border-y-black dark:border-y-white"></td>,
                        ],
                        [
                            "s-（色）",
                            "テキストの開始側に引かれる色",
                            <td className="w-10 border border-transparent border-s-black dark:border-s-white"></td>,
                        ],
                        [
                            "e-（色）",
                            "テキストの終端側に引かれる色",
                            <td className="w-10 border border-transparent border-e-black dark:border-e-white"></td>,
                        ],
                        [
                            "t-（色）",
                            "上側面の線の色",
                            <td className="w-10 border border-transparent border-t-black dark:border-t-white"></td>,
                        ],
                        [
                            "r-（色）",
                            "右側面の線の色",
                            <td className="w-10 border border-transparent border-r-black dark:border-r-white"></td>,
                        ],
                        [
                            "b-（色）",
                            "下側面の線の色",
                            <td className="w-10 border border-transparent border-b-black dark:border-b-white"></td>,
                        ],
                        [
                            "l-（色）",
                            "左側面の線の色",
                            <td className="w-10 border border-transparent border-l-black dark:border-l-white"></td>,
                        ],
                    ]}
                />
            ),
        },
    ],
    [
        "Border Style",
        {
            entry: "境界のスタイル",
            description: "境界線のスタイルを指定する",
            detail: (
                <DetailTable
                    value={[
                        ["solid", "一本のつながった線"],
                        ["dashed", "破線"],
                        ["dotted", "点線"],
                        ["double", "二重線"],
                        ["hidden", "境界線を表示しない（優先度・高）"],
                        ["none", "境界線を表示しない（優先度・低）"],
                    ]}
                />
            ),
        },
    ],
    [
        "Divide Width",
        {
            entry: "分割線の太さ",
            description:
                "子要素が縦や横に並ぶ場合に、要素間に引かれる線の太さを指定する",
            detail: (
                <DetailTable
                    value={[
                        ["x-*", "子要素が水平方向に並ぶ場合に使用する"],
                        ["y-*", "子要素が垂直方向に並ぶ場合に使用する"],
                        [
                            "y-reverse",
                            "子要素が右から左へ並ぶ場合に、正しい位置に分割線を引く",
                        ],
                        [
                            "x-reverse",
                            "子要素が下から上へ並ぶ場合に、正しい位置に分割線を引く",
                        ],
                    ]}
                />
            ),
        },
    ],
    [
        "Divide Color",
        {
            entry: "分割線の色",
            description: "分割線の色を指定する",
            detail: (
                <DetailTable
                    value={[
                        [
                            "inherit",
                            "親要素からスタイルを引き継ぐ",
                            <td className="w-10"></td>,
                        ],
                        ["current", "テキスト色", <td className="w-10"></td>],
                        ["transparent", "透明", <td className="w-10"></td>],
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
                            "不透明度25%で指定する例",
                            <td className="w-10 divide-y bg-red-500/25"></td>,
                        ],
                    ]}
                />
            ),
        },
    ],
    [
        "Divide Style",
        {
            entry: "分割線のスタイル",
            description: "分割線のスタイルを指定する",
            detail: (
                <DetailTable
                    value={[
                        ["solid", "一本のつながった線"],
                        ["dashed", "破線"],
                        ["dotted", "点線"],
                        ["double", "二重線"],
                        ["none", "分割線を表示しない"],
                    ]}
                />
            ),
        },
    ],
    [
        "Outline Width",
        {
            entry: "輪郭線の太さ",
            description:
                "輪郭線の太さを指定する\n輪郭線はBorderよりも外側に引かれる",
            detail: null,
        },
    ],
    [
        "Outline Color",
        {
            entry: "輪郭線の色",
            description: "輪郭線の色を指定する",
            detail: (
                <DetailTable
                    value={[
                        [
                            "inherit",
                            "親要素からスタイルを引き継ぐ",
                            <td className="w-10"></td>,
                        ],
                        ["current", "テキスト色", <td className="w-10"></td>],
                        ["transparent", "透明", <td className="w-10"></td>],
                        [
                            "black",
                            "黒",
                            <td className="w-10">
                                <div className="h-4 w-9 outline outline-black"></div>
                            </td>,
                        ],
                        [
                            "white",
                            "白",
                            <td className="w-10">
                                <div className="h-4 w-9 outline outline-white"></div>
                            </td>,
                        ],
                        [
                            "slate-500",
                            "粘板岩",
                            <td className="w-10">
                                <div className="h-4 w-9 outline outline-slate-500"></div>
                            </td>,
                        ],
                        [
                            "gray-500",
                            "グレー",
                            <td className="w-10">
                                <div className="h-4 w-9 outline outline-gray-500"></div>
                            </td>,
                        ],
                        [
                            "zinc-500",
                            "亜鉛",
                            <td className="w-10">
                                <div className="h-4 w-9 outline outline-zinc-500"></div>
                            </td>,
                        ],
                        [
                            "neutral-500",
                            "ニュートラル",
                            <td className="w-10">
                                <div className="h-4 w-9 outline outline-neutral-500"></div>
                            </td>,
                        ],
                        [
                            "stone-500",
                            "石",
                            <td className="w-10">
                                <div className="h-4 w-9 outline outline-stone-500"></div>
                            </td>,
                        ],
                        [
                            "red-500",
                            "赤",
                            <td className="w-10">
                                <div className="h-4 w-9 outline outline-red-500"></div>
                            </td>,
                        ],
                        [
                            "orange-500",
                            "オレンジ",
                            <td className="w-10">
                                <div className="h-4 w-9 outline outline-orange-500"></div>
                            </td>,
                        ],
                        [
                            "amber-500",
                            "琥珀",
                            <td className="w-10">
                                <div className="h-4 w-9 outline outline-amber-500"></div>
                            </td>,
                        ],
                        [
                            "yellow-500",
                            "黄色",
                            <td className="w-10">
                                <div className="h-4 w-9 outline outline-yellow-500"></div>
                            </td>,
                        ],
                        [
                            "lime-500",
                            "ライム",
                            <td className="w-10">
                                <div className="h-4 w-9 outline outline-lime-500"></div>
                            </td>,
                        ],
                        [
                            "green-500",
                            "緑",
                            <td className="w-10">
                                <div className="h-4 w-9 outline outline-green-500"></div>
                            </td>,
                        ],
                        [
                            "emerald-500",
                            "エメラルド",
                            <td className="w-10">
                                <div className="h-4 w-9 outline outline-emerald-500"></div>
                            </td>,
                        ],
                        [
                            "teal-500",
                            "コガモ",
                            <td className="w-10">
                                <div className="h-4 w-9 outline outline-teal-500"></div>
                            </td>,
                        ],
                        [
                            "cyan-500",
                            "シアン",
                            <td className="w-10">
                                <div className="h-4 w-9 outline outline-cyan-500"></div>
                            </td>,
                        ],
                        [
                            "sky-500",
                            "スカイ",
                            <td className="w-10">
                                <div className="h-4 w-9 outline outline-sky-500"></div>
                            </td>,
                        ],
                        [
                            "blue-500",
                            "青",
                            <td className="w-10">
                                <div className="h-4 w-9 outline outline-blue-500"></div>
                            </td>,
                        ],
                        [
                            "indigo-500",
                            "藍色",
                            <td className="w-10">
                                <div className="h-4 w-9 outline outline-indigo-500"></div>
                            </td>,
                        ],
                        [
                            "violet-500",
                            "スミレ",
                            <td className="w-10">
                                <div className="h-4 w-9 outline outline-violet-500"></div>
                            </td>,
                        ],
                        [
                            "purple-500",
                            "紫",
                            <td className="w-10">
                                <div className="h-4 w-9 outline outline-purple-500"></div>
                            </td>,
                        ],
                        [
                            "fuchsia-500",
                            "フクシア",
                            <td className="w-10">
                                <div className="h-4 w-9 outline outline-fuchsia-500"></div>
                            </td>,
                        ],
                        [
                            "pink-500",
                            "ピンク",
                            <td className="w-10">
                                <div className="h-4 w-9 outline outline-pink-500"></div>
                            </td>,
                        ],
                        [
                            "rose-500",
                            "バラ",
                            <td className="w-10">
                                <div className="h-4 w-9 outline outline-rose-500"></div>
                            </td>,
                        ],
                        [
                            "red-500/25",
                            "不透明度25%で指定する例",
                            <td className="w-10">
                                <div className="h-4 w-9 outline outline-red-500/25"></div>
                            </td>,
                        ],
                    ]}
                />
            ),
        },
    ],
    [
        "Outline Style",
        {
            entry: "輪郭線のスタイル",
            description: "輪郭線のスタイルを指定する",
            detail: (
                <DetailTable
                    value={[
                        ["outline-none", "輪郭線を表示しない"],
                        ["outline", "一本のつながった線"],
                        ["outline-dashed", "破線"],
                        ["outline-dotted", "点線"],
                        ["outline-double", "二重線"],
                    ]}
                />
            ),
        },
    ],
    [
        "Outline Offset",
        {
            entry: "輪郭線のオフセット",
            description: "指定した距離だけ輪郭線を外側に広げる",
            detail: null,
        },
    ],
    [
        "Ring Width",
        {
            entry: "輪の太さ",
            description:
                "box-shadowで描く輪郭線の太さを設定する\nデフォルトでは半透明の青で描かれる",
            detail: (
                <DetailTable
                    value={[
                        [
                            "ring-0",
                            "輪郭線なし",
                            <td className="h-6 w-10">
                                <div className="h-2 w-8 bg-gray-200 ring-0"></div>
                            </td>,
                        ],
                        [
                            "ring-1",
                            "",
                            <td className="h-6 w-10">
                                <div className="h-2 w-8 bg-gray-200 ring-1"></div>
                            </td>,
                        ],
                        [
                            "ring-2",
                            "",
                            <td className="h-6 w-10">
                                <div className="h-2 w-8 bg-gray-200 ring-2"></div>
                            </td>,
                        ],
                        [
                            "ring",
                            "",
                            <td className="h-6 w-10">
                                <div className="h-2 w-8 bg-gray-200 ring"></div>
                            </td>,
                        ],
                        [
                            "ring-4",
                            "",
                            <td className="h-6 w-10">
                                <div className="h-2 w-8 bg-gray-200 ring-4"></div>
                            </td>,
                        ],
                        [
                            "ring-8",
                            "",
                            <td className="h-6 w-10">
                                <div className="h-2 w-8 bg-gray-200 ring-8"></div>
                            </td>,
                        ],
                        [
                            "ring-inset",
                            "要素の内側に描く",
                            <td className="h-6 w-10">
                                <div className="h-2 w-8 bg-gray-200 ring ring-inset"></div>
                            </td>,
                        ],
                    ]}
                />
            ),
        },
    ],
    [
        "Ring Color",
        {
            entry: "輪の色",
            description: "box-shadowで描く輪郭線の色を設定する",
            detail: (
                <DetailTable
                    value={[
                        [
                            "inherit",
                            "親要素からスタイルを引き継ぐ",
                            <td className="w-10"></td>,
                        ],
                        ["current", "テキスト色", <td className="w-10"></td>],
                        ["transparent", "透明", <td className="w-10"></td>],
                        [
                            "black",
                            "黒",
                            <td className="w-10">
                                <div className="h-4 w-9 ring-1 ring-black"></div>
                            </td>,
                        ],
                        [
                            "white",
                            "白",
                            <td className="w-10">
                                <div className="h-4 w-9 ring-1 ring-white"></div>
                            </td>,
                        ],
                        [
                            "slate-500",
                            "粘板岩",
                            <td className="w-10">
                                <div className="h-4 w-9 ring-1 ring-slate-500"></div>
                            </td>,
                        ],
                        [
                            "gray-500",
                            "グレー",
                            <td className="w-10">
                                <div className="h-4 w-9 ring-1 ring-gray-500"></div>
                            </td>,
                        ],
                        [
                            "zinc-500",
                            "亜鉛",
                            <td className="w-10">
                                <div className="h-4 w-9 ring-1 ring-zinc-500"></div>
                            </td>,
                        ],
                        [
                            "neutral-500",
                            "ニュートラル",
                            <td className="w-10">
                                <div className="h-4 w-9 ring-1 ring-neutral-500"></div>
                            </td>,
                        ],
                        [
                            "stone-500",
                            "石",
                            <td className="w-10">
                                <div className="h-4 w-9 ring-1 ring-stone-500"></div>
                            </td>,
                        ],
                        [
                            "red-500",
                            "赤",
                            <td className="w-10">
                                <div className="h-4 w-9 ring-1 ring-red-500"></div>
                            </td>,
                        ],
                        [
                            "orange-500",
                            "オレンジ",
                            <td className="w-10">
                                <div className="h-4 w-9 ring-1 ring-orange-500"></div>
                            </td>,
                        ],
                        [
                            "amber-500",
                            "琥珀",
                            <td className="w-10">
                                <div className="h-4 w-9 ring-1 ring-amber-500"></div>
                            </td>,
                        ],
                        [
                            "yellow-500",
                            "黄色",
                            <td className="w-10">
                                <div className="h-4 w-9 ring-1 ring-yellow-500"></div>
                            </td>,
                        ],
                        [
                            "lime-500",
                            "ライム",
                            <td className="w-10">
                                <div className="h-4 w-9 ring-1 ring-lime-500"></div>
                            </td>,
                        ],
                        [
                            "green-500",
                            "緑",
                            <td className="w-10">
                                <div className="h-4 w-9 ring-1 ring-green-500"></div>
                            </td>,
                        ],
                        [
                            "emerald-500",
                            "エメラルド",
                            <td className="w-10">
                                <div className="h-4 w-9 ring-1 ring-emerald-500"></div>
                            </td>,
                        ],
                        [
                            "teal-500",
                            "コガモ",
                            <td className="w-10">
                                <div className="h-4 w-9 ring-1 ring-teal-500"></div>
                            </td>,
                        ],
                        [
                            "cyan-500",
                            "シアン",
                            <td className="w-10">
                                <div className="h-4 w-9 ring-1 ring-cyan-500"></div>
                            </td>,
                        ],
                        [
                            "sky-500",
                            "スカイ",
                            <td className="w-10">
                                <div className="h-4 w-9 ring-1 ring-sky-500"></div>
                            </td>,
                        ],
                        [
                            "blue-500",
                            "青",
                            <td className="w-10">
                                <div className="h-4 w-9 ring-1 ring-blue-500"></div>
                            </td>,
                        ],
                        [
                            "indigo-500",
                            "藍色",
                            <td className="w-10">
                                <div className="h-4 w-9 ring-1 ring-indigo-500"></div>
                            </td>,
                        ],
                        [
                            "violet-500",
                            "スミレ",
                            <td className="w-10">
                                <div className="h-4 w-9 ring-1 ring-violet-500"></div>
                            </td>,
                        ],
                        [
                            "purple-500",
                            "紫",
                            <td className="w-10">
                                <div className="h-4 w-9 ring-1 ring-purple-500"></div>
                            </td>,
                        ],
                        [
                            "fuchsia-500",
                            "フクシア",
                            <td className="w-10">
                                <div className="h-4 w-9 ring-1 ring-fuchsia-500"></div>
                            </td>,
                        ],
                        [
                            "pink-500",
                            "ピンク",
                            <td className="w-10">
                                <div className="h-4 w-9 ring-1 ring-pink-500"></div>
                            </td>,
                        ],
                        [
                            "rose-500",
                            "バラ",
                            <td className="w-10">
                                <div className="h-4 w-9 ring-1 ring-rose-500"></div>
                            </td>,
                        ],
                        [
                            "red-500/25",
                            "不透明度25％で指定する例",
                            <td className="w-10">
                                <div className="h-4 w-9 ring-1 ring-red-500/25"></div>
                            </td>,
                        ],
                    ]}
                />
            ),
        },
    ],
    [
        "Ring Offset Width",
        {
            entry: "輪のオフセット幅",
            description:
                "指定した距離だけ、box-shadowで描く輪郭線を外側に広げる",
            detail: null,
        },
    ],
    [
        "Ring Offset Color",
        {
            entry: "輪のオフセット色",
            description:
                "輪郭線をRing Offset Widthで広げた、その隙間の色を指定する\nデフォルトでは白で描かれるため、背景色と同じ色を指定する",
            detail: (
                <DetailTable
                    value={[
                        [
                            "inherit",
                            "親要素からスタイルを引き継ぐ",
                            <td className="w-10"></td>,
                        ],
                        ["current", "テキスト色", <td className="w-10"></td>],
                        ["transparent", "透明", <td className="w-10"></td>],
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
]);

export default bordersJA;
