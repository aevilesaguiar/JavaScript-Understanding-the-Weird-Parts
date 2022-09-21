function dizerOi(nome){
    console.log("Oi, "+nome);
    console.log(this);
}

dizerOi("Anderson");


dizerOi.call({},"Blue");

dizerOi.apply(null,["Maria"])