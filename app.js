const numeros = [-8,
-5,
-3,
-2,
-1,
0,
1,
2,
3,
5,
8,
13,
18,
23];
const texto = document.querySelector("#texto");
function analisarTexto() {
  const valor = texto.value;
  const palavras = valor.trim() ? valor.trim().split(/\s+/) : [];
  const letrasA = (valor.match(/a/gi) || []).length;
  const impares = palavras.filter((palavra) =>
    palavra.replace(/[^a-z0-9áàâãéêíóôõúüç]/gi, "").length % 2 === 1,
  );
  const linhas = [`${palavras.length} palavras · ${valor.length} caracteres · ${letrasA} letras A`,
  `Palavras com quantidade ímpar de letras: ${impares.join(", ") || "nenhuma"}`,
  `Versão com O convertido em zero: ${valor.replace(/o/gi, "0")}`,
  `Versão com P em maiúsculo: ${valor.replace(/p/g, "P")}`,
  ];
  const resultado = document.querySelector("#resultado");
  resultado.replaceChildren();
  linhas.forEach((linha,
  indice) => {
    if (indice > 0) {
      resultado.append(document.createElement("br"));
    }
    resultado.append(document.createTextNode(linha));
  });
}
document.querySelector("#analisar").addEventListener("click",
analisarTexto);
const negativos = numeros.filter((numero) => numero < 0);
const soma = numeros.reduce((total,
numero) => total + numero,
0);
const media = soma / numeros.length;
const palavrasBase = ["sol",
"trilha",
"caderno",
"ideias"];
document.querySelector("#vetor").textContent = numeros.join(", ");
const dados = [["Valores negativos",
negativos.join(", ")],
["Quantidade de negativos",
negativos.length],
["Soma dos negativos",
negativos.reduce((total,
numero) => total + numero,
0)],
["Soma total",
soma],
["Soma maior que o tamanho do vetor",
soma > numeros.length ? "sim" : "não"],
["Média",
media.toFixed(1)],
["Acima da média",
numeros.filter((numero) => numero > media).join(", ")],
["Valores entre 0 e 21",
Array.from({
  length: 22
},
(_,
indice) => indice).join(", ")],
["Cada valor + 5",
numeros.map((numero) => numero + 5).join(", ")],
["Total de letras em palavras de amostra",
palavrasBase.reduce((total,
palavra) => total + palavra.length,
0)],
];
const resumo = document.querySelector("#resumo");
dados.forEach(([rotulo,
valor]) => {
  const cartao = document.createElement("article");
  cartao.className = "cartao";
  const titulo = document.createElement("strong");
  titulo.textContent = rotulo;
  const detalhe = document.createElement("p");
  detalhe.textContent = valor;
  cartao.append(titulo,
  detalhe);
  resumo.append(cartao);
});
analisarTexto();



