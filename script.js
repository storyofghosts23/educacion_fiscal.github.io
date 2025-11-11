let nivelActual = 0;
let nivelesDesbloqueados = 1;
let preguntaActual = 0;

// 🔹 Contenido con explicación de aciertos/errores
const preguntasPorNivel = {
  //pregunta 1:
  1: [
    {
      pregunta: "¿Qué son las contribuciones?",
      opciones: ["Son los ingresos que obtiene el Estado para financiar los gastos públicos", 
                  "Se refiere a los ingresos que obtiene el Estado para su beneficio particular", 
                  "Son los ingresos que los ciudadanos le otorgan voluntariamente al Estado"],
      correcta:  1,
      explicacionCorrecta: "✅ Está en lo correcto porque de acuerdo al artículo 31, fracción IV, de la Constitución Política de los Estados Unidos Mexicanos, todos tenemos  la obligación de contribuir a los gastos públicos de la Federación  .",
      explicacionIncorrecta: "❌ No es correcto, porque al artículo 31, fracción IV, de la Constitución Política de los Estados Unidos Mexicanos, todos tenemos  la obligación de contribuir a los gastos públicos de la Federación.",
      img: "./Diseno_sin_titulo_3.png"
    }
  ], 
  //pregunta 2:
    2: [
    {
      pregunta: "¿Cómo define el SAT a las personas físicas?",
      opciones: ["Como el conjunto de individuos que se unen para la realización de un fin colectivo",
         "Como el individuo que realiza cualquier actividad económica, el cual tiene derechos y obligaciones", 
         "es una entidad legal creada por la ley"],
         img: "./Diseno_sin_titulo_3.png",
      correcta: 1,
      explicacionCorrecta: "✅ Es correcto, Una persona física, de acuerdo con el SAT, es el individuo miembro de una comunidad, con derechos y obligaciones, determinados por un ordenamiento jurídico.",
      explicacionIncorrecta: "❌ No es correcto, ya que esto hace referencia a una persona moral, quienes a diferencia de la persona fisica, estos no cuentan con una realidad material o corporal."
    }
  ],
  //pregunta 3:
    3: [
    {
       pregunta: "¿Quiénes están obligados a contribuir?",
       opciones: ["Las personas físicas y las morales",
          "Solamente las personas físicas", 
          "Solamente las personas morales"],
          img: "./Diseno_sin_titulo_3.png",
       correcta: 1,
       explicacionCorrecta: "✅ Exacto, pues de acuerdo al artículo 1 del Código Fiscal de la Federación las personas físicas y las morales, están obligadas a contribuir para los gastos públicos conforme a las leyes fiscales respectivas.",
       explicacionIncorrecta: "❌ No es correcto, pues de acuerdo al artículo 1 del Código Fiscal de la Federación las personas físicas y las morales, están obligadas a contribuir para los gastos públicos conforme a las leyes fiscales respectivas."
      
      }
  ],
  //pregunta 4:
  4: [
    {
       pregunta: "¿Por qué es importante el pago de los impuestos?",
       opciones: ["Porque su recaudación se destina a mis necesidades individuales",
          "Porque su recaudación sirve para mejorar el estilo de vida de los funcionarios públicos", 
          "Porque su recaudación se destina para cubrir las necesidades de la población"],
          img: "./Diseno_sin_titulo_3.png",
       correcta: 3,
       explicacionCorrecta: "✅ Exacto, es fundamental porque es la principal fuente de ingresos del Estado para financiar los servicios públicos esenciales y promover el bienestar social y el desarrollo económico del país.",
       explicacionIncorrecta: "❌ No es correcto, porque su recaudación es la principal fuente de ingresos del Estado para financiar los servicios públicos esenciales y promover el bienestar social, no solo el individual."
     }
  ],
  5: [
    {
       pregunta: "¿Cómo se clasifican las contribuciones?",
       opciones: ["Directos e indirectos, reales y personales y con fines fiscales y extrafiscales",
          "IVA, ISR e IEPS", 
          "Impuestos, aportaciones de seguridad social, contribuciones de mejoras y derechos"],
          img: "./Diseno_sin_titulo_3.png",
       correcta: 3, 
       explicacionCorrecta: "✅ Exacto, es fundamental porque es la principal fuente de ingresos del Estado para financiar los servicios públicos esenciales y promover el bienestar social y el desarrollo económico del país.",
       explicacionIncorrecta: "❌ No es correcto, porque su recaudación es la principal fuente de ingresos del Estado para financiar los servicios públicos esenciales y promover el bienestar social, no solo el individual."
     }
  ],
  6: [
    {
       pregunta: "Este impuesto es el gravamen que se paga por la enajenación e importación de ciertos productos, tales como gasolina, diésel, bebidas alcohólicas, etc.",
       opciones: ["Impuesto al Valor Agregado",
          "Impuesto Especial sobre Producción y Servicios", 
          "Impuesto Sobre la Renta"],
          img: "./Diseno_sin_titulo_3.png",
       correcta: 2, 
       explicacionCorrecta: "✅ Exacto, pues de conformidad con lo dispuesto en el artículo 1º de la Ley del IEPS, es el gravamen que se paga por la enajenación e importación de ciertos productos, tales como: gasolina, diésel, bebidas alcohólicas, cerveza, tabacos labrados, refrescos, comida chatarra, entre otros bienes, así como por la prestación de ciertos servicios.",
       explicacionIncorrecta: "❌ No es correcto, pues de conformidad con lo dispuesto en el artículo 1º de la Ley del IEPS, es el gravamen que se paga por la enajenación e importación de ciertos productos, tales como: gasolina, diésel, bebidas alcohólicas, cerveza, tabacos labrados, refrescos, comida chatarra, entre otros bienes, así como por la prestación de ciertos servicios."
     }
  ],
  7: [
    {
       pregunta: "¿Cuál de los siguientes impuestos es un ejemplo de un impuesto indirecto?",
       opciones: ["Impuesto al Valor Agregado",
          "Impuesto predial", 
          "Impuesto sobre la renta"],
          img: "./Diseno_sin_titulo_3.png",
       correcta: 1, //respuesta correcta 
       explicacionCorrecta: "✅ Exacto, ya que el IVA se trata de un impuesto indirecto que se aplica sobre el consumo o goce de bienes o servicios; es decir, los contribuyentes no lo pagan directamente, sino que lo trasladan a un tercero, hasta llegar al consumidor final",
       explicacionIncorrecta: "❌ No es correcto, ya que que los impuestos indirectos son aquellos que son aplicados en gastos de producción y consumo"
     }
  ],
  8: [
    {
      pregunta: "¿Cuál es la tasa general del Impuesto al Valor Agregado?",
       opciones: ["15%",
          "17%", 
          "16%"],
          img: "./Diseno_sin_titulo_3.png",
       correcta: 3,  //respuesta correcta 
       explicacionCorrecta: "✅ Exacto, ya que la tasa de 16% se establece en el artículo 1° de la Ley del Impuesto al Valor Agregado ",
       explicacionIncorrecta: "❌ No es correcto, ya que la tasa de 16% se establece en el artículo 1° de la Ley del Impuesto al Valor Agregado "
     }
  ],
  9: [
    {
       pregunta: "¿Qué es el Registro Federal de Contribuyentes?",
       opciones: ["Es una clave alfanumérica que identifica a cada contribuyente ante la autoridad fiscal",
          "Es un documento electrónico que sirve como comprobante oficial de transacciones como compras, ventas o servicios", 
          "Es un sistema de comunicación electrónico obligatorio entre el Servicio de Administración Tributaria (SAT) y los contribuyentes"],
          img: "./Diseno_sin_titulo_3.png",
       correcta: 1, //respuesta correcta  
       explicacionCorrecta: "✅ Exacto, ya que esta clave sirve para identificar a todas las personas que realizan una actividad económica y tienen que cumplir las obligaciones fiscales propias de la inscripción ",
       explicacionIncorrecta: "❌ No es correcto, ya que el RFC es una clave alfanumérica que sirve para identificar a todas las personas que realizan una actividad económica "
     }
  ],
  10: [
    {
       pregunta: "¿En qué caso específico se considera la casa habitación de la Persona Física como su domicilio fiscal?",
       opciones: ["Únicamente en los casos en que no cuente con un local para realizar sus actividades o para el desempeño de ellas",
          "Cuando el contribuyente gane menos del salario mínimo general", 
          "Cuando el contribuyente así lo decida libremente para tener mayor privacidad"],
          img: "./Diseno_sin_titulo_3.png",
       correcta: 1, //respuesta correcta  
       explicacionCorrecta: "✅ Exacto, ya que de acuerdo con el artículo 10 en su fracción I, únicamente en los casos en que la persona física, que realice actividades señaladas en los incisos anteriores no cuente con un local, se considera como domicilio fiscal su casa habitación.",
       explicacionIncorrecta: "❌ No es correcto, ya que de acuerdo con el artículo 10 en su fracción I, únicamente en los casos en que la persona física, que realice actividades señaladas en los incisos anteriores no cuente con un local, se considera como domicilio fiscal su casa habitación."
     }
  ],
  11: [
    {
       pregunta: "¿Cuál es el propósito principal del certificado de la e.firma y qué entidades están facultadas para expedirlo?",
       opciones: ["El certificado tiene el propósito de validar el domicilio fiscal del contribuyente y debe ser expedido exclusivamente por el Servicio de Administración Tributaria (SAT)",
          "El propósito del certificado es confirmar el vínculo como firmante del contribuyente, y puede ser expedido por el SAT, la Secretaría de la Función Pública o la Secretaría de Economía", 
          "El propósito del certificado es servir como comprobante de pago de impuestos, y su expedición está a cargo del banco en el que el contribuyente tiene su cuenta"],
          img: "./Diseno_sin_titulo_3.png",
       correcta: 2 , //respuesta correcta  
       explicacionCorrecta: "✅ Exacto, ya que la e.firma debe ser expedida por el SAT o por una autoridad certificadora tal como lo es la Secretaría de la Función Pública y la Secretaría de Economía con el propósito de confirmar tu vínculo como firmante",
       explicacionIncorrecta: "❌ No es correcto, ya que la e.firma debe ser expedida por el SAT o por una autoridad certificadora tal como lo es la Secretaría de la Función Pública y la Secretaría de Economía con el propósito de confirmar tu vínculo como firmante "
     }
  ],
  12: [
    {
       pregunta: "La constancia de situación fiscal contiene características fiscales tales como:",
       opciones: ["RFC, nombre del contribuyente, situación sentimental, CURP y domicilio fiscal",
          "CURP, domicilio fiscal, RFC, nombre del contribuyente, escolaridad y régimen fiscal ", 
          "Régimen fiscal, obligaciones fiscals, RFC, CURP y domicilio fiscal "],
          img: "./Diseno_sin_titulo_3.png",
       correcta:3, //respuesta correcta   
       explicacionCorrecta: "✅ Exacto, ya que las características fiscales que incluye la constancia de situación fiscal son el RFC, el nombre completo del contribuyente, la CURP, el domicilio fiscal, el régimen fiscal y las obligaciones fiscales propias de la inscripción ",
       explicacionIncorrecta: "❌ No es correcto, ya que las características fiscales que incluye la constancia de situación fiscal son el RFC, el nombre completo del contribuyente, la CURP, el domicilio fiscal, el régimen fiscal y las obligaciones fiscales propias de la inscripción "
     }
  ],
};


// 🔹 Mezcla las respuestas al entrar
function mezclarArreglo(arreglo) {
  return arreglo.sort(() => Math.random() - 0.5);
}

// 🔹 Abrir nivel
function abrirNivel(n) 
{
  if (n > nivelesDesbloqueados) {
    alert("⚠️ Debes completar el nivel anterior primero.");
    return;
  }

  nivelActual = n;
  document.getElementById("menuPrincipal").style.display = "none";
  document.getElementById("pantallaLectura").classList.remove("oculto");
  document.getElementById("tituloLectura").textContent = "Nivel " + n + " - Lectura";
}

function abrirNivel(n) {
  if (n > nivelesDesbloqueados) {
    alert("⚠️ Debes completar el nivel anterior primero.");
    return;
  }

  nivelActual = n;
  document.getElementById("menuPrincipal").style.display = "none";
  document.getElementById("pantallaLectura").classList.remove("oculto");
  document.getElementById("tituloLectura").textContent = "Nivel " + n + " - Lectura";

  // 🔹 Texto específico por nivel
  const textosLectura = {
    1: "De acuerdo al Artículo 31, fracción IV de la Constitución Política de los Estados Unidos Mexicanos: 'Son obligaciones de los mexicanos: El contribuir para los gastos públicos, así de la Federación, como de los Estados, de la Ciudad de México y del Municipio en que residan, de la manera proporcional y equitativa que dispongan las leyes.' Es por ello que, como mexicanos debemos de cumplir con esta obligación, pero antes, debemos saber a que se refieren con 'contribución'." ,
    2: "El SAT define a las personas física como un individuo que realiza cualquier actividad económica, el cual tiene derechos y obligaciones.  Por otro lado, una persona moral es el conjunto de personas físicas que se unen para la realización de un fin colectivo. Son empresas creadas por el derecho, no tienen una realidad material o corporal, sin embargo, la ley les otorga capacidad jurídica para tener derechos y obligaciones." ,
    3: "De acuerdo al artículo 1° del Código Fiscal de la Federación, las personas físicas y las morales, están obligadas a contribuir para los gastos públicos conforme a las leyes fiscales respectivas. Las disposiciones de este Código se aplicarán en su defecto y sin perjuicio de lo dispuesto por los tratados internacionales de los que México sea parte. Sólo mediante ley podrá destinarse una contribución a un gasto público específico." ,
    4: "De acuerdo a la Secretaría de Hacienda y Crédito Público (SHCP) los impuestos son uno de los medios principales por los que el gobierno obtiene ingresos; tienen gran importancia para la economía de nuestro país, ya que gracias a ellos se  puede invertir en aspectos prioritarios como la educación, la salud, la impartición de justicia y la seguridad, el combate a la pobreza y el impulso de sectores económicos que son fundamentales para el país.",
    5: "El artículo 2° del Código Fiscal de la federación (CFF) establece que las contribuciones se clasifican en impuestos, aportaciones de seguridad social, contribuciones de mejoras y derechos. Los impuestos son las contribuciones que deben pagar las personas físicas y morales que se ubican en las situaciones consideradas por la ley como hechos imponibles, las aportaciones de seguridad social son las contribuciones establecidas en ley a las personas que se beneficien en forma especial por servicios de seguridad social proporcionados por el mismo Estado, asimismo, las contribuciones de mejoras son las establecidas en Ley a cargo de las personas físicas y morales que se beneficien de manera directa por obras públicas y, finalmente, los derechos son las contribuciones establecidas en Ley por el uso o aprovechamiento de los bienes del dominio público de la Nación, así como por recibir servicios que presta el Estado en sus funciones de derecho público.",
    6: "La renta está constituida esencialmente por los ingresos que provienen del patrimonio personal o de las actividades económicas propias de las personas contribuyentes o la combinación de ambas. El ISR es un impuesto directo que se aplica sobre los ingresos obtenidos por las personas contribuyentes que implican un incremento en su patrimonio, ya sea por actividades lucrativas, trabajo o capital. Por otro lado, el IVA se trata de un impuesto indirecto que se aplica sobre el consumo o goce de bienes o servicios; es decir, los contribuyentes no lo pagan directamente, sino que lo trasladan a un tercero, hasta llegar al consumidor final. Ahora bien, de conformidad con lo dispuesto en el artículo 1º de la Ley del IEPS, el Impuesto Especial sobre Producción y Servicios es el gravamen que se paga por la enajenación e importación de ciertos productos, tales como: gasolina, diésel, bebidas alcohólicas, cerveza, tabacos labrados, refrescos, comida chatarra, entre otros bienes, así como por la prestación de ciertos servicios.",
    7: "Los impuestos se clasifican en: directos e indirectos, reales y personales, con fines fiscales y extrafiscales, así como en federales, estatales y municipales, tal y como veremos a continuación: Los impuestos directos son los pagados por el contribuyente sin intermediarios, mientras que los impuestos indirectos son aquellos que son aplicados en gastos de producción y consumo, en los cuales existe un intermediario entre el contribuyente y la autoridad fiscal. Por otro lado, los impuestos reales afectan a los bienes y servicios sin tomar en cuenta a las personas y los impuestos personales recaen sobre la capacidad contributiva de la persona. Los impuestos con fines fiscales son aquellos que tienen como propósito primordial recaudar ingresos para el gasto público y los extrafiscales, no tienen una finalidad recaudatoria, sino funcionar como herramienta para alcanzar algún otro objetivo. Por último, los impuestos federales, estatales y municipales hacen referencia a la autoridad que los determina y cobra.",
    8: "En conformidad con el artículo 1° de la Ley del Impuesto al Valor Agregado, están obligadas al pago del impuesto al valor agregado, las personas físicas y las morales que, en territorio nacional, realicen los actos o actividades siguientes: I.- Enajenen bienes. II.- Presten servicios independientes. III.- Otorguen el uso o goce temporal de bienes. IV.- Importen bienes o servicios. Dicho impuesto se calculará aplicando a los valores que señala esta Ley, la tasa del 16%. El impuesto al valor agregado en ningún caso se considerará que forma parte de dichos valores. ",
    9: "Cuando inicias una actividad económica como asalariado, profesionista, o como dueño de un negocio o emprendedor, ya sea como persona física o moral, lo primero que deberás realizar para cumplir con tus obligaciones fiscales, es inscribirte en el RFC y obtener la Cédula de Identificación Fiscal (CIF). El RFC es una clave alfanumérica que sirve para identificar a todas las personas que realizan una actividad económica y tienen que cumplir las obligaciones fiscales propias de la inscripción. En el caso de personas físicas, lo deben tramitar personas mayores de 18 años y menores de edad a partir de los 16 años. Tratándose de personas físicas sin actividades económicas, la inscripción ante el RFC se realizará bajo el rubro 'Inscripción de personas físicas sin obligaciones fiscales', por lo que no adquirirán la obligación de presentar declaraciones y tampoco les serán aplicables sanciones.",
    10: "Si eres una persona física o moral y tienes que presentar declaraciones periódicas y/o expedir CFDI por los ingresos que recibas o por las transacciones que realices, o bien, si no tienes dichas obligaciones, pero abriste una cuenta bancaria o de ahorro a tu nombre, en la que recibes depósitos o realizas operaciones que pueden ser sujetas de contribuciones, tienes entre otras obligaciones la de manifestar tu domicilio fiscal ante el SAT.  Para efectos fiscales, debes atender a lo dispuesto en el artículo 10 del CFF, que contempla como domicilio fiscal de las personas físicas los siguientes: • El local en el que se encuentre el principal asiento de tus negocios cuando realices actividades empresariales. • El local que utilices para el desempeño de tus actividades cuando no lleves a cabo actividades empresariales. • Tu casa habitación si no cuentas con un local, con independencia de si realizas o no actividades comerciales.",
    11: "Cuando las disposiciones fiscales obliguen a presentar documentos, éstos deberán ser digitales y contener tu firma electrónica avanzada, para lo que se requiere un certificado que confirme tu vínculo como firmante y los datos de creación de la firma, mismo que debe ser expedido por el SAT o por una autoridad certificadora tal como lo es la Secretaría de la Función Pública y la Secretaría de Economía. Actualmente, en materia fiscal, la firma electrónica avanzada es conocida como e.firma, y ésta se compone por una contraseña y tres archivos: CER: Certificado, KEY: Llave privada y REQ: Requerimiento.",
    12: "La constancia de situación fiscal es un documento que contiene tus datos de identidad como ubicación y características fiscales, tales como el RFC, el nombre completo del contribuyente, la CURP, el domicilio fiscal, el régimen fiscal y las obligaciones fiscales propias de la inscripción. Actualmente, puede ser un requisito de contratación, ya que los empleadores solicitan una constancia de situación fiscal para asegurarse de que estás inscrito en el RFC y así corroborar que los datos que estás proporcionando son correctos."
  };

  // 🔹 Inserta el texto específico del nivel
  document.getElementById("textoLectura").textContent = textosLectura[n] || "Texto de lectura no disponible.";
}

// 🔹 Pasar a las preguntas
function iniciarPreguntas() {
  document.getElementById("pantallaLectura").classList.add("oculto");
  document.getElementById("pantallaPreguntas").classList.remove("oculto");
  preguntaActual = 0;
  mostrarPregunta();
}

// 🔹 Mostrar pregunta actual
function mostrarPregunta() {
  const contenedor = document.getElementById("preguntaActual");
  const preguntas = preguntasPorNivel[nivelActual];

  contenedor.innerHTML = "";
  
//checkpoint temporarl

if (preguntaActual >= preguntas.length) {
  // 🔹 Desbloquear el siguiente nivel
  desbloquearNivel(nivelActual + 1);

  // 🔹 Ocultar pantalla de preguntas actual
  document.getElementById("pantallaPreguntas").classList.add("oculto");

  // 🔹 Si hay un siguiente nivel, abrirlo automáticamente
  if (nivelActual < 12) {
    abrirNivel(nivelActual + 1);
  } else {
    // 🔹 Mostrar pantalla final al terminar el último nivel
    document.getElementById("pantallaFinal").classList.remove("oculto");
  }

  return;
}


  const p = preguntas[preguntaActual];
  const div = document.createElement("div");
  div.classList.add("pregunta");

  const titulo = document.createElement("p");
  const img = document.createElement("img");
  img.src = p.img;
  img.classList.add("imagen-niveles");  
  titulo.textContent = p.pregunta;
  div.appendChild(titulo);
  div.appendChild(img);

  // 🔹 Contenedor para la explicación debajo
  const contenedorExplicacion = document.createElement("div");
  contenedorExplicacion.classList.add("explicacion");

  // 🔹 Mezclamos opciones
  const indices = [0, 1, 2];
  const mezclados = mezclarArreglo(indices);

  // 🔹 Crear botones de respuesta
  const botones = [];

  mezclados.forEach(i => {
    const boton = document.createElement("button");
    boton.textContent = p.opciones[i];
    boton.onclick = () => responder(i + 1, contenedorExplicacion, botones);
    div.appendChild(boton);
    botones.push(boton);
  });

  div.appendChild(contenedorExplicacion);
  contenedor.appendChild(div);
}

// 🔹 Responder pregunta
function responder(opcion, contenedorExplicacion, botones) {
  const preguntas = preguntasPorNivel[nivelActual];
  const p = preguntas[preguntaActual];

  // 🔹 Desactivar todos los botones al responder
  botones.forEach(b => (b.disabled = true));

  contenedorExplicacion.innerHTML = ""; // limpiar mensaje previo
  const mensaje = document.createElement("p");
  mensaje.classList.add("mensajeRespuesta");

  if (opcion === p.correcta) {
    mensaje.textContent = p.explicacionCorrecta;
    contenedorExplicacion.appendChild(mensaje);

    const btnSiguiente = document.createElement("button");
    btnSiguiente.textContent = "Siguiente pregunta";
    btnSiguiente.onclick = () => {
      preguntaActual++;
      mostrarPregunta();
    };
    contenedorExplicacion.appendChild(btnSiguiente);
  } else 
    {
    mensaje.textContent = p.explicacionIncorrecta;
    contenedorExplicacion.appendChild(mensaje);

    const btnMenu = document.createElement("button");
    btnMenu.textContent = "Volver al menú principal";
    btnMenu.classList.add("btnMenu");
    btnMenu.onclick = () => 
      {
        volverMenu();
      };
    contenedorExplicacion.appendChild(btnMenu);

  }
}

// 🔹 Desbloquear siguiente nivel
function desbloquearNivel(n) {
  const nivel = document.getElementById("nivel" + n);
  if (nivel) {
    nivel.classList.remove("bloqueado");
    if (n > nivelesDesbloqueados) nivelesDesbloqueados = n;
  }
}

function togglePanel() {
  const panel = document.getElementById("panelLateral");
  panel.style.transform = panel.style.transform === "translateX(0%)" ? "translateX(-100%)" : "translateX(0%)";
}

function mostrarSeccion(seccion) {
  const contenedor = document.getElementById("contenedorSeccion");
  const contenido = document.getElementById("contenidoSeccion");

  let html = "";

  if (seccion === "quienes") {
    html = `
      <h2>¿Quiénes somos?</h2>
      <p>Somos un grupo de estudiantes que desarrolló este proyecto para enseñar educación fiscal de forma interactiva.</p>
    `;
  } else if (seccion === "temas") { // cambiar
    html = `
    <h2>Temas: Información</h2>
    <p>Selecciona un tema para visualizar su información:</p>
    <ul class="lista-temas">
      <li onclick="mostrarTema('introduccion')">Contribuciones: Introducción</li>
      <li onclick="mostrarTema('clasificacion')">Contribuciones: Clasificación</li>
      <li onclick="mostrarTema('obligaciones')">Información para cumplir con las obligaciones ante el SAT</li>
    </ul>
    `;
  } else if (seccion === "conoce") {
    html = `
      <h2>Conoce más</h2>
      <p>Visita estos sitios oficiales para aprender más:</p>
      <ul>
        <li><a href="https://www.sat.gob.mx" target="_blank">SAT México</a></li>
        <li><a href="https://www.gob.mx" target="_blank">Gobierno de México </a></li>
      </ul>
    `;
  }

  contenido.innerHTML = html;
  contenedor.style.display = "flex";
}

function cerrarSeccion() {
  document.getElementById("contenedorSeccion").style.display = "none";
}

function volverMenu() {
  // Mostrar menú principal
  document.getElementById("menuPrincipal").style.display = "block";

  // Ocultar pantallas de lectura, preguntas y pantalla final
  document.getElementById("pantallaLectura").classList.add("oculto");
  document.getElementById("pantallaPreguntas").classList.add("oculto");
  document.getElementById("pantallaFinal").classList.add("oculto");

  // Limpiar la pregunta actual (por si viene de una incorrecta)
  const contenedor = document.getElementById("preguntaActual");
  if (contenedor) contenedor.innerHTML = "";

  // Ocultar botones sobrantes (por seguridad)
  const btnSig = document.getElementById("btnSiguienteNivel");
  if (btnSig) btnSig.classList.add("oculto");
  const btnMenu = document.getElementById("btnMenu");
  if (btnMenu) btnMenu.classList.add("oculto");

  // Ir arriba de la página (por estética)
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function siguienteNivel() {
  // Ocultar pantalla actual de preguntas
  document.getElementById("pantallaPreguntas").classList.add("oculto");
  
  // Ocultar botones del nivel completado
  document.getElementById("btnSiguienteNivel").classList.add("oculto");
  document.getElementById("btnMenu").classList.add("oculto");
  
  // Limpiar contenedor de preguntas
  document.getElementById("preguntaActual").innerHTML = "";
  
  // Mostrar menú principal para que el usuario seleccione el siguiente nivel
  document.getElementById("menuPrincipal").style.display = "block";
  
  // El siguiente nivel ya está desbloqueado por la función desbloquearNivel()
  // que se llama automáticamente al completar todas las preguntas
}
function mostrarTema(tema) {
  const contenedor = document.getElementById("contenedorSeccion");
  const contenido = document.getElementById("contenidoSeccion");
  let html = "";

  if (tema === "introduccion") {
    html = `
      <h2>Contribuciones: Introducción</h2>
      <img src="introduccion.png" alt="Contribuciones Introducción" class="imagen-tema">
    `;
  } else if (tema === "clasificacion") {
    html = `
      <h2>Contribuciones: Clasificación</h2>
      <img src="primero.png" alt="Contribuciones Clasificación" class="imagen-tema">
      <img src="segundo.png" alt="Contribuciones Clasificación" class="imagen-tema">
    `;
  } else if (tema === "obligaciones") {
    html = `
      <h2>Información para cumplir con las obligaciones ante el SAT</h2>
      <img src="ultimo temin.png" alt="Obligaciones SAT" class="imagen-tema">
    `;
  }

  contenido.innerHTML = html ;
  contenedor.style.display = "flex";
}
