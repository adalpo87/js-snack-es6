//jsnack5
//funzioni
 //generatore di codici

//generatore di numeri casuali

const rdmNumber = (min, max) => Math.floor(Math.random()*(max - min + 1)+min);


const codegen = () => {
  
//generazione del codice
  const alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z"];
//codice
  let code = "";
  while (code.length < 3){
    code += alfabeto[rdmNumber(0, alfabeto.length - 1)]
  }
  
  while (code.length < 6){
    code += rdmNumber(0,9);
  }
  return code;
}


const arraySquadra = [{nome:'Marco'},{nome:'Alessandro'},{nome:'Stefano'},{nome:'Mario'},{nome:'Andrea'}];
  
  for (let player of arraySquadra){
    player.code = codegen();
    player.media = rdmNumber(0, 50);
    player.perc = rdmNumber(0, 100);
  }
  
  console.log(
    `${arraySquadra}`
  );
  
 