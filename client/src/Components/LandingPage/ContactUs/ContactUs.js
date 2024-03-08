import React,{useRef,useState,useEffect} from 'react'
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';

const ContactUs = () => {

  const {
    register,
    handleSubmit,
    formState: { errors,isSubmitSuccessful },reset
  } = useForm({ mode: "all" });

const [show, setShow] = useState(false);

const form = useRef();

const onSubmit = (data,e) => {
e.preventDefault();

const msg = setTimeout(()=>{
  setShow(false);
},8000);

emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
  .then((result) => {
  console.log(result.text);
  console.log(data);
  setShow(true);
  }, (error) => {
  console.log(error.text);
  alert("Check Internet Connection :)")
  });
};

useEffect(()=>{
  if (isSubmitSuccessful) {
    reset();
  }
},[isSubmitSuccessful,reset])



return (
<section className="bg-white dark:bg-gray-900" id='contact'>
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us
    </h2>
    <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical
      issue? Want to send feedback about feature? Need details about our Project? Let us know.</p>
    <form className="space-y-8" ref={form} onSubmit={handleSubmit(onSubmit)} noValidate>
      {show ? 
      <div id="toast-simple" className="flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800" role="alert">
        <svg aria-hidden="true" className="w-5 h-5 text-blue-600 dark:text-blue-500" focusable="false" data-prefix="fas" data-icon="paper-plane" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z"></path></svg>
        <div className="pl-4 text-sm font-normal">Email sent successfully.</div>
      </div>
      :""}
      <div>
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Your Name
        </label>
        <input type="text" name='user_name'
          className="border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          id="name" {...register("user_name",{ required:"Name Is Required!!",minLength: {value: 4,message: "Please Enter Fullname Minimum 4 Characters..."} })} placeholder="Enter Full Name"
        />
        {
        <div className="invalid-feedback mt-2 text-sm text-red-800 font-medium dark:text-red-400">
          <p>{errors.user_name && errors.user_name.message}</p>
        </div>
        }
      </div>
      <div>
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Your email
        </label>
        <input type="email" id="email" name='user_email'
          className=" border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="example@gmail.com" {...register("user_email",{ required:"Email Is Required!!", pattern:{
          value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message:"Please Enter Valid Email Address!!" } })}
        />
        {
        <div className="invalid-feedback mt-2 text-sm text-red-800 font-medium dark:text-red-400">
          <p>{errors.user_email && errors.user_email.message}</p>
        </div>
        }
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your
          message</label>
        <textarea id="message" name='message' rows="6"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="Leave a Message..." {...register("message",{ required:"Message Is Required!!" })}>
              </textarea>
        {
        <div className="invalid-feedback mt-2 text-sm text-red-800 font-medium dark:text-red-400">
          <p>{errors.message && errors.message.message}</p>
        </div>
        }
      </div>
      <button type="submit" value="Send"
        className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send
        message</button>
    </form>
  </div>  
</section>
)
}

export default ContactUs