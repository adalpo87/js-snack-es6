/* Scrivi una funzione che accetti tre argomenti:
un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “a” e “b” */


$(function(){

  let mioArray = "QuestoèUnArray";
  let a = 3;
  let b = 8;
  let nuovoArray = finder(mioArray, a, b);


  console.log(nuovoArray);

  
});



//funzioni


const finder = (array, a, b) => array.slice(a, b);