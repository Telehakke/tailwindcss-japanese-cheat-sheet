/**
 * アイコンを付与できるカプセル状のボタン
 */
const RoundedButton = ({
    className,
    Icon,
    text,
    onClick,
}: {
    className?: string;
    Icon?: JSX.Element;
    text: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}): JSX.Element => {
    return (
        <button
            className={`flex justify-center rounded-full border-2 border-neutral-500 bg-neutral-50 transition hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 ${className ?? ""}`}
            onClick={onClick}
        >
            {Icon}
            <p>{text}</p>
        </button>
    );
};

export default RoundedButton;
