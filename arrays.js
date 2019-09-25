var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];


function addElementToBeginningOfArray(array, element){
  return array.unshift('element');
  
}

function destructivelyAddElementsToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}