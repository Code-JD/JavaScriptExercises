// Manual Exponent JS NOTES
// using reducers

// toThePowerOf(2, 3) => 8
//reducer process-function is called reduce

const toThePowerOf = (num, exp) => {                             // create an arrow function takes in 2 arguments num and the expononet
    const items = Array(exp).fill(num);                                //data structure-an array, then take the exponent value and fill with the number
                                                                                                                                                               //Array(exp).fill(num) creates an array and pre populates it [2, 2, 2]
    const reducer = (accumulator, currentValue) => accumulator * currentValue;           //reducer-anon function-descriptive name on what the goal is
                                                                                                                                                               // we have a total and a current value and then the arrow function 
                                                                                                                                                               //total times the current value-reducer is a function that takes 2 arguments and then it multiplies them
    return items.reduce(reducer);                                        // call the array items and call the reduce function
  };
  
  toThePowerOf(2, 3); //?
  toThePowerOf(3, 3); //?
  toThePowerOf(4, 2); //?
  toThePowerOf(10, 10); //?
  10 ** 10; //?

// // toThePowerOf (2, 3) =>

// const toThePowerOf = (base, exp) => {
//     const items = Array(exp).fill(base);
//     const reducer = (total, nowValue) => total * nowValue;
//     return items.reduce(reducer);
// }

// console.log(toThePowerOf(2, 3));



// different way to solve
// function toThePowerOf(num, exp)  {
// 	let result = 1;
// 	if(exp == undefined)
// 		exp = 2;
// 	for(let i=1; i<=exp; i++) {
// 		result = result * num;
// 	}
// 	return result;
// }

// console.log(toThePowerOf(2, 3));
