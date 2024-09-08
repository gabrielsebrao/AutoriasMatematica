class Numero_Imaginario {
    constructor(parte_real, parte_imaginaria) {
        this.parte_real = parte_real
        this.parte_imaginaria = parte_imaginaria
    }
}

var primeiro_numero_imaginario = new Numero_Imaginario(0, 0)
var segundo_numero_imaginario = new Numero_Imaginario(0, 0)
var final_numero_imaginario = new Numero_Imaginario(0, 0)

function somar() {
    definir_valores()
    const resultado_final_obj = document.getElementById("resultado_final")

    final_numero_imaginario.parte_real = primeiro_numero_imaginario.parte_real + segundo_numero_imaginario.parte_real
    final_numero_imaginario.parte_imaginaria = primeiro_numero_imaginario.parte_imaginaria + segundo_numero_imaginario.parte_imaginaria

    if(final_numero_imaginario.parte_imaginaria < 0) 
        resultado_final_obj.innerHTML = `Resultado final: ${final_numero_imaginario.parte_real} - ${Math.abs(final_numero_imaginario.parte_imaginaria)}i` 
    else 
        resultado_final_obj.innerHTML = `Resultado final: ${final_numero_imaginario.parte_real} + ${final_numero_imaginario.parte_imaginaria}i`
}

function subtrair() {
    definir_valores()
    const resultado_final_obj = document.getElementById("resultado_final")

    final_numero_imaginario.parte_real = primeiro_numero_imaginario.parte_real - segundo_numero_imaginario.parte_real
    final_numero_imaginario.parte_imaginaria = primeiro_numero_imaginario.parte_imaginaria - segundo_numero_imaginario.parte_imaginaria

    resultado_final_obj.innerHTML = `${final_numero_imaginario.parte_real} + ${final_numero_imaginario.parte_imaginaria}i`

    if(final_numero_imaginario.parte_imaginaria < 0) 
        resultado_final_obj.innerHTML = `Resultado final: ${final_numero_imaginario.parte_real} - ${Math.abs(final_numero_imaginario.parte_imaginaria)}i` 
    else 
        resultado_final_obj.innerHTML = `Resultado final: ${final_numero_imaginario.parte_real} + ${final_numero_imaginario.parte_imaginaria}i`
}

function definir_valores() {
    primeiro_numero_imaginario.parte_imaginaria = Number(document.getElementById("primeira_parte_imaginaria").value)
    primeiro_numero_imaginario.parte_real = Number(document.getElementById("primeira_parte_real").value)
    segundo_numero_imaginario.parte_imaginaria = Number(document.getElementById("segunda_parte_imaginaria").value)
    segundo_numero_imaginario.parte_real = Number(document.getElementById("segunda_parte_real").value)
}

function mostrar_numero_imaginario(container) {
    definir_valores()

    let obj, numero_imaginario

    switch(container) {
        case 1: 
            obj = document.getElementById("primeiro_numero_imaginario")
            numero_imaginario = new Numero_Imaginario(primeiro_numero_imaginario.parte_real, primeiro_numero_imaginario.parte_imaginaria)
            break;
        case 2:
            obj = document.getElementById("segundo_numero_imaginario")
            numero_imaginario = new Numero_Imaginario(segundo_numero_imaginario.parte_real, segundo_numero_imaginario.parte_imaginaria)
            break;
    }

    if(numero_imaginario.parte_imaginaria < 0) 
        obj.innerHTML = `${numero_imaginario.parte_real} - ${Math.abs(numero_imaginario.parte_imaginaria)}i` 
    else 
        obj.innerHTML = `${numero_imaginario.parte_real} + ${numero_imaginario.parte_imaginaria}i`
}