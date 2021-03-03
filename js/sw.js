self.addEventListener('install', e=>{
    console.log('Instalad el SW')
    console.log(e)
})



self.addEventListener('activate', e=> {
    console.log('SW Activado')
    console.log(e);
})