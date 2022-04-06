//React
import "./App.css";
import { Route, Routes } from "react-router-dom";
//Pages
import Req from "./Components/Req";
import Testing from "./Components/Testing";
import Status from "./Components/Email/Status";
import Footer from "./Components/Layouts/Footer";
import NavBar from "./Components/Layouts/NavBar";
import Header from "./Components/Layouts/Header";
import Application from "./Components/App/Applications/Application";
import SignUpComponent from "./Components/Auth/SignUpComponent";
import SignInComponent from "./Components/Auth/SignInComponent";
import Application2 from "./Components/App/Applications/Application2";
import Application3 from "./Components/App/Applications/Application3";
import Application4 from "./Components/App/Applications/Application4";
import SubmitingApp from "./Components/App/Applications/SubmitingApp";
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
              <Route
                path="/AppSteps/Step1"
                element={
                  <Application
                    setApplication={setApplication}
                    application={application}
                  />
                }
              />
              <Route path="/Requirements" element={<Req />} />
              <Route path="/Testing" element={<Testing />} />
              <Route path="/" element={<SignUpComponent />} />
              <Route path="/Status" element={<Status />} />
              <Route path="/SignIn" element={<SignInComponent />} />
              <Route path="/AppSteps/Step1/Step2" element={<Application2 />} />
              <Route
                path="/AppSteps/Step1/Step2/Step3"
                element={<Application3 />}
              />
              <Route
                path="/AppSteps/Step1/Step2/Step3/Step4"
                element={<Application4 />}
              />
              <Route path="/Submition" element={<SubmitingApp />} />
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

// const [application, setApplication] = useState({
//   companyName: "",
//   typeOfEntiyt: "",
//   companyType: "",
//   branch: "",
//   branchesNumber: "",
//   comercialRegisteration: "",
//   mosalNo: "",
//   licenseNo: "",
//   expiry: "",
//   licenseDate: "",
//   establishmentDate: "",
//   address: {
//     Country: "",
//     Block: "",
//     Avenue: "",
//     Street: "",
//     Building: "",
//     Shop: "",
//     Mobile: "",
//   },
//   companyInfo: {
//     pobox: "",
//     Email: "",
//     officialWebsite: "",
//     socialMedia: "",
//   },
//   natureOfBusiness: {
//     nature: "",
//     others: "",
//     productno: "",
//   },
//   shareHolding: {
//     shareHolding: "",
//     shareHolderName: "",
//     ownerShip: "",
//   },
//   political: "",
//   poa: "",
//   entityScope: "",
//   commercialRegistration: "",
//   pep: "",
//   partnterdocuments: "",
//   income: "",
//   qnt: "",
//   qvt: "",
//   otherbank: { name: [] },
//   natureOfTransactions: "",
//   dropzone: "",
// });
// console.log("🚀 ~ file: App.js ~ line 21 ~ App ~ application", application);
