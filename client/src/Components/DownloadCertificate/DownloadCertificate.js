import React, { useState,useRef,useEffect } from "react";
import { useForm } from "react-hook-form";
import { exportComponentAsPNG } from "react-component-export-image";

function DownloadCertificate() {
let [imgHash, setImgHash] = useState("");
let [holdHash, setHash] = useState("");
const CertificateImage = useRef(null);
const [show,setShow] = useState(false);

const {
register,
handleSubmit,
formState: { errors}
} = useForm({ mode: "all" });

const onSubmit = async(data,e) => {
e.preventDefault();
setImgHash(holdHash);
};

return (
// // <div className="bg-gray-900 h-screen flex justify-center items-center">
//   // <div className="w-full max-w-lg  p-4 rounded-lg shadow sm:p-2 md:p-4 dark:bg-gray-800 dark:border-gray-500">
//     // <h2 className="text-white text-2xl text-center">Download Certificate</h2>
//     // <small className="text-sm text-gray-300">
//       // Entere Certificate Hash You recieved in below input field
//       // </small>
//     // <form className="p-2" onSubmit={handleSubmit(onSubmit)}>
//       // <div className="mb-4">
//         // <label // htmlFor="certificateHash" //
//           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" //>
//           // Enter Certificate Hash :
//           // </label>
//         // <input // type="text" //
//           className={classNames( // "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//           , // { "is-invalid" : errors.fname } // )} // id="certHash" // placeholder="Enter Image Hash" //
//           {...register("fname", { // required: "This Field Is Required..." , // minLength: { // value: 9, //
//           message: "Certificate ID Can't be less than 9 characters" , // }, // })} // value={holdHash} //
//           onChange={(e)=> setHash(e.target.value)}
//         // />
//         // {errors.fname && (
//         // <div className="invalid-feedback mt-2 text-sm text-red-600 dark:text-red-500">
//           // {errors.fname.message}
//           // </div>
//         // )}
//         // </div>

//       // <div>
//         // <button // type="submit" //
//           className="text-white bg-blue-400 dark:bg-blue-500 dark:hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer" //
//           onClick={(e)=> setShow(true)}
//           // >
//           // View
//           // </button>
//         // {
//         // imgHash ?
//         // <button // type="button" //
//           className="text-white ml-5 bg-blue-400 dark:bg-blue-500 dark:hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer" //
//           onClick={()=> exportComponentAsPNG(CertificateImage)}
//           // >
//           // Download
//           // </button>
//         // :
//         // ""
//         // }
//         // </div>
//       // </form>

//     // {imgHash ? (
//     // <div className="mt-3 text-center text-sm dark:text-red-400 relative" ref={CertificateImage}>
//       // {show?<h6 className="absolute text-gray-800 text-[0.8rem] font-semibold mt-4 ml-3">Hash : {imgHash}</h6>:""}
//       // <img // className="rounded-md" // src={`https://gateway.pinata.cloud/ipfs/${imgHash}`} //
//         alt=" Certificate Is Not Valid" // />
//       // </div>
//     // ) : (
//     // <></>
//     // )}

//     // {console.log(`https://gateway.pinata.cloud/ipfs/${imgHash}`)}
//     // </div>
//   // </div>
<section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-3 py-4 mx-auto md:h-screen lg:py-0">
    <p
      className="flex items-center mb-3 text-2xl font-extrabold animate-text bg-gradient-to-r from-blue-300 via-blue-600 to-blue-900 bg-clip-text text-transparent">
      DVAN
    </p>
    <div
      className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md md:max-w-lg xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-2 space-y-2 md:space-y-3 sm:p-4">
        <h1 className="text-xl font-bold leading-tight mb-2 tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Download Certificate
        </h1>
        <small className="text-sm text-gray-300 mb-4">Enter Hash Value You recieved in below input field</small>
        <form className="space-y-2 md:space-y-4" onSubmit={handleSubmit(onSubmit)} noValidate>
          <div>
            <label htmlFor="hash" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter
              Certificate Hash :</label>
            <input type="text" name="hash" id="hash"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Certificate Hash" {...register("hash", {required: "This Field Is Required..."
              ,pattern:{value:/^[a-zA-Z0-9]*$/i,message:"Valid Hash Contain Only Alpha-Numeric Values"},minLength:
              {value: 12,message: "Certificate ID Can't be less than 12 characters" }})} onChange={(e)=>
            setHash(e.target.value)} />
            {
            <div className="invalid-feedback mt-2 text-sm text-red-800 font-medium dark:text-red-400">
              <p>{errors.hash && errors.hash.message}</p>
            </div>
            }
          </div>
          <button type="submit"
            className=" text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            onClick={(e)=> setShow(true)}>Check</button>
          {
          imgHash ?
          <button type="button"
            className="text-white ml-5 bg-blue-400 dark:bg-blue-500 dark:hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer"
            onClick={()=> exportComponentAsPNG(CertificateImage)}
            >
            Download
          </button>
          :
          ""
          }
        </form>
        {imgHash ? (
        <div className="mt-3 text-center text-sm dark:text-red-400 relative" ref={CertificateImage}>
          {show?<p className="absolute font-medium text-[0.4rem] md:text-base mt-1 ml-2 md:mt-3 text-black" >{imgHash}</p>:<></>}
          <img className="rounded-md sm:w-30 sm:h-30" src={`https://gateway.pinata.cloud/ipfs/${imgHash}`}
            alt=" Certificate Is Not Valid" />
        </div>
        ) : (
        <></>
        )}
        {/* {console.log(`https://gateway.pinata.cloud/ipfs/${imgHash}`)} */}
      </div>
    </div>
  </div>
</section>
);
}

export default DownloadCertificate;