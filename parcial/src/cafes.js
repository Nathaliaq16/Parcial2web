import React, { useEffect } from "react";
import './tablaCafes.css';

export default function Cafes() {
  useEffect(() => {
    const tablaCafes = document.getElementById('tablacafes');
    fetch("http://localhost:3001/cafes", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })
    .then(response => response.json())
    .then(data => {
      data.forEach(cafe => {
        const fila = document.createElement('tr');

        const columnaId = document.createElement('td');
        columnaId.textContent = cafe.id;
        fila.appendChild(columnaId);

        const columnaNombre = document.createElement('td');
        columnaNombre.textContent = cafe.nombre;
        fila.appendChild(columnaNombre);

        const columnaTipo = document.createElement('td');
        columnaTipo.textContent = cafe.tipo;
        fila.appendChild(columnaTipo);

        const columnaRegion = document.createElement('td');
        columnaRegion.textContent = cafe.region;
        fila.appendChild(columnaRegion);

        const columnaNotas = document.createElement('td');
        columnaNotas.textContent = cafe.notas;
        fila.appendChild(columnaNotas);

        const columnaFechaCultivo = document.createElement('td');
        columnaFechaCultivo.textContent = cafe.fecha_cultivo;
        fila.appendChild(columnaFechaCultivo);

        const columnaAltura = document.createElement('td');
        columnaAltura.textContent = cafe.altura;
        fila.appendChild(columnaAltura);

        const columnaImagen = document.createElement('td');
        const imagen = document.createElement('img');
        imagen.src = cafe.imagen;
        imagen.alt = cafe.nombre;
        imagen.style.width = '100px'; // Ajusta el tamaño de la imagen según tus necesidades
        columnaImagen.appendChild(imagen);
        fila.appendChild(columnaImagen);

        tablaCafes.querySelector('tbody').appendChild(fila);
      });
    })
    .catch(error => {
      console.log('Error:', error);
    });
  }, []);

  return (
    <div className="container">
      <table id="tablacafes">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Tipo</th>
            <th>Región</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>


    


    </div>
  );
}
