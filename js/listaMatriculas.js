let matriculas = []
let link = "http://localhost:3000/api/v1/matriculas"

function obtenerMatriculas() {


    console.log("entre aqui")
    axios.get(link).then((response) => {

        let lista = document.getElementById("listaMatriculas")
        matriculas = response.data;
        console.log(matriculas)
        let data = ""
        
        for (let i = 0; i < matriculas.length; i++) {


            let miMatricula = matriculas[i];

            data += "<tr>"
            data += `<td>${miMatricula.id}</td>`
            data += `<td>${miMatricula.fecha} </td>`
            data += `<td>${miMatricula.cedulaEstudiante} </td>`
            data += `<td>${miMatricula.estado} </td>`
            data += `<td><button type="button" onclick="eliminarMatricula('${miMatricula.id}')" class="col-xl-12 col-lg-12 col-md-12 col-sm-12">Eliminar</button> </td>`
            data += "</tr>"
        }

        lista.innerHTML = data;

    })
        .catch((error) => {
            console.log(error);
        });


}


function eliminarMatricula(id) {
    
    axios.delete(link + `/${id}`)
        .then((response) => {
            obtenerMatriculas()
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });

}

obtenerMatriculas();