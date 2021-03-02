import {obtenerEmpresas} from './empresasAPI.js';

(function (){

    const listadoEmpresas = document.querySelector('#listado_Empresas');
    
   // const tablaEmpresas = document.querySelector('#idTabla');
    document.addEventListener('DOMContentLoaded', mostrarEmpresas);
   
    async function mostrarEmpresas() {
      
            const empresas = await obtenerEmpresas();
         
            empresas.forEach(empresa => {
               
               crearTabla(empresa)
             })
            
            

    }
    
      function crearTabla(empresa){

        const { //OBJETO EMPRESA CON SUS PROPIEDADES
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
           // OBSERVACIONES,
           PRACTICAS,
            id
                    } = empresa; //PASAMOS LOS DATOS DE LAS EMPRESAS A HTML

        const row = document.createElement('tr');
        row.style.borderBottom = 'solid 1px';
        row.style.borderBottomColor = 'pink';
        row.classList.add('tablaBodytr')

        const cId = document.createElement('td')
        cId.textContent =`${id}`;
        row.appendChild(cId);

        const ccursoGM = document.createElement('td')
        ccursoGM.textContent = `${GM}`;
        
        row.appendChild(ccursoGM)

        const ccursoGSR = document.createElement('td')
        ccursoGSR.textContent = `${GSR}`;
        row.appendChild(ccursoGSR)

        const ccursoGSS = document.createElement('td')
        ccursoGSS.textContent = `${GSS}`;
        row.appendChild(ccursoGSS)

        const ccursoGSI = document.createElement('td')
        ccursoGSI.textContent = `${GSI}`;
        row.appendChild(ccursoGSI)

        const ccursoGSA = document.createElement('td')
        ccursoGSA.textContent = `${GSA}`;
        row.appendChild(ccursoGSA)

        const ccursoGSP = document.createElement('td')
        ccursoGSP.textContent = `${GSP}`;
        row.appendChild(ccursoGSP)

        const cnombreEmp = document.createElement('td')
        cnombreEmp.textContent =`${EMPRESA}`;
        cnombreEmp.classList.add('longText')
        row.appendChild(cnombreEmp);

        const cnombreResp = document.createElement('td')
        cnombreResp.textContent =`${CONTACTO}`;
        
        cnombreResp.classList.add('longText')
        row.appendChild(cnombreResp);

        const cemailresp = document.createElement('td')
        cemailresp.textContent =`${EMAIL}`;  
        cemailresp.classList.add('longText')   
        row.appendChild(cemailresp);

        const ctelefonoResp = document.createElement('td')
        ctelefonoResp.textContent =`${TELEFONO}`;
        ctelefonoResp.classList.add('longText') 
        row.appendChild(ctelefonoResp);

        const cPracticas = document.createElement('td')
        cPracticas.textContent =`${PRACTICAS}`;
        cPracticas.classList.add('longText') 
        row.appendChild(cPracticas);

        const cidempresa = document.createElement('td');
        const editarEmp = document.createElement('a');
        editarEmp.href=`editarEmpresa.html?id=${id}`;
        editarEmp.innerText = 'editar';

        cidempresa.appendChild(editarEmp)
        row.appendChild(cidempresa)

                    

        /*const cobservaciones = document.createElement('td')
        cobservaciones.textContent =`${OBSERVACIONES}`;
        row.appendChild(cobservaciones);*/
         
        /*
        let keys =[]
        for (let k in empresa){
          keys.push(k)
        }
        console.log(keys)*/
        
        listadoEmpresas.appendChild(row)

      }
  


})();