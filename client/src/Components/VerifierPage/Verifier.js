import React, { useState,useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function Verifier() {
let [imgHash, setImgHash] = useState("");
let [holdHash, setHash] = useState("");

const {
  register,
  handleSubmit,
  formState: { errors,isSubmitSuccessful },reset
  } = useForm({ mode: "all" });
  
  useEffect(()=>{
  if (isSubmitSuccessful) {
  reset();
  }
  },[isSubmitSuccessful,reset])

const onSubmit = async (data, e) => {
e.preventDefault();
console.log(data);
setImgHash(holdHash);
};


return (
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
          Verify Certificate
        </h1>
        <small className="text-sm text-gray-300 mb-4">Entered Hash is valid then Image will Appear here Else Image will
          Not Appear</small>
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
            className=" text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Check</button>
            <Link to="/"
            className=" text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 ml-2">Go Back</Link>
        </form>
        {imgHash ? (
        <div className="mt-3 text-center text-sm dark:text-red-400">
          <img className="rounded-md broken-image" src={`https://gateway.pinata.cloud/ipfs/${imgHash}`} alt="Invaild Hash Value"  />
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

export default Verifier;

// Pinata Account Details
// Email : rayepo5451@syinxun.com
// Password : Newuser@123

// Email.js
// Email : rayepo5451@syinxun.com
// Password : Newuser@123

// API Key: 90241a50bcbcc907045c
//  API Secret: 5d99537b62ccf022d2ec07e60bbb01fb77844f63eef6c2ea24d632567e30d1f8
//  JWT: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJhMzIzNWUxNi1jNjAwLTQ5N2ItODhiYy00MDZjYzE3ZjYzYjciLCJlbWFpbCI6InBheW9tNjI0NDBAc29vbWJvLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImlkIjoiRlJBMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfSx7ImlkIjoiTllDMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiI5MDI0MWE1MGJjYmNjOTA3MDQ1YyIsInNjb3BlZEtleVNlY3JldCI6IjVkOTk1MzdiNjJjY2YwMjJkMmVjMDdlNjBiYmIwMWZiNzc4NDRmNjNlZWY2YzJlYTI0ZDYzMjU2N2UzMGQxZjgiLCJpYXQiOjE2ODMzMDU1MzF9.voO428y08PVV4jtqeOx_flUHsjuBUl35vtEU8FrbKPc