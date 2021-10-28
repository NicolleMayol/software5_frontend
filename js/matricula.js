let matriculas= [];


function crearMatricula() {

    let matricula = obtenerValores()    
    axios
        .post(link, matricula )
        .then((response) => {
        
            limpiarForm()
            
        })
        .catch((error) => {
            console.log(error);
        });

}


function obtenerValores() {

    let  fecha = document.getElementById("fecha").value
    let cedulaEstudiante = document.getElementById("documento").value
    let matricula = { fecha:fecha, cedulaEstudiante:cedulaEstudiante}
    console.log(matricula)
    return matricula

}


function limpiarForm() {


    document.getElementById("fecha").value = ""
    document.getElementById("documento").value = ""

}


obtenerMatriculas();