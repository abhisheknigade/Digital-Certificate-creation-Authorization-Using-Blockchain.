import React from "react";
import StudentForm from "./Components/Registration/StudentForm";
import InstituteHomePage from "./Components/InstitutionPages/InstituteHomePage"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Verifier from "./Components/VerifierPage/Verifier";
import UploadCertificate from "./Components/InstitutionPages/UploadCertificate";
import ListOfCertificate from "./Components/InstitutionPages/ListOfCertificate";
import DownloadCertificate from "./Components/DownloadCertificate/DownloadCertificate";
import SendCertificate from "./Components/InstitutionPages/SendCertificate";
import HomePage from "./Components/LandingPage/HomePage";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-gray-900 h-screen select-none">
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/studentform" element={<StudentForm/>}/>
          <Route path="/verifier" element={<Verifier/>}/>
          <Route path="/institutehomepage" element={<InstituteHomePage />} />
          <Route path="/Uploadcertificate" element={<UploadCertificate />} />
          <Route path="/listofcertificate" element={<ListOfCertificate />} />
          <Route path="/sendcertificate" element={<SendCertificate />} />
          <Route path="/downloadcertificate" element={<DownloadCertificate />} />
        </Routes>
      </div>
    </BrowserRouter>
    );
}


export default App;


