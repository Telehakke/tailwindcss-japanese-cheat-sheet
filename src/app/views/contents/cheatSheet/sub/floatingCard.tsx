import { ReactNode } from "react";
import { Bg } from "../../../common/classNames";

/**
 * 浮いたように見える角丸のカード
 */
const FloatingCard = ({ children }: { children?: ReactNode }): JSX.Element => {
    return (
        <div
            className={`mb-8 rounded-xl shadow-md shadow-neutral-400 dark:shadow-neutral-950 ${Bg.neutral50_dark800}`}
        >
            {children}
        </div>
    );
};

export default FloatingCard;
