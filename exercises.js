// 1. Use a function expression called userInfo with three arguments for city, state, and zip. It must return Lehi, UT 84043.

// 2.In the below functions return, make your string interpolation and conditional that returns "1 point", when 
//the ship variable is set to "hit" and when the variable is set to anything else (aka, a "miss"), have it 
// return "You lost a point".

// Fill in the below code with your requirements

// var ship = "";

// function battleShip() {
//   return()
// }

var ship = "";

function battleShip(ship) {
    if (ship == 'hit') {
			return('You have HIT!');
      } else {
				return('You have missed!');
			}
}
console.log(battleShip(ship));


// 3. Inside the below function, write a variable 
// and give it a string that says "It's a trap!" Then on the return (just like a console.log) 
// use string interpolation to finish the movie line

// function movieLine() {
//     // Set your variable here
    
//     return (`replace-this-with-something-clever ${}`)
// }

function movieLine() {
    const saying = "It's a trap!";
        return (`Don't look behind the door! ${saying}`);
}

movieLine()