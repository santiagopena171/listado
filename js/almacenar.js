
const agregar = document.getElementById('agregar');
const input = document.getElementById('item');
const contenedor = document.getElementById('contenedor');
let listado = [];

function actualizarVista() {
    contenedor.innerHTML = '';
    listado.forEach(function(item) {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = item;
        contenedor.appendChild(li);
    });
}

agregar.addEventListener('click', function() {
    const texto = input.value.trim();
    if (texto !== '') {
        listado.push(texto);
        actualizarVista();
        input.value = '';
    }
});

   
