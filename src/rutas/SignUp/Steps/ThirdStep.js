import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputSection from "../../../Components/organism/InputSection";

const ThirdStep = ({ nextStep, handleInput, form }) => {
  const navigate = useNavigate();
  const formData = {
    email: form.correo,
    password: form.contraseña,
    username: form.nombre,
    lastname: form.apellido,
    cedula: form.cedula,
    phone: form.numero,
    locationId: 1,
    role: "cliente",
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.status == 409) {
        //Datos existentes
        alert(
          `Ya existe un cliente registrado con la cedula ${formData.cedula}`
        );
        return;
      } else if (!response.ok) {
        throw new Error("Error al enviar los datos");
      }
      const data = await response.json();

      console.log("Datos enviados exitosamente:", data);
      alert("Cliente registrado con exito");

      navigate("/cliente");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-10">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-12">
          Información personal
        </h1>

        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <div className="mb-6">
            <label
              htmlFor="numero"
              className="block text-base font-semibold mb-2 opacity-80"
            >
              Número de teléfono
            </label>
            <div className="flex items-center">
              <input
                type="text"
                className="w-1/4 h-10 px-2 border border-gray-300 rounded opacity-80 text-center mr-2"
                placeholder="+58"
                readOnly
              />
              <input
                type="text"
                id="numero"
                name="numero"
                value={form.numero}
                onChange={(e) =>
                  handleInput({ name: "numero", value: e.target.value })
                }
                className="w-3/4 h-10 px-2 border border-gray-300 rounded opacity-80"
                placeholder="Ingresa tu número"
              />
            </div>
          </div>

          <InputSection
            tag="dirección"
            name="direccion"
            type="text"
            // value={form.direccion}
            handleInput={handleInput}
          />
          {/* <label
            htmlFor="direccion"
            className="block text-md font-medium leading-6 text-gray-900"
          >
            Locación
          </label>
          <select
            id="direccion"
            name="direccion"
            className="block w-full rounded-md border-1 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none focus:ring-1 focus:ring-black"
            value={form.direccion || ""}
            onChange={handleInput}
          >
            <option value="">Selecciona tu locación</option>
            <option value="1">San Cristóbal</option>
          </select> */}

          <button
            type="button"
            className="bg-green-500 text-white font-bold py-2 rounded w-full mt-6"
            onClick={handleSubmit}
          >
            CONTINUAR
          </button>
        </form>
      </div>

      <div className="mt-6 flex justify-center items-center">
        <p className="text-gray-600">¿Ya tienes una cuenta?</p>
        <button className="ml-2 text-blue-500">Inicia sesión</button>
      </div>
    </div>
  );
};

export default ThirdStep;
