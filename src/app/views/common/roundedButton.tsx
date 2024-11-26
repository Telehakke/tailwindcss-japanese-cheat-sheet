import { Bg, Border } from "./classNames";

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
            className={`flex justify-center rounded-full border-2 transition ${Border.neutral500} ${Bg.neutral50_dark800} ${Bg.hoverNeutral200_dark700} ${className ?? ""}`}
            onClick={onClick}
        >
            {Icon}
            <p>{text}</p>
        </button>
    );
};

export default RoundedButton;