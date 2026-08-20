// Elementos de la pantalla inicial
const botonComenzar = document.getElementById("btnComenzar");
const pantallaInicio = document.getElementById("pantallaInicio");
const nombreInput = document.getElementById("nombre");

// Elementos de la pantalla de preguntas
const pantallaPregunta = document.getElementById("pantallaPregunta");
const numeroPregunta = document.getElementById("numeroPregunta");
const textoPregunta = document.getElementById("textoPregunta");
const opciones = document.getElementById("opciones");
const botonAtras = document.getElementById("btnAtras");
// Elementos de la prueba de concentración
const pantallaInstrucciones =
    document.getElementById(
        "pantallaInstrucciones"
    );

const botonIniciarPrueba =
    document.getElementById(
        "btnIniciarPrueba"
    );
    // Elementos del minijuego
const pantallaJuego =
    document.getElementById(
        "pantallaJuego"
    );

const zonaJuego =
    document.getElementById(
        "zonaJuego"
    );

const tiempoJuegoTexto =
    document.getElementById(
        "tiempoJuego"
    );

const aciertosJuegoTexto =
    document.getElementById(
        "aciertosJuego"
    );

const erroresJuegoTexto =
    document.getElementById(
        "erroresJuego"
    );

const tituloJuego =
    document.getElementById(
        "tituloJuego"
    );

const mensajeJuego =
    document.getElementById(
        "mensajeJuego"
    );

const cuentaRegresiva =
    document.getElementById(
        "cuentaRegresiva"
    );
const URL_GOOGLE_SHEETS =
    "https://script.google.com/macros/s/AKfycbx94HVs_jQQtRW5sRCGasrJ7U-AtRIS6eEIzoHtvLWrGnVb9BT8Gsmm6LfXthdkrGi5/exec";
// PREGUNTAS DEL CUESTIONARIO

const bancoPreguntas = [
    // ÚNICA PREGUNTA OBLIGATORIA
    {
        campo: "edad",
        texto: "¿Cuál es tu rango de edad?",
        tipo: "una",
        opciones: [
            { texto: "10 a 12 años", valor: "10-12" },
            { texto: "13 a 14 años", valor: "13-14" },
            { texto: "15 a 17 años", valor: "15-17" },
            { texto: "18 a 25 años", valor: "18-25" },
            { texto: "26 a 35 años", valor: "26-35" },
            { texto: "36 años o más", valor: "36 o más" }
        ]
    },

    // 1. AL DESPERTAR
    {
        campo: "usoAlDespertar",
        texto: "Después de despertar, normalmente...",
        tipo: "una",
        opciones: [
            { texto: "Me levanto sin revisar el celular", valor: 0 },
            { texto: "Lo reviso después de arreglarme", valor: 3 },
            { texto: "Lo reviso brevemente desde la cama", valor: 8 },
            { texto: "Permanezco un rato usándolo antes de levantarme", valor: 18 },
            { texto: "Es lo primero que hago y sigo usándolo bastante tiempo", valor: 30 }
        ]
    },

    // 2. ANTES DE DORMIR
    {
        campo: "usoAntesDormir",
        texto: "Cuando ya estás acostado para dormir...",
        tipo: "una",
        opciones: [
            { texto: "No utilizo el celular", valor: 0 },
            { texto: "Lo reviso rápidamente", valor: 5 },
            { texto: "Veo algunas publicaciones o mensajes", valor: 15 },
            { texto: "Permanezco bastante tiempo utilizándolo", valor: 30 },
            { texto: "Lo utilizo hasta quedarme dormido", valor: 50 }
        ]
    },

    // 3. COMIDAS
    {
        campo: "usoDuranteComidas",
        texto: "Cuando te sientas a comer, normalmente...",
        tipo: "una",
        opciones: [
            { texto: "Dejo el celular lejos de la mesa", valor: 0 },
            { texto: "Lo tengo cerca, pero no lo utilizo", valor: 1 },
            { texto: "Lo reviso una o dos veces", valor: 4 },
            { texto: "Lo utilizo durante parte de la comida", valor: 10 },
            { texto: "Lo utilizo durante casi toda la comida", valor: 18 }
        ]
    },

    // 4. BAÑO
    {
        campo: "usoEnBano",
        texto: "Cuando vas al baño, ¿qué suele ocurrir con tu celular?",
        tipo: "una",
        opciones: [
            { texto: "Lo dejo fuera", valor: 0 },
            { texto: "Lo llevo conmigo, pero no lo reviso", valor: 1 },
            { texto: "Lo reviso rápidamente", valor: 3 },
            { texto: "Lo utilizo durante buena parte del tiempo", valor: 7 },
            { texto: "Lo utilizo prácticamente todo el tiempo", valor: 12 }
        ]
    },

    // 5. INICIO DE UNA TAREA
    {
        campo: "usoAlIniciarTarea",
        texto: "Cuando vas a comenzar una tarea y tienes el celular cerca...",
        tipo: "una",
        opciones: [
            { texto: "Comienzo la tarea sin revisarlo", valor: 0 },
            { texto: "Lo reviso una vez antes de empezar", valor: 3 },
            { texto: "Reviso rápidamente algunas aplicaciones", valor: 8 },
            { texto: "Retraso bastante el inicio de la tarea", valor: 18 },
            { texto: "Termino usando el celular y dejo la tarea para después", valor: 30 }
        ]
    },

    // 6. NOTIFICACIONES DURANTE EL ESTUDIO
    {
        campo: "notificacionDuranteEstudio",
        texto: "Si recibes una notificación mientras estudias...",
        tipo: "una",
        opciones: [
            { texto: "La ignoro hasta terminar", valor: 0 },
            { texto: "La reviso varios minutos después", valor: 2 },
            { texto: "Miro quién escribió y continúo", valor: 4 },
            { texto: "Respondo y reviso otras aplicaciones", valor: 10 },
            { texto: "Dejo de estudiar y continúo usando el celular", valor: 20 }
        ]
    },

    // 7. INTERRUPCIONES EN UNA TAREA
    {
        campo: "interrupcionesDuranteTarea",
        texto: "Mientras realizas una tarea, normalmente...",
        tipo: "una",
        opciones: [
            { texto: "No reviso el celular hasta terminar", valor: 0 },
            { texto: "Lo reviso una sola vez", valor: 3 },
            { texto: "Lo reviso varias veces brevemente", valor: 8 },
            { texto: "Interrumpo frecuentemente la tarea", valor: 18 },
            { texto: "Paso largos periodos usándolo", valor: 30 }
        ]
    },

    // 8. VIDEOS CORTOS
    {
        campo: "usoVideosCortos",
        texto: "Cuando empiezas a ver videos cortos...",
        tipo: "una",
        opciones: [
            { texto: "Veo uno y cierro la aplicación", valor: 2 },
            { texto: "Veo algunos videos y salgo", valor: 8 },
            { texto: "Permanezco un rato mirando videos", valor: 20 },
            { texto: "Pierdo la noción del tiempo", valor: 40 },
            { texto: "Continúo hasta que algo me obliga a detenerme", valor: 60 }
        ]
    },

    // 9. REDES SOCIALES
    {
        campo: "sesionRedesSociales",
        texto: "Cuando entras a una red social para revisar algo...",
        tipo: "una",
        opciones: [
            { texto: "Reviso lo necesario y cierro", valor: 2 },
            { texto: "Miro algunas publicaciones adicionales", valor: 7 },
            { texto: "Paso un rato recorriendo contenido", valor: 15 },
            { texto: "Cambio entre varias secciones o perfiles", valor: 30 },
            { texto: "Permanezco mucho más tiempo del que pensaba", valor: 50 }
        ]
    },

    // 10. JUEGOS EN EL CELULAR
    {
        campo: "usoJuegos",
        texto: "Cuando juegas en el celular y termina una partida...",
        tipo: "una",
        opciones: [
            { texto: "No juego en el celular", valor: 0 },
            { texto: "Cierro el juego al terminar", valor: 5 },
            { texto: "Juego una partida adicional", valor: 12 },
            { texto: "Juego varias partidas seguidas", valor: 30 },
            { texto: "Sigo jugando hasta que debo hacer otra cosa", valor: 50 }
        ]
    },

    // 11. MENSAJES
    {
        campo: "usoMensajeria",
        texto: "Cuando respondes un mensaje, normalmente...",
        tipo: "una",
        opciones: [
            { texto: "Respondo lo necesario y cierro", valor: 2 },
            { texto: "Intercambio algunos mensajes", valor: 5 },
            { texto: "Continúo conversando durante un rato", valor: 12 },
            { texto: "Entro también a otros chats o aplicaciones", valor: 25 },
            { texto: "Permanezco conversando por mucho tiempo", valor: 40 }
        ]
    },

    // 12. MOMENTOS LIBRES
    {
        campo: "usoEnTiempoLibre",
        texto: "Cuando tienes unos minutos libres y no sabes qué hacer...",
        tipo: "una",
        opciones: [
            { texto: "Busco otra actividad sin utilizar el celular", valor: 0 },
            { texto: "Espero un momento antes de revisarlo", valor: 3 },
            { texto: "Lo reviso brevemente", valor: 8 },
            { texto: "Abro varias aplicaciones para entretenerme", valor: 20 },
            { texto: "Puedo permanecer mucho tiempo usándolo sin notarlo", valor: 35 }
        ]
    },

    // 13. TRANSPORTE
    {
        campo: "usoEnTransporte",
        texto: "Cuando viajas como pasajero...",
        tipo: "una",
        opciones: [
            { texto: "Observo el camino o converso", valor: 0 },
            { texto: "Reviso el celular solo al inicio o al final", valor: 3 },
            { texto: "Lo utilizo por momentos", valor: 10 },
            { texto: "Lo utilizo durante buena parte del trayecto", valor: 20 },
            { texto: "Lo utilizo prácticamente durante todo el trayecto", valor: 35 }
        ]
    },

    // 14. CAMBIO ENTRE APLICACIONES
    {
        campo: "cambioEntreAplicaciones",
        texto: "Después de terminar lo que ibas a hacer en una aplicación...",
        tipo: "una",
        opciones: [
            { texto: "Cierro el celular", valor: 0 },
            { texto: "A veces reviso una aplicación más", valor: 3 },
            { texto: "Suelo abrir otra aplicación", valor: 8 },
            { texto: "Paso por varias aplicaciones", valor: 18 },
            { texto: "Sigo cambiando de aplicación sin un objetivo claro", valor: 30 }
        ]
    }
];
const preguntas = bancoPreguntas; 

// Control del cuestionario
let preguntaActual = 0;
const respuestas = [];

// Comenzar cuestionario
botonComenzar.addEventListener("click", function () {
    pantallaInicio.style.display = "none";
    pantallaPregunta.style.display = "block";

    
    mostrarPregunta();
});

// Retroceder una pregunta
botonAtras.addEventListener("click", function () {
    if (preguntaActual > 0) {
        preguntaActual = preguntaActual - 1;
        respuestas.pop();

        mostrarPregunta();
    }
});

// Mostrar la pregunta actual
function mostrarPregunta() {
    const pregunta = preguntas[preguntaActual];

    if (preguntaActual === 0) {
        botonAtras.style.display = "none";
    } else {
        botonAtras.style.display = "block";
    }

    numeroPregunta.textContent =
        "Pregunta " + (preguntaActual + 1) + " de " + preguntas.length;

    textoPregunta.textContent = pregunta.texto;

    opciones.innerHTML = "";

   mostrarPreguntaDeUnaOpcion(pregunta);
}

// Preguntas donde solo se permite una respuesta
function mostrarPreguntaDeUnaOpcion(pregunta) {
    pregunta.opciones.forEach(function (opcion) {
        const nuevoBoton = document.createElement("button");

        nuevoBoton.type = "button";
        nuevoBoton.textContent = opcion.texto;

        nuevoBoton.addEventListener("click", function () {
            guardarRespuesta(opcion);
        });

        opciones.appendChild(nuevoBoton);
    });
}


// Guardar una respuesta y avanzar solamente una pregunta
function guardarRespuesta(opcionSeleccionada) {
    respuestas.push({
        campo: preguntas[preguntaActual].campo,
        pregunta: preguntas[preguntaActual].texto,
        respuesta: opcionSeleccionada.texto,
        valor: opcionSeleccionada.valor
    });

    preguntaActual = preguntaActual + 1;

    if (preguntaActual < preguntas.length) {
        mostrarPregunta();
    } else {
        mostrarResultado();
    }
}

// Mostrar el nivel de hábitos y un reto recomendado
function mostrarResultado() {
    botonAtras.style.display = "none";
    pantallaPregunta.classList.add("resultado");

    const puntajeHabitos = respuestas.reduce(function (total, respuesta) {
        if (typeof respuesta.valor === "number") {
            return total + respuesta.valor;
        }

        return total;
    }, 0);

    let nivelUso = 1;

    if (puntajeHabitos >= 270) {
        nivelUso = 5;
    } else if (puntajeHabitos >= 210) {
        nivelUso = 4;
    } else if (puntajeHabitos >= 150) {
        nivelUso = 3;
    } else if (puntajeHabitos >= 90) {
        nivelUso = 2;
    }

    const niveles = {
    1: {
        nombre: "muy bajo",
        minutosReto: 10,
        recomendaciones: [
            "Organizar tus pendientes del día.",
            "Leer algunas páginas de un libro.",
            "Realizar una rutina breve de estiramiento.",
            "Preparar tus materiales para estudiar.",
            "Practicar respiración y descansar la vista.",
            "Ordenar tu habitación o espacio de trabajo."
        ]
    },
    2: {
        nombre: "bajo",
        minutosReto: 15,
        recomendaciones: [
            "Repasar un tema visto en clases.",
            "Caminar o realizar ejercicios ligeros.",
            "Leer entre cinco y diez páginas.",
            "Practicar vocabulario de otro idioma.",
            "Adelantar una parte pequeña de una tarea.",
            "Conversar con alguien sin utilizar el celular."
        ]
    },
    3: {
        nombre: "moderado",
        minutosReto: 20,
        recomendaciones: [
            "Completar varios ejercicios de una materia.",
            "Realizar una rutina corta de ejercicio.",
            "Practicar un idioma o instrumento.",
            "Leer un capítulo corto.",
            "Escribir o dibujar de manera creativa.",
            "Planificar las actividades del día siguiente."
        ]
    },
    4: {
        nombre: "alto",
        minutosReto: 30,
        recomendaciones: [
            "Realizar una sesión concentrada de estudio.",
            "Completar una rutina de ejercicio.",
            "Avanzar una lección de un curso.",
            "Practicar música, dibujo u otra habilidad.",
            "Preparar una comida sencilla.",
            "Adelantar una parte importante de un trabajo."
        ]
    },
    5: {
        nombre: "muy alto",
        minutosReto: 45,
        recomendaciones: [
            "Completar una sesión profunda de estudio.",
            "Realizar una rutina completa de ejercicio.",
            "Avanzar una clase de un curso en línea.",
            "Trabajar en un proyecto personal.",
            "Leer uno o varios capítulos de un libro.",
            "Practicar intensamente un idioma o instrumento."
        ]
    }
};

    const resultadoNivel = niveles[nivelUso];
    const minutosReto = resultadoNivel.minutosReto;
    const minutosSemanales = minutosReto * 7;
    const horasSemanales = Math.floor(minutosSemanales / 60);
    const minutosRestantes = minutosSemanales % 60;
    const nombre = nombreInput.value.trim();

    let tiempoSemanal = "";

    if (horasSemanales > 0) {
        tiempoSemanal =
            horasSemanales +
            (horasSemanales === 1 ? " hora" : " horas");

        if (minutosRestantes > 0) {
            tiempoSemanal +=
                " y " +
                minutosRestantes +
                " minutos";
        }
    } else {
        tiempoSemanal =
            minutosSemanales +
            " minutos";
    }

    numeroPregunta.textContent = "TU RESULTADO";
    opciones.innerHTML = "";

    if (nombre === "") {
        textoPregunta.textContent =
            "Tu nivel de intensidad de hábitos de uso es " +
            resultadoNivel.nombre +
            ".";
    } else {
        textoPregunta.textContent =
            nombre +
            ", tu nivel de intensidad de hábitos de uso es " +
            resultadoNivel.nombre +
            ".";
    }


    const reto = document.createElement("p");
    reto.textContent =
        "TimeSense te propone reservar voluntariamente " +
        minutosReto +
        " minutos diarios para una actividad sin pantalla.";

    opciones.appendChild(reto);

    const equivalenciaSemanal = document.createElement("p");
    equivalenciaSemanal.textContent =
        "Si completas el reto todos los días, dedicarías " +
        tiempoSemanal +
        " por semana a otras actividades.";

    opciones.appendChild(equivalenciaSemanal);

    const botonRecomendaciones = document.createElement("button");
    botonRecomendaciones.type = "button";
    botonRecomendaciones.textContent =
        "¿Qué puedo hacer durante ese tiempo?";

    opciones.appendChild(botonRecomendaciones);

    botonRecomendaciones.addEventListener("click", function () {
        const recomendaciones = document.createElement("div");
        recomendaciones.classList.add("posibilidades");

        const titulo = document.createElement("h4");
        titulo.textContent =
            "En " +
            minutosReto +
            " minutos podrías:";

        recomendaciones.appendChild(titulo);

        const actividades = [
    ...resultadoNivel.recomendaciones
];

actividades.sort(function () {
    return Math.random() - 0.5;
});

        actividades.slice(0, 4).forEach(function (actividad) {
            const elemento = document.createElement("p");
            elemento.textContent = "• " + actividad;
            recomendaciones.appendChild(elemento);
        });

        opciones.appendChild(recomendaciones);
        botonRecomendaciones.style.display = "none";
    });

    console.log("Puntaje oculto de hábitos:", puntajeHabitos);
    console.log("Nivel de intensidad:", nivelUso);
    console.log("Reto diario recomendado:", minutosReto);

    const botonContinuarPrueba = document.createElement("button");
    botonContinuarPrueba.type = "button";
    botonContinuarPrueba.textContent =
        "Continuar a la prueba de concentración";
    botonContinuarPrueba.classList.add("botonContinuarPrueba");

    opciones.appendChild(botonContinuarPrueba);

    botonContinuarPrueba.addEventListener("click", function () {
        pantallaPregunta.style.display = "none";
        pantallaInstrucciones.style.display = "block";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

function crearSeccionAprendizaje(titulo, horas, actividades) {

    const seccion = document.createElement("section");
    seccion.classList.add("seccionAprendizaje");

    const encabezado = document.createElement("h4");

    encabezado.textContent =
        titulo +
        " tendrías aproximadamente " +
        redondearHoras(horas) +
        " horas.";

    seccion.appendChild(encabezado);

    actividades.forEach(function (actividad) {

        const tarjeta = document.createElement("div");
        tarjeta.classList.add("actividadAprendizaje");

        const nombreActividad = document.createElement("strong");
        nombreActividad.textContent = actividad.nombre;

        const descripcion = document.createElement("p");
        descripcion.textContent = actividad.descripcion;

        tarjeta.appendChild(nombreActividad);
        tarjeta.appendChild(descripcion);

        seccion.appendChild(tarjeta);
    });

    return seccion;
}
function redondearHoras(horas) {
    return Math.round(horas * 10) / 10;
}

// INTERACCIÓN DEL TIBURÓN

const tiburonAmigo =
    document.getElementById("tiburonAmigo");

const mensajeTiburon =
    document.getElementById("mensajeTiburon");

const mensajesDelTiburon = [
    "¡Hola! Soy Fin.",
    "¡Sigue nadando!",
    "¡Vas muy bien!",
    "Responde con sinceridad.",
    "¡CHOMP!",
    "¿Cuánto tiempo llevas hoy?",
    "No muerdo... casi nunca.",
    "¡Burbujas de concentración!",
    "¡duerman!"
];

let tiempoMensajeTiburon;

function hacerReaccionarTiburon() {

    const numeroAleatorio =
        Math.floor(Math.random() * mensajesDelTiburon.length);

    mensajeTiburon.textContent =
        mensajesDelTiburon[numeroAleatorio];

    mensajeTiburon.classList.add("visible");
    tiburonAmigo.classList.add("reaccionando");

    const posicion =
        tiburonAmigo.getBoundingClientRect();

    for (let i = 0; i < 7; i++) {

        const burbuja =
            document.createElement("span");

        burbuja.className = "burbuja-tiburon";

        burbuja.style.left =
            posicion.right - 25 + Math.random() * 20 + "px";

        burbuja.style.top =
            posicion.top + 45 + Math.random() * 20 + "px";

        burbuja.style.animationDelay =
            i * 0.06 + "s";

        document.body.appendChild(burbuja);

        burbuja.addEventListener(
            "animationend",
            function () {
                burbuja.remove();
            }
        );
    }

    setTimeout(function () {
        tiburonAmigo.classList.remove("reaccionando");
    }, 700);

    clearTimeout(tiempoMensajeTiburon);

    tiempoMensajeTiburon =
        setTimeout(function () {
            mensajeTiburon.classList.remove("visible");
        }, 2300);
}

if (tiburonAmigo && mensajeTiburon) {

    function detectarToqueEnTiburon(evento) {
        const cajaTiburon =
            tiburonAmigo.getBoundingClientRect();

        const posicionX = evento.clientX;
        const posicionY = evento.clientY;

        const estaDentro =
            posicionX >= cajaTiburon.left &&
            posicionX <= cajaTiburon.right &&
            posicionY >= cajaTiburon.top &&
            posicionY <= cajaTiburon.bottom;

        if (estaDentro) {
            evento.preventDefault();
            hacerReaccionarTiburon();
        }
    }

    // Detecta clic con mouse, lápiz o pantalla táctil
    document.addEventListener(
        "pointerdown",
        detectarToqueEnTiburon,
        true
    );

    // También funciona con teclado
    tiburonAmigo.addEventListener(
        "keydown",
        function (evento) {
            if (
                evento.key === "Enter" ||
                evento.key === " "
            ) {
                evento.preventDefault();
                hacerReaccionarTiburon();
            }
        }
    );
}

// PRUEBA DE ATENCIÓN STROOP

const COLORES_STROOP = [
    { nombre: "ROJO", codigo: "#e53935" },
    { nombre: "AZUL", codigo: "#1565c0" },
    { nombre: "VERDE", codigo: "#2e7d32" },
    { nombre: "AMARILLO", codigo: "#f9a825" }
];

const TOTAL_INTENTOS_PRACTICA = 4;
const TOTAL_INTENTOS_PRUEBA = 20;
const PAUSA_ENTRE_ESTIMULOS = 550;

let modoPractica = false;
let pruebaActiva = false;
let intentoActual = 0;
let respuestaBloqueada = false;
let momentoAparicion = 0;
let ultimoEstimulo = null;
let temporizadorSiguiente = null;

let respuestasCorrectas = 0;
let erroresStroop = 0;
let tiemposReaccion = [];

let resultadoConcentracion = {
    aciertos: 0,
    errores: 0,
    precision: 0,
    tiempoPromedio: 0,
    mejorTiempo: 0
};

botonIniciarPrueba.addEventListener("click", function () {
    pantallaInstrucciones.style.display = "none";
    pantallaJuego.style.display = "block";

    reiniciarDatosStroop();
    modoPractica = true;

    prepararCuentaRegresiva();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

function reiniciarDatosStroop() {
    clearTimeout(temporizadorSiguiente);

    pruebaActiva = false;
    intentoActual = 0;
    respuestaBloqueada = false;
    ultimoEstimulo = null;

    respuestasCorrectas = 0;
    erroresStroop = 0;
    tiemposReaccion = [];

    resultadoConcentracion = {
        aciertos: 0,
        errores: 0,
        precision: 0,
        tiempoPromedio: 0,
        mejorTiempo: 0
    };

    actualizarMarcadores();
    zonaJuego.innerHTML = "";
    zonaJuego.appendChild(cuentaRegresiva);
}

function prepararCuentaRegresiva() {
    let numeroCuenta = 3;

    pruebaActiva = false;
    zonaJuego.innerHTML = "";
    cuentaRegresiva.style.display = "block";
    cuentaRegresiva.textContent = numeroCuenta;
    zonaJuego.appendChild(cuentaRegresiva);

    tituloJuego.textContent = modoPractica
        ? "Prepárate para practicar"
        : "Prepárate para la prueba real";

    mensajeJuego.textContent = modoPractica
        ? "La práctica tiene 4 ejercicios y no se guardará."
        : "Responde al color de la tinta en 20 ejercicios.";

    const intervaloCuenta = setInterval(function () {
        numeroCuenta--;

        if (numeroCuenta > 0) {
            cuentaRegresiva.textContent = numeroCuenta;
            return;
        }

        if (numeroCuenta === 0) {
            cuentaRegresiva.textContent = "¡YA!";
            return;
        }

        clearInterval(intervaloCuenta);
        cuentaRegresiva.style.display = "none";
        comenzarBloqueStroop();
    }, 800);
}

function comenzarBloqueStroop() {
    pruebaActiva = true;
    intentoActual = 0;
    respuestaBloqueada = false;

    if (!modoPractica) {
        respuestasCorrectas = 0;
        erroresStroop = 0;
        tiemposReaccion = [];
    }

    tituloJuego.textContent = modoPractica
        ? "MODO PRÁCTICA"
        : "PRUEBA STROOP";

    mensajeJuego.textContent = "Selecciona el color de la tinta.";
    actualizarMarcadores();
    mostrarSiguienteEstimuloStroop();
}

function crearEstimuloStroop() {
    let palabra;
    let tinta;

    do {
        palabra = COLORES_STROOP[
            Math.floor(Math.random() * COLORES_STROOP.length)
        ];

        tinta = COLORES_STROOP[
            Math.floor(Math.random() * COLORES_STROOP.length)
        ];
    } while (
        ultimoEstimulo &&
        ultimoEstimulo.palabra === palabra.nombre &&
        ultimoEstimulo.tinta === tinta.nombre
    );

    ultimoEstimulo = {
        palabra: palabra.nombre,
        tinta: tinta.nombre
    };

    return {
        palabra: palabra.nombre,
        tinta: tinta
    };
}

function mostrarSiguienteEstimuloStroop() {
    if (!pruebaActiva) {
        return;
    }

    const totalIntentos = modoPractica
        ? TOTAL_INTENTOS_PRACTICA
        : TOTAL_INTENTOS_PRUEBA;

    if (intentoActual >= totalIntentos) {
        if (modoPractica) {
            finalizarPractica();
        } else {
            finalizarPruebaConcentracion();
        }
        return;
    }

    respuestaBloqueada = false;

    const estimulo = crearEstimuloStroop();

    zonaJuego.innerHTML = `
        <div class="tarjeta-stroop">
            <p class="instruccion-stroop">¿De qué color es la tinta?</p>

            <div
                class="palabra-stroop"
                style="color: ${estimulo.tinta.codigo}"
                aria-label="Palabra ${estimulo.palabra} escrita en color ${estimulo.tinta.nombre}"
            >
                ${estimulo.palabra}
            </div>

            <div class="opciones-stroop" role="group" aria-label="Opciones de color">
                ${COLORES_STROOP.map(function (color) {
                    return `
                        <button
                            type="button"
                            class="boton-color-stroop"
                            data-color="${color.nombre}"
                            style="--color-boton: ${color.codigo}"
                        >
                            ${color.nombre}
                        </button>
                    `;
                }).join("")}
            </div>
        </div>
    `;

    zonaJuego.querySelectorAll(".boton-color-stroop").forEach(function (boton) {
        boton.addEventListener("click", function () {
            registrarRespuestaStroop(
                boton.dataset.color,
                estimulo.tinta.nombre
            );
        });
    });

    momentoAparicion = performance.now();
    actualizarMarcadores();
}

function registrarRespuestaStroop(colorElegido, colorCorrecto) {
    if (!pruebaActiva || respuestaBloqueada) {
        return;
    }

    respuestaBloqueada = true;

    const tiempoReaccion = Math.round(
        performance.now() - momentoAparicion
    );

    const esCorrecta = colorElegido === colorCorrecto;

    if (modoPractica) {
        mensajeJuego.textContent = esCorrecta
            ? `¡Correcto! La tinta era ${colorCorrecto}.`
            : `La tinta era ${colorCorrecto}. Recuerda ignorar la palabra.`;
    } else {
        tiemposReaccion.push(tiempoReaccion);

        if (esCorrecta) {
            respuestasCorrectas++;
            mensajeJuego.textContent = `¡Correcto! ${tiempoReaccion} ms`;
        } else {
            erroresStroop++;
            mensajeJuego.textContent = `Incorrecto. La tinta era ${colorCorrecto}.`;
        }
    }

    mostrarEfectoZona(esCorrecta ? "acierto" : "error");

    intentoActual++;
    actualizarMarcadores();

    zonaJuego.querySelectorAll(".boton-color-stroop").forEach(function (boton) {
        boton.disabled = true;

        if (boton.dataset.color === colorCorrecto) {
            boton.classList.add("respuesta-correcta");
        }
    });

    temporizadorSiguiente = setTimeout(
        mostrarSiguienteEstimuloStroop,
        PAUSA_ENTRE_ESTIMULOS
    );
}

function actualizarMarcadores() {
    const totalIntentos = modoPractica
        ? TOTAL_INTENTOS_PRACTICA
        : TOTAL_INTENTOS_PRUEBA;

    tiempoJuegoTexto.textContent = intentoActual + "/" + totalIntentos;

    if (modoPractica) {
        aciertosJuegoTexto.textContent = "--";
        erroresJuegoTexto.textContent = "--";
    } else {
        aciertosJuegoTexto.textContent = respuestasCorrectas;
        erroresJuegoTexto.textContent = erroresStroop;
    }
}

function finalizarPractica() {
    pruebaActiva = false;
    clearTimeout(temporizadorSiguiente);

    tituloJuego.textContent = "¡PRÁCTICA COMPLETADA!";
    mensajeJuego.textContent =
        "Ahora comenzarás la prueba real. Estas respuestas sí se guardarán.";

    zonaJuego.innerHTML = `
        <div class="fin-practica-stroop">
            <p>Recuerda: responde al color de la tinta, no a la palabra.</p>
            <button id="btnPruebaReal" type="button">Comenzar prueba real</button>
        </div>
    `;

    document.getElementById("btnPruebaReal").addEventListener("click", function () {
        modoPractica = false;
        intentoActual = 0;
        respuestasCorrectas = 0;
        erroresStroop = 0;
        tiemposReaccion = [];
        actualizarMarcadores();
        prepararCuentaRegresiva();
    });
}

function mostrarEfectoZona(tipo) {
    zonaJuego.classList.remove("acierto", "error");
    void zonaJuego.offsetWidth;
    zonaJuego.classList.add(tipo);

    setTimeout(function () {
        zonaJuego.classList.remove(tipo);
    }, 230);
}

function finalizarPruebaConcentracion() {
    if (!pruebaActiva) {
        return;
    }

    pruebaActiva = false;
    clearTimeout(temporizadorSiguiente);

    calcularResultadoConcentracion();
    mostrarResultadoConcentracion();
}

function calcularResultadoConcentracion() {
    const totalRespuestas = respuestasCorrectas + erroresStroop;

    const sumaTiempos = tiemposReaccion.reduce(function (total, tiempo) {
        return total + tiempo;
    }, 0);

    const tiempoPromedio = tiemposReaccion.length > 0
        ? Math.round(sumaTiempos / tiemposReaccion.length)
        : 0;

    const mejorTiempo = tiemposReaccion.length > 0
        ? Math.min(...tiemposReaccion)
        : 0;

    const precision = totalRespuestas > 0
        ? Math.round((respuestasCorrectas / totalRespuestas) * 100)
        : 0;

    resultadoConcentracion = {
        aciertos: respuestasCorrectas,
        errores: erroresStroop,
        precision: precision,
        tiempoPromedio: tiempoPromedio,
        mejorTiempo: mejorTiempo
    };
}

function mostrarResultadoConcentracion() {
    tituloJuego.textContent = "Resultado de la prueba Stroop";
    mensajeJuego.textContent =
        "Estos resultados pertenecen al proyecto y no constituyen un diagnóstico médico.";

    zonaJuego.innerHTML = `
        <div class="resultado-concentracion">
            <p>Precisión obtenida</p>

            <div class="puntaje-grande">
                ${resultadoConcentracion.precision}%
            </div>

            <div class="estadisticas-juego">
                <div class="estadistica-juego">
                    <span>Aciertos</span>
                    <strong>${resultadoConcentracion.aciertos}</strong>
                </div>

                <div class="estadistica-juego">
                    <span>Errores</span>
                    <strong>${resultadoConcentracion.errores}</strong>
                </div>

                <div class="estadistica-juego">
                    <span>Precisión</span>
                    <strong>${resultadoConcentracion.precision}%</strong>
                </div>

                <div class="estadistica-juego">
                    <span>Promedio</span>
                    <strong>${resultadoConcentracion.tiempoPromedio} ms</strong>
                </div>

                <div class="estadistica-juego">
                    <span>Mejor reacción</span>
                    <strong>${resultadoConcentracion.mejorTiempo} ms</strong>
                </div>
            </div>

            <button id="btnFinalizarTodo" type="button">
                Finalizar y guardar resultados
            </button>
        </div>
    `;

    const botonFinalizarTodo = document.getElementById("btnFinalizarTodo");

    botonFinalizarTodo.addEventListener("click", function () {
        botonFinalizarTodo.disabled = true;
        botonFinalizarTodo.textContent = "Guardando resultados...";

        enviarResultadosCompletosAGoogleSheets();

        setTimeout(function () {
            botonFinalizarTodo.textContent = "Resultados guardados";
            mensajeJuego.textContent =
                "La prueba terminó y los resultados fueron enviados.";
        }, 1200);
    });
}
// CONEXIÓN COMPLETA CON GOOGLE SHEETS

let resultadosYaEnviados = false;
// Buscar una respuesta por su campo
function obtenerRespuestaPorCampo(
    campoBuscado
) {

    const respuestaEncontrada =
        respuestas.find(
            function (respuesta) {

                return (
                    respuesta.campo ===
                    campoBuscado
                );
            }
        );

    if (!respuestaEncontrada) {

        return {
            respuesta: "",
            valor: ""
        };
    }

    return {
        respuesta:
            respuestaEncontrada.respuesta,

        valor:
            respuestaEncontrada.valor
    };
}
// Enviar cuestionario y juego juntos
function enviarResultadosCompletosAGoogleSheets() {

    if (resultadosYaEnviados) {
        return;
    }

    resultadosYaEnviados = true;

    const respuestaEdad = obtenerRespuestaPorCampo("edad");

    const minutosOcultos = respuestas.reduce(
        function (total, respuesta) {
            if (typeof respuesta.valor === "number") {
                return total + respuesta.valor;
            }

            return total;
        },
        0
    );

    let horasEstimadas = 1;

    if (minutosOcultos >= 270) {
        horasEstimadas = 5;
    } else if (minutosOcultos >= 210) {
        horasEstimadas = 4;
    } else if (minutosOcultos >= 150) {
        horasEstimadas = 3;
    } else if (minutosOcultos >= 90) {
        horasEstimadas = 2;
    }

    const datos = {
        nombre: nombreInput.value.trim(),
        edad: respuestaEdad.respuesta,
        horasEstimadas: horasEstimadas,


        concentracion: {
            prueba: "Stroop",
            tiempoPromedio: resultadoConcentracion.tiempoPromedio,
            mejorTiempo: resultadoConcentracion.mejorTiempo,
            aciertos: resultadoConcentracion.aciertos,
            errores: resultadoConcentracion.errores,
            precision: resultadoConcentracion.precision
        },

    };

    fetch(URL_GOOGLE_SHEETS, {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "text/plain;charset=utf-8"
        },
        body: JSON.stringify(datos)
    })
    .then(function () {
        console.log("Resultados enviados a Google Sheets.");
    })
    .catch(function (error) {
        resultadosYaEnviados = false;
        console.error("No se pudieron enviar los resultados:", error);
        alert("No se pudieron guardar los resultados.");
    });
}



