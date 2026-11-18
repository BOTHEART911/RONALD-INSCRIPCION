/* ============================================================
   marca.js — INSCRIPCIONES · RONALD SUAREZ · app pública
   ------------------------------------------------------------
   ESTE ES EL ARCHIVO QUE SE EDITA AL REPLICAR LA CAMPAÑA.
   Todo lo que cambia de un candidato a otro vive aquí; el resto
   del código no se toca.

   Se carga ANTES que storage-ns.js y que la app (y el service
   worker lo trae con importScripts), así que no puede depender
   de nada: solo datos.
   ============================================================ */
(function (raiz) {
  'use strict';

  raiz.MARCA = {

    /* Prefijo de almacenamiento de ESTA campaña. Las apps de todas
       las campañas viven en el mismo origen (botheart911.github.io)
       y comparten localStorage y caché: sin un prefijo propio se
       pisan sesiones, PIN, token de notificaciones y caché.
       Corto, en minúsculas y único por campaña. Ej.: 'adri'. */
    STORAGE_NS: 'rs',

    /* ---- Respaldo de marca ----------------------------------------
       El valor REAL vive en la hoja CONFIG del CORE y llega por el
       endpoint app.marca (marca-vivo.js). Esto es solo el respaldo
       para el primer arranque, sin red o con el CORE caído.
       Al replicar: poner aquí los datos de la campaña nueva. */
    CANDIDATO:    'Ronald Suarez',
    PN_CANDIDATO: 'Ronald',
    MUNICIPIO:    'Honda',
    DEPARTAMENTO: 'Tolima',
    LEMA:         'Honda Piensa en Grande',
    EQUIPO:       'Soy Ronalista',
    COLOR:        '#007BFF',
    COLOR_700:    '#0056B3',

    /* ---- Firebase (solo la app pública: notificaciones) -----------
       NO es marca: es infraestructura, y cada campaña necesita su
       PROPIO proyecto de Firebase (si no, los push de dos campañas
       caen en el mismo sitio). Estos valores los usa la página y el
       service worker de notificaciones, que trae este archivo con
       importScripts. Al replicar hay que crear el proyecto nuevo y
       pegar aquí su configuración, más la clave VAPID. */
    FIREBASE: {
      apiKey: "AIzaSyAa0qmJXDTMxrBYybLZS66akyYYzOcuVpE",
      authDomain: "project-61fbbccc-d656-4de1-b77.firebaseapp.com",
      databaseURL: "https://project-61fbbccc-d656-4de1-b77-default-rtdb.firebaseio.com",
      projectId: "project-61fbbccc-d656-4de1-b77",
      storageBucket: "project-61fbbccc-d656-4de1-b77.firebasestorage.app",
      messagingSenderId: "1026629550775",
      appId: "1:1026629550775:web:1188049013c1a8c1f24332"
    },

    /* Clave pública VAPID del MISMO proyecto de Firebase (Consola →
       Configuración del proyecto → Cloud Messaging → Certificados push
       web). Es pública por diseño. Sin ella el teléfono no se suscribe
       a los avisos. */
    FB_VAPID: 'BBI6uvC2Ox2cV8tncSNOkweANuiP3zite0uTPGFoBu-VlE8WOQxrz3nCzXXi_QF6rpeqBMsHfxLrZ_lwF2DX7Hw',


    /* URL del Web App del backend (RONALD CORE, /exec). La MISMA
       para todas las apps de una campaña. */
    API_URL: 'https://script.google.com/macros/s/AKfycbyhmOyfCURFpxDMo-mN0FHYril7vxPDUjV410rzfwzvdfTFgGkdlaL88-1TayV5B0m7cQ/exec',

    /* Carpeta web donde viven las imagenes COMPARTIDAS de la campana
       (logo, banner, foto por defecto). Termina en /.
       Sirve para que las llaves de imagen puedan guardar solo el nombre
       del archivo; el dia que cambie el hosting se cambia ESTO y no cada
       URL, una por una. Un valor que ya sea una URL completa pasa intacto,
       asi que ponerla aqui no cambia nada por si sola.
       El valor REAL puede llegar en caliente del CORE (MARCA_IMG_BASE);
       esto es el respaldo. Resolver: MV.img('logo.png'). */
    IMG_BASE: 'https://botheart911.github.io/IMAGENES-RONALD/',

    /* Ícono cuadrado (logo) y banner horizontal. Los usa la app en
       login, credencial, marca de agua y pie de página.
       OJO: el ícono TAMBIÉN está escrito a mano en index.html
       (favicon, apple-touch-icon y splash) y en manifest.json —
       eso hay que cambiarlo aparte, ver el checklist. */
    APP_ICON:   'https://botheart911.github.io/IMAGENES-RONALD/marca/logo.png',
    APP_BANNER: 'https://botheart911.github.io/IMAGENES-RONALD/marca/banner.png'
  };

})(typeof self !== 'undefined' ? self : this);
