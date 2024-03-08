import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
        <div className="mx-auto max-w-screen-xl text-center">
            <a href="/" className="flex justify-center items-center text-2xl font-extrabold animate-text bg-gradient-to-r from-blue-300 via-blue-600 to-blue-900 bg-clip-text text-transparent">
                DVAN    
            </a>
            <p className="my-6 text-gray-500 dark:text-gray-400">Issuing and Verifying Certificate Using Blockchain.</p>
            <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
                <li>
                    <a href="#whyus" className="mr-4 hover:underline md:mr-6 ">Why Us</a>
                </li>
                <li>
                    <a href="#team" className="mr-4 hover:underline md:mr-6">Team</a>
                </li>
                <li>
                    <a href="#contact" className="mr-4 hover:underline md:mr-6 ">Contact</a>
                </li>
                <li>
                    <Link to="/downloadcertificate" className="mr-4 hover:underline md:mr-6 ">Download Certificate</Link>
                </li>
            </ul>
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022-2023 <a href="/" className="hover:underline">Dvan™</a>. All Rights Reserved.</span>
        </div>
    </footer>
  )
}

export default Footer