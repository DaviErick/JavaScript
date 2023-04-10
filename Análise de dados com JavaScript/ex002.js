var n = []
var p = 0
var s = 0
function carregar() {
    var num = parseInt(window.document.getElementById('num').value)
    n.push(num)
    //armezar dentro de um array
    console.log(n)
    //herdar array e mostrar elementos na select
    var select = window.document.getElementById('resultado')
    var item = document.createElement('option')
    item.text = n[p]
    select.appendChild(item)
    //Realisando os calculos
    s = s + n[p]
    var m = s / n.length
    var quantidade = n.length
    // Análise dos dados coletados
    var t1 = window.document.getElementById('texto1')
    var t2 = window.document.getElementById('texto2')
    var t3 = window.document.getElementById('texto3')
    t1.innerHTML = 'A soma dos números é ' + s
    t2.innerHTML = 'A média dos números é ' + m
    t3.innerHTML = 'A quantidade de números digitados é ' + quantidade
    //acrescimo de uma posição
    p = p + 1   
}

