import "./App.css";
import { NavLink, Route, Routes } from "react-router-dom";
// import NavBar from "./components/NavBar";
// import SignUp from "./pages/SignUp";
// import SignIn from "./pages/SignIn";
import MyDropzone from "./pages/DropZone";
import NavBar from "./Components/NavBar";
import Application from "./Components/Application";
import Req from "./Components/Req";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Application />} />
        {/* <Route path="/" element={<SignIn />} /> */}
        {/* <Route path="/" element={<SignUp />} /> */}
      </Routes>
      <img
        className="logoGBK2"
        src="https://freesvg.org/img/1607600654curved-lines-abstract-svg.png"
      />
    </div>
  );
}

export default App;
