import { useAtomValue, useSetAtom } from "jotai";
import { isJapaneseAtom, shouldExpandAllAtom } from "../../../appStates";
import RoundedButton from "../../common/roundedButton";
import { UnfoldLess, UnfoldMore } from "../../common/icons";
import { Bg, Fill } from "../../common/classNames";

/**
 * 全て展開、全て折りたたむボタン
 */
const ExpandAndCollapseButtons = (): JSX.Element => {
    const isJapanese = useAtomValue(isJapaneseAtom);
    const setShouldExpandAll = useSetAtom(shouldExpandAllAtom);

    return (
        <div className="flex items-center justify-center gap-4">
            <RoundedButton
                className={`px-2 ${Bg.hoverNeutral200_dark800}`}
                Icon={<UnfoldMore className={Fill.neutral500} />}
                text={isJapanese ? "全て展開" : "Expand All"}
                onClick={() => setShouldExpandAll(true)}
            />
            <RoundedButton
                className={`px-2 ${Bg.hoverNeutral200_dark800}`}
                Icon={<UnfoldLess className={Fill.neutral500} />}
                text={isJapanese ? "全て折りたたむ" : "Collapse All"}
                onClick={() => setShouldExpandAll(false)}
            />
        </div>
    );
};

export default ExpandAndCollapseButtons;
