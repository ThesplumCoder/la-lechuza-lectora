document.addEventListener('DOMContentLoaded', ()=>{

  let tablero = document.getElementById('tablero');

  function hacerCartas(){
    let carta = document.createElement('div');
    let nombre = document.createElement('p');
    let autor = document.createElement('p');
    let editorial = document.createElement('p');
    let estado = document.createElement('p');
    let pagina = document.createElement('p');
    let nota = document.createElement('p');

    carta.className = 'cartas';
    nombre.textContent = 'La Peste';
    autor.textContent = 'Albert Camus';
    editorial.textContent = 'Comcosur';
    estado.textContent = 'Leyendo';
    pagina.textContent = '0';
    nota.textContent = '...';

    carta.appendChild(nombre);
    carta.appendChild(autor);
    carta.appendChild(editorial);
    carta.appendChild(estado);
    carta.appendChild(pagina);
    carta.appendChild(nota);
    return carta;
  }

  const botonBuscar = document.getElementById('buscar');
  botonBuscar.addEventListener('click', ()=>{
    alert('Buscando');
  });

  const botonAnhadir = document.getElementById('anhadir');
  botonAnhadir.addEventListener('click', ()=>{
    tablero.appendChild(hacerCartas());
  });

  const botonActualizar = document.getElementById('actualizar');
  botonActualizar.addEventListener('click', ()=>{
    alert('Actualizando');
  });

  const botonEliminar = document.getElementById('eliminar');
  botonEliminar.addEventListener('click', ()=>{
    alert('Eliminando');
  });
})
