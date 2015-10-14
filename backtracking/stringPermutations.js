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

//create a results variable to store the results

//inner function that will recurse to get all permutations (currentPermutation, currentIndex)
  //initialize currentPermutation and currentIndex if not already provided
  
  //check to see if the current index equals the length of the string
    //this means that we have generated a string of the same length
    //push the string into the results array
      //extract the values from their tupels
    
  //loop through each of the possible strings to be inserted to the current string
    //if the tupel of the current position is not already in current array
      //push the tupel into the current array [i,val]
      //recurse
      //pop the tupel back off the current array
  

//initial call to the inner function

//return results

function permutations(string) {

  var results = [];
  
  var generatePermutations = function(currentPermutation, currentIndex) {
    currentPermutation = currentPermutation || [];
    currentIndex = currentIndex || 0;
    
    if(currentIndex === string.length) {
      // debugger;
      var permutation = currentPermutation.reduce(function(accum,tupel) {
        return accum.concat(JSON.parse(tupel)[1]);
      },'');
      
      if(results.indexOf(permutation) < 0) {
        results.push(permutation);
      }
      return;
    }
    
    for(var i in string) {
      if(currentPermutation.indexOf(JSON.stringify( [i,string[i]] )) < 0) {
        currentPermutation.push(JSON.stringify([i,string[i]]));
        generatePermutations(currentPermutation,currentIndex + 1);
        currentPermutation.pop();
      }
    }
  };

  generatePermutations();
  
  return results;


}
