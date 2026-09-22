/*
   Nombre de la memoria caché que utilizaremos.

   La caché permite guardar archivos de nuestra
   página para poder utilizarlos posteriormente
   incluso cuando no tengamos conexión.
*/
const CACHE_NAME = "10dsm-pwa-v1";


/*
   Lista de archivos que queremos guardar
   en la caché.
*/
const archivos = [

    /* Página principal */
    "./",

    /* Archivo HTML */
    "./index.html",

    /* Archivo CSS */
    "./style.css",

    /* Archivo JavaScript */
    "./app.js",

    /* Archivo Manifest */
    "./manifest.json",

    "./iconos/icon-192x192.png",

];

/*
   El evento "install" se ejecuta cuando
   se instala el Service Worker.
*/
self.addEventListener("install", function(event) {

    /*
       Esperamos hasta que todos los archivos
       sean guardados en la caché.
    */
    event.waitUntil(

        /* Abrimos nuestra caché */
        caches.open(CACHE_NAME)

            /* Guardamos los archivos */
            .then(function(cache) {

                return cache.addAll(archivos);

            })

    );

});

/*
   El evento "fetch" se ejecuta cuando la página
   solicita un archivo, una imagen o algún recurso.
*/
self.addEventListener("fetch", function(event) {

    /*
       Primero buscamos el archivo en la caché.
    */
    event.respondWith(

        caches.match(event.request)

            .then(function(respuesta) {

                /*
                   Si el archivo existe en la caché,
                   utilizamos la versión guardada.
                */
                if (respuesta) {

                    return respuesta;

                }

                /*
                   Si no está en la caché,
                   lo solicitamos desde Internet.
                */
                return fetch(event.request);

            })

    );

});