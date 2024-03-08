import copy from "copy-to-clipboard";  

const StudentCard = (props) => {
  const { name, email, studId, branch, year } = props.doc;

  const copyToClipboard1 = () => {
    copy(name);
    alert(`You have copied "${name}"`);
 }

 const copyToClipboard2 = () => {
  copy(email);
  alert(`You have copied "${email}"`);
}

  return (
    <>
      <div className="flex flex-col items-center p-2">
        <table className="mt-3">
          <tbody>
            <tr>
              <th
                scope="row"
                className="ml-0 text-lg font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Name :
              </th>
              <td className="mt-1 flex items-center">
                <span className="text-md text-gray-500 dark:text-gray-400" >
                  {name}
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" onClick={copyToClipboard1} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-4 h-4 ml-2 cursor-pointer">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>

              </td>
            </tr>
            <tr>
              <th
                scope="row"
                className=" text-lg font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                E-mail :
              </th>
              <td className="mt-1  flex items-center">
                <span className="text-md text-gray-500 dark:text-gray-400">
                  {email}
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" onClick={copyToClipboard2} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-4 h-4 ml-2 cursor-pointer">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </td>
            </tr>
            <tr>
              <th
                scope="row"
                className=" text-lg font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Student Id :
              </th>
              <td className="mt-1">
                <span className="text-md text-gray-500 dark:text-gray-400">
                  {studId}
                </span>
              </td>
            </tr>
            <tr>
              <th
                scope="row"
                className=" text-lg font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Branch :
              </th>
              <td className="mt-1">
                <span className="text-md text-gray-500 dark:text-gray-400">
                  {branch}
                </span>
              </td>
            </tr>
            <tr>
              <th
                scope="row"
                className=" text-lg font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Year :
              </th>
              <td className="mt-1">
                <span className="text-md text-gray-500 dark:text-gray-400">
                  {year}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default StudentCard;
