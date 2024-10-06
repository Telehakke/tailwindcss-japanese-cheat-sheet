import { expect, test } from "vitest";
import { JSDOM } from "jsdom";
import NavigationExtractor from "./navigationExtractor";
import { Navigation } from "../../app/models/types";

// prettier-ignore
const html =
`<body>
    <div id="__next">
        <div></div>
        <div>
            <div>
                <div>
                    <div>
                        <a></a>
                        <div>
                            <button id="headlessui-menu-button-:Rqcr6:">v3.0.0</button>
                            <svg></svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div>
                <div>
                    <nav id="nav">
                        <ul>
                            <li>
                                <h5>Base Styles</h5>
                                <ul>
                                    <li>
                                        <a href="/docs/preflight">Preflight</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <h5>Layout</h5>
                                <ul>
                                    <li>
                                        <a href="/docs/aspect-ratio">Aspect Ratio</a>
                                    </li>
                                    <li>
                                        <a href="/docs/container">Container</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</body>
`;

const { document } = new JSDOM(html).window;
const navigationExtractor = new NavigationExtractor(document);

test("チートシートに必要な項目だけを取得できているかどうか", () => {
    const result = navigationExtractor.getNavigations();
    const expected: Navigation[] = [
        {
            category: "Layout",
            urls: [
                "https://tailwindcss.com/docs/aspect-ratio",
                "https://tailwindcss.com/docs/container",
            ],
        },
    ];
    expect(result).toEqual(expected);
});

test("ドキュメントのバージョンを取得できているかどうか", () => {
    const result = navigationExtractor.getVersion();
    expect(result).toBe("v3.0.0");
});
