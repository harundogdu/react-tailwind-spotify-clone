import SideBar from "components/SideBar";
import NavBar from "components/NavBar";
import Content from "components/Content";
import Footer from "components/Footer";
/* funnction */
function App() {
  return (
    <div className="w-full h-full flex flex-col text-white relative">
      <div className="flex">
        <SideBar />
        <div className="right-0 left-[240px] absolute bg-bgSideBar flex-1 flex-col items-center justify-center  pb-28">
          <NavBar />
          <Content />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
