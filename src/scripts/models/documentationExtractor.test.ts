import { test, expect } from "vitest";
import { JSDOM } from "jsdom";
import DocumentationExtractor from "./documentationExtractor";

// prettier-ignore
const html =
`<div>
    <header id="header">
        <div>
            <p>Layout</p>
            <div>
                <h1>Aspect Ratio</h1>
            </div>
        </div>
        <p>Utilities for controlling the aspect ratio of an element.</p>
    </header>
    <div>
        <h2 id="class-reference">
            <a></a>
        </h2>
        <div>
            <div id="class-table">
                <table>
                    <thead>
                        <tr>
                            <th>
                                <div>Class</div>
                            </th>
                            <th>
                                <div>Properties</div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>aspect-auto</td>
                            <td>aspect-ratio<!-- -->: <!-- -->auto<!-- -->;<!-- --></td>
                        </tr>
                        <tr>
                            <td>aspect-square</td>
                            <td>aspect-ratio<!-- -->: <!-- -->1 / 1<!-- -->;<!-- --></td>
                        </tr>
                        <tr>
                            <td>aspect-video</td>
                            <td>aspect-ratio<!-- -->: <!-- -->16 / 9<!-- -->;<!-- --></td>
                        </tr>
                    </tbody>
                </table>
                <div></div>
            </div>
        </div>
    </div>
</div>
`

const { document } = new JSDOM(html).window;
const documentationExtractor = new DocumentationExtractor(document);

test("見出しを取得できているかどうか", () => {
    const result = documentationExtractor.getEntry();
    expect(result).toBe("Aspect Ratio");
});

test("説明を取得できているかどうか", () => {
    const result = documentationExtractor.getDescription();
    expect(result).toBe(
        "Utilities for controlling the aspect ratio of an element.",
    );
});

test("パラメーターを取得できているかどうか", () => {
    const result = documentationExtractor.getParameters();
    const expected = [
        ["aspect-auto", "aspect-ratio: auto;"],
        ["aspect-square", "aspect-ratio: 1 / 1;"],
        ["aspect-video", "aspect-ratio: 16 / 9;"],
    ];
    expect(result).toEqual(expected);
});
