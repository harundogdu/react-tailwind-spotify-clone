import SideBar from "components/SideBar";
import NavBar from "components/NavBar";
import Content from "components/Content";
import Footer from "components/Footer";
/* funnction */
function App() {
  return (
    <div className="flex flex-col bg-bgSideBar text-white">
      <div className="flex">
        <SideBar />
        <div className="flex-1 flex-col items-center justify-center">
          <NavBar />
          <Content />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
