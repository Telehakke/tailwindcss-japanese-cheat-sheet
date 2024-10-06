import { CategoryEnum } from "../models/category";
import { Translation } from "../models/types";
import DetailTable from "../views/detailTable";

const effectsJA = new Map<string, Translation>([
    [
        CategoryEnum.Effects,
        {
            entry: "効果",
            description: "",
            detail: null,
        },
    ],
    [
        "Box Shadow",
        {
            entry: "ボックスシャドー",
            description: "要素の影を描画する",
            detail: (
                <DetailTable
                    value={[
                        [
                            "shadow-sm",
                            "",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 shadow-sm"></div>
                            </td>,
                        ],
                        [
                            "shadow",
                            "",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 shadow"></div>
                            </td>,
                        ],
                        [
                            "shadow-md",
                            "",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 shadow-md"></div>
                            </td>,
                        ],
                        [
                            "shadow-lg",
                            "",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 shadow-lg"></div>
                            </td>,
                        ],
                        [
                            "shadow-xl",
                            "",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 shadow-xl"></div>
                            </td>,
                        ],
                        [
                            "shadow-2xl",
                            "",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 shadow-2xl"></div>
                            </td>,
                        ],
                        [
                            "shadow-inner",
                            "へこんだように見える影を描画する",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 shadow-inner"></div>
                            </td>,
                        ],
                        ["none", "影を描画しない", <td className="w-10"></td>],
                    ]}
                />
            ),
        },
    ],
    [
        "Box Shadow Color",
        {
            entry: "ボックスシャドーの色",
            description: "影の色を指定する",
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
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 shadow shadow-black"></div>
                            </td>,
                        ],
                        [
                            "white",
                            "白",
                            <td className="h-8 w-10 bg-black">
                                <div className="mx-auto h-4 w-6 shadow shadow-white"></div>
                            </td>,
                        ],
                        [
                            "slate-500",
                            "粘板岩",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 shadow shadow-slate-500"></div>
                            </td>,
                        ],
                        [
                            "gray-500",
                            "グレー",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 shadow shadow-gray-500"></div>
                            </td>,
                        ],
                        [
                            "zinc-500",
                            "亜鉛",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 shadow shadow-zinc-500"></div>
                            </td>,
                        ],
                        [
                            "neutral-500",
                            "ニュートラル",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 shadow shadow-neutral-500"></div>
                            </td>,
                        ],
                        [
                            "stone-500",
                            "石",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 shadow shadow-stone-500"></div>
                            </td>,
                        ],
                        [
                            "red-500",
                            "赤",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 shadow shadow-red-500"></div>
                            </td>,
                        ],
                        [
                            "orange-500",
                            "オレンジ",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 shadow shadow-orange-500"></div>
                            </td>,
                        ],
                        [
                            "amber-500",
                            "琥珀",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 shadow shadow-amber-500"></div>
                            </td>,
                        ],
                        [
                            "yellow-500",
                            "黄色",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 shadow shadow-yellow-500"></div>
                            </td>,
                        ],
                        [
                            "lime-500",
                            "ライム",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 shadow shadow-lime-500"></div>
                            </td>,
                        ],
                        [
                            "green-500",
                            "緑",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 shadow shadow-green-500"></div>
                            </td>,
                        ],
                        [
                            "emerald-500",
                            "エメラルド",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 shadow shadow-emerald-500"></div>
                            </td>,
                        ],
                        [
                            "teal-500",
                            "コガモ",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 shadow shadow-teal-500"></div>
                            </td>,
                        ],
                        [
                            "cyan-500",
                            "シアン",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 shadow shadow-cyan-500"></div>
                            </td>,
                        ],
                        [
                            "sky-500",
                            "スカイ",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 shadow shadow-sky-500"></div>
                            </td>,
                        ],
                        [
                            "blue-500",
                            "青",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 shadow shadow-blue-500"></div>
                            </td>,
                        ],
                        [
                            "indigo-500",
                            "藍色",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 shadow shadow-indigo-500"></div>
                            </td>,
                        ],
                        [
                            "violet-500",
                            "スミレ",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 shadow shadow-violet-500"></div>
                            </td>,
                        ],
                        [
                            "purple-500",
                            "紫",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 shadow shadow-purple-500"></div>
                            </td>,
                        ],
                        [
                            "fuchsia-500",
                            "フクシア",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 shadow shadow-fuchsia-500"></div>
                            </td>,
                        ],
                        [
                            "pink-500",
                            "ピンク",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 shadow shadow-pink-500"></div>
                            </td>,
                        ],
                        [
                            "rose-500",
                            "バラ",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 shadow shadow-rose-500"></div>
                            </td>,
                        ],
                        [
                            "red-500/25",
                            "不透明度25％で指定する例",
                            <td className="h-8 w-10 bg-white">
                                <div className="mx-auto h-4 w-6 shadow shadow-red-500/25"></div>
                            </td>,
                        ],
                    ]}
                />
            ),
        },
    ],
    [
        "Opacity",
        {
            entry: "不透明度",
            description: "不透明度を指定する",
            detail: null,
        },
    ],
    [
        "Mix Blend Mode",
        {
            entry: "合成モード",
            description: "自身の要素と背後にある要素との合成方法を指定する",
            detail: (
                <DetailTable
                    value={[
                        ["normal", "通常"],
                        ["multiply", "乗算"],
                        ["screen", "スクリーン"],
                        ["overlay", "オーバーレイ"],
                        ["darken", "比較（暗）"],
                        ["lighten", "比較（明）"],
                        ["color-dodge", "覆い焼きカラー"],
                        ["color-burn", "焼き込みカラー"],
                        ["hard-light", "ハードライト"],
                        ["soft-light", "ソフトライト"],
                        ["difference", "差の絶対値"],
                        ["exclusion", "除外"],
                        ["hue", "色相"],
                        ["saturation", "彩度"],
                        ["color", "カラー"],
                        ["luminosity", "輝度"],
                        ["plus-darker", "クロスフェード専用"],
                        ["plus-lighter", "クロスフェード専用"],
                    ]}
                />
            ),
        },
    ],
    [
        "Background Blend Mode",
        {
            entry: "背景合成モード",
            description:
                "Background ImageとBackground Colorとの合成方法を指定する",
            detail: (
                <DetailTable
                    value={[
                        ["normal", "通常"],
                        ["multiply", "乗算"],
                        ["screen", "スクリーン"],
                        ["overlay", "オーバーレイ"],
                        ["darken", "比較（暗）"],
                        ["lighten", "比較（明）"],
                        ["color-dodge", "覆い焼きカラー"],
                        ["color-burn", "焼き込みカラー"],
                        ["hard-light", "ハードライト"],
                        ["soft-light", "ソフトライト"],
                        ["difference", "差の絶対値"],
                        ["exclusion", "除外"],
                        ["hue", "色相"],
                        ["saturation", "彩度"],
                        ["color", "カラー"],
                        ["luminosity", "輝度"],
                    ]}
                />
            ),
        },
    ],
]);

export default effectsJA;
