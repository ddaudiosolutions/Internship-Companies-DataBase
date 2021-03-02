import {nuevaEmpresa} from './empresasAPI.js'

const formulario = document.querySelector('#formularioEmp')
//const botonAgregar = document.querySelector('#botonAgr');
let listadopracticas = document.querySelector('#practicas')

const tiposPracticas = [

    'SonidoDirecto',    
    'Radio',
    'EstudiodeGrabación',
    'Teatro',
    'SonidoFiccion',
    'Camara',
    'Estudio Foto',
    'Productora TV',
    'Produccion de Ficcion',
    'Eventos', 
    'Foto Ficción',
    'Plato Tv',
    'Estudio Foto',
    'Editor y Montador',
    'Affter Effects',
    'VideoJuegos',
    'Modelaje',
    'Diseño',
    'Programacion',
    '3D',

]
listadopracticas.addEventListener('DOMContentLoaded', mostrarPracticas())


function mostrarPracticas (){
    for (let i = 0; i<tiposPracticas.length; i++)
    {
        const opcion = document.createElement ('option')
             opcion.value = tiposPracticas[i]
             opcion.textContent = tiposPracticas[i]
             practicas.appendChild(opcion)
    }
}

listadopracticas.addEventListener('change', e=> {
    listadopracticas = e.target.value
    console.log(listadopracticas)
})

formulario.addEventListener('submit', agregarEmpresas)

function agregarEmpresas(e){

    
    e.preventDefault();
    const GM = document.querySelector('#gm').value;
    const GSR = document.querySelector('#gsr').value;
    const GSI = document.querySelector('#gsi').value;
    const GSS = document.querySelector('#gss').value;
    const GSA = document.querySelector('#gsa').value;
    const GSP = document.querySelector('#gsp').value;
    const EMPRESA = document.querySelector('#nombreEmp').value;
    const CONTACTO = document.querySelector('#nombreResp').value    
    const EMAIL = document.querySelector('#emailResp').value;
    const TELEFONO = document.querySelector('#telefonResp').value;
    const PRACTICAS = listadopracticas;
    const OBSERVACIONES = document.querySelector('#observaciones').value;
    const id = document.querySelector('#idEmp').value;
    
   
    let practicasArray = PRACTICAS.split(','); //CONVERTIMOS EL STRING DE TIPOS DE PRACTICAS EN UN ARRAY PARA GUARDAR EN JSON
    const empresa = { //OBJETO EMPRESA CON SUS PROPIEDADES
        GM,
        GSR,
        GSI,
        GSS,
        GSA,
        GSP,
        EMPRESA,
        CONTACTO,        
        EMAIL,
        TELEFONO,        
        PRACTICAS: practicasArray, //CONVERTIMOS EL STRING DE TIPOS DE PRACTICAS EN UN ARRAY PARA GUARDAR EN JSON
        OBSERVACIONES,
        id
        
    }

    

    nuevaEmpresa(empresa);
   
   

}

