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

export default function AddStore() {
  const [formData, setFormData] = useState({
    username: '',
    categoryCompsId: '',
    locationId: '',
    rif: '',
    password: '',
    email: '',
    phone: '',
    role: 'tienda',
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

    try {

      const response = await fetch("http://localhost:8080/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if(response.status == 409){//Datos existentes
        alert(`Ya existe una tienda registrada con el rif ${formData.rif}`);
        return;
      }else if(!response.ok){
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
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <p className="text-sm font-bold leading-6 text-green-400">
                        Fintech
                      </p>
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? "bg-gray-900 text-white"
                                : "text-gray-300 hover:bg-gray-700 hover:text-white",
                              "rounded-md px-3 py-2 text-sm font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      {/* Profile dropdown */}
                      <div as="div" className="relative ml-3">
                        <div>
                          <div className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Open user menu</span>
                            <img
                              className="h-8 w-8 rounded-full"
                              src={user.imageUrl}
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <DisclosureButton className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </DisclosureButton>
                  </div>
                </div>
              </div>
              <DisclosurePanel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <DisclosureButton
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block rounded-md px-3 py-2 text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </DisclosureButton>
                  ))}
                </div>
              </DisclosurePanel>
            </>
          )}
        </Disclosure>
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Agregar Tienda
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
              {/* <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Agregar tienda
                </h2>
              </div> */}
              <form
                className="mx-auto max-w-3xl group"
                onSubmit={handleSubmit}
                noValidate
              >
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">
                  {/* nombre */}
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="username"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Nombre
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="username"
                        id="username"
                        autoComplete="username"
                        className="block w-full rounded-md border-1 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 peer invalid:[&:not(:placeholder-shown)]:ring-red-500 focus:outline-none focus:ring-1 focus:ring-black"
                        placeholder="Nombre de la empresa"
                        pattern="^[a-zA-Z0-9]+$"
                        value={formData.username || ""}
                        onChange={handleChange}
                        required
                      />
                      <p className="mt-2 invisible peer-[&:not(:placeholder-shown):invalid]:visible text-red-600 text-sm">
                        No se permiten caracteres especiales.
                      </p>
                    </div>
                  </div>
                  {/* RIF */}
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="rif"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      RIF
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="rif"
                        id="rif"
                        autoComplete="rif"
                        className="block w-full rounded-md border-1 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 peer invalid:[&:not(:placeholder-shown)]:ring-red-500 focus:outline-none focus:ring-1 focus:ring-black"
                        placeholder="V-12345678-1"
                        // pattern="^[EIJV]-\d{8}-\d$"
                        pattern="^\d{8}-\d$"
                        value={formData.rif || ""}
                        onChange={handleChange}
                        required
                      />
                      <p className="mt-2 invisible peer-[&:not(:placeholder-shown):invalid]:visible text-red-600 text-sm">
                        Ingrese un formato válido (ej. 12345678-1).
                      </p>
                    </div>
                  </div>
                  {/* direccion */}
                  {/* <div className="col-span-full">
                    <label
                      htmlFor="direccion"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Dirección
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="direccion"
                        id="direccion"
                        autoComplete="street-address"
                        className="block w-full rounded-md border-1 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 peer invalid:[&:not(:placeholder-shown)]:ring-red-500 focus:outline-none focus:ring-1 focus:ring-black"
                        placeholder="Calle Principal 123"
                        pattern="^[a-zA-Z0-9\s\.,#\-\/\p{L}]+$"
                        required
                      />
                      <p className="mt-2 invisible peer-[&:not(:placeholder-shown):invalid]:visible text-red-600 text-sm">
                        Ingrese un formato de dirección válido.
                      </p>
                    </div>
                  </div> */}
                  <div className="sm:col-span-3 sm:col-start-1">
                    <label
                      htmlFor="locationId"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Locación
                    </label>
                    <div className="mt-2.5">
                      <select
                        id="locationId"
                        name="locationId"
                        className="block w-full rounded-md border-1 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none focus:ring-1 focus:ring-black"
                        value={formData.locationId || ""}
                        onChange={handleChange}
                      >
                        <option value="">Selecciona tu locación</option>
                        <option value="1">San Cristóbal</option>
                      </select>
                      {/* <input
                        type="text"
                        name="locacion"
                        id="locacion"
                        autoComplete="address-level2"
                        className="block w-full rounded-md border-1 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 peer invalid:[&:not(:placeholder-shown)]:ring-red-500 focus:outline-none focus:ring-1 focus:ring-black"
                        placeholder="Ciudad Principal"
                        pattern="^[a-zA-Z\s\p{L}]+$"
                        required
                      /> */}
                      {/* <p className="mt-2 invisible peer-[&:not(:placeholder-shown):invalid]:visible text-red-600 text-sm">
                        Ingrese un formato de ciudad válido.
                      </p> */}
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="categoryCompsId"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Categoría
                    </label>
                    <div className="mt-2.5">
                      <select
                        id="categoryCompsId"
                        name="categoryCompsId"
                        className="block w-full rounded-md border-1 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none focus:ring-1 focus:ring-black"
                        value={formData.categoryCompsId || ""}
                        onChange={handleChange}
                      >
                        <option value="">Selecciona tu categoría</option>
                        <option value="1">Tecnología</option>
                      </select>
                      {/* <input
                        type="text"
                        name="region"
                        id="region"
                        autoComplete="address-level1"
                        className="block w-full rounded-md border-1 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 peer invalid:[&:not(:placeholder-shown)]:ring-red-500 focus:outline-none focus:ring-1 focus:ring-black"
                        placeholder="Madrid"
                        pattern="^[a-zA-Z\s\p{L}]+$"
                        required
                      />
                      <p className="mt-2 invisible peer-[&:not(:placeholder-shown):invalid]:visible text-red-600 text-sm">
                        Ingrese un formato de estado válido.
                      </p> */}
                    </div>
                  </div>
                  {/*<div className="sm:col-span-2">
                    <label
                      htmlFor="status"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Status
                    </label>
                     <div className="mt-2.5">
                      <select
                        id="status"
                        name="status"
                        className="block w-full rounded-md border-1 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none focus:ring-1 focus:ring-black"
                      >
                        <option value="">Selecciona status</option>
                        <option value="1">Tecnología</option>
                        <option value="2">Tecnología</option>
                      </select>
                      { <input
                        type="text"
                        name="codigo-postal"
                        id="codigo-postal"
                        autoComplete="postal-code"
                        className="block w-full rounded-md border-1 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 peer invalid:[&:not(:placeholder-shown)]:ring-red-500 focus:outline-none focus:ring-1 focus:ring-black"
                        placeholder="5924"
                        pattern="^[0-9\s\-]+$"
                        required
                      />
                      <p className="mt-2 invisible peer-[&:not(:placeholder-shown):invalid]:visible text-red-600 text-sm">
                        Ingrese un formato válido. 
                      </p>}
                    </div> 
                  </div>*/}
                  <div className="mt-6 border-b border-gray-900/10 pb-4 col-span-full">
                    <h2 className="text-lg font-semibold leading-7 text-gray-900">
                      Información de contacto
                    </h2>
                    <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                      {/* email */}
                      <div className="sm:col-span-3">
                        <label
                          htmlFor="email"
                          className="block text-sm font-semibold leading-6 text-gray-900"
                        >
                          Correo electrónico
                        </label>
                        <div className="mt-2.5">
                          <input
                            type="email"
                            name="email"
                            id="email"
                            autoComplete="email"
                            placeholder="correo@electronico.com"
                            className="block w-full rounded-md border-1 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 peer invalid:[&:not(:placeholder-shown)]:ring-red-500 focus:outline-none focus:ring-1 focus:ring-black"
                            value={formData.email || ""}
                            onChange={handleChange}
                          />
                          <p className="mt-2 invisible peer-invalid:visible text-red-600 text-sm">
                            Ingrese un correo electrónico válido.
                          </p>
                        </div>
                      </div>
                      {/* phone number */}
                      <div className="sm:col-span-3">
                        <label
                          htmlFor="phone"
                          className="block text-sm font-semibold leading-6 text-gray-900"
                        >
                          Número de teléfono
                        </label>
                        <div className="relative mt-2.5">
                          <input
                            type="tel"
                            name="phone"
                            id="phone"
                            autoComplete="tel"
                            placeholder="+584143489762"
                            className="block w-full rounded-md border-1 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 peer invalid:[&:not(:placeholder-shown)]:ring-red-500 focus:outline-none focus:ring-1 focus:ring-black"
                            pattern="^[0-9\s\-+]+$"
                            value={formData.phone || ""}
                            onChange={handleChange}
                            required
                          />
                          <p className="mt-2 invisible peer-[&:not(:placeholder-shown):invalid]:visible text-red-600 text-sm">
                            Ingrese un formato de número telefónico válido.
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
