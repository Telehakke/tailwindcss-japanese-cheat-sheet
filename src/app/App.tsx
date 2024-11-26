import Header from "./views/header";
import Footer from "./views/footer";
import CheatSheetController from "./views/controller/cheatSheetController";
import Contents from "./views/contents/contents";
import Sidebar from "./views/sidebar";

const App = (): JSX.Element => {
    return (
        <>
            <Header />
            <div className="space-y-4 p-4">
                <CheatSheetController />
                <Contents />
            </div>
            <Footer />
            <Sidebar />
        </>
    );
};

export default App;
