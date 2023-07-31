import MainFrame from "./components/MainFrame";
import SideBar from "./components/SideBar";
import LeftSide from "./components/LeftSide";
import Header from "./components/Header";
import HeaderName from "./components/Headername";
import Program from "./components/program/Program";

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
