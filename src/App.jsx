import MainFrame from "./MainFrame";
import SideBar from "./SideBar";
import LeftSide from "./LeftSide";
import Header from "./Header";
import HeaderName from "./Headername";
import Program from "./Program";

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
