import React, { useState } from "react";
import EditCustomer from "./Modal";
import Ver from "../atoms/Icons/Ver";

const TablePagination = ({ head, filtered }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentRow, setCurrentRow] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5; // Número de filas por página

  const handleEditClick = (row) => {
    setCurrentRow(row);
    setIsModalOpen(true);
  };

  const handleSave = () => {
    // Lógica para guardar los datos modificados
    setIsModalOpen(false);
  };

  const items = Array.isArray(filtered) ? filtered : [];

  // Calcular los elementos a mostrar en la página actual
  const indexOfLastItem = currentPage * rowsPerPage;
  const indexOfFirstItem = indexOfLastItem - rowsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(items.length / rowsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex h-auto flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  {head.map((e, index) => (
                    <th key={index} scope="col" className="px-6 py-4">{e}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {currentItems.map((el, index) => (
                  <tr key={index} className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">{el.id}</td>
                    <td className="whitespace-nowrap px-6 py-4">{el.firstName}</td>
                    <td className="whitespace-nowrap px-6 py-4">{el.lastName}</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <button onClick={() => handleEditClick(el)}>
                        <Ver />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {isModalOpen && (
              <EditCustomer setIsModalOpen={setIsModalOpen} handleSave={handleSave} />
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`mx-1 px-3 py-1 border ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Table;
