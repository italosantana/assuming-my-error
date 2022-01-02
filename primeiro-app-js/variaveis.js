var um = 1;
let dois = 2;
const tres = 3;

/*
	var

	função com escopo
	pode ser alterado em escopo
	disponível antes da declaração
*/

/*
	let
	Bloco com escopo
	Pode ser alterado em escopo
	Disponível somente após declaração

*/

/*
	const
	Bloco com escopo, como let
	Não pode ser alterado
	Somente disponível após a declaração

*/


// Quando devemos usar?
// const = por padrão
//let = laços, loops

//==> 1) Exemplo do uso do Var

var nome = 'Italo Santana';
console.log('Meu nome é....', nome);

function imprimirNome() {
	var nome = 'Valeime Silva';
	console.log('Meu nome é ', nome)
}

imprimirNome();

// ==> 2) Exemplo do uso do let

function imprimirIdade(){
	for(let idade = 33; idade <= 50; idade++){
	console.log('Idade dentro do for:', idade);	
	}

}

imprimirIdade();

// 3) exemplo de const

const pessoa = {
	nome: 'Italo Santana',
	idade: '25',
}

function imprimirDadosPessoa(){
	console.log(`Nome...: ${pessoa.nome} e a idade é...: ${pessoa.idade}`);
}

imprimirDadosPessoa();