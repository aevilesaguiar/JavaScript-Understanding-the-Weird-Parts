// criamos um prototype através de uma função

function Stark(nome, idade, corDoCabelo){
    this.nome=nome;
    this.idade=idade;
    this.corDoCabelo=corDoCabelo;
    this.sobrenome=" Stark";
    this.apresentar= function(){
        console.log("Olá, eu sou "+this.nome + " "+this.sobrenome+" . ")
    }
}

var ned= new Stark("Ned",40,"Preto");
ned.apresentar();
var sansa = new Stark("Sansa", 13,"Cobre")
sansa.apresentar();

console.log(ned);
console.log(sansa);

