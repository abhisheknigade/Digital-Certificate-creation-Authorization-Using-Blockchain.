import React from "react";
import Upload from "../../artifacts/contracts/Upload.sol/Upload.json";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import WalletPage from "../InstitutionPages/WalletPage";
import { Link } from "react-router-dom";

function UploadCertificate() {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const loadProvider = async () => {
      if (provider) {
        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });

        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
        let contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

        const contract = new ethers.Contract(
          contractAddress,
          Upload.abi,
          signer
        );
        // console.log(contract);
        setContract(contract);
        setProvider(provider);
      } else {
        console.error("Metamask is not installed");
      }
    };
    provider && loadProvider();
  }, []);

  return (
    <div className="bg-gray-900 h-screen">
      <div className="p-4 flex justify-center">
        <span className="p-4 text-md  text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 text-center" role="alert">
            <span className="font-medium">Account : </span>  {account ? account : "Not connected"}
        </span>
      </div>
      
      <div className="p-4 flex justify-center">
        <div className="w-full max-w-xl  p-4 rounded-lg shadow sm:p-2 md:p-4 dark:bg-gray-800 dark:border-gray-500">
          <WalletPage account={account} provider={provider} contract={contract} />
        </div>
      </div>

      <div className="p-4 flex justify-center">
        <Link
          to="/listofcertificate"
          className="text-white ml-5 bg-blue-400 dark:bg-blue-500 dark:hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer"
        >
          List of All Certificate Issued
        </Link>
      </div>

      {/* <div className="mt-3 p-4 rounded-lg shadow sm:p-2 md:p-4 dark:bg-gray-800 dark:border-gray-500 mx-auto max-w-screen-xl">
        <Display contract={contract} account={account} />
      </div> */}
    </div>
    
  );
}
export default UploadCertificate;
