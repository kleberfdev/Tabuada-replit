function calcular() {
  var num = Number(document.getElementById("num").value)
  var selecao = document.getElementById("selecao").value
  var saida = document.getElementById("saida")
  var resultado = ''


  for (var i = 1; i <= 10; i++) {
    if (selecao[0] == '+') {
      resultado += i + '+' + num + ' = ' + (i + num) + '<br>'
      saida.innerHTML = resultado
    } else if(selecao[0] == '-') {
        resultado += i + '-' + num + ' = ' + (i - num) + '<br>'
        saida.innerHTML = resultado
    } else if(selecao[0] == 'x') {
        resultado += i + 'x' + num + ' = ' + (i * num) + '<br>'
        saida.innerHTML = resultado
    } else {
        resultado += i + '/' + num + ' = ' + (i / num) + '<br>'
        saida.innerHTML = resultado
    }
  }  
}









/*if (selecao[0] == "+") {
      //soma
      for (var c = 1; c < 11; c++) {
          var resultado = c + num
          var fraseresultado = document.write(c + " + " + num + " = " + resultado)
          document.write("<br>")
          fraseresultado
      }
  } else if (selecao[0] == "-") {
      //subtração
      for (var c = 1; c < 11; c++) {
          var resultado = c - num
          var fraseresultado = document.write(c + " - " + num + " = " + resultado)
          document.write("<br>")
          fraseresultado
      }
  } else if (selecao[0] == "/") {
      //divisão
      for (var c = 1; c < 11; c++) {
          var resultado = c / num
          var fraseresultado = document.write(c + " / " + num + " = " + resultado)
          document.write("<br>")
          fraseresultado
      }
  } else {
      //multiplicação
      for (var c = 1; c < 11; c++) {
          var resultado = c * num
          var fraseresultado = document.write(c + " x " + num + " = " + resultado)
          document.write("<br>")
          fraseresultado
      }
  }

}*/