document.addEventListener('DOMContentLoaded', ()=>{

  let tablero = document.getElementById('tablero');

  function cartas(){
    let carta = document.createElement('div');
    carta.style = 'width:25%;'
      +'border: 1px solid black';
    return carta;
  }

  const botonBuscar = document.getElementById('buscar');
  botonBuscar.addEventListener('click', ()=>{
    alert('Buscando');
  });

  const botonAnhadir = document.getElementById('anhadir');
  botonAnhadir.addEventListener('click', ()=>{
    tablero.appendChild(cartas());
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
