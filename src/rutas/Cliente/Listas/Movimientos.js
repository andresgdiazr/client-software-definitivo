import React, { useEffect, useState } from "react";
import FlechaDerecha from "../../../Components/atoms/Icons/FlechaDerecha";
import RollBack from "../../../Components/organism/RollBack";
import BuscadorSection from "../../../Components/organism/BuscadorSection";
import Table from "../../../Components/organism/Table";
import axios from "axios";

const Movimientos = () => {

  const [input,setInput] = useState('');
  const [data,setData] = useState('');
  const [filteredResults,setFilteredResults]=useState('')

  const head = ['Tienda','Fecha','Monto','Acción'];

  const searchItems = (searchValue) => {
      
      setInput(searchValue);
      if(input !== ''){
      const filteredData = data.filter((item) => {
        return Object.values(item).join('').toLowerCase().includes(input.toLowerCase());
      })
      setFilteredResults(filteredData);

      }
      else{
        setFilteredResults(data);
      }

  }

  function getData () {

    axios.get('https://rickandmortyapi.com/api/character')
    .then(response => {
      setData(response.data.results);
      setFilteredResults(response.data.results);
    })
    .catch(err => console.log(err))
  
  }

  useEffect(()=>{
    getData();
  },[])

  return(

  <div className="flex justify-center lg:w-screen lg:h-screen lg:bg-[#E4E7ED]">
    <div className="w-full sm:w-full md:w-full  h-auto flex flex-col p-4 lg:rounded-md lg:mb-10
      lg:w-1/2 bg-white lg:mt-5 lg:shadow-lg
      ">
       
       <RollBack title={'Movimientos'} />
      
      <BuscadorSection input={input} fun={searchItems} />
      
      <Table filtered={filteredResults} head={head}/>
      
    </div>
  </div>


    )
}

export default Movimientos;