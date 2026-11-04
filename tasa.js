// tasa.js — tasa de venta de cheques en MAV para la pestaña Cheques. Lo actualiza una tarea diaria.
// Fuente: MAV, Echeq segmento Avalado, tasa promedio ponderada por monto de los plazos de 90 días o más (TNA %).
// En la pantalla se le suma el margen (por defecto +10 puntos) y se puede cambiar a mano.
const TASA_MAV = { valor: 27, fecha: "04/11/2026", fuente: "MAV Echeq avalado, prom. ponderado plazos >= 90 días" };
