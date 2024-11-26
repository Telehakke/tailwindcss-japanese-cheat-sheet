import Header from "./views/header";
import Footer from "./views/footer";
import CheatSheetController from "./views/controller/cheatSheetController";
import Contents from "./views/contents/contents";
import { TextColor } from "./views/common/classNames";

const App = (): JSX.Element => {
    return (
        <>
            <Header />
            <div className={`space-y-4 p-4 ${TextColor.neutral900_dark100}`}>
                <CheatSheetController />
                <Contents />
            </div>
            <Footer />
        </>
    );
};

export default App;
