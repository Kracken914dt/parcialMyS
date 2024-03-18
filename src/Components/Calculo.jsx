import React from "react";
function Calculo({ datos }) {
  const valorPunto = 20895;
  console.log(datos);

  function calcularNomina() {
    let puntosTotales = 0;

    // Calcular puntos por títulos universitarios
    puntosTotales += calcularPuntosTitulos(datos);

    // Calcular puntos por escalafón docente
    puntosTotales += calcularPuntosEscalafon(datos);

    // Calcular puntos por experiencia calificada
    puntosTotales += calcularPuntosExperiencia(datos);

    // Calcular puntos por productividad académica
    puntosTotales += calcularPuntosProductividad(datos);

    // Calcular puntos de posgrado
    puntosTotales += calcularPuntosPosgrado(datos);

    puntosTotales += calcularPuntosArticulo(datos);

    puntosTotales += getMaxProductividadPuntos(datos);

    const salarioBasico = puntosTotales * valorPunto;

    return { salarioBasico, puntosTotales };
  }

  function calcularPuntosTitulos(titulos) {
    let puntos = 0;

    if (
      titulos.hasOwnProperty("medicinaHumana") &&
      titulos.medicinaHumana === true
    ) {
      puntos += 183;
    } else if (
      titulos.hasOwnProperty("otraArea") &&
      titulos.otraArea === true
    ) {
      puntos += 178;
    }
    console.log('Propiedad "posgrado":', titulos);

    if (
      titulos.hasOwnProperty("clinicasMedicina") &&
      titulos.hasOwnProperty("noClinicas") &&
      titulos.hasOwnProperty("magisterMaestrias") &&
      titulos.hasOwnProperty("phdDoctorado")
    ) {
      puntos += calcularPuntosPosgrado({
        clinicasMedicina: titulos.clinicasMedicina,
        noClinicas: titulos.noClinicas,
        magisterMaestrias: titulos.magisterMaestrias,
        phdDoctorado: titulos.phdDoctorado,
        doctoradoAfter1998: titulos.doctoradoAfter1998,
      });
    }
    return puntos;
  }

  function calcularPuntosPosgrado(posgrado) {
    console.log("Posgrado:", posgrado);
    let puntos = 0;

    // Manejar el caso en el que se pasa un objeto vacío o nulo
    if (!posgrado) {
      console.log("El objeto de posgrado está vacío o es nulo.");
      return puntos;
    }

    // Verificar si el doctorado está presente y si es posterior a 1998
    if (posgrado.phdDoctorado && posgrado.doctoradoAfter1998 === true) {
      puntos += 40;
    }

    // Manejar las especializaciones
    if (posgrado.clinicasMedicina && posgrado.noClinicas) {
      // Calcular puntos para especializaciones clínicas
      puntos += Math.min(
        75,
        posgrado.clinicasMedicina * posgrado.noClinicas * 15
      );
    }

    // Manejar los magister y phd
    if (posgrado.magisterMaestrias) {
      puntos += posgrado.magisterMaestrias === "1" ? 40 : 60;
    }

    if (posgrado.phdDoctorado) {
      puntos += posgrado.phdDoctorado === "1" ? 80 : 120;
    }

    console.log("Puntos de posgrado:", puntos);
    return Math.min(60, puntos);
  }

  function calcularPuntosEscalafon(escalafon) {
    console.log(escalafon.categoriaEscalafon);
    switch (escalafon.categoriaEscalafon) {
      case "Auxiliar":
        return 37;
      case "Asistente":
        return 58;
      case "Asociado":
        return 74;
      case "Titular":
        return 96;
      default:
        return 0;
    }
  }

  function calcularPuntosExperiencia(experiencia) {
    let puntos = 0;

    // Verificar si se proporciona la experiencia investigativa
    if (experiencia.hasOwnProperty("expInvestigativa")) {
      console.log("Experiencia investigativa:", experiencia.expInvestigativa);
      puntos += calcularPuntosExperienciaTipo({
        tipo: "investigativa",
        anios: parseInt(experiencia.expInvestigativa),
        categoria: experiencia.categoriaEscalafon,
      });
    }

    // Verificar si se proporciona la experiencia docente
    if (experiencia.hasOwnProperty("expDocente")) {
      console.log("Experiencia docente:", experiencia.expDocente);
      puntos += calcularPuntosExperienciaTipo({
        tipo: "docente",
        anios: parseInt(experiencia.expDocente),
        categoria: experiencia.categoriaEscalafon,
      });
    }

    // Verificar si se proporciona la experiencia en cargos académicos
    if (experiencia.hasOwnProperty("expCargosAcademicos")) {
      console.log(
        "Experiencia en cargos académicos:",
        experiencia.expCargosAcademicos
      );
      puntos += calcularPuntosExperienciaTipo({
        tipo: "direccion_academica",
        anios: parseInt(experiencia.expCargosAcademicos),
        categoria: experiencia.categoriaEscalafon,
      });
    }

    // Verificar si se proporciona la experiencia no docente
    if (experiencia.hasOwnProperty("expNoDocente")) {
      console.log("Experiencia no docente:", experiencia.expNoDocente);
      puntos += calcularPuntosExperienciaTipo({
        tipo: "no_docente",
        anios: parseInt(experiencia.expNoDocente),
        categoria: experiencia.categoriaEscalafon,
      });
    }

    return puntos;
  }

  function calcularPuntosExperienciaTipo(exp) {
    console.log("Experiencia tipo:", exp);

    if (!exp) {
      console.log("Experiencia tipo: No se proporcionó experiencia.");
      return 0;
    }

    switch (exp.tipo) {
      case "investigativa":
        console.log("Experiencia tipo: Investigativa");
        console.log("Años de experiencia investigativa:", exp.anios);
        console.log("Categoría:", exp.categoria);
        const puntosInvestigativa = Math.min(
          exp.anios * 6,
          getMaxExperienciaPuntos(exp.categoria)
        );
        console.log("Puntos experiencia investigativa:", puntosInvestigativa);
        return puntosInvestigativa;
      case "docente":
        console.log("Experiencia tipo: Docente");
        console.log("Años de experiencia docente:", exp.anios);
        console.log("Categoría:", exp.categoria);
        const puntosDocente = Math.min(
          exp.anios * 4,
          getMaxExperienciaPuntos(exp.categoria)
        );
        console.log("Puntos experiencia docente:", puntosDocente);
        return puntosDocente;
      case "direccion_academica":
        console.log("Experiencia tipo: Dirección Académica");
        console.log("Años de experiencia en cargos académicos:", exp.anios);
        console.log("Categoría:", exp.categoria);
        const puntosDireccionAcademica = Math.min(
          exp.anios * 4,
          getMaxExperienciaPuntos(exp.categoria)
        );
        console.log(
          "Puntos experiencia dirección académica:",
          puntosDireccionAcademica
        );
        return puntosDireccionAcademica;
      case "no_docente":
        console.log("Experiencia tipo: No Docente");
        console.log("Años de experiencia no docente:", exp.anios);
        console.log("Categoría:", exp.categoria);
        const puntosNoDocente = Math.min(
          exp.anios * 3,
          getMaxExperienciaPuntos(exp.categoria)
        );
        console.log("Puntos experiencia no docente:", puntosNoDocente);
        return puntosNoDocente;
      default:
        console.log("Experiencia tipo: Desconocida");
        return 0;
    }
  }

  function getMaxExperienciaPuntos(categoria) {
    switch (categoria) {
      case "Auxiliar":
        console.log("Categoría: Auxiliar");
        return 20;
      case "Asistente":
        console.log("Categoría: Asistente");
        return 45;
      case "Asociado":
        console.log("Categoría: Asociado");
        return 90;
      case "Titular":
        console.log("Categoría: Titular");
        return 120;
      default:
        console.log("Categoría no reconocida:", categoria);
        return 0;
    }
  }

  function calcularPuntosProductividad(productividad) {
    let puntos = 0;

    for (const tipo in productividad) {
      if (productividad.hasOwnProperty(tipo)) {
        console.log("Tipo de productividad:", tipo);
        puntos += calcularPuntosProductividadTipo(tipo, productividad[tipo]);
      }
    }

    return puntos;
  }

  function calcularPuntosProductividadTipo(tipo, datos) {
    let puntos = 0;

    console.log("Tipo de productividad:", tipo);

    switch (tipo) {
      case "revistas":
        for (const articulo of datos.articulosA1) {
          puntos += calcularPuntosArticulo(articulo);
        }
        for (const articulo of datos.articulosA2) {
          puntos += calcularPuntosArticulo(articulo);
        }
        for (const articulo of datos.articulosB) {
          puntos += calcularPuntosArticulo(articulo);
        }
        for (const articulo of datos.articulosB1) {
          puntos += calcularPuntosArticulo(articulo);
        }
        for (const articulo of datos.articulosB2) {
          puntos += calcularPuntosArticulo(articulo);
        }
        for (const articulo of datos.articulosC) {
          puntos += calcularPuntosArticulo(articulo);
        }
        for (const articulo of datos.articulosc1) {
          puntos += calcularPuntosArticulo(articulo);
        }
        for (const articulo of datos.articulosc2) {
          puntos += calcularPuntosArticulo(articulo);
        }
        for (const articulo of datos.articulosCortosA1) {
          puntos += calcularPuntosArticulo(articulo);
        }
        for (const articulo of datos.articulosCortosA2) {
          puntos += calcularPuntosArticulo(articulo);
        }
        for (const articulo of datos.articulosCortosA3) {
          puntos += calcularPuntosArticulo(articulo);
        }
        for (const articulo of datos.articulosCortosB1) {
          puntos += calcularPuntosArticulo(articulo);
        }
        for (const articulo of datos.articulosCortosC2) {
          puntos += calcularPuntosArticulo(articulo);
        }
        for (const articulo of datos.articulosOtros3) {
          puntos += calcularPuntosArticulo(articulo);
        }
        for (const articulo of datos.articulosOtrosA2) {
          puntos += calcularPuntosArticulo(articulo);
        }
        for (const articulo of datos.articulosOtrosB3) {
          puntos += calcularPuntosArticulo(articulo);
        }
        for (const articulo of datos.articulosOtrosC3) {
          puntos += calcularPuntosArticulo(articulo);
        }
        break;
      case "videos":
        puntos += datos.difusionInternacional1 * 12;
        puntos += datos.difusionNacional1 * 7;
        break;
      case "libros_investigacion":
        puntos += datos.librosInvestigacion1 * 20;
        break;
      case "libros_texto":
        puntos += datos.librosTexto1 * 15;
        break;
      case "libros_ensayo":
        puntos += datos.librosEnsayo1 * 15;
        break;
      case "premios":
        puntos += datos.premios2 * 15;
        puntos += datos.premios3 * 15;
        break;
      case "patentes":
        puntos += datos.patentes2 * 15;
        puntos += datos.patentes3 * 15;
        break;
      case "traducciones":
        puntos += datos.traduccionLibros2 * 15;
        puntos += datos.traduccionLibros3 * 15;
        break;
      case "obras":
        puntos += datos.impactoInternacional2 * 20;
        puntos += datos.impactoInternacional3 * 20;
        puntos += datos.impactoNacional2 * 14;
        puntos += datos.impactoNacional3 * 14;
        break;
      case "produccion_tecnica":
        puntos += datos.produccionTecnica2 * 15;
        puntos += datos.produccionTecnica3 * 15;
        break;
      case "adaptacionTecnologica":
        puntos += datos.adaptacionTecnologica2 * 15;
        puntos += datos.adaptacionTecnologica3 * 15;
        break;
      case "produccionSoftware":
        puntos += datos.produccionSoftware2 * 15;
        puntos += datos.produccionSoftware3 * 15;
        break;
      default:
        break;
    }

    console.log("Puntos de productividad:", puntos);

    return Math.min(
      getMaxProductividadPuntos(datos.categoriaEscalafon),
      puntos
    );
  }

  function calcularPuntosArticulo(datosArticulo) {
    let puntos = 0;
    const autoresA1 = datosArticulo.articulosA1.filter(
      (elemento) => elemento !== null
    ).length;
    const autoresA2 = datosArticulo.articulosA2.filter(
      (elemento) => elemento !== null
    ).length;
    const autoresB1 = datosArticulo.articulosB1 ? 1 : 0;
    const autoresB2 = datosArticulo.articulosB2 ? 1 : 0;
    const autoresC1 = datosArticulo.articulosc1 ? 1 : 0;
    const autoresC2 = datosArticulo.articulosc2 ? 1 : 0;
    const autoresCortosA1 = datosArticulo.articulosCortosA1.length;
    const autoresCortosA2 = datosArticulo.articulosCortosA2.filter(
      (elemento) => elemento !== null
    ).length;
    const autoresCortosA3 = datosArticulo.articulosCortosA3.length;
    const autoresCortosB1 = datosArticulo.articulosCortosB1.filter(
      (elemento) => elemento !== null
    ).length;
    const autoresCortosC2 = datosArticulo.articulosCortosC2.filter(
      (elemento) => elemento !== null
    ).length;
    const autoresOtrosA2 = datosArticulo.articulosOtrosA2.filter(
      (elemento) => elemento !== null
    ).length;
    const autoresOtrosB3 = datosArticulo.articulosOtrosB3.filter(
      (elemento) => elemento !== null
    ).length;
    const autoresOtrosC3 = datosArticulo.articulosOtrosC3.filter(
      (elemento) => elemento !== null
    ).length;

    puntos += autoresA1 >= 4 ? 7.5 : autoresA1 >= 1 ? 15 : 0;
    puntos += autoresA2 >= 4 ? 6 : autoresA2 >= 1 ? 12 : 0;
    puntos += autoresB1 >= 4 ? 4.8 : autoresB1 >= 1 ? 8 : 0;
    puntos += autoresB2 >= 4 ? 4.8 : autoresB2 >= 1 ? 8 : 0;
    puntos += autoresC1 >= 4 ? 2.14 : autoresC1 >= 1 ? 3 : 0;
    puntos += autoresC2 >= 4 ? 2.14 : autoresC2 >= 1 ? 3 : 0;
    puntos += autoresCortosA1 >= 4 ? 7.5 : autoresCortosA1 >= 1 ? 15 : 0;
    puntos += autoresCortosA2 >= 4 ? 7.5 : autoresCortosA2 >= 1 ? 15 : 0;
    puntos += autoresCortosA3 >= 4 ? 7.5 : autoresCortosA3 >= 1 ? 15 : 0;
    puntos += autoresCortosB1 >= 4 ? 7.5 : autoresCortosB1 >= 1 ? 15 : 0;
    puntos += autoresCortosC2 >= 4 ? 7.5 : autoresCortosC2 >= 1 ? 15 : 0;
    puntos += autoresOtrosA2 >= 4 ? 7.5 : autoresOtrosA2 >= 1 ? 15 : 0;
    puntos += autoresOtrosB3 >= 4 ? 7.5 : autoresOtrosB3 >= 1 ? 15 : 0;
    puntos += autoresOtrosC3 >= 4 ? 7.5 : autoresOtrosC3 >= 1 ? 15 : 0;

    console.log("Puntos del artículo:", puntos);

    return puntos;
  }

  function getMaxProductividadPuntos(categoria) {
    console.log("categoria escalafon maxima", categoria);
    switch (categoria) {
      case "Auxiliar":
        return 80;
      case "Asistente":
        return 160;
      case "Asociado":
        return 320;
      case "Titular":
        return 540;
      default:
        return 0;
    }
  }

  const { salarioBasico, puntosTotales } = calcularNomina(datos);
  console.log("Salario Básico:", salarioBasico);
  console.log("Total de Puntos:", puntosTotales);

  return (
    <div className="items-center bg-white shadow-md rounded p-2 text-center w-96">
      <div className="grid grid-cols-2 gap-2">
        <div className="font-bold">Salario Básico:</div>
        <div className="font-bold">Total de Puntos:</div>
        <div className="text-lg">{salarioBasico}</div>
        <div className="text-lg">{puntosTotales}</div>
      </div>
    </div>
  );
}

export default Calculo;
