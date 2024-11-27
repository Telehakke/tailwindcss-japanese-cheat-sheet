import { CategoryEnum } from "../models/category";
import { Translation } from "../models/types";
import DetailTable from "../views/common/detailTable";

const transitionsAndAnimationJA = new Map<string, Translation>([
    [
        CategoryEnum.TransitionsAndAnimation,
        {
            entry: "遷移＆アニメーション",
            description: "",
            detail: null,
        },
    ],
    [
        "Transition Property",
        {
            entry: "遷移プロパティー",
            description:
                "値が変化する際に、なめらかに遷移させたいプロパティーを指定する",
            detail: (
                <DetailTable
                    value={[
                        ["transition-none", "瞬時に遷移する"],
                        ["transition-all", "すべてのプロパティーを対象にする"],
                        [
                            "transition",
                            "いくつかのプロパティーを組み合わせた、おすすめの設定",
                        ],
                        ["transition-colors", "色のみを対象にする"],
                        ["transition-opacity", "不透明度のみを対象にする"],
                        ["transition-shadow", "影のみを対象にする"],
                        ["transition-transform", "変形のみを対象にする"],
                    ]}
                />
            ),
        },
    ],
    [
        "Transition Duration",
        {
            entry: "遷移の期間",
            description: "遷移が完了するまでの時間を指定する",
            detail: null,
        },
    ],
    [
        "Transition Timing Function",
        {
            entry: "遷移タイミング関数",
            description: "値が変化する速度を指定する",
            detail: (
                <DetailTable
                    value={[
                        ["linear", "一定の速度"],
                        ["in", "徐々に加速する"],
                        ["out", "徐々に減速する"],
                        ["in-out", "前半は徐々に加速し、後半は徐々に減速する"],
                    ]}
                />
            ),
        },
    ],
    [
        "Transition Delay",
        {
            entry: "遷移の遅延",
            description:
                "値が変化してから実際に遷移が開始されるまでの時間を指定する",
            detail: null,
        },
    ],
    [
        "Animation",
        {
            entry: "アニメーション",
            description: "要素に動きを与える",
            detail: (
                <DetailTable
                    value={[
                        [
                            "none",
                            "アニメーションしない",
                            <td className="w-10"></td>,
                        ],
                        [
                            "spin",
                            "時計回りに回転",
                            <td className="w-10">
                                <p className="animate-spin text-center">Aa</p>
                            </td>,
                        ],
                        [
                            "ping",
                            "波紋のように広がるアニメーション",
                            <td className="w-10">
                                <p className="animate-ping text-center">Aa</p>
                            </td>,
                        ],
                        [
                            "pulse",
                            "フェードイン／アウトを繰り返す",
                            <td className="w-10">
                                <p className="animate-pulse text-center">Aa</p>
                            </td>,
                        ],
                        [
                            "bounce",
                            "上下に弾む",
                            <td className="w-10">
                                <p className="animate-bounce text-center">Aa</p>
                            </td>,
                        ],
                    ]}
                />
            ),
        },
    ],
]);

export default transitionsAndAnimationJA;
