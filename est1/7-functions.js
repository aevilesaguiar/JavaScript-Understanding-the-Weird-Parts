//Funções de JS
//FUNÇÕES SÃO BLOCOS DE CÓDIGO QUE PODEM SER EXECUTADOS MAIS DE UMA VEZ

//declaração de funções
function dizerOi(nome){
    console.log("Olá: "+nome);
}

dizerOi("Jon");
dizerOi("Maria");
dizerOi("Pedro");
dizerOi("Paulo");


//funçao anônima
var dizerOla= function(nome){
    console.log("Olá "+ nome)
}

dizerOla("BRAIN");
dizerOla("PÉROLA");

//não é indicado usar o código abaixo
var dizerTchau = new Function("nome","console.log('Tchau '+nome);");//primeira string é o argumento da função  e a segunda string é o bloco de execução

dizerTchau("Ricardo");

//O js faz Hoisting de função!