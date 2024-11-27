import { CategoryEnum } from "../models/category";
import { Translation } from "../models/types";
import DetailTable from "../views/common/detailTable";

const transformsJA = new Map<string, Translation>([
    [
        CategoryEnum.Transforms,
        {
            entry: "変形",
            description: "",
            detail: null,
        },
    ],
    [
        "Scale",
        {
            entry: "拡大縮小",
            description: "指定した大きさに拡大縮小する",
            detail: (
                <DetailTable
                    value={[
                        ["*", "拡大縮小"],
                        ["x-*", "水平方向に拡大縮小"],
                        ["y-*", "垂直方向に拡大縮小"],
                    ]}
                />
            ),
        },
    ],
    [
        "Rotate",
        {
            entry: "回転",
            description: "指定した角度に回転する",
            detail: (
                <DetailTable
                    value={[
                        ["rotate-*", "時計回りで回転"],
                        ["-rotate-*", "反時計回りで回転"],
                    ]}
                />
            ),
        },
    ],
    [
        "Translate",
        {
            entry: "移動",
            description: "指定した距離だけ移動する",
            detail: (
                <DetailTable
                    value={[
                        ["x-*", "右方向に移動"],
                        ["y-*", "下方向に移動"],
                        ["-x-*", "左方向に移動"],
                        ["-y-*", "上方向に移動"],
                    ]}
                />
            ),
        },
    ],
    [
        "Skew",
        {
            entry: "歪める",
            description: "斜め方向に歪める",
            detail: (
                <DetailTable
                    value={[
                        ["x-*", "水平方向に引き延ばしたように傾斜する"],
                        ["y-*", "垂直方向に引き延ばしたように傾斜する"],
                    ]}
                />
            ),
        },
    ],
    [
        "Transform Origin",
        {
            entry: "変形の原点",
            description: "変形の基準となる原点を指定する",
            detail: (
                <DetailTable
                    value={[
                        ["center", "中央"],
                        ["top", "上"],
                        ["top-right", "右上"],
                        ["right", "右"],
                        ["bottom-right", "右下"],
                        ["bottom", "下"],
                        ["bottom-left", "左下"],
                        ["left", "左"],
                        ["top-left", "左上"],
                    ]}
                />
            ),
        },
    ],
]);

export default transformsJA;
