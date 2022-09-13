function Converter() {
    var selectLibra = document.getElementById("libra").value;
    var selectEuro = document.getElementById("euro").value;
    var selectDolar = document.getElementById("dolar").value;
    var selectBitcoin = document.getElementById("bitcoin").value;
  
    //cotação
    var valorElemento = parseFloat(document.getElementById("valor").value);
    var valorEmLibras = valorElemento / 5.95;
    var valorEmEuro = valorElemento / 5.15;
    var valorEmDolar = valorElemento / 5.09;
    var valorEmBitcoin = valorElemento / 114250.88;
  
    var valorConvertido = document.getElementById("valorConvertido");
    
  
    if (selectLibra) {
      valorConvertido.innerHTML = valorEmLibras.toFixed(2);
    } else if (selectEuro) {
      valorConvertido.innerHTML = valorEmEuro.toFixed(2);
    } else if (selectDolar) {
      valorConvertido.innerHTML = valorEmDolar.toFixed(2);
    } else if (selectBitcoin) {
      valorConvertido.innerHTML = valorEmBitcoin.toFixad(2);
    }
  }
  