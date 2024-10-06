import { CategoryEnum } from "../models/category";
import { Translation } from "../models/types";
import DetailTable from "../views/detailTable";

const spacingJA = new Map<string, Translation>([
    [
        CategoryEnum.Spacing,
        {
            entry: "空間",
            description: "",
            detail: null,
        },
    ],
    [
        "Padding",
        {
            entry: "パディング",
            description: "要素の内側に指定した長さの余白を与える",
            detail: (
                <DetailTable
                    value={[
                        ["p-*", "上下左右に余白を与える"],
                        ["px-*", "水平方向に余白を与える"],
                        ["py-*", "垂直方向に余白を与える"],
                        ["ps-*", "テキストの開始側に余白を与える"],
                        ["pe-*", "テキストの終端側に余白を与える"],
                        ["pt-*", "上側に余白を与える"],
                        ["pr-*", "右側に余白を与える"],
                        ["pb-*", "下側に余白を与える"],
                        ["pl-*", "左側に余白を与える"],
                    ]}
                />
            ),
        },
    ],
    [
        "Margin",
        {
            entry: "マージン",
            description: "要素の外側に指定した長さの余白を与える",
            detail: (
                <DetailTable
                    value={[
                        ["m-*", "上下左右に余白を与える"],
                        ["mx-*", "水平方向に余白を与える"],
                        ["my-*", "垂直方向に余白を与える"],
                        ["ms-*", "テキストの開始側に余白を与える"],
                        ["me-*", "テキストの終端側に余白を与える"],
                        ["mt-*", "上側に余白を与える"],
                        ["mr-*", "右側に余白を与える"],
                        ["mb-*", "下側に余白を与える"],
                        ["ml-*", "左側に余白を与える"],
                    ]}
                />
            ),
        },
    ],
    [
        "Space Between",
        {
            entry: "要素間の空間",
            description:
                "子要素が縦や横に並ぶ場合の、子要素同士の隙間の長さを指定する",
            detail: (
                <DetailTable
                    value={[
                        ["x-*", "水平方向に指定した長さの隙間を挟む"],
                        ["y-*", "垂直方向に指定した長さの隙間を挟む"],
                        [
                            "y-reverse",
                            "下から上へ要素が並ぶ場合に、隙間を正しい位置に挟む",
                        ],
                        [
                            "x-reverse",
                            "右から左へ要素が並ぶ場合に、隙間を正しい位置に挟む",
                        ],
                    ]}
                />
            ),
        },
    ],
]);

export default spacingJA;
