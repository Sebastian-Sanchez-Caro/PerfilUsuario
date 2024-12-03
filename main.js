const info = {
    foto: "./file.enc"
}


function enviar(event){
    event.preventDefault()
    info.nombre = document.getElementById("nombre").value;
    info.edad = document.getElementById("edad").value
    info.email = document.getElementById("email").value
    info.direccion = document.getElementById("direccion").value

    

    document.getElementById("MiCajita").innerHTML = `
    <div class="">
        <img src="${info.foto}" alt="" id="fotico">
        <h1>Perfil de Usuario</h1>
        <section class="infotext">
            <p>Nombre <span id="SpanNombre">${info.nombre}</span></p>
            <p>edad <span id="SpanEdad">${info.edad}</span></p>
            <p>email <span id="SPanEmail">${info.email}</span></p>
            <p>Direccion <span id="SpanDireccion">${info.direccion}</span></p>
        </section>
        <button onclick="ModificarPerfil()" >Modificar Datos</button>
    </div>
    `
}


function ModificarPerfil(){
    document.getElementById("MiCajita").innerHTML =""

    document.getElementById("MiCajita").innerHTML= `
    <form onsubmit="enviar(event)">
            <h1>Formulario de usuario</h1>

            <label for="nombre">Nombre: <input type="text" id="nombre" required value="${info.nombre  }"></label>
       
            <label for="edad"> Edad:<input type="number" id="edad" required value="${info.edad  }"></label>

            <label for="email"> Correo:<input type="email" id="email" required value="${info.email  }"></label>

            <label for="direccion"> direccion:<input type="text" id="direccion" required value="${info.direccion  }"></label>

            <label for="foto" > Foto:<input onclick="PedirFoto()" type="url" id="foto"  value="${info.foto  }"></label>

            <div class="botones">
                <button onclick="Cancelar()">Cancelar</button>
                <button type=submit>Actualizar</button>
            </div>
    
    </form>
    `
}

function PedirFoto(){
  info.foto=prompt("ingrese la ULR de la foto")

  document.getElementById("foto").value=info.foto

}

function Cancelar(){
    document.getElementById("MiCajita").innerHTML =""

    document.getElementById("MiCajita").innerHTML =`

    <div class="">
        <img src="${info.foto}"alt="" id="fotico">
        <h1>Perfil de Usuario</h1>
        <section class="infotext">
            <p>Nombre <span id="SpanNombre">${info.nombre}</span></p>
            <p>edad <span id="SpanEdad">${info.edad}</span></p>
            <p>email <span id="SPanEmail">${info.email}</span></p>
            <p>Direccion <span id="SpanDireccion">${info.direccion}</span></p>


        </section>
        <button onclick="ModificarPerfil()" >Modificar Datos</button>
    </div>
    `
}
