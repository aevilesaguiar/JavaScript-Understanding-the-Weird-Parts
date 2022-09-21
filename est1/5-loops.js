// o js tem 4 tipos de loop
// for, for in, while , do while

var x=0;

//while recebe uma condicional true or false
while(x<10){
    console.log("X é igual a: "+x);
    x++;
}

var i = 0;
do {
   console.log(i += 1);
} while (i < 5);


for (let i = 0; i < 10; i++) {
   console.log(i);
    
}

var object={
    nome:'Jon',
    sobrenome:'Snow'
};
//for in itera sobre todas as propriedades de um objeto
for (var key in object) {
   // console.log(key);
    console.log(object[key])
}