import React, { useState, useRef } from "react";
import { exportComponentAsPNG } from "react-component-export-image";
import certImage1 from "../InstitutionPages/newCertificate.png";



const CreateCertificate = (props) => {
  const { show,doc, onHide } = props;
  const CertificateImage = useRef(null);
  const [name, setName] = useState(doc.name);
  const [studentId, setStudentId] = useState(doc.studId);
  const [branch, setBranch] = useState(doc.branch);
  const [year, setYear] = useState(doc.year);
  const [course,setCourse] = useState("Passing");

  return (
    <div
      className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 bg-gray-800 backdrop-filter backdrop-blur-sm bg-opacity-10"
      key={doc.id} 
      >
      <div className=" w-full max-w-2xl max-h-full">
        <div className="grid items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 p-1">
          <div ref={CertificateImage} className="relative">
            <div id="fname" className="absolute text-3xl mt-[11.5rem] ml-36">
              {name}
            </div>
            <h2 id="studIdTitle" className="absolute ml-[13rem] text-black text-[0.8rem] font-semibold">
            studentId : {studentId}
            </h2>
            <h2 id="branch" className="absolute font-bold mt-[21.9rem] ml-[12.5rem]">
              {branch}
            </h2>
            <h2 id="year" className="absolute mt-[19.2rem] text-xs font-bold ml-[15.7rem]">
              {year}
            </h2>
            <h2 id="course" className="absolute mt-[5.5rem] text-3xl ml-[12rem]">
              {course}
            </h2>
            <img
              className="w-full h-[24rem]"
              src={certImage1}
              id="my-container"
              alt="Certificate"
            />
          </div>
          <div className="flex flex-col justify-between p-4 leading-normal">
            <form className="grid items-end gap-6 mb-6 md:grid-cols-3">
              <div className="mb-1">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  className="border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="name"
                  placeholder="Enter Full Name"
                  value={name}
                />
              </div>
              <div className="mb-1">
                <label
                  htmlFor="studId"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Student ID
                </label>
                <input
                  type="text"
                  id="studId"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Student Id (e.g 12203031)"
                  value={studentId}
                />
              </div>
              <div className="mb-1">
                <label
                  htmlFor="branch"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select Your Branch
                </label>
                <input
                  id="branch"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={branch}
                />
              </div>
            </form>
            <form className="grid items-center gap-6 mb-1 md:grid-cols-3">
              <div className="mb-1">
                <label
                  htmlFor="year"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select Your Year
                </label>
                <input
                  id="year"
                  value={year}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <button
                type="button"
                className="text-white bg-blue-400 mt-5 dark:bg-blue-500 font-medium rounded-lg text-sm px-2 py-2.5 text-center cursor-pointer"
                onClick={() => exportComponentAsPNG(CertificateImage)}
              >
                Download Certificate
              </button>
              <button
                type="button"
                className="text-white font-medium text-sm mt-5 bg-red-500 rounded-lg hover:bg-red-800 focus:ring-1 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-800 dark:focus:ring-red-800 px-2 py-2.5 text-center cursor-pointer"
                onClick={onHide}
              >
                Close
              </button>

              <button
                type="button"
                className="text-white bg-blue-400 dark:bg-blue-500 font-medium rounded-lg text-sm px-2 py-2.5 text-center cursor-pointer"
                onClick={()=>{
                  document.getElementById('my-container').src= `${certImage1}`;
                  setCourse("Passing");
                }}
              >
                Passing Certificate
              </button>

              <button
                type="button"
                className="text-white bg-blue-400 dark:bg-blue-500 font-medium rounded-lg text-sm px-2 py-2.5 text-center cursor-pointer"
                onClick={()=>{
                  document.getElementById('my-container').src= `${certImage1}`;
                  setCourse("Internship");
                }}
              >
                Internship Certificate
              </button>

              <button
                type="button"
                className="text-white bg-blue-400 dark:bg-blue-500 font-medium rounded-lg text-sm px-2 py-2.5 text-center cursor-pointer"
                onClick={()=>{
                  document.getElementById('my-container').src= `${certImage1}`;
                  setCourse("Seminar");
                }}
              >
                Seminar Certificate
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCertificate;
