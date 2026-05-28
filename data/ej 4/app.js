// ==========================================
// ARRAY ORIGINAL
// ==========================================

const librosOriginales = [

    {
        id: 1,
        nombre: "Don Quijote de la Mancha",
        autor: "Miguel de Cervantes",
        genero: "Novela clásica",
        editorial: "Penguin Clásicos",
        precio: "$85.000"
    },

    {
        id: 2,
        nombre: "Cien años de soledad",
        autor: "Gabriel García Márquez",
        genero: "Realismo mágico",
        editorial: "Editorial Sudamericana",
        precio: "$72.000"
    },

    {
        id: 3,
        nombre: "Orgullo y prejuicio",
        autor: "Jane Austen",
        genero: "Romance clásico",
        editorial: "Alba Editorial",
        precio: "$58.000"
    },

    {
        id: 4,
        nombre: "Crimen y castigo",
        autor: "Fiódor Dostoyevski",
        genero: "Novela psicológica",
        editorial: "Alianza Editorial",
        precio: "$69.000"
    },

    {
        id: 5,
        nombre: "La Odisea",
        autor: "Homero",
        genero: "Epopeya",
        editorial: "Gredos",
        precio: "$64.000"
    },

    {
        id: 6,
        nombre: "1984",
        autor: "George Orwell",
        genero: "Ciencia ficción",
        editorial: "Debolsillo",
        precio: "$61.000"
    },

    {
        id: 7,
        nombre: "El Principito",
        autor: "Antoine de Saint-Exupéry",
        genero: "Fábula",
        editorial: "Salamandra",
        precio: "$47.000"
    },

    {
        id: 8,
        nombre: "Drácula",
        autor: "Bram Stoker",
        genero: "Terror gótico",
        editorial: "Austral",
        precio: "$55.000"
    },

    {
        id: 9,
        nombre: "Moby Dick",
        autor: "Herman Melville",
        genero: "Aventura",
        editorial: "Anaya",
        precio: "$66.000"
    },

    {
        id: 10,
        nombre: "Hamlet",
        autor: "William Shakespeare",
        genero: "Tragedia",
        editorial: "Vicens Vives",
        precio: "$52.000"
    }

];


// ==========================================
// VERIFICAR LOCALSTORAGE
// ==========================================

let libros = [];

// Buscar si existen datos guardados

const datosGuardados =
localStorage.getItem("libros");


// SI EXISTEN DATOS

if(datosGuardados){

    libros = JSON.parse(datosGuardados);

    console.log(
        "Datos cargados desde LocalStorage"
    );

}else{

    // SI NO EXISTEN

    libros = librosOriginales;

    localStorage.setItem(
        "libros",
        JSON.stringify(libros)
    );

    console.log(
        "Datos guardados por primera vez"
    );
}


// ==========================================
// CAPTURAR CONTENEDOR
// ==========================================

const contenedor =
document.getElementById(
    "contenedorCards"
);


// ==========================================
// FUNCION PARA MOSTRAR LIBROS
// ==========================================

function mostrarLibros(){

    contenedor.innerHTML = "";

    libros.forEach(libro => {

        contenedor.innerHTML += `

            <div class="card">

                <div class="id-libro">
                    ID: ${libro.id}
                </div>

                <h2>
                    ${libro.nombre}
                </h2>

                <p class="info">
                    <span>Autor:</span>
                    ${libro.autor}
                </p>

                <p class="info">
                    <span>Género:</span>
                    ${libro.genero}
                </p>

                <p class="info">
                    <span>Editorial:</span>
                    ${libro.editorial}
                </p>

                <div class="precio">
                    ${libro.precio}
                </div>

            </div>

        `;
    });
}


// ==========================================
// MOSTRAR LIBROS
// ==========================================

mostrarLibros();


// ==========================================
// BOTON LIMPIAR DATOS
// ==========================================

const btnLimpiar =
document.getElementById(
    "btnLimpiar"
);


btnLimpiar.addEventListener(
    "click",
    () => {

        // BORRAR LOCALSTORAGE

        localStorage.removeItem("libros");

        // VACIAR ARRAY

        libros = [];

        // LIMPIAR HTML

        mostrarLibros();

        alert(
            "Datos eliminados correctamente"
        );
    }
);