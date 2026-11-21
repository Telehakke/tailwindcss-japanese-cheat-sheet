import type { JSX } from "react/jsx-runtime";
import Contents from "./views/contents/contents";
import CheatSheetController from "./views/controller/cheatSheetController";
import Footer from "./views/footer";
import Header from "./views/header";
import Sidebar from "./views/sidebar";

const App = (): JSX.Element => {
  return (
    <>
      <div className="space-y-4 p-4">
        <Header />
        <CheatSheetController />
        <Contents />
        <Footer />
      </div>
      <Sidebar />
    </>
  );
};

export default App;
