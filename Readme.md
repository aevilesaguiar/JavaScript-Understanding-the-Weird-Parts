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
- O mecanisco JS está criando essas duas coisas para você" Global Object e 'this'" sempre que seu código é executado e embrulhado dentro de um contexto de execução. Elas são criadas pelo o motos do JS.

