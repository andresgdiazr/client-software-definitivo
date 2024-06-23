export default function EditCustomer({ setIsModalOpen, handleSave }) {

    return (
      <div
        id="crud-modal"
        tabindex="-1"
        aria-hidden="true"
        class="fixed z-10 inset-0 overflow-y-auto flex justify-center place-self-center"
      >
        <div class="">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-500 opacity-80"></div>
          </div>
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          {/* <!-- Modal content --> */}
          <div class="inline-block overflow-hidden shadow-xl transform sm:my-8 sm:align-middle sm:max-w-lg sm:w-full bg-white rounded-lg shadow dark:bg-gray-700 ">
            {/* <!-- Modal header --> */}
            <div class="flex p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                Maria Corina Machado
              </h3>
              <button
                type="button"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="crud-modal"
                onClick={() => setIsModalOpen(false)}
              >
                <svg
                  class="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <form class="p-4 md:p-5">
              <div class="grid gap-4 mb-8 grid-cols-2">
                <div class="col-span-2 sm:col-span-1">
                  <label
                    for="saldo"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Saldo
                  </label>
                  <input
                    type="number"
                    min={0}
                    name="saldo"
                    id="saldo"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 outline-none focus:outline-none"
                    placeholder="0.00"
                    required=""
                  />
                </div>
                <div class="col-span-2 sm:col-span-1">
                  <label
                    for="status"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Status
                  </label>
                  <select
                    id="status"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 outline-none focus:outline-none"
                  >
                    <option selected="">Seleccionar status</option>
                    <option value="Activo">Activo</option>
                    <option value="PC">Inactivo</option>
                  </select>
                </div>
                <div class="col-span-2">
                  <label
                    for="planes"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Planes
                  </label>
                  <select
                    id="planes"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 outline-none focus:outline-none"
                  >
                    <option selected="">Seleccionar plan</option>
                    <option value="Plan1">Plan1</option>
                    <option value="Plan2">Plan2</option>
                  </select>
                </div>
              </div>
              <button
                type="submit"
                class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-700"
                onClick={handleSave}
              >
                <svg
                  class="me-1 -ms-1 w-5 h-5"
                  width="800px"
                  height="800px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 20H6C4.89543 20 4 19.1046 4 18V6C4 4.89543 4.89543 4 6 4H9M8 20V14C8 13.4477 8.44772 13 9 13H15C15.5523 13 16 13.4477 16 14V20M8 20H16M16 20H18C19.1046 20 20 19.1046 20 18V8.82843C20 8.29799 19.7893 7.78929 19.4142 7.41421L16.5858 4.58579C16.2107 4.21071 15.702 4 15.1716 4H15M15 4V7C15 7.55228 14.5523 8 14 8H10C9.44772 8 9 7.55228 9 7V4M15 4H9"
                    stroke="#ffffff"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Guardar
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }