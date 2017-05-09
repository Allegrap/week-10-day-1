var name = 'Keith';

var printName = function() {
  console.log('My name is ' + name );
};

printName();

// This will print out "My name is Keith", as it uses the global variable 'name' at the top.


score = 5;

var result = function() {
  var score = 3;
  return score;
};

console.log(result());

// This will return 3. Score is assigned before the function, but as it is reassigned inside the function it will use that one.


var myAnimals = ['Chickens', 'Cats', 'Rabbits'];

var listAnimals = function() {
  myAnimals = ['Ducks', 'Dogs', 'Lions'];
  for(var i=0;i<myAnimals.length; i++){
    console.log(i + ": " + myAnimals[i]);
  }
}

listAnimals();

// The listAnimals function loops through an array and prints out each item in the array after its index and a colon. In this function the original myAnimals array is overridden.
// This will print out a numbered list of the myAnimals array inside the function, as this overrides the myAnimals array outside the function.


var suspectOne = 'Jay';
var suspectTwo = 'Val';
var suspectThree = 'Keith';
var suspectFour = 'Rick';

var allSuspects = function() {
  var suspectThree = 'Harvey'
  console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
};

allSuspects();
console.log( 'Suspect three is:' + suspectThree );

// This lists out a series of individual suspects. The allSuspects function prints out a list of these suspects. The first function call at the bottom calls on the allSuspects function and lists out everything, whereas the second identifies suspectThree.
// This will print out "Suspects include: " and then a list of the suspects separated by commas. suspectThree will be 'Harvey' as it is overridden inside the function. Then it will print out "Suspect three is: Keith", as it is not calling on the allSuspects function, it is just calling on the original suspectThree outside the function.


var detective = {
  name : 'Ace Ventura',
  pet : 'monkey'
};

var printName = function(detective) {
  return detective.name
};

var detectiveInfo = function() {
  detective['name'] = 'Poirot'
  return printName(detective);
};

console.log(detectiveInfo());

// The printName function will return the name of the detective in the detective hash: 'Ace Ventura'. The detectiveInfo function does the same, by passing a detective through the printname function.
// This will print out 'Poirot', as we are changing the name of the detective in the detectiveInfo function to 'Poirot' and then passing that through the printName function.


var murderer = 'rick';

var outerFunction = function() {
  var murderer = 'marc';

  var innerFunction = function() {
    murderer = 'valerie';
  }

  innerFunction();
}

outerFunction();
console.log('the murderer is ', murderer);

// Stupidly complicated, but I think that the innerFunction would change the murderer to valerie, as you are reassigning the murderer variable but it is the one before it that is changed, not the murderer variable as a whole. If that makes sense. 'rick' is not changed, as it is above 'marc'. 
//This will print "the murderer is rick", because the function does not change the global murderer variable. Also, we are not asking it to print the result of the outerFunction, only the second line.