import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Tiendas", href: "#", current: true },
  { name: "Clientes", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Venta() {
  const [formData, setFormData] = useState({
    username: "",
    categoryCompsId: "",
    locationId: "",
    rif: "",
    password: "",
    email: "",
    phone: "",
    role: "tienda",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("Venta registrada con exito");
    return;
    try {
      const response = await fetch("http://localhost:8080/venta", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.status == 409) {
        //Datos existentes
        alert(`Ya existe una tienda registrada con el rif ${formData.rif}`);
        return;
      } else if (!response.ok) {
        throw new Error("Error al enviar los datos");
      }
      const data = await response.json();

      console.log("Datos enviados exitosamente:", data);
      alert("Usuario registrado con exito");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="min-h-full">
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Agregar venta
            </h1>
          </div>
        </header>
        <div className="isolate px-6 lg:px-8">
          <div
            className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl"
            aria-hidden="true"
          >
            <div
              className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 bg-gradient-to-tr from-[#8ACEB9] to-[#2ECC71] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div
            className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl"
            aria-hidden="true"
          >
            <div
              className="relative right-1/2 bottom-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none translate-x-1/2 translate-y-1/2 rotate-[30deg] bg-gradient-to-tr from-[#8ACEB9] to-[#2ECC71] opacity-30 sm:right-[calc(50%-40rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <main>
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 ">
              <form
                className="mx-auto max-w-3xl group"
                onSubmit={handleSubmit}
                noValidate
              >
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">
                  {/* id cliente */}
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="idCliente"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Id. del cliente
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="idCliente"
                        id="idCliente"
                        autoComplete="idCliente"
                        className="block w-full rounded-md border-1 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 peer invalid:[&:not(:placeholder-shown)]:ring-red-500 focus:outline-none focus:ring-1 focus:ring-black"
                        placeholder="876926"
                        pattern="^[0-9]+$"
                        value={formData.idCliente}
                        onChange={handleChange}
                        required
                      />
                      <p className="mt-2 invisible peer-[&:not(:placeholder-shown):invalid]:visible text-red-600 text-sm">
                        Ingrese solo numeros.
                      </p>
                    </div>
                  </div>
                  {/* monto */}
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="monto"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Monto
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="monto"
                        id="monto"
                        autoComplete="monto"
                        className="block w-full rounded-md border-1 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 peer invalid:[&:not(:placeholder-shown)]:ring-red-500 focus:outline-none focus:ring-1 focus:ring-black"
                        placeholder="0.00"
                        pattern="-?\d{1,3}(?:[\.,]\d{3})*(?:[\.,]\d{2})?"
                        value={formData.monto || ""}
                        onChange={handleChange}
                        required
                      />
                      <p className="mt-2 invisible peer-[&:not(:placeholder-shown):invalid]:visible text-red-600 text-sm">
                        Ingrese un formato válido (ej. 100,000.00).
                      </p>
                    </div>
                  </div>
                  <div className="border-b border-gray-900/10 pb-4 col-span-full">
                    <h2 className="text-lg font-semibold leading-7 text-gray-900">
                      Información del producto
                    </h2>
                    <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                      {/* producto */}
                      <div className="sm:col-span-3">
                        <label
                          htmlFor="email"
                          className="block text-sm font-semibold leading-6 text-gray-900"
                        >
                          Nombre
                        </label>
                        <div className="mt-2.5">
                          <input
                            type="nombreProducto"
                            name="nombreProducto"
                            id="nombreProducto"
                            autoComplete="nombreProducto"
                            placeholder="Doritos"
                            className="block w-full rounded-md border-1 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 peer invalid:[&:not(:placeholder-shown)]:ring-red-500 focus:outline-none focus:ring-1 focus:ring-black"
                            value={formData.nombreProducto || ""}
                            onChange={handleChange}
                            pattern="^[a-zA-Z]+$"
                          />
                          <p className="mt-2 invisible peer-invalid:visible text-red-600 text-sm">
                            Ingrese un formato de nombre válido (ej. Doritos).
                          </p>
                        </div>
                      </div>
                      {/* cantidad producto */}
                      <div className="sm:col-span-3">
                        <label
                          htmlFor="phone"
                          className="block text-sm font-semibold leading-6 text-gray-900"
                        >
                          Cantidad
                        </label>
                        <div className="relative mt-2.5">
                          <input
                            type="num"
                            name="cantidad"
                            id="cantidad"
                            autoComplete="cantidad"
                            placeholder="10"
                            className="block w-full rounded-md border-1 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 peer invalid:[&:not(:placeholder-shown)]:ring-red-500 focus:outline-none focus:ring-1 focus:ring-black"
                            pattern="^[0-9]+$"
                            value={formData.cantidad || ""}
                            onChange={handleChange}
                            required
                          />
                          <p className="mt-2 invisible peer-[&:not(:placeholder-shown):invalid]:visible text-red-600 text-sm">
                            Ingrese un formato válido (ej. 10).
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-10">
                  <button
                    type="submit"
                    className="block w-full rounded-md bg-green-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 group-invalid:pointer-events-none group-invalid:opacity-30"
                  >
                    Registrar
                  </button>
                </div>
              </form>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
