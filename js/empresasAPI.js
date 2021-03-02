const url ='http://localhost:4000/empresas';

export const nuevaEmpresa = async empresa => { 
    //console.log(empresa)
    try{
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(empresa),
            headers: {
                'Content-Type': 'application/json'
            }
    
        });
       // console.log(nuevaEmpresa)
    
        window.location.href = 'index.html';
    
    }
    catch (error){
        console.log(error)
    }
}


export const obtenerEmpresas = async ()=> {

        try{
            const resultado = await fetch (url);
            const empresas = await resultado.json();
            
            return empresas;
        }catch(error){

        }


}

export const obtenerEmpresa = async id =>{
    try {
        const resultado = await fetch(`${url}/${id}`);
        const empresa = await resultado.json();       
       
        return (empresa);
    }
    catch (error){
        console.log(error)
    }

   


}

export const editarEmpresa = empresa => {
    //console.log(empresa)
    try{
        fetch(`${url}/${empresa.id}`, {
            method: 'PUT',
            body: JSON.stringify(empresa),
            headers: {
                'Content-type':'application/json'
            }
        })
        

      //  window.location.href = 'index.html'
       
    }
    catch(error){
        console.log(error)
    }
}