
export default function Test() {
  return(

    <></>

    // <div className="fixed z-10 inset-0 overflow-y-auto">
    //       <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
    //         <div
    //           className="fixed inset-0 transition-opacity"
    //           aria-hidden="true"
    //         >
    //           <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
    //         </div>
    //         <span
    //           className="hidden sm:inline-block sm:align-middle sm:h-screen"
    //           aria-hidden="true"
    //         >
    //           &#8203;
    //         </span>
    //         <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
    //           <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
    //             <div className="sm:flex sm:items-start">
    //               <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
    //                 <h3 className="text-lg leading-6 font-medium text-gray-900">
    //                   Edit Row
    //                 </h3>
    //                 <div className="mt-2">
    //                   <input
    //                     type="text"
    //                     value={currentRow?.name || ""}
    //                     onChange={(e) =>
    //                       setCurrentRow({ ...currentRow, name: e.target.value })
    //                     }
    //                     className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    //                   />
    //                   <input
    //                     type="number"
    //                     value={currentRow?.age || ""}
    //                     onChange={(e) =>
    //                       setCurrentRow({ ...currentRow, age: e.target.value })
    //                     }
    //                     className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    //                   />
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
    //             <button
    //               onClick={handleSave}
    //               className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
    //             >
    //               Save
    //             </button>
    //             <button
    //               onClick={() => setIsModalOpen(false)}
    //               className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
    //             >
    //               Cancel
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    // </div>
    // <>
    //   <button data-modal-target="crud-modal" data-modal-toggle="crud-modal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
    //     Toggle modal
    //   </button>

    //   <div id="crud-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    //     <div class="relative p-4 w-full max-w-md max-h-full">
    //         {/* <!-- Modal content --> */}
    //         <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
    //             {/* <!-- Modal header --> */}
    //             <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
    //                 <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
    //                     Create New Product
    //                 </h3>
    //                 <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
    //                     <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
    //                         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
    //                     </svg>
    //                     <span class="sr-only">Close modal</span>
    //                 </button>
    //             </div>
    //             {/* <!-- Modal body --> */}
    //             <form class="p-4 md:p-5">
    //                 <div class="grid gap-4 mb-4 grid-cols-2">
    //                     <div class="col-span-2">
    //                         <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
    //                         <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required=""/>
    //                     </div>
    //                     <div class="col-span-2 sm:col-span-1">
    //                         <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
    //                         <input type="number" name="price" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required=""/>
    //                     </div>
    //                     <div class="col-span-2 sm:col-span-1">
    //                         <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
    //                         <select id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
    //                             <option selected="">Select category</option>
    //                             <option value="TV">TV/Monitors</option>
    //                             <option value="PC">PC</option>
    //                             <option value="GA">Gaming/Console</option>
    //                             <option value="PH">Phones</option>
    //                         </select>
    //                     </div>
    //                     <div class="col-span-2">
    //                         <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Description</label>
    //                         <textarea id="description" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write product description here"></textarea>                    
    //                     </div>
    //                 </div>
    //                 <button type="submit" class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    //                     <svg class="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
    //                     Add new product
    //                 </button>
    //             </form>
    //         </div>
    //     </div>
    //   </div> 
    // </>
  );
};