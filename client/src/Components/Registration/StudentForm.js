import React, { useEffect, useState,useRef } from "react";
import { useForm } from "react-hook-form";
import UserDataService from "../services/userservices";
import { Link } from "react-router-dom";

const StudentForm = () => {
  const [show, setShow] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful }, reset
  } = useForm({ mode: "all" });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset])

  const onSubmit = async (data, e) => {


    e.preventDefault();

   
    const nmg = setTimeout(() => {
      setShow(false);
    }, 8000);

    try {
      await UserDataService.addUser(data);
      setShow(true);
      console.log("User Data : ", data);
    } catch (err) {
      setShow(false);
      console.error("Error Occured : ", err);
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-3 py-4 mx-auto md:h-screen lg:py-0">
        {show ? <div id="toast-simple"
          className="flex items-center mx-auto w-full p-3 max-w-xs space-x-3 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow dark:text-gray-400 border dark:border-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800"
          role="alert">
          <svg aria-hidden="true" className="w-5 h-5 text-blue-600 dark:text-blue-500" focusable="false" dataprefix="fas"
            dataicon="paper-plane" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="currentColor"
              d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z">
            </path>
          </svg>
          <div className="pl-4 text-sm font-normal">
            Your Data sent successfully : )
          </div>
          <button type="button"
            className="-mx-1.5 -my-1.5 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            data-dismiss-target="#toast-warning" aria-label="Close" onClick={(e) => setShow(false)}
          >
            <span className="sr-only">Close</span>
            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"></path>
            </svg>
          </button>
        </div> : ""}
        <p
          className="flex items-center mb-3 text-2xl font-extrabold animate-text bg-gradient-to-r from-blue-300 via-blue-600 to-blue-900 bg-clip-text text-transparent">
          DVAN
        </p>
        <div
          className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-4 space-y-2 md:space-y-3 sm:p-6">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Registration Form
            </h1>
            <form  className="space-y-2 md:space-y-4" onSubmit={handleSubmit(onSubmit)} noValidate>
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                  Name</label>
                <input type="text" name="name" id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Your Full Name" {...register("name", {
                    required: "Name Is Required!!", minLength: {
                      value:
                        4, message: "Please Enter Fullname Minimum 4 Characters..."
                    }
                  })} />
                {
                  <div className="invalid-feedback mt-2 text-sm text-red-800 font-medium dark:text-red-400">
                    <p>{errors.name && errors.name.message}</p>
                  </div>
                }
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                  email</label>
                <input type="email" name="email" id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="example@gmail.com" {...register("email", {
                    required: "Email Is Required!!", pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Please Enter Valid Email Address!!"
                    }
                  })} />
                {
                  <div className="invalid-feedback mt-2 text-sm text-red-800 font-medium dark:text-red-400">
                    <p>{errors.email && errors.email.message}</p>
                  </div>
                }
              </div>
              <div>
                <label htmlFor="studId" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Student
                  ID</label>
                <input type="text" id="studId"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  {...register("studId", {
                    required: "This Field is Required ...", pattern: {
                      value: /[0-9]{9}/i,
                      message: "Enter 9 digit Student ID Only Numberic Values"
                    }
                  })}
                  placeholder="Enter Student Id (e.g 12203031)" />
                {
                  <div className="invalid-feedback mt-2 text-sm text-red-800 font-medium dark:text-red-400">
                    <p>{errors.studId && errors.studId.message}</p>
                  </div>
                }
              </div>
              <div>
                <label htmlFor="branch" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Your
                  Branch</label>
                <select id="branch"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  {...register("branch", { required: true })} defaultValue="Information Technology">
                  <option value="Information Technology">Information Technology</option>
                  <option value="Computer Engineering">Computer Engineering</option>
                  <option value="ENTC">ENTC</option>
                  <option value="Civil Engineering">Civil Engineering</option>
                  <option value="Mechanical Engineering">Mechanical Engineering</option>
                  <option value="Electrical Engineering">Electrical Engineering</option>
                </select>
              </div>
              <div>
                <label htmlFor="year" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Select Your Year
                </label>
                <select id="year"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  {...register("year", { required: true })}>
                  <option value="First Year">First Year</option>
                  <option value="Second Year">Second Year</option>
                  <option value="Third Year">Third Year</option>
                  <option value="Fourth Year">Fourth Year</option>
                </select>
              </div>
              <button type="submit"
                className=" text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Register</button>
              <Link to="/"
                className=" text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 ml-3">Go Back</Link>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentForm;