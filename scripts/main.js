import { series } from './data.js';
var tablaSeries = document.getElementById("series");
var promedioTabla = document.getElementById("promedio");
mostrarData(series);
mostrarPromedioTemporadas(series);
function mostrarData(series) {
    var tbodySerie = document.createElement("tbody");
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n        <td>").concat(serie.titulo, "</td>\n        <td>").concat(serie.plataforma, "</td>\n        <td>").concat(serie.temporadas, "</td>");
        console.log('Created trElement:', trElement);
        tbodySerie.appendChild(trElement);
    }
    tablaSeries.appendChild(tbodySerie);
}
function mostrarPromedioTemporadas(series) {
    if (series.length === 0) {
        console.warn("El arreglo está vacío");
        return;
    }
    // Total de temporadas
    var totalSeasons = series.reduce(function (acc, current) { return acc + current.temporadas; }, 0);
    // Calcular promedio
    var averageSeasons = totalSeasons / series.length;
    var averageElement = document.createElement("tr");
    // Agregar
    promedioTabla.innerHTML = "<td colspan=\"4\"><strong>Promedio de temporadas:</strong> ".concat(averageSeasons.toFixed(2), "</td>");
    promedioTabla.appendChild(averageElement);
}
