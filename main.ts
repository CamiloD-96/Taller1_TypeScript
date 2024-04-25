import { Serie } from "./Serie";
import { series } from './data.js';

const tablaSeries: HTMLElement = document.getElementById("series")!;
const promedioTabla: HTMLElement = document.getElementById("promedio")!;

mostrarData(series);
mostrarPromedioTemporadas(series);
function mostrarData(series : Serie[]) :void {
    let tbodySerie = document.createElement("tbody");
    for (let serie of series){
        let trElement :HTMLElement = document.createElement("tr")
        trElement.innerHTML=`<td>${serie.id}</td>
        <td>${serie.titulo}</td>
        <td>${serie.plataforma}</td>
        <td>${serie.temporadas}</td>`
        console.log('Created trElement:', trElement);
        tbodySerie.appendChild(trElement)
    }
    tablaSeries.appendChild(tbodySerie);

} 

function mostrarPromedioTemporadas(series: Serie[]): void {
    if (series.length === 0) {
      console.warn("El arreglo está vacío");
      return;
    }
    // Total de temporadas
    const totalSeasons = series.reduce((acc, current) => acc + current.temporadas, 0);
  
    // Calcular promedio
    const averageSeasons = totalSeasons / series.length;
    const averageElement = document.createElement("tr");
    
    // Agregar
    promedioTabla.innerHTML = `<td colspan="4"><strong>Promedio de temporadas:</strong> ${averageSeasons.toFixed(2)}</td>`;
    promedioTabla.appendChild(averageElement);
  }
  