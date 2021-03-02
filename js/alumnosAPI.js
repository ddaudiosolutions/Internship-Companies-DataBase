const url ='http://localhost:4000/alumnos';

export const nuevoAlumno = async alumno => { 
    try{
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(alumno),
            headers: {
                'Content-Type': 'application/json'
            }
    
        });
    
        window.location.href = 'index.html';
    
    }
    catch (error){
        console.log('Hay un error de conexión')
    }
}

//Obtener Clientes de la API

export const obtenerAlumnos = async () =>
{
    try{
        const resultado = await fetch(url);
        const alumnos = await resultado.json();         
        return alumnos;
    }
    catch(error){
        console.log(error)
    }

}
export const obtenerAlumno = async id => {
    try {
        const resultado = await fetch(`${url}/${id}`);
        const alumno = await resultado.json();    
        console.log(resultado)   
        return (alumno);
    }
    catch (error){
        console.log(error)
    }
}

export const editarAlumno = alumno => {
    //console.log(alumno)
    try{
        fetch(`${url}/${alumno.id}`, {
            method: 'PUT',
            body: JSON.stringify(alumno),
            headers: {
                'Content-type':'application/json'
            }
        })

        window.location.href = 'index.html'
       
    }
    catch(error){
        console.log(error)
    }
}

