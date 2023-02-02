function Converter() {
  var valorDoElemento = document.getElementById("valor");
  var valor = valorDoElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);

  var valorEmReal = valorEmDolarNumerico * 5.20;
  console.log(valorEmReal);

  var elentoValorConvertido = document.getElementById("valorConvertido");

  var valorConvertido = " O resultado é R$" + valorEmReal;

  elentoValorConvertido.innerHTML = valorConvertido;
}
