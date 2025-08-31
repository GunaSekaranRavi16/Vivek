import Navbar from "./comp/Navbar";
import About from "./comp/About";
import Portfolio from "./comp/Portfolio";
import Home from "./comp/Home";
import  Work from "./comp/Works";

export default function App() {
  return (
    <div className="font-sans bg-black text-white">
      <Navbar />
      <Home/>
      <About />
      <Portfolio />
      <Work/>
    </div>
  );
}
