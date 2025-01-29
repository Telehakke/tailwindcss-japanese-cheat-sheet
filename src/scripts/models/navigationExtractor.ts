import { isCategory } from "../../app/models/category";
import { Navigation } from "../../app/models/types";

/**
 * TailwindCSSのページにあるサイドメニューから値を取得するのに使用する
 */
export default class NavigationExtractor {
    private document: Document;

    constructor(document: Document) {
        this.document = document;
    }

    /**
     * サイドメニューからチートシートに必要な項目を取得
     * @throws HTML要素が見つからなければエラーが発生
     */
    getNavigations = (): Navigation[] => {
        const nav = this.document.querySelector("nav#nav");
        if (nav == null)
            throw new Error("Navigationの<nav>要素が見つかりませんでした");

        const navigations = Array.from(nav.querySelectorAll("ul > li"))
            .filter((e) => {
                const heading = e.querySelector("h5");
                return isCategory(heading?.textContent);
            })
            .map((e) => {
                const category = e.querySelector("h5")!.textContent!;
                const urls = Array.from<HTMLAnchorElement>(
                    e.querySelectorAll("ul > li > a"),
                ).map((e) => {
                    const url = `https://v3.tailwindcss.com${e.href}`;
                    return url;
                });
                const navigation: Navigation = {
                    category: category,
                    urls: urls,
                };
                return navigation;
            });
        return navigations;
    };

    /**
     * ドキュメントのバージョンを取得
     */
    getVersion = (): string => {
        const versionButton = this.document.querySelector(
            "div#__next > div:nth-of-type(2) > div > div > div > div > button",
        );
        const version = versionButton?.textContent ?? "";
        return version;
    };
}
