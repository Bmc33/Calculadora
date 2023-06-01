const display = document.getElementById("display");

const digitar = (tecla) => {
  display.value = display.value + tecla;
};
const limpar = () => {
  display.value = "";
};
const apagar = () => {
  let number = display.value;
  display.value = number.subtring(0, number.lenght - 1);
};

let valor = "";
let operacao = "";

const definirOperador = (operador) => {
    valor = display.value
    operacao = operador
    display.value = ""
};

const calcular = () => {
  switch (operacao) {
    case "+":
      display.value = Number(valor) + Number(display.value);
      break;
    case "-":
      display.value = Number(valor) - Number(display.value);
      break;
    case "*":
      display.value = Number(valor) * Number(display.value);
      break;
    case "/":
      display.value = Number(valor) / Number(display.value);
      break;
    default:
      display.value = display.value;
  }
  operacao = "";
};
