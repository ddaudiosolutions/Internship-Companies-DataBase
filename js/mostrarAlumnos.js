import {obtenerAlumnos} from './alumnosAPI.js';
import {sortTable, sortTable2} from './funciones.js';

(function (){


    const listadoAlumnos = document.querySelector('#listado_Alumnos');
    document.addEventListener('DOMContentLoaded', mostrarAlumnos);
    
    const botonSortar = document.querySelector('#sortar')
    botonSortar.addEventListener('click', sortTable)

    let table = document.getElementsByTagName("table")[0]

    let rows = table.getElementsByTagName('tr')
    
    //PARA ORDENAR LAS FILAS HACIENDO SORT
    let celda;
    for(var i = 0; i<rows.length; i++){
         let cells = rows[i].getElementsByTagName('th');
            for (let j=0; j<cells.length; j++){
                let cell = cells[j]
                cell.positionIndex = j;
                //console.log(cell);
                cell.onclick = function(){
                    //console.log(this.positionIndex)
                 celda=this.positionIndex
                 // console.log(celda)
                  sortTable2(celda)
                }
            }
    }
    
   

    async function mostrarAlumnos() {

            const alumnos = await  obtenerAlumnos();
           // console.log(alumnos)
            
            alumnos.forEach(alumno =>{
                crearTabla(alumno);
            })

    }
     

    function crearTabla(alumno)
    {
        const {        
            cursoAl,        
         nombreAl, 
        localidadAl,
        emailAl, 
        movilAl,
        empresaAl,
        contactoEmp,
        practicas,
        id
            } = alumno; //PASAMOS LOS DATOS DE LOS ALUMNOS A LOS ELEMENTOS HTML

        const row = document.createElement('tr');
        row.style.borderBottom = 'solid 1px';
        row.style.borderBottomColor = 'pink';
        row.classList.add('filaAlumnos')
        
        const ccursoAl = document.createElement('td')
        ccursoAl.textContent = `${cursoAl}`;
        row.appendChild(ccursoAl)

        const cNombreAl = document.createElement('td');
        cNombreAl.textContent = `${nombreAl}`;
        row.appendChild(cNombreAl)

        const clocalidadAl = document.createElement('td');
        clocalidadAl.textContent =`${localidadAl}`;
        row.appendChild(clocalidadAl)

        const cemailAl = document.createElement('td')
        cemailAl.textContent = `${emailAl}`;
        row.appendChild(cemailAl)

        const ctelefonoAl = document.createElement('td')
        ctelefonoAl.textContent = `${movilAl}`;
        row.appendChild(ctelefonoAl)

        const cpracticas = document.createElement('td')
        cpracticas.textContent = `${practicas}`;
        row.appendChild(cpracticas)

        const cempresa_alumnos = document.createElement('td')
        cempresa_alumnos.textContent = `${empresaAl}`;
        row.appendChild(cempresa_alumnos)

        const cContactoEmp = document.createElement('td')
        cContactoEmp.textContent = `${contactoEmp}`;
        row.appendChild(cContactoEmp)



        const cidAlumno = document.createElement('td');
        const editarAl = document.createElement('a');
        editarAl.href=`editarAlumno.html?id=${id}`;
        editarAl.innerText = 'editar';

        cidAlumno.appendChild(editarAl)
        row.appendChild(cidAlumno)
        

        listadoAlumnos.appendChild(row)
}

        sortTable();
       // sortTable2(celda)
       
        

        

})();