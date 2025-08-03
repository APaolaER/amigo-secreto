//
    let nombre = [];
    let i= 0;
    let maximo = 20;

function agregarAmigo()
{
    if(document.getElementById('amigo').value != '')
    {
        nombre [i]= document.getElementById('amigo').value;
        document.querySelector('#amigo').value = '';
        console.log (nombre[i]);
        console.log (nombre.length);
        nuevoElemento(nuevoNombre = nombre [i]);
        i++;
    }

    else
    {
        alert("Introduzca un nombre valido");
    }
   
}

function nuevoElemento(nuevoNombre)
{
    const miLista = document.getElementById('listaAmigos'); 
    const nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = nuevoNombre;
    miLista.appendChild(nuevoElemento);
    return;
}

function quitarElementos()
{
    const lista = document.getElementById("listaAmigos");
    const elementosLi = lista.querySelectorAll("li");
    elementosLi.forEach(li => li.remove());
}

function sortearAmigo()
{
    let tamaño = nombre.length;
    let pos = Math.floor((Math.random()*tamaño));
    console.log(pos);
    quitarElementos();
    const miLista = document.getElementById('resultado'); 
    const nuevoItem = document.createElement("li");
    nuevoItem.textContent = `El Amigo Secreto es: ${nombre[pos]}`;
    miLista.appendChild(nuevoItem);
    return;
}
