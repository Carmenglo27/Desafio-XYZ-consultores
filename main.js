// main.js

// main.js
import Operaciones from './operaciones.js';

// Creamos una instancia de la clase Operaciones
const operaciones = new Operaciones();

// Definimos los valores de montoBrutoAnual y deducciones
const montoBrutoAnual = 8000;
const deducciones = 2000;

// Calculamos el impuesto utilizando el método calcularImpuesto de la clase Operaciones
const impuesto = operaciones.calcularImpuesto(montoBrutoAnual, deducciones);

// Mostramos el resultado en la consola
console.log('El impuesto anual es:', impuesto);
