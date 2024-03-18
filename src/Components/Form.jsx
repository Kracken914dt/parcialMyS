import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Calculo from "./calculo";


function Form() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const [resultadoNomina, setResultadoNomina] = useState(null);

  const onSubmit = (data) => {
    console.log(data);
    const datosFormulario = getValues();
    console.log(datosFormulario);
    setResultadoNomina(datosFormulario);
  };

  return (
    <div className="flex flex-wrap items-center justify-center h-full bg-blue-200 ">
      <div className="w-auto">
        <div className="px-8 pt-6 pb-8 mb-4 bg-blue-600 border-blue-600 rounded shadow-md outline-double">
          <h1 className="mt-4 text-3xl font-bold text-center">SIMULACION DE SUELDO PARA DOCENTES DE PLANTA </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="p-4 mb-4 ">
              <h2 className="mb-2 text-lg font-bold">
                Títulos de Estudios Universitarios
              </h2>
              <div className="mt-2">
                <label className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    id="doctorateAfter1998"
                    className="mr-2 form-checkbox"
                    {...register("medicinaHumana")}
                  />
                  <span className="text-sm">
                    Medicina Humana o Composición Musical
                  </span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    id="otraArea"
                    className="mr-2 form-checkbox"
                    {...register("otraArea")}
                  />
                  <span className="text-sm">Otra área</span>
                </label>
              </div>
            </div>
            <div className="p-4 mb-4">
              <h2 className="mb-2 text-lg font-bold">Títulos de Posgrado</h2>
              <div className="mt-2">
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <label htmlFor="academic-years" className="font-bold">
                      Clínicas en Medicina Humana y Odontología
                    </label>
                    <input
                      type="text"
                      id="academic-years"
                      className="w-full px-4 py-2 text-base text-gray-700 placeholder-gray-500 bg-white border border-black rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                      name="academicYears"
                      placeholder="Años Académicos"
                      {...register("clinicasMedicina")}
                    />
                  </div>
                  <div className="relative">
                    <label htmlFor="no-clinicas" className="font-bold">
                      No Clínicas
                    </label>
                    <input
                      type="text"
                      id="no-clinicas"
                      className="w-full px-4 py-2 text-base text-gray-700 placeholder-gray-500 bg-white border border-black rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                      name="noClinicas"
                      placeholder="Programas cursados"
                      {...register("noClinicas")}
                    />
                  </div>
                  <div className="relative">
                    <label htmlFor="magister" className="font-bold">
                      Magister o Maestrías
                    </label>
                    <input
                      type="text"
                      id="magister"
                      className="w-full px-4 py-2 text-base text-gray-700 placeholder-gray-500 bg-white border border-black rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                      name="magisterMaestrias"
                      placeholder="Programas cursados"
                      {...register("magisterMaestrias")}
                    />
                  </div>
                  <div className="relative">
                    <label htmlFor="phd" className="font-bold">
                      Ph.D. o Doctorado
                    </label>
                    <input
                      type="text"
                      id="phd"
                      className="w-full px-4 py-2 text-base text-gray-700 placeholder-gray-500 bg-white border border-black rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                      name="phdDoctorado"
                      placeholder="Programas cursados"
                      {...register("phdDoctorado")}
                    />
                  </div>
                </div>
                <div className="flex items-center pt-4">
                  <input
                    type="checkbox"
                    id="doctoradoAfter1998"
                    className="mr-2 form-checkbox"
                    {...register("doctoradoAfter1998")}
                  />
                  <label
                    htmlFor="doctoradoAfter1998"
                    className="text-sm font-bold "
                  >
                    Título de Doctorado obtenido después de 1998
                  </label>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <span className="block mb-2 text-sm font-bold">
                Categorías dentro del escalafón docente
              </span>
              <div className="flex items-center gap-8">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="puesto"
                    value="Auxiliar"
                    className="w-5 h-5 text-red-600"
                    {...register("categoriaEscalafon")}
                  />
                  <span className="ml-2 text-black">Auxiliar</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="puesto"
                    value="Asistente"
                    className="w-5 h-5 text-red-600"
                    {...register("categoriaEscalafon")}
                  />
                  <span className="ml-2 text-black">Asistente</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="puesto"
                    value="Asociado"
                    className="w-5 h-5 "
                    {...register("categoriaEscalafon")}
                  />
                  <span className="ml-2 text-black ">Asociado</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="puesto"
                    value="Titular"
                    className="w-5 h-5 text-red-600"
                    {...register("categoriaEscalafon")}
                  />
                  <span className="ml-2 text-black">Titular</span>
                </label>
              </div>
            </div>
            <div>
              <h1 className="pt-2 font-bold">Experiencias Calificada</h1>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <label htmlFor="expInvestigativa" className="font-bold">
                    Experiencia Investigativa
                  </label>
                  <input
                    type="text"
                    id="expInvestigativa"
                    className="w-full px-4 py-2 text-base text-gray-700 placeholder-gray-500 bg-white border border-black rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    placeholder="Años de Experiencia Investigativa"
                    {...register("expInvestigativa")}
                  />
                </div>
                <div className="relative">
                  <label htmlFor="expDocente" className="font-bold">
                    Experiencias Docente
                  </label>
                  <input
                    type="text"
                    id="expDocente"
                    className="w-full px-4 py-2 text-base text-gray-700 placeholder-gray-500 bg-white border border-black rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    placeholder="Años de Experiencias Docente"
                    {...register("expDocente")}
                  />
                </div>
                <div className="relative">
                  <label htmlFor="expCargosAcademicos" className="font-bold">
                    Experiecnias Cargos Direccion Academica
                  </label>
                  <input
                    type="text"
                    id="expCargosAcademicos"
                    className="w-full px-4 py-2 text-base text-gray-700 placeholder-gray-500 bg-white border border-black rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    placeholder="Años de Experiecnia Cargos Direccion Academica"
                    {...register("expCargosAcademicos")}
                  />
                </div>
                <div className="relative">
                  <label htmlFor="expNoDocente" className="font-bold">
                    Experiecnia no Docente
                  </label>
                  <input
                    type="text"
                    id="expNoDocente"
                    className="w-full px-4 py-2 text-base text-gray-700 placeholder-gray-500 bg-white border border-black rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    placeholder="Años de Experiecnia no Docente"
                    {...register("expNoDocente")}
                  />
                </div>
              </div>
            </div>
            {/*Productividad Académica */}
            <div>
              <span className="block mb-2 text-sm font-bold">
                Productividad Académica
              </span>
              <div className="flex items-center mb-2">
                <span className="w-1/3">
                  Articulos en revistas indexadas por MINCIENCIAS A1
                </span>
                <div className="flex">
                  <input
                    className="w-32 ml-2 border-2 border-black sm:w-40"
                    type="text"
                    placeholder="numero articulos"
                    {...register("articulosA1.1")}
                  />
                  <input
                    className="w-32 ml-2 border-2 border-black sm:w-40"
                    type="text"
                    placeholder="mas de 3 hasta 6"
                    {...register("articulosA1.2")}
                  />
                  <input
                    className="w-32 ml-2 border-2 border-black sm:w-40"
                    type="text"
                    placeholder="con mas de 6"
                    {...register("articulosA1.3")}
                  />
                </div>
              </div>
              <div className="flex items-center mb-2">
                <span className="w-1/3">
                  Articulos en revistas indexadas por MINCIENCIAS A2
                </span>
                <div className="flex">
                  <input
                    className="w-32 ml-2 border-2 border-black sm:w-40"
                    type="text"
                    placeholder="Numero de Articulos"
                    {...register("articulosA2.0")}
                  />
                  <input
                    className="w-32 ml-2 border-2 border-black sm:w-40"
                    type="text"
                    placeholder="mas de 3 hasta 6"
                    {...register("articulosA2.1")}
                  />
                  <input
                    className="w-32 ml-2 border-2 border-black sm:w-40"
                    type="text"
                    placeholder="con mas de 6"
                    {...register("articulosA2.3")}
                  />
                </div>
              </div>
              <div className="flex items-center mb-2">
                <span className="w-1/3">
                  Articulos en revistas indexadas por MINCIENCIAS B2
                </span>
                <div className="flex">
                  <input
                    className="w-32 ml-2 border-2 border-black sm:w-40"
                    type="text"
                    placeholder="Numero de Articulos"
                    {...register("articulosB")}
                  />
                  <input
                    className="w-32 ml-2 border-2 border-black sm:w-40"
                    type="text"
                    placeholder="mas de 3 hasta 6"
                    {...register("articulosB1")}
                  />
                  <input
                    className="w-32 ml-2 border-2 border-black sm:w-40"
                    type="text"
                    placeholder="con mas de 6"
                    {...register("articulosB2")}
                  />
                </div>
              </div>
              <div className="flex items-center mb-2">
                <span className="w-1/3">
                  Articulos en revistas indexadas por MINCIENCIAS C
                </span>
                <div className="flex">
                  <input
                    className="w-32 ml-2 border-2 border-black sm:w-40"
                    type="text"
                    placeholder="Numero de Articulos"
                    {...register("articulosC")}
                  />
                  <input
                    className="w-32 ml-2 border-2 border-black sm:w-40"
                    type="text"
                    placeholder="mas de 3 hasta 6"
                    {...register("articulosc1")}
                  />
                  <input
                    className="w-32 ml-2 border-2 border-black sm:w-40"
                    type="text"
                    placeholder="con mas de 6"
                    {...register("articulosc2")}
                  />
                </div>
              </div>
              <span className="block mb-2 text-sm font-bold">
                Otros - Artículos Cortos
              </span>
              <div className="flex items-center mb-2">
                <span className="w-1/3">
                  Articulos cortos en revistas indexadas por MINCIENCIAS A1
                </span>
                <div className="flex">
                  <input
                    className="w-32 ml-2 border-2 border-black sm:w-40"
                    type="text"
                    placeholder="Numero de Articulos"
                    {...register("articulosCortosA1.0")}
                  />
                  <input
                    className="w-32 ml-2 border-2 border-black sm:w-40"
                    type="text"
                    placeholder="mas de 3 hasta 6"
                    {...register("articulosCortosA2.0")}
                  />
                  <input
                    className="w-32 ml-2 border-2 border-black sm:w-40"
                    type="text"
                    placeholder="con mas de 6"
                    {...register("articulosCortosA3.0")}
                  />
                </div>
              </div>
              <div className="flex items-center mb-2">
                <span className="w-1/3">
                  Articulos cortos en revistas indexadas por MINCIENCIAS A2
                </span>
                <div className="flex">
                  <input
                    className="w-32 ml-2 border-2 border-black sm:w-40"
                    type="text"
                    placeholder="Numero de Articulos"
                    {...register("articulosCortosA2.1")}
                  />
                  <input
                    className="w-32 ml-2 border-2 border-black sm:w-40"
                    type="text"
                    placeholder="mas de 3 hasta 6"
                    {...register("articulosCortosA2.2")}
                  />
                  <input
                    className="w-32 ml-2 border-2 border-black sm:w-40"
                    type="text"
                    placeholder="con mas de 6"
                    {...register("articulosCortosA2.3")}
                  />
                </div>
              </div>
              <div className="flex items-center mb-2">
                <span className="w-1/3">
                  Articulos en revistas indexadas por MINCIENCIAS B
                </span>
                <div className="flex">
                  <input
                    className="w-32 ml-2 border-2 border-black sm:w-40"
                    type="text"
                    placeholder="Numero de Articulos"
                    {...register("articulosCortosB1.1")}
                  />
                  <input
                    className="w-32 ml-2 border-2 border-black sm:w-40"
                    type="text"
                    placeholder="mas de 3 hasta 6"
                    {...register("articulosCortosB1.2")}
                  />
                  <input
                    className="w-32 ml-2 border-2 border-black sm:w-40"
                    type="text"
                    placeholder="con mas de 6 autores"
                    {...register("articulosCortosB1.3")}
                  />
                </div>
              </div>
              <div className="flex items-center mb-2">
                <span className="w-1/3">
                  Articulos en revistas indexadas por MINCIENCIAS C
                </span>
                <div className="flex">
                  <input
                    className="w-32 ml-2 border-2 border-black sm:w-40"
                    type="text"
                    placeholder="Numero de Articulos"
                    {...register("articulosCortosC2.1")}
                  />
                  <input
                    className="w-32 ml-2 border-2 border-black sm:w-40"
                    type="text"
                    placeholder="mas de 3 hasta 6"
                    {...register("articulosCortosC2.2")}
                  />
                  <input
                    className="w-32 ml-2 border-2 border-black sm:w-40"
                    type="text"
                    placeholder="con mas de 6 autores"
                    {...register("articulosCortosC2.3")}
                  />
                </div>
              </div>
              <span className="block mb-2 text-sm font-bold">
                Otros - Reportes de Casos, Revisión de Temas, Carta al Editor o
                Editorial
              </span>
              <div className="flex items-center mb-2">
                <span className="w-1/3">
                  Articulos cortos en revistas indexadas por MINCIENCIAS A1
                </span>
                <div className="flex">
                  <input
                    className="w-32 ml-2 border-2 border-black sm:w-40"
                    type="text"
                    placeholder="Numero de Articulos"
                    {...register("articulosOtros3.1")}
                  />
                  <input
                    className="w-32 ml-2 border-2 border-black sm:w-40"
                    type="text"
                    placeholder="mas de 3 hasta 6"
                    {...register("articulosOtros3.2")}
                  />
                  <input
                    className="w-32 ml-2 border-2 border-black sm:w-40"
                    type="text"
                    placeholder="con mas de 6 autores"
                    {...register("articulosOtros3.3")}
                  />
                </div>
              </div>
              <div className="flex items-center mb-2">
                <span className="w-1/3">
                  Articulos cortos en revistas indexadas por MINCIENCIAS A2
                </span>
                <div className="flex">
                  <input
                    className="w-32 ml-2 border-2 border-black sm:w-40"
                    type="text"
                    placeholder="Numero de Articulos"
                    {...register("articulosOtrosA2.4")}
                  />
                  <input
                    className="w-32 ml-2 border-2 border-black sm:w-40"
                    type="text"
                    placeholder="con mas de 3 hasta 6"
                    {...register("articulosOtrosA2.5")}
                  />
                  <input
                    className="w-32 ml-2 border-2 border-black sm:w-40"
                    type="text"
                    placeholder="con mas de 6 autores"
                    {...register("articulosOtrosA2.6")}
                  />
                </div>
              </div>
              <div className="flex items-center mb-2">
                <span className="w-1/3">
                  Articulos en revistas indexadas por MINCIENCIAS B
                </span>
                <div className="flex">
                  <input
                    className="w-32 ml-2 border-2 border-black sm:w-40"
                    type="text"
                    placeholder="Numero de Articulos"
                    {...register("articulosOtrosB3.3")}
                  />
                  <input
                    className="w-32 ml-2 border-2 border-black sm:w-40"
                    type="text"
                    placeholder="mas de 3 hasta 6"
                    {...register("articulosOtrosB3.4")}
                  />
                  <input
                    className="w-32 ml-2 border-2 border-black sm:w-40"
                    type="text"
                    placeholder="con mas de 6 autores"
                    {...register("articulosOtrosB3.5")}
                  />
                </div>
              </div>
              <div className="flex items-center mb-2">
                <span className="w-1/3">
                  Articulos en revistas indexadas por MINCIENCIAS C
                </span>
                <div className="flex">
                  <input
                    className="w-32 ml-2 border-2 border-black sm:w-40"
                    type="text"
                    placeholder="Numero de Articulos"
                    {...register("articulosOtrosC3.3")}
                  />
                  <input
                    className="w-32 ml-2 border-2 border-black sm:w-40"
                    type="text"
                    placeholder="mas de 3 hasta 6"
                    {...register("articulosOtrosC3.4")}
                  />
                  <input
                    className="w-32 ml-2 border-2 border-black sm:w-40"
                    type="text"
                    placeholder="con mas de 6 autores"
                    {...register("articulosOtrosC3.5")}
                  />
                </div>
              </div>
              <span className="block mb-2 text-sm font-bold">
                Producción de Videos Cinematográficos o Fonográficos
              </span>
              <div className="flex items-center mb-2">
                <span className="w-1/3">Difusión de Impacto Internacional</span>
                <div className="flex">
                  <input
                    className="w-32 ml-2 border-2 border-black sm:w-40"
                    type="text"
                    placeholder="Numero Trabajos"
                    {...register("difusionInternacional1.0")}
                  />
                  <input
                    className="w-32 ml-2 border-2 border-black sm:w-40"
                    type="text"
                    placeholder="mas de 3 hasta 6"
                    {...register("difusionInternacional1.2")}
                  />
                  <input
                    className="w-32 ml-2 border-2 border-black sm:w-40"
                    type="text"
                    placeholder="con mas de 6 trabajos"
                    {...register("difusionInternacional1.3")}
                  />
                </div>
              </div>
              <div className="flex items-center mb-2">
                <span className="w-1/3">Difusión de Impacto Nacional</span>
                <div className="flex">
                  <input
                    className="w-32 ml-2 border-2 border-black sm:w-40"
                    type="text"
                    placeholder="Numero Trabajos"
                    {...register("difusionNacional1.0")}
                  />
                  <input
                    className="w-32 ml-2 border-2 border-black sm:w-40"
                    type="text"
                    placeholder="mas de 3 hasta 6"
                    {...register("difusionNacional1.2")}
                  />
                  <input
                    className="w-32 ml-2 border-2 border-black sm:w-40"
                    type="text"
                    placeholder="con mas de 6 trabajos"
                    {...register("difusionNacional1.3")}
                  />
                </div>
              </div>
              <div className="flex items-center mb-2">
                <span className="w-1/3">
                  Libros que resultan de una labor de investigación
                </span>
                <div className="flex">
                  <input
                    className="w-32 ml-2 border-2 border-black sm:w-40"
                    type="text"
                    placeholder="Numero de Libros"
                    {...register("librosInvestigacion1.0")}
                  />
                  <input
                    className="w-32 ml-2 border-2 border-black sm:w-40"
                    type="text"
                    placeholder="mas de 3 hasta 6"
                    {...register("librosInvestigacion1.2")}
                  />
                  <input
                    className="w-32 ml-2 border-2 border-black sm:w-40"
                    type="text"
                    placeholder="con mas de 6 libros"
                    {...register("librosInvestigacion1.3")}
                  />
                </div>
              </div>
              <div className="flex items-center mb-2">
                <span className="w-1/3">Libros Texto</span>
                <div className="flex">
                  <input
                    className="w-32 ml-2 border-2 border-black sm:w-40"
                    type="text"
                    placeholder="Numero de Libros"
                    {...register("librosTexto1.0")}
                  />
                  <input
                    className="w-32 ml-2 border-2 border-black sm:w-40"
                    type="text"
                    placeholder="mas de 3 hasta 6"
                    {...register("librosTexto1.2")}
                  />
                  <input
                    className="w-32 ml-2 border-2 border-black sm:w-40"
                    type="text"
                    placeholder="con mas de 6 lirbos"
                    {...register("librosTexto1.3")}
                  />
                </div>
              </div>
              <div className="flex items-center mb-2">
                <span className="w-1/3">Libros de ensayo</span>
                <div className="flex">
                  <input
                    className="w-32 ml-2 border-2 border-black sm:w-40"
                    type="text"
                    placeholder="Numero de Libros"
                    {...register("librosEnsayo1.1")}
                  />
                  <input
                    className="w-32 ml-2 border-2 border-black sm:w-40"
                    type="text"
                    placeholder="mas de 3 hasta 6"
                    {...register("librosEnsayo1.2")}
                  />
                  <input
                    className="w-32 ml-2 border-2 border-black sm:w-40"
                    type="text"
                    placeholder="con mas de 6 libros"
                    {...register("librosEnsayo1.3")}
                  />
                </div>
              </div>
              <div className="flex items-center mb-2">
                <span className="w-1/3">
                  Permisos nacionales o internacionales
                </span>
                <div className="flex">
                  <input
                    className="w-32 ml-2 border-2 border-black sm:w-40"
                    type="text"
                    placeholder="Numero de Permisos"
                    {...register("permisos1")}
                  />
                  <input
                    className="w-32 ml-2 border-2 border-black sm:w-40"
                    type="text"
                    placeholder="mas de 3 hasta 6"
                    {...register("permisos2")}
                  />
                  <input
                    className="w-32 ml-2 border-2 border-black sm:w-40"
                    type="text"
                    placeholder="con mas de 6 permisos"
                    {...register("permisos3")}
                  />
                </div>
              </div>
              <div className="flex items-center mb-2">
                <span className="w-1/3">Patentes</span>
                <div className="flex">
                  <input
                    className="w-32 ml-2 border-2 border-black sm:w-40"
                    type="text"
                    placeholder="Numero de Patentes"
                    {...register("patentes1")}
                  />
                  <input
                    className="w-32 ml-2 border-2 border-black sm:w-40"
                    type="text"
                    placeholder="mas de 3 hasta 6"
                    {...register("patentes2")}
                  />
                  <input
                    className="w-32 ml-2 border-2 border-black sm:w-40"
                    type="text"
                    placeholder="con mas de 6 patentes"
                    {...register("patentes3")}
                  />
                </div>
              </div>
              <div className="flex items-center mb-2">
                <span className="w-1/3">Traducciones de libros</span>
                <div className="flex">
                  <input
                    className="w-32 ml-2 border-2 border-black sm:w-40"
                    type="text"
                    placeholder="Numero de Libros"
                    {...register("traduccionLibros1")}
                  />
                  <input
                    className="w-32 ml-2 border-2 border-black sm:w-40"
                    type="text"
                    placeholder="mas de 3 hasta 6"
                    {...register("traduccionLibros2")}
                  />
                  <input
                    className="w-32 ml-2 border-2 border-black sm:w-40"
                    type="text"
                    placeholder="con mas de 6 traducciones"
                    {...register("traduccionLibros3")}
                  />
                </div>
              </div>
              <span className="block mb-2 text-sm font-bold">
                Obras Artisiticas
              </span>
              <div className="flex items-center mb-2">
                <span className="w-1/3">
                  De impacto y trascendencia internacional
                </span>
                <div className="flex">
                  <input
                    className="w-32 ml-2 border-2 border-black sm:w-40"
                    type="text"
                    placeholder="Numero de Obras"
                    {...register("impactoInternacional1")}
                  />
                  <input
                    className="w-32 ml-2 border-2 border-black sm:w-40"
                    type="text"
                    placeholder="mas de 3 hasta 6"
                    {...register("impactoInternacional2")}
                  />
                  <input
                    className="w-32 ml-2 border-2 border-black sm:w-40"
                    type="text"
                    placeholder="con mas de 6 obras"
                    {...register("impactoInternacional3")}
                  />
                </div>
              </div>
              <div className="flex items-center mb-2">
                <span className="w-1/3">
                  De impacto y trascendencia nacional
                </span>
                <div className="flex">
                  <input
                    className="w-32 ml-2 border-2 border-black sm:w-40"
                    type="text"
                    placeholder="Numero de Obras"
                    {...register("impactoNacional1")}
                  />
                  <input
                    className="w-32 ml-2 border-2 border-black sm:w-40"
                    type="text"
                    placeholder="mas de 3 hasta 6"
                    {...register("impactoNacional2")}
                  />
                  <input
                    className="w-32 ml-2 border-2 border-black sm:w-40"
                    type="text"
                    placeholder="con mas de 6 obras"
                    {...register("impactoNacional3")}
                  />
                </div>
              </div>
              <span className="block mb-2 text-sm font-bold">
                Produccion Tecnica
              </span>
              <div className="flex items-center mb-2">
                <span className="w-1/3">Innovación tecnológica</span>
                <div className="flex">
                  <input
                    className="w-32 ml-2 border-2 border-black sm:w-40"
                    type="text"
                    placeholder="Numero de Trabajos"
                    {...register("produccionTecnica1")}
                  />
                  <input
                    className="w-32 ml-2 border-2 border-black sm:w-40"
                    type="text"
                    placeholder="mas de 3 hasta 6"
                    {...register("produccionTecnica2")}
                  />
                  <input
                    className="w-32 ml-2 border-2 border-black sm:w-40"
                    type="text"
                    placeholder="con mas de 6 trabajos"
                    {...register("produccionTecnica3")}
                  />
                </div>
              </div>
              <div className="flex items-center mb-2">
                <span className="w-1/3">Adaptación tecnológica</span>
                <div className="flex">
                  <input
                    className="w-32 ml-2 border-2 border-black sm:w-40"
                    type="text"
                    placeholder="Numero de Trabajos"
                    {...register("adaptacionTecnologica1")}
                  />
                  <input
                    className="w-32 ml-2 border-2 border-black sm:w-40"
                    type="text"
                    placeholder="mas de 3 hasta 6"
                    {...register("adaptacionTecnologica2")}
                  />
                  <input
                    className="w-32 ml-2 border-2 border-black sm:w-40"
                    type="text"
                    placeholder="con mas de 6 trabajos"
                    {...register("adaptacionTecnologica3")}
                  />
                </div>
              </div>
              <div className="flex items-center mb-2">
                <span className="w-1/3">Producción de software</span>
                <div className="flex">
                  <input
                    className="w-32 ml-2 border-2 border-black sm:w-40"
                    type="text"
                    placeholder="Numero de Trabajos"
                    {...register("produccionSoftware1")}
                  />
                  <input
                    className="w-32 ml-2 border-2 border-black sm:w-40"
                    type="text"
                    placeholder="mas de 3 hasta 6"
                    {...register("produccionSoftware2")}
                  />
                  <input
                    className="w-32 ml-2 border-2 border-black sm:w-40"
                    type="text"
                    placeholder="con mas de 6 trabajos"
                    {...register("produccionSoftware3")}
                  />
                </div>
              </div>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-4 py-2 mt-4 text-white bg-green-500 rounded hover:bg-green-600 focus:outline-none focus:bg-green-600"
              >
                Simular
              </button>
            </div>
            {/* this is of modal */}
          </form>
          <h1 className="text-stone-200 font-bold">valor del punto 20.895</h1>
          {resultadoNomina && <Calculo datos={resultadoNomina} />}
        </div>
      </div>
    </div>
  );
}

export default Form;
