
// operaciones.js
export default class Operaciones {
    calcularImpuesto(montoBrutoAnual, deducciones) {
        const porcentaje = 0.21;
        return (montoBrutoAnual - deducciones) * porcentaje;
    }
}


