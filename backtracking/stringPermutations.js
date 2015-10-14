//find all possible combinations of a given string
//eg. 'cat' -> ['cat','cta','act','atc','tac','tca']

var stringPermutations = function (inputString) {

  var results = [];

  var generatePermutations = function(currentPernutation) {
    if(!currentPernutation) { currentPernutation = ''; }

    if(currentPernutation.length === inputString.length){
      results.push(currentPernutation);
      return;
    }

    for(var i in inputString) {
      if(currentPernutation.indexOf(inputString[i]) < 0) {
        currentPernutation += inputString[i];
        generatePermutations(currentPernutation);
        currentPernutation = currentPernutation.slice(0,currentPernutation.length-1);
      }
    }

  };

  generatePermutations();

  return results;

};
  //create temp array to hold all combinations of the string

  //inner function that can recurse over the different combinations of the word
    
    // check to see if the charIndex is the same is the length of the input string
      //if so, then push it into the array

    //for loop to loop through the letters in the string
      //add a letter to a string
      //recurse to next position
      //remove letter from string

  // inital call to the inner function

  //return results


