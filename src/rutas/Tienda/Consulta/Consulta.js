import React, { useState } from 'react';

const Consultar = ({ data='', rowsPerPage='' }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / rowsPerPage);

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  const currentData = data.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div className="container mx-auto mt-8">
      <table className="min-w-full bg-white border">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Age</th>
            <th className="py-2 px-4 border-b">Email</th>
          </tr>
        </thead>
        <tbody>
              <td className="py-2 px-4 border-b">ok</td>
              <td className="py-2 px-4 border-b">ok</td>
              <td className="py-2 px-4 border-b">ok</td>
        </tbody>
      </table>
      <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handleClick(index + 1)}
            className={`mx-1 px-3 py-1 border ${
              currentPage === index + 1
                ? 'bg-blue-500 text-white'
                : 'bg-white text-black'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Consultar;

