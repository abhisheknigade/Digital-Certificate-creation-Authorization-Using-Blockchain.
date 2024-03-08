// import { useState } from "react";

// const Display = ({ contract, account }) => {
//   const [data, setData] = useState("");
//   const getdata = async () => {
//     let dataArray = await contract.display(account);

//     const isEmpty = Object.keys(dataArray).length === 0;

//     if (!isEmpty) {
//       const str = dataArray.toString();
//       const str_array = str.split(",");
//       // console.log(str);
//       // console.log(str_array);

//       // const newString = str_array[str_array.length - 1].slice(34);
//       // console.log("Hash ",newString);
      
//       const images = str_array.map((item, i) => {
//         return (
//           <div key={i}>
//             <a className="rounded-md" href={item}>
//               <img key={i} src={item} alt="new" className="image-list" />
//             </a>
//             <span>

//             </span>
//           </div>
//         );
//       });
//       setData(images);
//     } else {
//       alert("No image to display");
//     }
//   };

//   return (
//     <div className="">
//       <button
//         type="submit"
//         className="text-white bg-blue-400 dark:bg-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 mb-3 text-center cursor-pointer"
//         onClick={getdata}
//       >
//         Refresh Data
//       </button>
//       <div className="grid grid-cols-3 gap-3">{data}</div>
//     </div>
//   );
// };
// export default Display;
