import "./App.css";
import { NavLink, Route, Routes } from "react-router-dom";
import NavBar from "./Components/Layouts/NavBar";
// import MyDropzone from "./pages/DropZone";
import Application from "./Components/App/Application";
import Footer from "./Components/Layouts/Footer";
import Req from "./Components/Req";
import Header from "./Components/Layouts/Header";
import SignUp from "./pages/SignUp";
import Testing from "./Components/Testing";
import Status from "./Components/Email/Status";
function App() {
  return (
    <main>
      <div className="container">
        <div className="flexBox flexBox1">
          <NavBar />
        </div>
        <div className="containerB">
          <div className="flexBox flexBox4">
            <Header />
          </div>
          <div className="flexBox flexBox2">
            <Routes>
              <Route path="/" element={<Application />} />
              <Route path="/Requirements" element={<Req />} />
              <Route path="/Testing" element={<Testing />} />
              <Route path="/Signup" element={<SignUp />} />
              <Route path="/Status" element={<Status />} />
            </Routes>
          </div>
          <footer className="flexBox flexBox3">
            <Footer />
          </footer>
        </div>
      </div>
    </main>
  );
}

export default App;
