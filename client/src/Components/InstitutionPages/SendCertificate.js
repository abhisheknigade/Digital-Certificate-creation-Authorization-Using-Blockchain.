import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const SendCertificate = (props) => {
  const form = useRef();
  const { show,doc, onHide } = props;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_mbiqpbb", "template_yl8165b", form.current, "8lQ2CIHYSDwIs9g3m")
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 bg-gray-800 backdrop-filter backdrop-blur-sm bg-opacity-10"
    key={doc.id}>
      <div className=" w-full max-w-2xl max-h-full">
        
        <form ref={form} onSubmit={sendEmail} className='bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700 dark:bg-gray-800 p-5'>
        <h2 className="text-white text-2xl text-center">Send Certificate</h2>
          <div className='mb-3'>
            <div className='flex flex-col justify-start items-start mb-3'>
              <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
              <input type="text" id="first_name" name="user_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Student Name" value={doc.name} readOnly/>
            </div>
            <div className='flex flex-col justify-start items-start mb-3'>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">E-mail</label>
              <input type="email" id="email" name="user_email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email of Student" value={doc.email} readOnly />
            </div>
            <div className='flex flex-col justify-start items-start mb-3'>
              <label htmlFor="hash" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Hash Of Certificate</label>
              <input type="text" id="hash" name="user_hash" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Hash Value of Certificate" value={doc.hash} readOnly />
            </div>
          </div>
          <div className='flex justify-between p-2'>
            <button
              type="submit"
              value="Send"
              className="text-white bg-blue-400 dark:bg-blue-500  font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer">
              Send
            </button>
            <button
              type="button"
              className="text-white font-medium text-sm  bg-red-500 rounded-lg hover:bg-red-800 focus:ring-1 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-800 dark:focus:ring-red-800 px-2 py-2.5 text-center cursor-pointer"
              onClick={onHide}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  )
};

export default SendCertificate;