let compra = {
  nomeProduto: "",
  catProduto: "",
  calcularPrecoFinal: function () {
    return (this.txIva / 100) * this.precoBase + precoBase;
  },
  dadosEncomenda: {},
};

let nomeProduto = prompt("Insira o nome do produto");
let catProduto = prompt("Insira a categoria do produto");
let txIva = +prompt("Insira a taxa de Iva");
let precoBase = +prompt("Insira o preço Base");
let dataEncomenda = prompt("Insira a data de encomenda");
let prazoEntrega = prompt("Insira o prazo de entrega");
let localEntrega = prompt("Insira o local de Entrega");

compra.nomeProduto = nomeProduto;
compra.catProduto = catProduto;
compra.txIva = txIva;
compra.precoBase = precoBase;
compra.precoFinal = compra.calcularPrecoFinal();
compra.dadosEncomenda.dataEncomenda = dataEncomenda;
compra.dadosEncomenda.prazoEntrega = prazoEntrega;
compra.dadosEncomenda.localEntrega = localEntrega;

console.log(compra);

function showLength() {
  return Object.keys(compra).length;
}

console.log(showLength());

function showProperties() {
  return Object.keys(compra);
}
console.log(showProperties());

function removeProp(arg) {
  delete compra[arg];
}

console.log(removeProp("catProduto"));

console.log(compra);
console.log(showLength());
console.log(showProperties());
