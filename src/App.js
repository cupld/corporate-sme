import "./App.css";
import { NavLink, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import GetFiles from "./pages/GetFiles";
// import SignUp from "./pages/SignUp";
// import SignIn from "./pages/SignIn";
// import Application from "./Components/Application";
// import Req from "./Components/Req";
// import curve from "./Images/curve.png";
// import Cur from "./Components/Cur";
import Footer from "./Components/Footer";
import { db } from "./firebase";
import MyDropzone from "./pages/DropZone";
import SendEmail from "./pages/SendEmail";

function App() {
  return (
    <div className="imgBk">
      <NavBar />
      {/* <MyDropzone /> */}
      {/* <GetFiles /> */}
      <SendEmail />
      <Routes>
        {/* <Route path="/" element={<Req />} /> */}
        {/* <Route path="/" element={<SignIn />} /> */}
        {/* <Route path="/" element={<SignUp />} /> */}
      </Routes>
      {/* <Footer /> */}
    </div>
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
