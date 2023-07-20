// Write your solution here
const cats = ["milo", "otis", "Garfield"];

function destructivelyAppendcat(name){
  cats.push(name);
}

function destructivelyPrependCat(name){
  cats.unshift();
}

function destructivelyRemoveLastCat(){
  cats.pop();
}

function destructivelyRemoveFirstCat(){
  cats.shift();
}

function appendCat(name){
  let newCats = [...cats, name];
  return newCats;
}

function prependCat(name){
  let newCats = [name, ...cats];
  return newCats;
}

function removeLastCat(){
  let newCats = cats.slice(0, length-1);
  return newCats;
}

function removeFirstCat(){
  let newCats = cats.slice(1);
  return newCats;
}

