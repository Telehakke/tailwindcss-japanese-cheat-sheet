import ExpandAndCollapseButtons from "./sub/expandAndCollapseButtons";
import SearchTextBox from "./sub/searchTextBox";

const CheatSheetController = (): JSX.Element => {
    return (
        <>
            <ExpandAndCollapseButtons />
            <SearchTextBox />
        </>
    );
};

export default CheatSheetController;
