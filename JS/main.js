const button = document.querySelectorAll(".btn");

const resultado = document.querySelector("#display");

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", accion);
}

/* si la calculdora esta vacia no podemos escibir ningun operador( + - / ) 
    que si la calculadora tiene numeros X seria para borrrar uno uno y si hya otros elementos AC borria todo

*/

function accion() {
  if (resultado.value === "") {
    if (
      this.value === "0" ||
      this.value === "1" ||
      this.value === "2" ||
      this.value === "3" ||
      this.value === "4" ||
      this.value === "5" ||
      this.value === "6" ||
      this.value === "7" ||
      this.value === "8" ||
      this.value === "9"
    ) {
      resultado.value = resultado.value + this.value;
    }
  } else {
    if (this.value === "X" || this.value == "AC" || this.value == "=") {
      if (this.value === "X") {
        resultado.value = resultado.value.slice(0, -1);
      }
      if (this.value === "AC") {
        resultado.value = "";
      }
      if (this.value === "=") {
        resultado.value = eval(resultado.value);
      }
    }else{
      if ((this.value === "+" || this.value === "-" || this.value === "/" || this.value === "*")&&(resultado.value.slice(-1)==="-" || resultado.value.slice(-1)==="+"||resultado.value.slice(-1)==="*" || resultado.value.slice(-1)==="/")) {
        resultado.value = resultado.value.slice(0, -1) + this.value
      }else{
        resultado.value = resultado.value + this.value
      }
    }
  }
}
