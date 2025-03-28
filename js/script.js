function somar(){
    /* parseFloat: força a ser um numero 
    (para não concatenar */ 
    let numero1 = parseFloat(document.getElementById('numero1').value);
    let numero2 = parseFloat(document.getElementById('numero2').value);
    /* se não houver o parseFloat, 
    o resultado seria, por exemplo, 2 + 12 = 212, 
    pq o numero1 passa como string */
    console.log(2 + numero1);
    let resultado = numero1 + numero2;

    document.getElementById('resultado').innerText = resultado.toFixed(2);
}

function subtrair(){
  
    let numero1 = parseFloat(document.getElementById('numero1').value);
    let numero2 = parseFloat(document.getElementById('numero2').value);

    let resultado = numero1 - numero2;

    document.getElementById('resultado').innerText = resultado.toFixed(2);
}

function multiplicar(){

    let numero1 = parseFloat(document.getElementById('numero1').value);
    let numero2 = parseFloat(document.getElementById('numero2').value);

    let resultado = numero1 * numero2;

    document.getElementById('resultado').innerText = resultado.toFixed(2);
}

function dividir(){

    let numero1 = parseFloat(document.getElementById('numero1').value);
    let numero2 = parseFloat(document.getElementById('numero2').value);

    let resultado = numero1 / numero2;

    document.getElementById('resultado').innerText = resultado.toFixed(2);
}