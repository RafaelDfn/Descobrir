const text = document.querySelector("#resposta");

let aleatorio = Math.random();
let number = Math.trunc(aleatorio * 100);
console.log(number);
function responder() {
  const resposta = Number(prompt("Digite um número entre 1 e 100"));

  if (resposta > number) {
    text.innerHTML += `<p>Menor que ${resposta} </p>`;
  } else if (resposta < number) {
    text.innerHTML += `<p>Maior que ${resposta} </p>`;
  } else {
    text.innerHTML += `<p>Parabéns, eu pensei no número ${resposta}!!! </p>`;
  }
  console.log(resposta);
}
