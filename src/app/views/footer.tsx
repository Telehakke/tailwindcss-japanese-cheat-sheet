import type { JSX } from "react/jsx-runtime";
import githubMarkWhiteSVG from "../assets/github-mark-white.svg";
import githubMarkSVG from "../assets/github-mark.svg";

const Footer = (): JSX.Element => {
  return (
    <div className="flex items-center justify-center gap-2">
      <a href="https://github.com/telehakke/tailwindcss-japanese-cheat-sheet" target="_blank">
        <picture className="transition hover:opacity-70">
          <source srcSet={githubMarkWhiteSVG} media="(prefers-color-scheme: dark)" />
          <img src={githubMarkSVG} className="h-6 w-6" />
        </picture>
      </a>
      <small>© 2024-2025 Telehakke</small>
    </div>
  );
};

export default Footer;
