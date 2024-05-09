//requerimiento 6 (implementar getter y setter para modificar los datos de las clases)

class Impuestos {
    constructor(montoBrutoAnual, deducciones){
        this._montoBrutoAnual = montoBrutoAnual
        this._deducciones = deducciones
    }

    get montoBrutoAnual(){
        return this._montoBrutoAnual;
    }

   set montoBrutoAnual (nuevo_monto){
    this._montoBrutoAnual = nuevo_monto;
   }

   get deducciones(){
    return this._deducciones
   }
   
   set deducciones (nuevas_deducciones){
    this._deducciones = nuevas_deducciones;
   }
}

//instanciar

let montoBrutoAnual1 = new Impuestos('5000');//agregar monto
console.log(montoBrutoAnual1.montoBrutoAnual);
montoBrutoAnual1.montoBrutoAnual = ('50000'); //agregar nuevo monto
console.log(montoBrutoAnual1.montoBrutoAnual); 

let deducciones1 = new Impuestos('3000');//agregar monto
console.log(deducciones1.deducciones);
deducciones1.deducciones = ('10000');//agregar nuevo monto
console.log(deducciones1.deducciones);



//Requerimiento 7 a través del formulario :) 

let impuestoAnual = document.getElementById('calcular');
let resultado = document.getElementById('resultado');

impuestoAnual.addEventListener('click', () => {
    let num1 = document.getElementById('num1').value; 
    let num2 = document.getElementById('num2').value; 
    resultado.innerHTML = restando(parseInt(num1)|| undefined, parseInt(num2)|| multiplicando (0.21)||undefined);
});

restando = (a=0, b=0) => (a-b)*0.21;

/* //Requerimiento 7 para trabajarlo y verlo solo en consola

class impuestoAnual {
    constructor (montoBrutoAnual, deducciones){
        this.montoBrutoAnual = montoBrutoAnual;
        this.deducciones = deducciones;
    }
    
    calcularImpuestoAnual(){
        let impuesto = (this.montoBrutoAnual - this.deducciones) * 0.21;
        return impuesto
    }
}

let impuesto = new impuestoAnual(); //en el parentesis agregar los valores para montoBrutoAnual y Deducciones separados por una coma
console.log (impuesto.calcularImpuestoAnual()); */