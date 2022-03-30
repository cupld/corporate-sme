import "./App.css";
import { Route, Routes } from "react-router-dom";
// import NavBar from "./components/NavBar";
import SignUp from "./pages/SignUp";
// import SignIn from "./pages/SignIn";
import MyDropzone from "./pages/DropZone";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MyDropzone />} />
        {/* <Route path="/" element={<SignIn />} /> */}
        {/* <Route path="/" element={<SignUp />} /> */}
      </Routes>
    </div>
  );
}

export default App;
