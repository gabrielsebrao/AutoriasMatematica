function mostrar_numero_de_anagramas() {
    const palavra = document.getElementById("palavra_input").value
    const resuultado_final_obj = document.getElementById("resultado_final")
    let nova_palavra = ""
    let quantidade_de_anagramas = 0

    for (letra of palavra) {
        if ('áàãâ'.includes(letra)) {
            nova_palavra += 'a'
            continue
        }

        if ('éèê'.includes(letra)) {
            nova_palavra += 'e'
            continue
        }

        if ('íìî'.includes(letra)) {
            nova_palavra += 'i'
            continue
        }

        if ('óòõô'.includes(letra)) {
            nova_palavra += 'o'
            continue
        }

        if ('úùû'.includes(letra)) {
            nova_palavra += 'u'
            continue
        }

        nova_palavra += letra;
    }

    nova_palavra = nova_palavra.toLowerCase()
    let produto_de_letras_repetidas = 1

    for (letra of "abcdefghijklmnopqrstuvwxyz") {    
        let vezes_repetidas = 0;

        for (letra_da_palavra of nova_palavra) {
            if (letra_da_palavra == letra) vezes_repetidas++
        }

        produto_de_letras_repetidas *= fatorial(vezes_repetidas)
    }

    tamanho_da_palavra = nova_palavra.length
    quantidade_de_anagramas = (nova_palavra != "") ? fatorial(tamanho_da_palavra)/produto_de_letras_repetidas : 0

    resuultado_final_obj.innerText = `${quantidade_de_anagramas.toLocaleString('pt-BR')} anagrama(s)`
    ultima_palavra = palavra
}

function fatorial(numero) {
    let resultado_final = 1

    for(let i = numero; i > 1; i--) {
        resultado_final *= i
    }

    return resultado_final
}