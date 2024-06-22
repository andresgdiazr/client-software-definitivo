import React from "react";

const Table = ({head,filtered}) =>{

  const items = Array.isArray(filtered) ? filtered : [];

    return(
   
<div className="flex flex-col">
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

                {
                  items.map((el,index) => (
                    <tr key={index} className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                    <td className="whitespace-nowrap px-6 py-4">Mark</td>
                    <td className="whitespace-nowrap px-6 py-4">Otto</td>
                    <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                  </tr>
                  ))
                }      
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>


    )
}

export default Table;