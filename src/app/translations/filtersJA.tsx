import { CategoryEnum } from "../models/category";
import { Translation } from "../models/types";
import DetailTable from "../views/detailTable";

const filtersJA = new Map<string, Translation>([
    [
        CategoryEnum.Filters,
        {
            entry: "フィルター",
            description: "",
            detail: null,
        },
    ],
    [
        "Blur",
        {
            entry: "ぼかし",
            description: "ぼかしの強度を指定する",
            detail: null,
        },
    ],
    [
        "Brightness",
        {
            entry: "明るさ",
            description: "明るさの強度を指定する",
            detail: null,
        },
    ],
    [
        "Contrast",
        {
            entry: "コントラスト",
            description: "明暗差の強度を指定する",
            detail: null,
        },
    ],
    [
        "Drop Shadow",
        {
            entry: "ドロップシャドー",
            description: "コンテンツに対する影を描画する",
            detail: (
                <DetailTable
                    value={[
                        [
                            "drop-shadow-sm",
                            "",
                            <td className="bg-white">
                                <p className="text-2xl text-white drop-shadow-sm">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "drop-shadow",
                            "",
                            <td className="bg-white">
                                <p className="text-2xl text-white drop-shadow">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "drop-shadow-md",
                            "",
                            <td className="bg-white">
                                <p className="text-2xl text-white drop-shadow-md">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "drop-shadow-lg",
                            "",
                            <td className="bg-white">
                                <p className="text-2xl text-white drop-shadow-lg">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "drop-shadow-xl",
                            "",
                            <td className="bg-white">
                                <p className="text-2xl text-white drop-shadow-xl">
                                    Aa
                                </p>
                            </td>,
                        ],
                        [
                            "drop-shadow-2xl",
                            "",
                            <td className="bg-white">
                                <p className="text-2xl text-white drop-shadow-2xl">
                                    Aa
                                </p>
                            </td>,
                        ],
                        ["drop-shadow-none", "影を描画しない", <td></td>],
                    ]}
                />
            ),
        },
    ],
    [
        "Grayscale",
        {
            entry: "グレースケール",
            description: "グレーの濃淡で描画する",
            detail: null,
        },
    ],
    [
        "Hue Rotate",
        {
            entry: "色相",
            description: "指定した角度で色相を回転し色味を変える",
            detail: (
                <DetailTable
                    value={[
                        ["hue-rotate-*", "時計回りで回転"],
                        ["-hue-rotate-*", "反時計回りに回転"],
                    ]}
                />
            ),
        },
    ],
    [
        "Invert",
        {
            entry: "反転",
            description: "色を反転する",
            detail: null,
        },
    ],
    [
        "Saturate",
        {
            entry: "彩度",
            description: "鮮やかさの強度を指定する",
            detail: null,
        },
    ],
    [
        "Sepia",
        {
            entry: "セピア",
            description: "黒茶色の濃淡で描画する",
            detail: null,
        },
    ],
    [
        "Backdrop Blur",
        {
            entry: "背景ぼかし",
            description: "背後の要素に対する、ぼかしの強度を指定する",
            detail: null,
        },
    ],
    [
        "Backdrop Brightness",
        {
            entry: "背景の明るさ",
            description: "背後の要素に対する、明るさの強度を指定する",
            detail: null,
        },
    ],
    [
        "Backdrop Contrast",
        {
            entry: "背景コントラスト",
            description: "背後の要素に対する、明暗差の強度を指定する",
            detail: null,
        },
    ],
    [
        "Backdrop Grayscale",
        {
            entry: "背景グレースケール",
            description: "背後の要素に対し、グレーの濃淡で描画する",
            detail: null,
        },
    ],
    [
        "Backdrop Hue Rotate",
        {
            entry: "背景の色相",
            description:
                "背後の要素に対し、指定した角度で色相を回転し色味を変える",
            detail: (
                <DetailTable
                    value={[
                        ["hue-rotate-*", "時計回りで回転"],
                        ["-hue-rotate-*", "反時計回りに回転"],
                    ]}
                />
            ),
        },
    ],
    [
        "Backdrop Invert",
        {
            entry: "背景の反転",
            description: "背後の要素に対し、色を反転する",
            detail: null,
        },
    ],
    [
        "Backdrop Opacity",
        {
            entry: "背景の不透明度",
            description: "Backdrop系フィルターの不透明度を指定する",
            detail: null,
        },
    ],
    [
        "Backdrop Saturate",
        {
            entry: "背景の彩度",
            description: "背後の要素に対する、鮮やかさの強度を指定する",
            detail: null,
        },
    ],
    [
        "Backdrop Sepia",
        {
            entry: "背景セピア",
            description: "背後の要素に対し、黒茶色の濃淡で描画する",
            detail: null,
        },
    ],
]);

export default filtersJA;
