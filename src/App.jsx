import MainFrame from "./components/MainFrame.jsx";
import SideBar from "./components/SideBar.jsx";
import LeftSide from "./components/LeftSide.jsx";
import Header from "./components/Header.jsx";
import HeaderName from "./components/HeaderName.jsx";
import Program from "./components/program/Program.jsx";

const App = () => {
  return (
    <>
      <MainFrame>
        <LeftSide>
          <Header />
          <HeaderName />
          <Program />
        </LeftSide>
        <SideBar />
      </MainFrame>
    </>
  );
};

export default App;
