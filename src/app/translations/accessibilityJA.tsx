import { CategoryEnum } from "../models/category";
import { Translation } from "../models/types";
import DetailTable from "../views/detailTable";

const accessibilityJA = new Map<string, Translation>([
    [
        CategoryEnum.Accessibility,
        {
            entry: "アクセシビリティー",
            description: "",
            detail: null,
        },
    ],
    [
        "Screen Readers",
        {
            entry: "スクリーンリーダー",
            description:
                "画面読み上げ機能を使用時のアクセシビリティーを向上させる",
            detail: (
                <DetailTable
                    value={[
                        [
                            "sr-only",
                            "視覚的には非表示だが、画面読み上げ機能からは認識できる状態にする",
                        ],
                        ["not-sr-only", "視覚的にも認識できる状態にする"],
                    ]}
                />
            ),
        },
    ],
    [
        "Forced Color Adjust",
        {
            entry: "強制カラー調整",
            description:
                "ユーザーが設定している、視覚サポート系アクセシビリティー（ハイコントラストモードなど）の効果の受け方を指定する\nブラウザー任せでは問題がある箇所に限定して、適切に使用すること",
            detail: (
                <DetailTable
                    value={[
                        ["auto", "効果を受け入れる"],
                        ["none", "効果を受け入れない"],
                    ]}
                />
            ),
        },
    ],
]);

export default accessibilityJA;
