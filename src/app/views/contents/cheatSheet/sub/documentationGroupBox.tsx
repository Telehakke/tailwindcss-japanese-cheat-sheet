import { memo, useEffect, useLayoutEffect, useRef, useState } from "react";
import { DetailedDocumentation } from "../../../../models/types";
import { useAtom } from "jotai";
import { shouldExpandAllAtom } from "../../../../appStates";
import {
    KeyboardArrowDown,
    KeyboardArrowUp,
    Link,
} from "../../../common/icons";
import RoundedButton from "../../../common/roundedButton";
import {
    Bg,
    Border,
    Fill,
    FontSize,
    Outline,
    TextColor,
} from "../../../common/classNames";

/**
 * 項目、リンクボタン、説明、詳細、パラメーターを表示する
 */
const DocumentationGroupBox = ({
    detailedDocumentation,
}: {
    detailedDocumentation: DetailedDocumentation;
}): JSX.Element => {
    const [shouldExpand, setShouldExpand] = useState(false);
    const [shouldExpandAll, setShouldExpandAll] = useAtom(shouldExpandAllAtom);

    // 「全て展開」「全て折りたたむ」が押された状態に合わせて詳細エリアを開閉する
    useEffect(() => {
        if (shouldExpandAll != null) {
            setShouldExpand(shouldExpandAll);
        }
    }, [shouldExpandAll]);

    // 項目エリアをクリックすると詳細エリアを開閉する
    const handleEntryClick: React.MouseEventHandler<HTMLDivElement> = () => {
        setShouldExpand(!shouldExpand);
        setShouldExpandAll(null);
    };

    return (
        <div className="space-y-2 px-2 pb-2">
            <EntryAndLinkBar
                detailedDocumentation={detailedDocumentation}
                handleEntryClick={handleEntryClick}
            />
            <DescriptionBar detailedDocumentation={detailedDocumentation} />
            <div className={`${shouldExpand ? "" : "hidden"}`}>
                {detailedDocumentation.detail}
            </div>
            <ParametersTable
                detailedDocumentation={detailedDocumentation}
                outerShouldExpand={shouldExpand}
            />
        </div>
    );
};

export default DocumentationGroupBox;

/**
 * 項目とリンクを表示するバー
 */
const EntryAndLinkBar = ({
    detailedDocumentation,
    handleEntryClick,
}: {
    detailedDocumentation: DetailedDocumentation;
    handleEntryClick: React.MouseEventHandler<HTMLDivElement>;
}): JSX.Element => {
    return (
        <div
            className={`-mx-2 flex cursor-pointer justify-between whitespace-pre-line border-t-2 p-2 transition ${Border.neutral500} ${Bg.neutral200_dark800} ${Bg.hoverNeutral300_dark600}`}
            onClick={handleEntryClick}
        >
            <EntryAndLink detailedDocumentation={detailedDocumentation} />
        </div>
    );
};

/**
 * 項目とリンクを表示する
 */
const EntryAndLink = memo(
    ({
        detailedDocumentation,
    }: {
        detailedDocumentation: DetailedDocumentation;
    }): JSX.Element => {
        return (
            <>
                <h3>{detailedDocumentation.entry}</h3>
                <a
                    className={`my-auto w-10 content-center rounded-full ${Fill.neutral500_hoverSky400} ${Bg.hoverNeutral200_dark500}`}
                    href={detailedDocumentation.url}
                    target="_blank"
                    aria-label="公式ドキュメントに移動して詳細を確認する"
                    onClick={(event) => {
                        // handleEntryClick()が呼び出されないよう、
                        // クリックイベントの伝播を止める
                        event.stopPropagation();
                    }}
                >
                    <Link className="mx-auto" />
                </a>
            </>
        );
    },
);

/**
 * 説明を表示する
 */
const DescriptionBar = memo(
    ({
        detailedDocumentation,
    }: {
        detailedDocumentation: DetailedDocumentation;
    }): JSX.Element => {
        return (
            <p className={`whitespace-pre-line ${FontSize.textSm}`}>
                {detailedDocumentation.description}
            </p>
        );
    },
);

/**
 * クラス名とそれに対応するCSSを表示する\
 * 高さが144pxを超える場合、コンパクトに表示する
 */
const ParametersTable = ({
    detailedDocumentation,
    outerShouldExpand,
}: {
    detailedDocumentation: DetailedDocumentation;
    outerShouldExpand: boolean;
}): JSX.Element => {
    const [innerShouldExpand, innerSetShouldExpand] = useState(false);
    const [shouldShowButton, setShouldShowButton] = useState(false);
    const tableElement = useRef<HTMLTableElement>(null);

    // レンダリング直後に<table>要素の高さを取得する
    useLayoutEffect(() => {
        if (!outerShouldExpand) {
            innerSetShouldExpand(false);
            setShouldShowButton(false);
            return;
        }

        const tableHeight =
            tableElement.current?.getBoundingClientRect().height;
        if (tableHeight == null) return;

        if (tableHeight > 144) {
            setShouldShowButton(true);
        }
    }, [outerShouldExpand]);

    return (
        <>
            <div
                className={`overflow-clip ${innerShouldExpand ? "" : "max-h-[144px]"} ${outerShouldExpand ? "" : "hidden"}`}
            >
                <table
                    className={`w-full table-fixed border-collapse overflow-clip whitespace-pre-line rounded-lg outline outline-2 -outline-offset-2 ${Outline.stone400_dark500}`}
                    ref={tableElement}
                >
                    {detailedDocumentation.entry.includes("Container") ? (
                        // Layout > Containerの項目だけ、専用の<tbody>要素を使用する
                        <TbodyUsedOnlyForContainer
                            documentation={detailedDocumentation}
                        />
                    ) : (
                        // それ以外で使用する<tbody>要素
                        <TbodyOfParameters
                            documentation={detailedDocumentation}
                            shouldExpand={innerShouldExpand}
                        />
                    )}
                </table>
            </div>
            <RoundedButton
                className={`w-full ${shouldShowButton ? "" : "hidden"}`}
                Icon={
                    innerShouldExpand ? (
                        <KeyboardArrowUp className={Fill.neutral500} />
                    ) : (
                        <KeyboardArrowDown className={Fill.neutral500} />
                    )
                }
                text=""
                onClick={() => innerSetShouldExpand(!innerShouldExpand)}
            />
        </>
    );
};

/**
 * Parameterの値を表示するための<tbody>要素
 */
const TbodyOfParameters = memo(
    ({
        documentation,
        shouldExpand,
    }: {
        documentation: DetailedDocumentation;
        shouldExpand: boolean;
    }): JSX.Element => {
        return (
            <tbody>
                {documentation.parameters
                    .filter((_, i) => {
                        // 描画コストを減らすために折りたたみ時は7行分まで表示する
                        if (!shouldExpand) {
                            return i < 7;
                        }

                        return true;
                    })
                    .map((parameters, i) => {
                        return (
                            <tr
                                key={i}
                                className={`${Bg.oddStone100_dark700} ${Bg.evenStone200_dark800}`}
                            >
                                {parameters.map((parameter) => {
                                    return (
                                        <td
                                            key={parameter}
                                            className={`px-2 py-1 text-xs ${TextColor.firstBlue700_dark300} ${TextColor.neutral700_300} ${TextColor.lastGreen700_dark300}`}
                                        >
                                            {parameter}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
            </tbody>
        );
    },
);

/**
 * 「Layout > Container」のみで使用する<tbody>要素
 */
const TbodyUsedOnlyForContainer = memo(
    ({
        documentation,
    }: {
        documentation: DetailedDocumentation;
    }): JSX.Element => {
        return (
            <tbody>
                {documentation.parameters.map((parameters, i) => {
                    return (
                        <tr
                            key={i}
                            className={`${Bg.oddStone100_dark700} ${Bg.evenStone200_dark800}`}
                        >
                            {parameters.map((parameter, j) => {
                                return (
                                    <td
                                        key={parameter}
                                        className={`px-2 py-1 text-xs ${TextColor.neutral700_300} ${TextColor.lastGreen700_dark300} ${i === 0 ? TextColor.firstBlue700_dark300 : ""}`}
                                        // 最初のセルだけ縦方向に連結する
                                        rowSpan={
                                            i === 0 && j === 0 ? 6 : undefined
                                        }
                                    >
                                        {parameter}
                                    </td>
                                );
                            })}
                        </tr>
                    );
                })}
            </tbody>
        );
    },
);
