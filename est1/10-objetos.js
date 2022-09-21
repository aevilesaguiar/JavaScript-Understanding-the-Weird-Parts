//objetos são variaveis que contém variáveis, ele trata valores primitivos como objetos

//declarar objeto
var obj={};

//declarar um objeto que guarda valores
var pessoa={
    nome:"Flavio",
    sobrenome:"Tavares",
    idade:39,
    pelo:80,
    altura: 1.73,
    apresentar: function(){
        console.log("Olá, eu sou  "+this.nome + " "+this.sobrenome);
    },
    apresentar2: apresentar
}

console.log(pessoa.nome + " "+ pessoa.sobrenome + " "+pessoa.altura)


pessoa.apresentar();
console.log("*******************************************************");

function apresentar(){
    console.log("Olá, eu sou  "+this.nome + " "+this.sobrenome);
}

console.log("*******************************************************");

pessoa.apresentar2();