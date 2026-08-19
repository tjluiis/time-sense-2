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
    "https://script.google.com/macros/s/AKfycbz1SBir_qKL9iJIYRfjqsrVy4HtaxgwQGhoy_QZHprNWWuCfNlDr_2A5N38flIGowlM/exec";
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
            { texto: "Lo reviso después de arreglarme", valor: 5 },
            { texto: "Lo reviso brevemente desde la cama", valor: 10 },
            { texto: "Permanezco un rato usándolo antes de levantarme", valor: 20 },
            { texto: "Es lo primero que hago y sigo usándolo bastante tiempo", valor: 40 }
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
            { texto: "Permanezco bastante tiempo utilizándolo", valor: 35 },
            { texto: "Lo utilizo hasta quedarme dormido", valor: 60 }
        ]
    },

    // 3. COMIDAS
    {
        campo: "usoDuranteComidas",
        texto: "Cuando te sientas a comer, normalmente...",
        tipo: "una",
        opciones: [
            { texto: "Dejo el celular lejos de la mesa", valor: 0 },
            { texto: "Lo tengo cerca, pero no lo utilizo", valor: 2 },
            { texto: "Lo reviso una o dos veces", valor: 5 },
            { texto: "Lo utilizo durante parte de la comida", valor: 12 },
            { texto: "Lo utilizo durante casi toda la comida", valor: 25 }
        ]
    },

    // 4. BAÑO
    {
        campo: "usoEnBano",
        texto: "Cuando vas al baño, ¿qué suele ocurrir con tu celular?",
        tipo: "una",
        opciones: [
            { texto: "Lo dejo fuera", valor: 0 },
            { texto: "Lo llevo conmigo, pero no lo reviso", valor: 2 },
            { texto: "Lo reviso rápidamente", valor: 5 },
            { texto: "Lo utilizo durante buena parte del tiempo", valor: 12 },
            { texto: "Lo utilizo prácticamente todo el tiempo", valor: 25 }
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
            { texto: "Retraso bastante el inicio de la tarea", valor: 20 },
            { texto: "Termino usando el celular y dejo la tarea para después", valor: 40 }
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
            { texto: "Miro quién escribió y continúo", valor: 5 },
            { texto: "Respondo y reviso otras aplicaciones", valor: 12 },
            { texto: "Dejo de estudiar y continúo usando el celular", valor: 25 }
        ]
    },

    // 7. INTERRUPCIONES EN UNA TAREA
    {
        campo: "interrupcionesDuranteTarea",
        texto: "Mientras realizas una tarea, normalmente...",
        tipo: "una",
        opciones: [
            { texto: "No reviso el celular hasta terminar", valor: 0 },
            { texto: "Lo reviso una sola vez", valor: 5 },
            { texto: "Lo reviso varias veces brevemente", valor: 10 },
            { texto: "Interrumpo frecuentemente la tarea", valor: 25 },
            { texto: "Paso largos periodos usándolo", valor: 45 }
        ]
    },

    // 8. VIDEOS CORTOS
    {
        campo: "usoVideosCortos",
        texto: "Cuando empiezas a ver videos cortos...",
        tipo: "una",
        opciones: [
            { texto: "Veo uno y cierro la aplicación", valor: 3 },
            { texto: "Veo algunos videos y salgo", valor: 10 },
            { texto: "Permanezco un rato mirando videos", valor: 25 },
            { texto: "Pierdo la noción del tiempo", valor: 45 },
            { texto: "Continúo hasta que algo me obliga a detenerme", valor: 75 }
        ]
    },

    // 9. REDES SOCIALES
    {
        campo: "sesionRedesSociales",
        texto: "Cuando entras a una red social para revisar algo...",
        tipo: "una",
        opciones: [
            { texto: "Reviso lo necesario y cierro", valor: 3 },
            { texto: "Miro algunas publicaciones adicionales", valor: 10 },
            { texto: "Paso un rato recorriendo contenido", valor: 20 },
            { texto: "Cambio entre varias secciones o perfiles", valor: 40 },
            { texto: "Permanezco mucho más tiempo del que pensaba", valor: 60 }
        ]
    },

    // 10. JUEGOS EN EL CELULAR
    {
        campo: "usoJuegos",
        texto: "Cuando juegas en el celular y termina una partida...",
        tipo: "una",
        opciones: [
            { texto: "No juego en el celular", valor: 0 },
            { texto: "Cierro el juego al terminar", valor: 10 },
            { texto: "Juego una partida adicional", valor: 20 },
            { texto: "Juego varias partidas seguidas", valor: 45 },
            { texto: "Sigo jugando hasta que debo hacer otra cosa", valor: 90 }
        ]
    },

    // 11. MENSAJES
    {
        campo: "usoMensajeria",
        texto: "Cuando respondes un mensaje, normalmente...",
        tipo: "una",
        opciones: [
            { texto: "Respondo lo necesario y cierro", valor: 3 },
            { texto: "Intercambio algunos mensajes", valor: 8 },
            { texto: "Continúo conversando durante un rato", valor: 20 },
            { texto: "Entro también a otros chats o aplicaciones", valor: 40 },
            { texto: "Permanezco conversando por mucho tiempo", valor: 60 }
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
            { texto: "Puedo permanecer mucho tiempo usándolo sin notarlo", valor: 40 }
        ]
    },

    // 13. TRANSPORTE
    {
        campo: "usoEnTransporte",
        texto: "Cuando viajas como pasajero...",
        tipo: "una",
        opciones: [
            { texto: "Observo el camino o converso", valor: 0 },
            { texto: "Reviso el celular solo al inicio o al final", valor: 5 },
            { texto: "Lo utilizo por momentos", valor: 15 },
            { texto: "Lo utilizo durante buena parte del trayecto", valor: 30 },
            { texto: "Lo utilizo prácticamente durante todo el trayecto", valor: 60 }
        ]
    },

    // 14. CAMBIO ENTRE APLICACIONES
    {
        campo: "cambioEntreAplicaciones",
        texto: "Después de terminar lo que ibas a hacer en una aplicación...",
        tipo: "una",
        opciones: [
            { texto: "Cierro el celular", valor: 0 },
            { texto: "A veces reviso una aplicación más", valor: 5 },
            { texto: "Suelo abrir otra aplicación", valor: 10 },
            { texto: "Paso por varias aplicaciones", valor: 20 },
            { texto: "Sigo cambiando de aplicación sin un objetivo claro", valor: 40 }
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

    // =========================================
// TIEMPO ESTIMADO DE USO DEL CELULAR
// =========================================

const minutosEstimados = puntajeHabitos;

const horasEstimadas =
    Math.floor(minutosEstimados / 60);

const minutosSobrantes =
    minutosEstimados % 60;


// =========================================
// NIVEL SEGÚN HORAS ESTIMADAS
// =========================================

let nivelUso = 1;

// Menos de 2 horas = MUY BAJO
if (minutosEstimados < 120) {

    nivelUso = 1;

// De 2 a menos de 4 horas = BAJO
} else if (minutosEstimados < 240) {

    nivelUso = 2;

// De 4 a menos de 6 horas = MODERADO
} else if (minutosEstimados < 360) {

    nivelUso = 3;

// De 6 a menos de 8 horas = ALTO
} else if (minutosEstimados < 480) {

    nivelUso = 4;

// 8 horas o más = MUY ALTO
} else {

    nivelUso = 5;
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
let textoTiempoEstimado = "";

if (horasEstimadas > 0) {

    textoTiempoEstimado =
        horasEstimadas +
        (horasEstimadas === 1 ? " hora" : " horas");

    if (minutosSobrantes > 0) {

        textoTiempoEstimado +=
            " y " +
            minutosSobrantes +
            " minutos";
    }

} else {

    textoTiempoEstimado =
        minutosSobrantes +
        " minutos";
}
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
const resultadoTiempo =
    document.createElement("p");

resultadoTiempo.textContent =
    "Tiempo estimado de uso diario: " +
    textoTiempoEstimado +
    ".";

opciones.appendChild(
    resultadoTiempo
);
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

// BOTÓN PARA INICIAR LA PRUEBA

// PRUEBA DE ATENCIÓN SOSTENIDA TIPO PVT

const DURACION_PRUEBA = 90;

const ESPERA_MINIMA = 2000;
const ESPERA_MAXIMA = 6000;

const TIEMPO_MAXIMO_RESPUESTA = 1500;
const LIMITE_LAPSO = 650;

// PRÁCTICA ANTES DE LA PRUEBA
let modoPractica = false;
let intentosPractica = 0;
const TOTAL_INTENTOS_PRACTICA = 3;

// VARIABLES DE CONTROL

let pruebaActiva = false;

let esperandoEstimulo = false;
let estimuloVisible = false;
let anticipacionRegistrada = false;

let segundosRestantes =
    DURACION_PRUEBA;

let momentoFinalPrueba = 0;
let momentoAparicion = 0;

let temporizadorEspera = null;
let temporizadorOmision = null;

let intervaloReloj = null;
let intervaloContador = null;


// RESULTADOS DE LA PRUEBA

let respuestasCorrectas = 0;
let anticipaciones = 0;
let omisiones = 0;
let lapsosAtencion = 0;

let tiemposReaccion = [];

let resultadoConcentracion = {
    aciertos: 0,
    errores: 0,
    perdidos: 0,
    tiempoPromedio: 0,
    mejorTiempo: 0,
    lapsos: 0,
    anticipaciones: 0,
    puntaje: 0,
    nivel: ""
};

// BOTÓN PARA INICIAR

botonIniciarPrueba.addEventListener(
    "click",
    function () {

        pantallaInstrucciones.style.display = "none";
        pantallaJuego.style.display = "block";

        reiniciarDatosPrueba();

        modoPractica = true;
        intentosPractica = 0;

        tituloJuego.textContent = "MODO PRÁCTICA";
        mensajeJuego.textContent =
            "Harás 3 intentos de práctica. Estos resultados no se guardarán.";

        tiempoJuegoTexto.textContent = "--";
        aciertosJuegoTexto.textContent = "0";
        erroresJuegoTexto.textContent = "0";

        prepararCuentaRegresiva();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
);


// DETECTAR TOQUES ANTICIPADOS

zonaJuego.addEventListener(
    "pointerdown",
    function (evento) {

        if (!pruebaActiva) {
            return;
        }

        if (
            evento.target.classList.contains(
                "estimulo-pvt"
            )
        ) {
            return;
        }

        if (
            esperandoEstimulo &&
            !anticipacionRegistrada
        ) {
            anticipacionRegistrada = true;

            anticipaciones++;

            erroresJuegoTexto.textContent =
                anticipaciones;

            mensajeJuego.textContent =
                "Observa con atencion la pantalla.";

            mostrarEfectoZona(
                "error"
            );
        }
    }
);


// CUENTA REGRESIVA

function prepararCuentaRegresiva() {

    let numeroCuenta = 3;

    zonaJuego.innerHTML = "";

    cuentaRegresiva.style.display = "block";
    cuentaRegresiva.textContent = numeroCuenta;

    zonaJuego.appendChild(cuentaRegresiva);

    tituloJuego.textContent =
        modoPractica
            ? "Prepárate para practicar"
            : "Prepárate";

    mensajeJuego.textContent =
        modoPractica
            ? "Primero harás 3 intentos de práctica."
            : "La prueba real está a punto de comenzar.";

    const intervaloCuenta =
        setInterval(function () {

            numeroCuenta--;

            if (numeroCuenta > 0) {

                cuentaRegresiva.textContent =
                    numeroCuenta;

                return;
            }

            if (numeroCuenta === 0) {

                cuentaRegresiva.textContent =
                    "¡YA!";

                return;
            }

            clearInterval(intervaloCuenta);

            cuentaRegresiva.style.display =
                "none";

            if (modoPractica) {

                comenzarPractica();

            } else {

                comenzarPruebaConcentracion();
            }

        }, 800);
}

// REINICIAR LOS DATOS

function reiniciarDatosPrueba() {

    pruebaActiva = false;

    esperandoEstimulo = false;
    estimuloVisible = false;
    anticipacionRegistrada = false;

    segundosRestantes =
        DURACION_PRUEBA;

    respuestasCorrectas = 0;
    anticipaciones = 0;
    omisiones = 0;
    lapsosAtencion = 0;

    tiemposReaccion = [];

    resultadoConcentracion = {
        aciertos: 0,
        errores: 0,
        perdidos: 0,
        tiempoPromedio: 0,
        mejorTiempo: 0,
        lapsos: 0,
        anticipaciones: 0,
        puntaje: 0,
        nivel: ""
    };

    tiempoJuegoTexto.textContent =
        DURACION_PRUEBA;

    aciertosJuegoTexto.textContent =
        "0";

    erroresJuegoTexto.textContent =
        "0";

    tituloJuego.textContent =
        "Espera la señal";

    mensajeJuego.textContent =
        "Toca únicamente cuando aparezca el contador.";

    zonaJuego.innerHTML = "";

    zonaJuego.appendChild(
        cuentaRegresiva
    );
}
// =========================================
// MODO PRÁCTICA
// =========================================

function comenzarPractica() {

    pruebaActiva = true;
    intentosPractica = 0;

    tiempoJuegoTexto.textContent = "--";
    aciertosJuegoTexto.textContent = "0";
    erroresJuegoTexto.textContent = "0";

    tituloJuego.textContent = "MODO PRÁCTICA";

    mensajeJuego.textContent =
        "Espera la señal y toca los números cuando aparezcan.";

    programarSiguienteEstimulo();
}


// TERMINAR LA PRÁCTICA

function finalizarPractica() {

    pruebaActiva = false;
    esperandoEstimulo = false;
    estimuloVisible = false;

    clearTimeout(temporizadorEspera);
    clearTimeout(temporizadorOmision);
    clearInterval(intervaloContador);

    zonaJuego.innerHTML = "";

    tituloJuego.textContent =
        "¡PRÁCTICA COMPLETADA!";

    mensajeJuego.textContent =
        "Ya sabes cómo funciona. A partir de ahora tus respuestas sí contarán para el resultado.";

    const botonPruebaReal =
        document.createElement("button");

    botonPruebaReal.type = "button";

    botonPruebaReal.textContent =
        "Comenzar prueba real";

    zonaJuego.appendChild(
        botonPruebaReal
    );

    botonPruebaReal.addEventListener(
        "click",
        function () {

            modoPractica = false;

            reiniciarDatosPrueba();

            tituloJuego.textContent =
                "Prepárate";

            mensajeJuego.textContent =
                "Ahora comienza la prueba real.";

            prepararCuentaRegresiva();
        }
    );
}
// COMENZAR LA PRUEBA

function comenzarPruebaConcentracion() {

    pruebaActiva = true;

    momentoFinalPrueba =
        performance.now() +
        DURACION_PRUEBA * 1000;

    intervaloReloj =
        setInterval(function () {

            const tiempoPendiente =
                momentoFinalPrueba -
                performance.now();

            segundosRestantes =
                Math.max(
                    0,
                    Math.ceil(
                        tiempoPendiente / 1000
                    )
                );

            tiempoJuegoTexto.textContent =
                segundosRestantes;

            if (tiempoPendiente <= 0) {

                finalizarPruebaConcentracion();
            }

        }, 100);

    programarSiguienteEstimulo();
}

// PREPARAR LA SIGUIENTE SEÑAL

function programarSiguienteEstimulo() {
    // Evitar que queden temporizadores anteriores activos
    clearTimeout(temporizadorEspera);
    clearTimeout(temporizadorOmision);
    clearInterval(intervaloContador);

    temporizadorEspera = null;
    temporizadorOmision = null;
    intervaloContador = null;
    if (!pruebaActiva) {
        return;
    }

    esperandoEstimulo = true;
    estimuloVisible = false;
    anticipacionRegistrada = false;

    tituloJuego.textContent =
        "Espera la señal";

    mensajeJuego.textContent =
        "Mantén la atención en el centro.";

    zonaJuego.innerHTML =
        '<div class="punto-espera">+</div>';

    const espera =
        ESPERA_MINIMA +
        Math.random() *
        (
            ESPERA_MAXIMA -
            ESPERA_MINIMA
        );

    temporizadorEspera =
        setTimeout(function () {

            mostrarEstimuloPVT();

        }, espera);
}

// MOSTRAR EL CONTADOR

function mostrarEstimuloPVT() {

    if (!pruebaActiva) {
        return;
    }

    esperandoEstimulo = false;
    estimuloVisible = true;

    momentoAparicion =
        performance.now();

    tituloJuego.textContent =
        "¡TOCA AHORA!";

    mensajeJuego.textContent =
        "Toca los números lo más rápido posible.";

    const estimulo =
        document.createElement(
            "button"
        );

    estimulo.type =
        "button";

    estimulo.className =
        "estimulo-pvt";

    estimulo.textContent =
        "000";

    zonaJuego.innerHTML =
        "";

    zonaJuego.appendChild(
        estimulo
    );
estimulo.style.position = "absolute";

const margen = 12;

const espacioHorizontal =
    zonaJuego.clientWidth -
    estimulo.offsetWidth -
    margen * 2;

const espacioVertical =
    zonaJuego.clientHeight -
    estimulo.offsetHeight -
    margen * 2;

const posicionX =
    margen +
    Math.random() *
    Math.max(0, espacioHorizontal);

const posicionY =
    margen +
    Math.random() *
    Math.max(0, espacioVertical);

estimulo.style.left =
    posicionX + "px";

estimulo.style.top =
    posicionY + "px";

    intervaloContador =
        setInterval(function () {

            const tiempoVisible =
                Math.round(
                    performance.now() -
                    momentoAparicion
                );

            estimulo.textContent =
                String(
                    tiempoVisible
                ).padStart(
                    3,
                    "0"
                );

        }, 16);

    estimulo.addEventListener(
        "pointerdown",
        function (evento) {

            evento.preventDefault();

            evento.stopPropagation();

            registrarRespuestaPVT();
        },
        {
            once: true
        }
    );

    temporizadorOmision =
        setTimeout(function () {

            registrarOmisionPVT();

        }, TIEMPO_MAXIMO_RESPUESTA);
}


// REGISTRAR UNA RESPUESTA

function registrarRespuestaPVT() {

    if (
        !pruebaActiva ||
        !estimuloVisible
    ) {
        return;
    }

    const tiempoReaccion =
        Math.round(
            performance.now() -
            momentoAparicion
        );

    estimuloVisible = false;

    clearTimeout(
        temporizadorOmision
    );

    clearInterval(
        intervaloContador
    );


    // =====================================
    // SI ESTAMOS EN MODO PRÁCTICA
    // =====================================

    if (modoPractica) {

        intentosPractica++;

        zonaJuego.innerHTML =
            '<div class="resultado-reaccion">' +
            tiempoReaccion +
            " ms</div>";

        aciertosJuegoTexto.textContent =
            intentosPractica +
            "/" +
            TOTAL_INTENTOS_PRACTICA;

        mensajeJuego.textContent =
            "¡Bien! Ese fue tu intento de práctica.";

        mostrarEfectoZona("acierto");

        if (
            intentosPractica >=
            TOTAL_INTENTOS_PRACTICA
        ) {

            setTimeout(function () {
                finalizarPractica();
            }, 900);

        } else {

            setTimeout(function () {
                programarSiguienteEstimulo();
            }, 900);
        }

        return;
    }


    // =====================================
    // DESDE AQUÍ CUENTA PARA LA PRUEBA REAL
    // =====================================

    tiemposReaccion.push(
        tiempoReaccion
    );

    respuestasCorrectas++;

    if (
        tiempoReaccion >=
        LIMITE_LAPSO
    ) {
        lapsosAtencion++;
    }

    aciertosJuegoTexto.textContent =
        respuestasCorrectas;

    zonaJuego.innerHTML =
        '<div class="resultado-reaccion">' +
        tiempoReaccion +
        " ms</div>";

    if (
        tiempoReaccion >=
        LIMITE_LAPSO
    ) {

        mensajeJuego.textContent =
            "Respuesta registrada. Intenta mantener la atención.";

    } else {

        mensajeJuego.textContent =
            "Respuesta registrada.";
    }

    mostrarEfectoZona(
        "acierto"
    );

    setTimeout(function () {
        programarSiguienteEstimulo();
    }, 650);
}
// REGISTRAR UNA OMISIÓN

function registrarOmisionPVT() {

    if (
        !pruebaActiva ||
        !estimuloVisible
    ) {
        return;
    }

    estimuloVisible = false;

    omisiones++;
    lapsosAtencion++;

    clearInterval(
        intervaloContador
    );

    zonaJuego.innerHTML =
        '<div class="resultado-reaccion perdida">' +
        "Sin respuesta" +
        "</div>";

    mensajeJuego.textContent =
        "No respondiste a tiempo. Espera la siguiente señal.";

    mostrarEfectoZona(
        "error"
    );

    setTimeout(function () {

        programarSiguienteEstimulo();

    }, 650);
}


// =========================================
// EFECTO VISUAL
// =========================================

function mostrarEfectoZona(tipo) {

    zonaJuego.classList.remove(
        "acierto",
        "error"
    );

    void zonaJuego.offsetWidth;

    zonaJuego.classList.add(
        tipo
    );

    setTimeout(function () {

        zonaJuego.classList.remove(
            tipo
        );

    }, 230);
}


// TERMINAR LA PRUEBA

function finalizarPruebaConcentracion() {

    if (!pruebaActiva) {
        return;
    }

    pruebaActiva = false;

    esperandoEstimulo = false;
    estimuloVisible = false;

    clearInterval(
        intervaloReloj
    );

    clearInterval(
        intervaloContador
    );

    clearTimeout(
        temporizadorEspera
    );

    clearTimeout(
        temporizadorOmision
    );

    segundosRestantes = 0;

    tiempoJuegoTexto.textContent =
        "0";

    calcularResultadoConcentracion();

    mostrarResultadoConcentracion();
}


// CALCULAR EL RESULTADO

function calcularResultadoConcentracion() {

    const sumaTiempos =
        tiemposReaccion.reduce(
            function (
                total,
                tiempo
            ) {
                return (
                    total +
                    tiempo
                );
            },
            0
        );

    const tiempoPromedio =
        tiemposReaccion.length > 0
            ? Math.round(
                sumaTiempos /
                tiemposReaccion.length
            )
            : 0;

    const mejorTiempo =
        tiemposReaccion.length > 0
            ? Math.min(
                ...tiemposReaccion
            )
            : 0;

    let puntuacionVelocidad = 0;

    if (tiempoPromedio > 0) {

        puntuacionVelocidad =
            100 -
            (
                tiempoPromedio -
                350
            ) *
            0.15;

        puntuacionVelocidad =
            Math.max(
                0,
                Math.min(
                    100,
                    puntuacionVelocidad
                )
            );
    }

    let puntaje =
        puntuacionVelocidad -
        lapsosAtencion * 4 -
        anticipaciones * 5 -
        omisiones * 6;

    puntaje =
        Math.round(
            Math.max(
                0,
                Math.min(
                    100,
                    puntaje
                )
            )
        );

    resultadoConcentracion = {
        aciertos:
            respuestasCorrectas,

        errores:
            anticipaciones,

        perdidos:
            omisiones,

        tiempoPromedio:
            tiempoPromedio,

        mejorTiempo:
            mejorTiempo,

        lapsos:
            lapsosAtencion,

        anticipaciones:
            anticipaciones,

        puntaje:
            puntaje,

        nivel:
            obtenerNivelConcentracion(
                puntaje
            )
    };
}


// CLASIFICAR EL RESULTADO

function obtenerNivelConcentracion(
    puntaje
) {

    if (puntaje >= 85) {
        return "Muy alta";
    }

    if (puntaje >= 70) {
        return "Alta";
    }

    if (puntaje >= 50) {
        return "Media";
    }

    if (puntaje >= 30) {
        return "Baja";
    }

    return "Muy baja";
}


// MOSTRAR EL RESULTADO

function mostrarResultadoConcentracion() {

    tituloJuego.textContent =
        "Resultado de atención sostenida";

    mensajeJuego.textContent =
        "Esta puntuación pertenece únicamente al proyecto y no es un diagnóstico médico.";

    zonaJuego.innerHTML = `
        <div class="resultado-concentracion">

            <p>
                Puntaje obtenido
            </p>

            <div class="puntaje-grande">
                ${resultadoConcentracion.puntaje}/100
            </div>

            <div class="nivel-concentracion">
                Atención ${resultadoConcentracion.nivel}
            </div>

            <div class="estadisticas-juego">

                <div class="estadistica-juego">
                    <span>Respuestas</span>

                    <strong>
                        ${resultadoConcentracion.aciertos}
                    </strong>
                </div>

                <div class="estadistica-juego">
                    <span>Promedio</span>

                    <strong>
                        ${resultadoConcentracion.tiempoPromedio} ms
                    </strong>
                </div>

                <div class="estadistica-juego">
                    <span>Mejor reacción</span>

                    <strong>
                        ${resultadoConcentracion.mejorTiempo} ms
                    </strong>
                </div>

                <div class="estadistica-juego">
                    <span>Lapsos</span>

                    <strong>
                        ${resultadoConcentracion.lapsos}
                    </strong>
                </div>

                <div class="estadistica-juego">
                    <span>Anticipaciones</span>

                    <strong>
                        ${resultadoConcentracion.anticipaciones}
                    </strong>
                </div>

                <div class="estadistica-juego">
                    <span>Sin respuesta</span>

                    <strong>
                        ${resultadoConcentracion.perdidos}
                    </strong>
                </div>

            </div>

            <button
                id="btnFinalizarTodo"
                type="button"
            >
                Finalizar y guardar resultados
            </button>

        </div>
    `;

    const botonFinalizarTodo =
        document.getElementById(
            "btnFinalizarTodo"
        );

    botonFinalizarTodo.addEventListener(
        "click",
        function () {

            botonFinalizarTodo.disabled =
                true;

            botonFinalizarTodo.textContent =
                "Guardando resultados...";

            enviarResultadosCompletosAGoogleSheets();

            setTimeout(function () {

                botonFinalizarTodo.textContent =
                    "Resultados guardados";

                mensajeJuego.textContent =
                    "La prueba terminó y los resultados fueron enviados.";

            }, 1200);
        }
    );
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

 const horasEstimadas =
    Math.round(
        (minutosOcultos / 60) * 100
    ) / 100;

let nivelUso = 1;

if (minutosOcultos < 120) {
    nivelUso = 1;
} else if (minutosOcultos < 240) {
    nivelUso = 2;
} else if (minutosOcultos < 360) {
    nivelUso = 3;
} else if (minutosOcultos < 480) {
    nivelUso = 4;
} else {
    nivelUso = 5;
}
   const datos = {
    nombre: nombreInput.value.trim(),
    edad: respuestaEdad.respuesta,

    horasEstimadas: horasEstimadas,
    nivelUso: nivelUso,

    concentracion: {
        tiempoPromedio: resultadoConcentracion.tiempoPromedio,
        mejorTiempo: resultadoConcentracion.mejorTiempo,
        lapsos: resultadoConcentracion.lapsos,
        anticipaciones: resultadoConcentracion.anticipaciones,
        omisiones: resultadoConcentracion.perdidos,
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


