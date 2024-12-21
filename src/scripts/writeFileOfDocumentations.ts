import { setTimeout } from "timers/promises";
import fs from "fs";
import { version, navigations } from "../app/data/navigations_v3.4.17";
import { Documentation } from "../app/models/types";
import DocumentationExtractor from "./models/documentationExtractor";
import createDom from "./models/createDom";

/* 【注意】このスクリプトを一度実行すると、完了までに約27分かかる */

// 処理の進行具合を表示するのに使われる値
const total = navigations.reduce((total, value) => {
    total += value.urls.length;
    return total;
}, 0);
let count = 0;

const documentationsMap = new Map<string, Documentation[]>();

outer: for (const navigation of navigations) {
    const category = navigation.category;
    console.log(category);

    for (const url of navigation.urls) {
        try {
            const document = await createDom(url);

            // チートシートに必要な値を取得
            const documentationExtractor = new DocumentationExtractor(document);
            const entry = documentationExtractor.getEntry();
            const description = documentationExtractor.getDescription();
            const parameters = documentationExtractor.getParameters();

            // 取得した値をdocumentationsMapにまとめる
            const documentation: Documentation = {
                url: url,
                entry: entry,
                description: description,
                parameters: parameters,
            };
            if (documentationsMap.has(category)) {
                documentationsMap.get(category)?.push(documentation);
            } else {
                documentationsMap.set(category, [documentation]);
            }

            // 進行具合を表示
            count += 1;
            console.log(`${count} / ${total} - ${entry}`);

            // サーバーに負荷を掛けないよう、アクセスごとに10秒待機
            if (count < total) {
                await setTimeout(10000);
            }
        } catch (error) {
            console.log(error);
            break outer;
        }
    }
}

// TSファイルを作成し、src/app/dataディレクトリに保存
// prettier-ignore
for (const category of documentationsMap.keys()) {
    const documentations = documentationsMap.get(category);
    const code = 
`export const version = "${version}";
export const documentations = ${JSON.stringify(documentations, null, 4)}`;

    const path = `./src/app/data/${category}_${version}.ts`;
    fs.writeFileSync(path, code);
}
