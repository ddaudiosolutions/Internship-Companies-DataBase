if ('serviceWorker' in navigator) {

navigator.serviceWorker.register('/js/sw.js')
    .then (registrado => console.log('se instaló', registrado))
    .catch (error => console.log('Falló el Service Worker', error))

} else {
    console.log('Service Worker not Works')
}