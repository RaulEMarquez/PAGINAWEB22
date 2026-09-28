// ==========================================
// 1. INTERACTIVIDAD DE LA PÁGINA (BOTÓN)
// ==========================================

// Esperamos a que cargue todo el contenido del DOM antes de ejecutar el script
document.addEventListener('DOMContentLoaded', () => {
    // Obtenemos las referencias a los elementos del HTML
    const boton = document.getElementById('boton');
    const mensaje = document.getElementById('mensaje');

    // Verificamos que los elementos existan para evitar errores
    if (boton && mensaje) {
        // Agregamos un evento de 'click' al botón
        boton.addEventListener('click', () => {
            mensaje.textContent = '¡Hola! Gracias por interactuar con la PWA de 10DSM 🚀';
            // Opcional: le podemos dar un estilo dinámico o efecto simple
            mensaje.style.color = '#0066cc';
            mensaje.style.fontWeight = 'bold';
        });
    }
});

// ==========================================
// 2. REGISTRO DEL SERVICE WORKER (PARA LA PWA)
// ==========================================

// Comprobamos si el navegador soporta Service Workers
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then((registration) => {
                console.log('Service Worker registrado con éxito:', registration.scope);
            })
            .catch((error) => {
                console.log('Fallo el registro del Service Worker:', error);
            });
    });
}