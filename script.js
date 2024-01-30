let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

// Checando se o NÚMERO está entre 1 e 100
function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

// Checando se o NÚMERO digitado está na lista (indexOf)
function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

// Adicionando o NÚMERO na lista
function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option') // Criando um documento 'ITEM'
        item.text = `Valor ${num.value} foi adicionado!` // Adicionando texto ao documento criado
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já adicionado')
    }
    num.value = '' // Esvasia a caixa do navegador
    num.focus() // Manten o mause na caixa para nova digitação
}

function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let elementos = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        //Verificando maior e menor valor
        for(let pos in valores){
            soma += valores[pos] //Somando valores
            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma / elementos //Calculando a média
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos: ${elementos} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor irformado foi: ${maior}.</p>`
        res.innerHTML += `<p>O menor valor irformado foi: ${menor}.</p>`
        res.innerHTML += `<p>A soma dos valores é: ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores é: ${media}.</p>`
    }
}