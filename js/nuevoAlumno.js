import {nuevoAlumno} from './alumnosAPI.js'

const formulario = document.querySelector('#formularioAl')
//const botonAgregar = document.querySelector('#botonAgr');


formulario.addEventListener('submit', agregarAlumno)

function agregarAlumno(e){
    e.preventDefault();

    const nombreAl = document.querySelector('#nombreAl').value;
    const localidadAl = document.querySelector('#localidadAl').value
    const emailAl = document.querySelector('#emailAl').value
    const movilAl = document.querySelector('#telefonAl').value
    const practicas = document.querySelector('#practicas').value
    const cursoAl = document.querySelector('#curso').value
    const empresaAl = document.querySelector('#empresa_alumno').value
    const contactoEmp = document.querySelector('#contacto_emp').value

    const alumno = {
        cursoAl,        
        nombreAl, 
        localidadAl,
        emailAl, 
        movilAl,
        empresaAl,
        contactoEmp,
        practicas,

    }

    nuevoAlumno(alumno);
   

}


    

