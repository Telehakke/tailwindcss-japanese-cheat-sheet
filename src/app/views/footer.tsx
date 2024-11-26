import githubMarkSVG from "../assets/github-mark.svg";
import githubMarkWhiteSVG from "../assets/github-mark-white.svg";
import { TextColor } from "./common/classNames";

const Footer = (): JSX.Element => {
    return (
        <div className="flex items-center justify-center gap-2 pb-4">
            <a
                href="https://github.com/Telehakke/tailwindcss-japanese-cheat-sheet"
                target="_blank"
            >
                <picture className="transition hover:opacity-70">
                    <source
                        srcSet={githubMarkWhiteSVG}
                        media="(prefers-color-scheme: dark)"
                    />
                    <img src={githubMarkSVG} className="h-6 w-6" />
                </picture>
            </a>
            <small className={`${TextColor.neutral900_dark100}`}>
                © 2024 Telehakke
            </small>
        </div>
    );
};

export default Footer;
