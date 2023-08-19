import "./App.css";
import { Outlet } from "react-router-dom";
import { Footer, NavBar } from "./components";

function App() {
  return (
    <div className="flex flex-col min-h-screen justify-between items-center
    bg-fixed bg-no-repeat bg-cover bg-[url('./assets/background.png')]
    ">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
