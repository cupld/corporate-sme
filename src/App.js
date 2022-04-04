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

// import Axios from "axios";
// import React, { useState } from "react";

// const sendEmailURL = "<YOUR_FUNCTION_URL>";

// function App() {
//   const [state, setState] = useState({
//     message: "",
//     name: "",
//     subject: "",
//   });

//   const { message, name, subject } = state;

//   const handleState = ({ target: { id, value } }) =>
//     setState({ ...state, [id]: value });

//   const sendEmail = (e) => {
//     e.preventDefault();
//     Axios.get(sendEmailURL, {
//       params: {
//         message,
//         name,
//         subject,
//       },
//     });
//   };

//   return (
//     <form
//       onSubmit={sendEmail}
//       style={{
//         alignItems: "center",
//         display: "flex",
//         flexDirection: "column",
//       }}
//     >
//       <label htmlFor={"name"}>Name</label>
//       <input id={"name"} onChange={handleState} value={name} />

//       <label htmlFor={"message"}>Message</label>

//       <input id={"message"} onChange={handleState} value={message} />

//       <label htmlFor={"subject"}>Subject</label>

//       <input id={"subject"} onChange={handleState} value={subject} />

//       <input type={"submit"} value={"Send Email"} />
//     </form>
//   );
// }

// export default App;
