import { useState } from "react";
import { collection, addDoc } from 'firebase/firestore';
import { useForm } from "react-hook-form";
import classNames from "classnames";
import { db } from "../../firebase";
import axios from "axios";
import { Link } from "react-router-dom";

function WalletPage({ contract, provider, account }) {
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [fileName, setFileName] = useState("No image selected");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = async (e) => {
    // e.preventDefault();
    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);
        formData.append('pinataOptions', JSON.stringify({ cidVersion: 0 }));
        formData.append('pinataMetadata', JSON.stringify({name: name}));
        console.log(formData);

        const resFile = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
            maxContentLength: 'Infinity',
            pinata_api_key: `d1f95dfc12774a6b2666`,
            pinata_secret_api_key: `997a44927c94b424a0333fee87b5d78bd06cdebf7397d2921d9ade2532706ec1`,
            'Content-Type': `multipart/form-data; boundary=${formData._boundary}`
          },
        });

        
        console.log(resFile);
        
        const ImgHash = `https://gateway.pinata.cloud/ipfs/${resFile.data.IpfsHash}`;
        const hash = await addDoc(collection(db, 'hash'), {hash:`${resFile.data.IpfsHash}`,name:`${name}`,email:`${email}`});
        // console.log(hash);
        console.log(resFile.data.IpfsHash);
        console.log(ImgHash);
        contract.add(account, ImgHash);
        alert("Successfully Image Uploaded");
        setFile('');
        setEmail('');
        setName('');
      } catch (e) {
        alert("Unable to upload image to Pinata");
        setFileName("No image selected");
        setFile('');
      }
    }
    setFile('');
    setFileName('');
  };  

  const retrieveFile = (e) => {
    const data = e.target.files[0]; //files array of files object
    // console.log(data);
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(data);
    reader.onloadend = () => {
      setFile(e.target.files[0]);
    };
    setFileName(name);
    e.preventDefault();
  };

  return (
    <>
        <h2 className="text-white text-2xl text-center mb-4">
          Upload Certificate To IPFS
        </h2>
        <form className="form space-y-4 p-3" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              type="text"
              className={classNames(
                "border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                { "is-invalid": errors.fname }
              )}
              id="name"
              placeholder="Enter Full Name"
              {...register("fname", {
                required: "This Field Is Required...",
                minLength: {
                  value: 4,
                  message: "Please Enter Fullname Minimum 4 Characters...",
                },
              })}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            {errors.fname && (
              <div className="invalid-feedback mt-2 text-sm text-red-600 dark:text-red-500">
                {errors.fname.message}
              </div>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className={classNames(
                " border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                { "is-invalid": errors.email }
              )}
              placeholder="example@gmail.com"
              {...register("email", {
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/,
                  message: "Please Enter a Valid E-mail Address",
                },
                required: "This Field is Required...",
              })}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            {errors.email && (
              <div className="invalid-feedback mt-2 text-sm text-red-600 dark:text-red-500">
                {errors.email.message}
              </div>
            )}
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="large_size">Upload Certificate</label>
            <input className="block w-full text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="large_size" type="file" onChange={retrieveFile} required/>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="text-white bg-blue-400 dark:bg-blue-500 dark:hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer"
            >
              Upload file
            </button>
            <Link
             to="/institutehomepage"
              className="text-white ml-5 bg-blue-400 dark:bg-blue-500 dark:hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer"
            >
              Go Back
            </Link>
          </div>
        </form>
        </>
  );
}

export default WalletPage;


// API Key: 0337dca1d1084cd2b36a
//  API Secret: 7469c3804d88d6b71ece34e45f1f11c31c92e46a935298b77c7cc6fa1ade5b20
//  JWT: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiIwZTNlNzJjOC0xNzkwLTQ0ZGYtOGYzNy02ZGUwNmVmNWYwYTkiLCJlbWFpbCI6InJvcml4YXA4ODdAbGFybGFuZC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6IkZSQTEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX0seyJpZCI6Ik5ZQzEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiMDMzN2RjYTFkMTA4NGNkMmIzNmEiLCJzY29wZWRLZXlTZWNyZXQiOiI3NDY5YzM4MDRkODhkNmI3MWVjZTM0ZTQ1ZjFmMTFjMzFjOTJlNDZhOTM1Mjk4Yjc3YzdjYzZmYTFhZGU1YjIwIiwiaWF0IjoxNjgzMzEyNTcyfQ.gL_L2nF49Bz8_qzuhm6ZhSei43l3OUt9TDrQvzeRK-k


// API Key: 3cfbc82203bb65748269
//  API Secret: 68d1bdefa543457bd2f2c8c31c01d857948f40388c959515a3abcfef210b15c9
//  JWT: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiIwZTNlNzJjOC0xNzkwLTQ0ZGYtOGYzNy02ZGUwNmVmNWYwYTkiLCJlbWFpbCI6InJvcml4YXA4ODdAbGFybGFuZC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6IkZSQTEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX0seyJpZCI6Ik5ZQzEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiM2NmYmM4MjIwM2JiNjU3NDgyNjkiLCJzY29wZWRLZXlTZWNyZXQiOiI2OGQxYmRlZmE1NDM0NTdiZDJmMmM4YzMxYzAxZDg1Nzk0OGY0MDM4OGM5NTk1MTVhM2FiY2ZlZjIxMGIxNWM5IiwiaWF0IjoxNjgzMzEyOTg1fQ.ytdjVozTkumowTKg0VosycvHbCuR4sDJkgDNc0nKGOk