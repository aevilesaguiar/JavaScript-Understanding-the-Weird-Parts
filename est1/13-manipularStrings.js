var s = "The winter é coming. It' s really coming!";
console.log("quantidade de caracteres: "+s.length);

console.log("posição que está essa palavra APARECE PELA PRIMEIRA VEZ: "+s.indexOf("coming"));

console.log("posição que está essa palavra APARECE PELA ULTIMA VEZ: "+s.lastIndexOf("coming"));

console.log("posição de início e fim de uma string: "+s.slice(4,10));

console.log("posição de início e fim de uma string pode ser negativo: "+s.slice(4,-8));