import { obtenerAlumno, editarAlumno} from './alumnosAPI.js';


(function(){

    const nombreAlin = document.querySelector('#nombreAl')
    const localidadAlin = document.querySelector('#localidadAl')
    const emailAlin = document.querySelector('#emailAl')
    const movilAlin = document.querySelector('#telefonAl')
    const practicasin = document.querySelector('#practicas')
    const cursoAlin = document.querySelector('#curso')
    const empresaAlin = document.querySelector('#empresa_alumno')
    const contactoEmpin = document.querySelector('#contacto_emp')
    const idInput = document.querySelector('#id')

    document.addEventListener('DOMContentLoaded', async () => {
    const parametrosURL = new URLSearchParams(window.location.search);
     
    const idAlumno = parseInt (parametrosURL.get('id'));
   console.log(idAlumno)
    
    const alumno = await obtenerAlumno(idAlumno);
    mostrarAlumno(alumno);
    
    const formulario = document.querySelector("#formularioAl");
    formulario.addEventListener('submit', validarCliente)    
        
        console.log(alumno) 
     
    });

    function mostrarAlumno(alumno){
        const {
            cursoAl,        
            nombreAl ,
            localidadAl,
            emailAl, 
            movilAl,
            empresaAl,
            contactoEmp,
            practicas,
            id,

        } = alumno 

        cursoAlin.value = cursoAl;
        nombreAlin.value= nombreAl;
        localidadAlin.value= localidadAl;
        emailAlin.value= emailAl;
        movilAlin.value=movilAl;
        empresaAlin.value=empresaAl;
        contactoEmpin.value = contactoEmp;
        practicasin.value = practicas;
        idInput.value = id
    }

    function validarCliente(e){
        e.preventDefault();

        const alumno = {

            cursoAl: cursoAlin.value,
            nombreAl:nombreAlin.value,
            localidadAl:localidadAlin.value,
            emailAl:emailAlin.value,
            movilAl:movilAlin.value,
            empresaAl:empresaAlin.value,
            contactoEmp:contactoEmpin.value,
            practicas:practicasin.value,
            id:parseInt(idInput.value)


        }

        editarAlumno(alumno)


    }

     




})();