 //import {obtenerAlumno, mostrarAlumnos} from './alumnosAPI.js;'
 import {obtenerEmpresas} from './empresasAPI.js';

 const curso = document.querySelector('#curso')
 const practicas = document.querySelector('#practicas')
 const btnBuscar = document.querySelector('#btnBuscar')
 const listadoempresas = document.querySelector('#listado_Empresas')


const datosBusqueda = {

    curso,
    practicas,
}

const practicasSonido = [
    'Todas',
    'SonidoDirecto',
    'EstudiodeGrabación',
    'Radio',
    'Teatro',
    'SonidoFiccion'
]

const practicasAnimacion = [
    'Todas',
    'VideoJuegos',
    'Modelaje',
    'Diseño',
    'Programacion',
    '3D'
]

const practicasRealizacion = [
    'Todas',
    'Guion',
    'Produccion de Ficcion',
    'Camara',
    'Editor y Montador',
    'Affter Effects'
]

const practicasIluminacion = [
    'Todas',
    'Teatro',
    'Foto Ficción',
    'Plato Tv',
    'Estudio Foto',
    
]

const practicasProduccion = [
    'Todas',
    'Productora TV',
    'Produccion de Ficcion',
    'Eventos',   
]

const practicasGradoMedio = [
    'Todas',
    'SonidoDirecto',    
    'Radio',
    'Teatro',
    'SonidoFiccion',
    'Camara',
    'Estudio Foto' 
]


 curso.addEventListener('change', e =>{
     datosBusqueda.curso = e.target.value;
   
     leerCurso(`${datosBusqueda.curso}`)     
 })

 function leerCurso(curso)
 {
     limpiarhtml(practicas)
    let opcionesPracticas = curso;
     switch (curso) {

        case 'CFGSS' :
            opcionesPracticas = practicasSonido;
            break;

        case 'CFGSA': 
            opcionesPracticas = practicasAnimacion;
            break;

        case 'CFGSR':
            opcionesPracticas = practicasRealizacion;
            break;

        case 'CFGSI':
            opcionesPracticas = practicasIluminacion;
             break;
        case 'CFGSP':
             opcionesPracticas = practicasProduccion;
            break;
        case 'CFGMVDJ':
            opcionesPracticas = practicasGradoMedio;   
            break;

        default: 
            console.log('no has seleccionado un curso');
     }
     //console.log('este el el curso' + curso)
     if (datosBusqueda.curso)
     {
         
         for (let i=0; i<opcionesPracticas.length; i++)
         {
            const opcion = document.createElement ('option')
             opcion.value = opcionesPracticas[i]
             opcion.textContent = opcionesPracticas[i]
             practicas.appendChild(opcion)
         }
         /*const opcion = document.createElement ('option')
         opcion.value = practicasSonido
         opcion.textContent= practicasSonido
         practicas.appendChild(opcion)*/
     }
 }

 function limpiarhtml(value)
 {
     while (value.firstChild){
        value.removeChild(value.firstChild)
     }
 }

 //MOSTRANDO RESULTADO BUSQUEDA
 let seleccion;

 practicas.addEventListener('change', e => {
    datosBusqueda.practicas = e.target.value;
   

   seleccion = `${datosBusqueda.practicas}`
  // console.log(seleccion)    
})

btnBuscar.addEventListener('click', mostrarSeleccionEmp)

async function mostrarSeleccionEmp(){
   
    limpiarhtml(listadoempresas)

    const empresas =  await obtenerEmpresas()
    
    for (let i = 0; i<empresas.length; i++)
    {
      let empresasB = []

        if(empresas[i].PRACTICAS.includes(seleccion)){
            //console.log(empresas[i].PRACTICAS)
           
            empresasB.push(empresas[i])
            empresasB.forEach(empresa => {

                crearTabla(empresa)
             
            });
   
       }
       else {
           console.log(empresas[i].EMPRESA + ' ' + 'No tienen prácticas asignadas de' + ' ' + seleccion)
       }
       
       
   }   
    
}

function crearTabla(empresa)
{
    const { EMPRESA, PRACTICAS, id} = empresa;

           const row = document.createElement('tr');
           row.style.borderBottom = 'solid 1px';
           row.style.borderBottomColor = 'pink';

           const cnombreEmp = document.createElement('td')
           cnombreEmp.textContent =`${EMPRESA}`;

           const cpracticas = document.createElement('td')
           cpracticas.textContent =`${PRACTICAS}`;        

           const cMostrarEmp = document.createElement('td');
            const mostrarEmp = document.createElement('a');
            mostrarEmp.href=`mostrarEmpresa.html?id=${id}`;
            mostrarEmp.innerText = 'mostrar';
            cMostrarEmp.appendChild(mostrarEmp)

            const cEditarEmp = document.createElement('td');
             const editarEmp = document.createElement('a');
            editarEmp.href=`editarEmpresa.html?id=${id}`;
            editarEmp.innerText = 'editar';
            cEditarEmp.appendChild(editarEmp)
            
           row.appendChild(cnombreEmp);
           row.appendChild(cpracticas)
           row.appendChild(cMostrarEmp)
           row.appendChild(cEditarEmp)

           listadoempresas.appendChild(row)        

}
 