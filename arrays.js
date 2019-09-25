var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];


function addElementToBeginningOfArray(array, element){
  return [element, ...array];
  
}

function destructivelyAddElementsToBeginningOfArray(array, element){
 array = array.unshift(element);
 return array;
}
  