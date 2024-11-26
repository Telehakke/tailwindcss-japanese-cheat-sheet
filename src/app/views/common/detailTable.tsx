import { Bg, FontSize, TextColor } from "./classNames";

/**
 * クラス名の詳細な説明を表示するのに使用するテーブルビュー\
 * パラメータの3番目はtd要素のみを受け付ける
 */
const DetailTable = ({
    value,
}: {
    value: [string, string, JSX.Element?][];
}): JSX.Element => {
    return (
        <table
            className={`border-separate border-spacing-y-1 leading-4 ${FontSize.textSm} ${TextColor.neutral500_dark300}`}
        >
            <tbody>
                {value.map(([entry, description, sampleView]) => {
                    return (
                        <tr key={entry}>
                            {sampleView?.type === "td" ? sampleView : null}
                            <td
                                className={`whitespace-pre ${Bg.neutral200_dark600}`}
                            >
                                {entry}
                            </td>
                            <td className="px-1">{description}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default DetailTable;