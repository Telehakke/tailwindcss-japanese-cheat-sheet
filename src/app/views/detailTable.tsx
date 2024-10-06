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
        <table className="border-separate border-spacing-y-1 text-sm leading-4 text-gray-500 dark:text-gray-300">
            <tbody>
                {value.map(([entry, description, sampleView]) => {
                    return (
                        <tr key={entry}>
                            {sampleView?.type === "td" ? sampleView : null}
                            <td className="whitespace-pre bg-gray-200 px-1 dark:bg-neutral-600">
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
