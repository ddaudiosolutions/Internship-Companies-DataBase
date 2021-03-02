import { obtenerEmpresa, editarEmpresa} from './empresasAPI.js';


(function(){

    const GMin = document.querySelector('#gm')
    const GSRin = document.querySelector('#gsr')
    const GSIin = document.querySelector('#gsi')
    const GSSin = document.querySelector('#gss')
    const GSAin = document.querySelector('#gsa')
    const GSPin = document.querySelector('#gsp')
    const EMPRESAin = document.querySelector('#nombreEmp')
    const CONTACTOin = document.querySelector('#nombreResp')  
    const EMAILin = document.querySelector('#emailResp')
    const TELEFONOin = document.querySelector('#telefonResp')
    //const OBSERVACIONES = document.querySelector('#observaciones')
    const PRACTICASin = document.querySelector('#practicasEmp')
    const idin = document.querySelector('#idEmp')
    const btnEditar = document.querySelector('#editarEmpresaBTN');


    document.addEventListener('DOMContentLoaded', async () => {
    const parametrosURL = new URLSearchParams(window.location.search);
     
    const idEmpresa = parseInt (parametrosURL.get('id'));
    //console.log(idEmpresa)
    
    const empresa = await obtenerEmpresa(idEmpresa);
    mostrarEmpresa(empresa);
    //console.log(mostrarEmpresa())
    
    const formulario = document.querySelector("#formularioEmp");
    formulario.addEventListener('submit', validarEmpresa)    
        
        //console.log(empresa) 
     
    });

    function mostrarEmpresa(empresa){
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
            PRACTICAS,
            id,
                    } = empresa; //PASAMOS LOS DATOS DE LAS EMPRESAS A HTML

            GMin.value = GM;
            GSRin.value = GSR;
            GSIin.value=GSI;
            GSSin.value=GSS;
            GSAin.value=GSA;
            GSPin.value=GSP;
            EMPRESAin.value=EMPRESA;
            CONTACTOin.value = CONTACTO;
            EMAILin.value= EMAIL;
            TELEFONOin.value = TELEFONO;
            PRACTICASin.value = PRACTICAS;
          //  OBSERVACIONESin.value = OBSERVACIONES
            idin.value = id;    
    }

    function validarEmpresa(e){
        e.preventDefault();
        
        let practicasArray = PRACTICASin.value.split(','); //CONVERTIMOS EL STRING DE TIPOS DE PRACTICAS EN UN ARRAY PARA GUARDAR EN JSON

        const empresa = {

            GM: GMin.value,
            GSR: GSRin.value,
            GSI:GSIin.value,
            GSS: GSSin.value,
            GSA: GSAin.value,
            GSP: GSPin.value,
            EMPRESA: EMPRESAin.value,
            CONTACTO: CONTACTOin.value,
            EMAIL: EMAILin.value,
            TELEFONO: TELEFONOin.value,
            PRACTICAS: practicasArray,
        //   OBSERVACIONES: OBSERVACIONESin.value ,
            id:parseInt(idin.value)
        }
        //console.log(empresa.PRACTICAS)
        editarEmpresa(empresa)
       


    }


    const cEditarEmp = document.createElement('td');
    const editarEmp = document.createElement('a');
   editarEmp.href=`mostrarEmpresa.html?id=${id}`;
   editarEmp.innerText = 'editar';
   cEditarEmp.appendChild(editarEmp)
   btnEditar.appendChild(editarEmp)

     




})();