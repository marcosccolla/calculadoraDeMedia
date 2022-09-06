function Calcular() {
    var nome = "Marcos";
    var notaDoPrimeiroBimestre = parseFloat(
      document.getElementById("primeiro").value
    );
    var notaDoSegundoBimestre = parseFloat(
      document.getElementById("segundo").value
    );
    var notaDoTerceiroBimestre = parseFloat(
      document.getElementById("terceiro").value
    );
    var notaDoQuartoBimestre = parseFloat(
      document.getElementById("quarto").value
    );
  
    var somaDeTodasAsNotas =
      notaDoPrimeiroBimestre +
      notaDoSegundoBimestre +
      notaDoTerceiroBimestre +
      notaDoQuartoBimestre;
  
    var media = (somaDeTodasAsNotas / 4).toFixed(1);
    var resultado = document.getElementById("resultado");
  
    if (media < 7) {
      resultado.innerHTML = "Reprovado";
    } else if (media >= 7) {
      resultado.innerHTML = "Aprovado";
    }
  }
  