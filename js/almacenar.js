
const agregar = document.getElementById('agregar');
const input = document.getElementById('item');
const contenedor = document.getElementById('contenedor');
let listado = [];

if (localStorage.getItem('listado')) {
    try {
        listado = JSON.parse(localStorage.getItem('listado')) || [];
    } catch (e) {
        listado = [];
    }
}
const limpiar = document.getElementById('limpiar');

function actualizarVista() {
    contenedor.innerHTML = '';
    listado.forEach(function(item) {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = item;
        contenedor.appendChild(li);
    });
}

actualizarVista();

agregar.addEventListener('click', function() {
    const texto = input.value.trim();
    if (texto !== '') {
        listado.push(texto);
        localStorage.setItem('listado', JSON.stringify(listado));
        actualizarVista();
        input.value = '';
    }
});

limpiar.addEventListener('click', function() {
    listado = [];
    localStorage.setItem('listado', JSON.stringify(listado));
    actualizarVista();
});

   
