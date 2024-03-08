import React, { useState } from "react";
import StudentInfo from "./StudentInfo";
import CreateCertificate from "../InstitutionPages/CreateCertificate";

const StudentRow = (props) => {
  const { doc, deleteStudent } = props;
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      className="sm:mb-2 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      key={doc.id}
    >
      <div>
        <StudentInfo doc={doc} />
      </div>

      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />

      <div className="flex space-x-5 my-2 justify-evenly">
        <button
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-800 focus:ring-1 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-800 dark:focus:ring-red-800"
          onClick={() => {
            deleteStudent(doc.id);
          }}
        >
          Delete
        </button>
        <button
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-1 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => setShowModal(true)}
        >
          Create Certificate
        </button>
        {showModal ? (
          <CreateCertificate
            show={showModal}
            onHide={(e) => setShowModal(false)}
            doc={doc}
          />
        ) : null}
      </div>
    </div>
  );
};

export default StudentRow;
