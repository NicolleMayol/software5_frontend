

let alumnos= [];


let link = "http://localhost:3000/api/v1/alumnos"

function obtenerAlumnos() {

    axios.get(link).then((response) => {

        let lista = document.getElementById("listaAlumnos")
        alumnos = response.data;
        console.log(alumnos)
        let data = ""
        
        for (let i = 0; i < alumnos.length; i++) {


            let miAlumno = alumnos[i];

            data += "<tr>"
            data += `<td>${miAlumno.numIdentificacion}</td>`
            data += `<td>${miAlumno.nombre} </td>`
            data += `<td>${miAlumno.email} </td>`
            data += `<td>${miAlumno.telefono} </td>`
            data += `<td><button type="button" onclick="eliminarAlumno('${miAlumno.numIdentificacion}')" class="col-xl-12 col-lg-12 col-md-12 col-sm-12">Eliminar</button> </td>`
            data += "</tr>"
        }

        lista.innerHTML = data;

    })
        .catch((error) => {
            console.log(error);
        });


}


function eliminarAlumno(documento) {
    
    axios.delete(link + `/${documento}`)
        .then((response) => {
            obtenerAlumnos()
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });

}



function crearAlumno() {

    let alumno = obtenerValores()    
    axios
        .post(link, alumno )
        .then((response) => {
            

            obtenerAlumnos()
            limpiarForm()
            
        })
        .catch((error) => {
            console.log(error);
        });



}


function obtenerValores() {

    let nombre = document.getElementById("nombre").value
    
    let numIdentificacion = document.getElementById("documento").value
    let fechaNacimiento = document.getElementById("fechaNacimiento").value
    let email = document.getElementById("email").value
    let telefono = document.getElementById("telefono").value

    let alumno = { nombre:nombre, numIdentificacion:numIdentificacion, fechaNacimiento:fechaNacimiento, email:email, telefono:telefono}

    console.log(alumno)

    return alumno

}


function limpiarForm() {


    document.getElementById("nombre").value = ""
    document.getElementById("documento").value = ""
    document.getElementById("fechaNacimiento").value = ""
    document.getElementById("email").value = ""
    document.getElementById("telefono").value=""


}


obtenerAlumnos();