import { Bg } from "../common/classNames";
import ExpandAndCollapseButtons from "./sub/expandAndCollapseButtons";
import SearchTextBox from "./sub/searchTextBox";

const CheatSheetController = (): JSX.Element => {
    return (
        <div
            className={`sticky top-0 -mx-4 flex flex-col justify-center gap-4 py-4 shadow-md sm:flex-row ${Bg.slate100_dark900}`}
        >
            <SearchTextBox />
            <ExpandAndCollapseButtons />
        </div>
    );
};

export default CheatSheetController;
