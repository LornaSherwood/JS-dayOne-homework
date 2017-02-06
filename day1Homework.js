var name = 'Keith';

var printName = function() {
  console.log('My name is ' + name );
};

printName();

// output is Keith, global variable is used inside function

score = 5;

var result = function() {
  var score = 3;
  return score;
};

console.log(result());

// output is 3, local variable inside function shadows global variable outside function

var myAnimals = ['Chickens', 'Cats', 'Rabbits'];

var listAnimals = function() {
  myAnimals = ['Ducks', 'Dogs', 'Lions'];
  for(var i=0;i<myAnimals.length; i++){
    console.log(i + ": " + myAnimals[i]);
  }
}

listAnimals();

// output is 0: Ducks 1: Dogs 2: Lions
// global variable inside function reassigns global variable outside function

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
 
 // output Suspects include Jay, Val, Harvey, Rick
 // output Suspect three is: Keith
 // second use of var suspectThree is only available within the function. The one outside the function remains the global variable.

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

 // output poirot
 // the name is changed before the printName function is called, so it is the new name that is printed.

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

 // output the murderer is valerie (if syntax is fixed)
 // the change to marc is only available inside the function
 // the lack of var before the murderer in the inner function means it becomes overrides the global variable.