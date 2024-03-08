import React,{useState,useEffect} from 'react'
import UserDataService from "../services/userservices";
import CertificateCard from './CertificateCard';
import { Link } from 'react-router-dom';

const ListOfCertificate = () => {
    const [data, setData] = useState([]);

  useEffect(() => {
    getHashs();
  }, []);

  const getHashs = async () => {
    const data = await UserDataService.getAllHash();
    setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  
  return (
    <div className="mx-auto max-w-screen-xl max-h-screen overflow-ellipsis p-5">
      <h2 className="mb-4 text-xl text-center text-gray-900 md:text-lg lg:text-xl dark:text-white">
        List Of All Certificate Issued
      </h2>
      <div className="flex justify-between">
        <button
          type="submit"
          className="text-white bg-blue-400 dark:bg-blue-500 dark:hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer"
          onClick={getHashs}
        >
          Refresh List
        </button>
        <Link
          to="/uploadCertificate"
          className="text-white bg-blue-400 dark:bg-blue-500 dark:hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer"
        >Back
        </Link>
      </div>

      <div className="mt-3 p-4 rounded-lg shadow sm:p-2 md:p-4 dark:bg-gray-800 dark:border-gray-500 h-[38.5rem] overflow-auto scroll">
        <div className="grid grid-cols-3 gap-4">
          {data.map((doc) => (
            <CertificateCard
              key={doc.id}
              doc={doc}
            />
          ))}
          {console.log(data)}
        <div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default ListOfCertificate