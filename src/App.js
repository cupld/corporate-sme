import "./App.css";
import { NavLink, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
// import SignUp from "./pages/SignUp";
// import SignIn from "./pages/SignIn";
// import MyDropzone from "./pages/DropZone";
// import Application from "./Components/Application";
// import Req from "./Components/Req";
// import curve from "./Images/curve.png";
// import Cur from "./Components/Cur";
import Footer from "./Components/Footer";
import { db } from "./firebase";

function App() {
  return (
    <div className="imgBk">
      <NavBar />
      <Routes>
        {/* <Route path="/" element={<Req />} /> */}
        {/* <Route path="/" element={<SignIn />} /> */}
        {/* <Route path="/" element={<SignUp />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
