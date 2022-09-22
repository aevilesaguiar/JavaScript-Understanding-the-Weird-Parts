Syntax Parser (analisador de sintase): Um programa que lê seu codigo e determina se a gramática é válida.

Compilador(as vezes tem a ver com interpretador): fazem o trabalho de ler caractere por caractere do código e determina se a sintaxe é válida,
e em seguida implemennta essa sintaxe de uma maneira que o computador possa entender

![image](https://user-images.githubusercontent.com/52088444/191597609-70d82d57-d146-4cb3-84c0-5864aa2f9c4c.png)
Existe um compilador entre seu código e as instruções e ele analisa a sintaxe. O seu código não é o que está sendo fornecido, e sim a tradução.

Lexical Enviroment: ambiente léxico é um lugar onde variáveis e funções vivem ou estão fisicamente presentes durante a execução do programa.Estamos falando sobre  código que está escrevendo, o vocabulário.

Context de execução: contém seu código, o código em exececução.

Ambientes lexicais estamos falando sobre o contexto de execução, estamos falando de analisadores de sintaxe. 

Name/Value pair(par valor): é umnome que mapeia para um valor único.Ex:  Address='100 Main Sr.'; (este é um par nome valor)
Objeto: é uma coleção de pares  nome/valor;
Endereço é uma coleção de outros nomes e valore;
Address:
  {
  Street:'Main',
  Number:100
       Apartment:{
       Floor:3;
       Number:301
        }
  }

Execution Context (Global)
Sempre que um códifo é executado em JS , é ejecutado dentro do contexto de execução,
- global, estamos falando sobre a coisa que é acessível em todos os lugares para tudo em seu código, é global.
- O mecanisco JS está criando essas duas coisas para você" Global Object(window) e 'this (e ele cria uma variável chamada this)' e no nivel global this e window são iguais" sempre que seu código é executado e embrulhado dentro de um contexto de execução. Elas são criadas pelo o motos do JS.
Um contexto de execução foi criado a nível global. Há um objeto global que significa que o objeto está disponivel para todo o código sendo executado desse arquivo dentro desse ambbiente léxico.

Quando dizemos Global isso siginifica não dentro de uma função. Isso significa código ou variáveis que não estão dentro de uma função global.

Em js quando você cria variaveis e funções e não está dentro de uma função, essas variáveis e funções são anexadas para o objeto global.

Outer Environment: Link para o ambiente externo.

Hoisting: é o comportamento padrão do JavaScript de mover as declarações para o topo. Que não é necessariamente mover para o topo na verdade o mecanismo JS reserva espaço de memória para as variáveis que você construiu e todas as funções também. Estão essas variaveis e funções existem na memória. Por isso que o JS coloca o valor como undefined em variáveis , por que ele reservou o espaço, mas não foi informado o valor ainda.

Todas as variaveis em js são definidas como Undefined. Já as funções estão em memória na totalidade.
Quando falamos undefined estamos simplemente dizendo que o valor ainda não foi definida.


## Single Threaded e Synchronous Execution(execução assincrona)

- Single Threaded : isso  significa que um comando está sendo executado de cada vez.ingle threaded significa que tem apenas uma pilha de chamadas. O que estiver no topo da pilha de chamadas é executado primeiro.

Quando dizemos que JS é Single Threaded sob o navegador talvez não.

-Sincrono é bem semelhante ao Single Thread, significado de sincrono em programação é um de cada vez.Então o código é executado uma linha de cada vez na ordem em que aprece.


- Invocation significa apenas executar uma função ( running a function)
Em JS é usado o parenteses.
Ou seja quando dizemos invocar uma função, queremos dizer apenas execute a função.

- Variables environment: Ambiente variável está apenas falando sobre onde as variáveis ​​vivem que você criou e como eles se relacionam uns com os outros na memória.

A pilha é uma estrutura de dados que implementa o conceito de último a entrar, primeiro a sair (LIFO (Last in First Out)), ou seja, o último elemento adicionado será o primeiro elemento a ser removido.

Escopo: é onde uma variavel está disponível em seu código.


let  pode ser usado no lugar do var. Embora não esteja substituindo.
quando declaramos let dentro de um bloco ela só ficará disponível dentro do bloco e não globalmente. Então quando usamos um let num bloco temos o bloco de escopo como mencionado acima.

## Asynchonous Callbacks

Assincronos significa mais de um cada vez. JS é sincrono , no entanto existem coisas como eventos de clique ou você pode sair e obter dados em JS e recuperá-los. Onde você tem funções callbacks que são executadas quando esse evento é concluído, quando essa ação estiver completa.
## Como JS lida com tipos

JS tem tipagem dinâmica isso significa que você não declara os tipos que uma variável contém. Em vez disso o motor calcula.

Tipos primitivos - é um tipo de dado que representa um valor único em outras palavras , algo que não é um objeto(objeto é uma coleção de valores).

## Tipos primitivos em JS

- Undefined: representa uma falta de existencia;
- null: também representa falta de existencia(este tipo é melhor para vc usar quando você for dizer que algo não existe que não tem valor)
- boolean:  isso é true ou false
- number: em js há apenas um tipo numérico
- string: é uma sequencia de caracteres  ambos com aspas simples ou duplas. Em js diferente de outras linguagens ela é tratada como um tipo primitivo.
- symbol:ainda está sendo desenvolvido

## Operators

Operator é uma função especial que é sintaticamente 

Notação infixa é uma notação comum em aritmética e na lógica, onde os operadores são colocados entre os operandos em que eles atuam.

Para os computadores é mais simples analisar a notação prefixa ou a posfixa do que analisar a infixa, mas muitas linguagens de programação a usam por causa de sua familiaridade.

Na notação infixa, parenteses são necessários para indicar a ordem em que as operações devem ser feitas. Na ausência de parênteses, as regras de precedencia indicam a ordem das operações[3].

A notação infixa pode também ser comparada à notação de função, onde o nome da função sugere uma determinada operação e os argumentos são seus operandos. Um exemplo da notação de função poderia ser {\displaystyle Soma(1,3)}{\displaystyle Soma(1,3)}, onde a função {\displaystyle Soma(-,-)}{\displaystyle Soma(-,-)} significaria {\displaystyle Soma(1,3)=1+3=4}{\displaystyle Soma(1,3)=1+3=4}

então + ,-,/,*... são operadores. E operaDORES SÃO FUNÇÕES;

## Operador de Precedencia e Associação

- Operador de Precedencia : significa apenas qual função do operador é chamado primeiro . A precedência do operador determina como os operadores são analisados ​​entre si. Operadores com maior precedência tornam-se operandos de operadores com menor precedência.

console.log(a = b = 5);
// expected output: 5
- Associação: 
Dentro de operadores de mesma precedência, a linguagem os agrupa por associatividade . A associatividade à esquerda (da esquerda para a direita) Ela só entra em jogo quando dois ou mais operadores tem a mesma precedencia.

## Coercion

Coerção: convertendo um valor de um tipo para outro;
Ex: var a = '1'+2; //12
ao invens de dar um erro ele fez a coerção , isso tem a ver com o fato de js ser digitado dinamicamente então ele tenta converter para o valor que ele quer.

## Comparson Operators

Operadors de comparação 
== igualdade
=== igualdade estrita( tem que ser mesmo valor e mesmo tipo) com esse operador não haverá tentativa de coagir os valores. Essa é a melhor opção para codificar e evitar a conversão de tipos

- https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Equality_comparisons_and_sameness


## Default Values


