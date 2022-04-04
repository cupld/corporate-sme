import "./App.css";
import { NavLink, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
// import MyDropzone from "./pages/DropZone";
import Application from "./Components/Application";
import Footer from "./Components/Footer";
import Req from "./Components/Req";
import Header from "./Components/Header";
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
              {/* <Route path="/" element={<Application />} /> */}
              {/* <Route path="/" element={<Testing />} /> */}
              {/* <Route path="/" element={<SignUp />} /> */}
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
