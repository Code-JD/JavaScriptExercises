// ARRAY POPPER

//build a class and then a method that alternates which side of an array it pops off


class ArrayPopper {            // create a class called array popper -class can have data inside
    constructor(arr) {         //create a constructor anticipates to have an array
      this.arr = arr;          //then inside the constructor set up the instance variable
      this.atBeginning = true; //then pass in a second value-defualt value(boolean when created it keeps track of it from the beginning of array)
    }

    togglePopper() {                             //now create the toggle poopper method with no arguments
      this.atBeginning = !this.atBeginning;      //at beginning-toggles the value being true-whatever at beginning ! reverse it
      return this.atBeginning ? this.arr.pop() : this.arr.shift();  //ternary operator conditional- return this at beginning-if value is true ? perform the task then : not true
    //whenever you call toggle popper I want you to return array pop(last element in array) if false return this.array shift(returns first element array)
    }
  }

  const ap = new ArrayPopper([1, 2, 3, 4, 5]);  //call const variable then new arrayPopper and pass in the array

  ap.togglePopper(); //? 1 when we create a new array popper it hits the ternary operator-shift(return) first value(array number 1)
  ap.togglePopper(); //? 5 
  ap.togglePopper(); //? 2
  ap.togglePopper(); //? 4
  ap.togglePopper(); //? 3
  ap.togglePopper(); //?

  

// class ArrayPopper {
//     constructor(arr) {
//       this.arr = arr;
//       this.atBeginning = true;
//     }
  
//     togglePopper() {
//       this.atBeginning = !this.atBeginning;
//       return this.atBeginning ? this.arr.pop() : this.arr.shift();
//     }
//   }
  
//   const ap = new ArrayPopper([1, 2, 3, 4, 5]);
  
//   ap.togglePopper(); //?
//   ap.togglePopper(); //?
//   ap.togglePopper(); //?
//   ap.togglePopper(); //?
//   ap.togglePopper(); //?
//   ap.togglePopper(); //?


// class ArrayPopper {
//     constructor(arr) {
//       this.arr = arr;
//       this.atBeggining = true;
  
//     }
//   // the ! makes the statement not true or opposite to what's on the left -- ! is used when you want to use a true or a false
//   //  so this.atBeggining = !this.atBeggining; means that !this.atBeggining is the oppositeof what's on the left-- so it's false
//   // togglePopper can be anything. you always just wanna name things so they make sense.. but you could have named it anything
//     togglePopper() {
//       this.atBeggining = !this.atBeggining; 
//       return this.atBeggining ? this.arr.pop() : this.arr.shift();
//   //  the return this.atBeggining ? is saying that this.arr.pop is true and this.arr.shift is false--true first cause that's how it was set up under the class.
//   //  the ? is asking for a true or false and the : stands for "or"   
//     }
//   }
  
//   // 'ap' could be anything---
//   const ap = new ArrayPopper([1, 2, 3, 4, 5]);
  
//   // put the following one at a time for each number
  
//   ap.togglePopper(1); 
//   ap.togglePopper(3);
//   ap.togglePopper(4);
//   ap.togglePopper(5);
//   ap.togglePopper(2);


// class ArrayPopper {
//     constructor(arr) {
//         this.arr = arr;
//         this.atBeginning = true;
//     }

// togglePopper() {
//     this.atBeginning = !this.atBeginning;
//     return this.atBeginning ? this.arr.pop() : this.arr.shift();
// }
// }

// const ap = new ArrayPopper([1, 2, 3, 4, 5]);
 

// ap.togglePopper()
// ap.togglePopper()
// ap.togglePopper()
// ap.togglePopper()
// ap.togglePopper()

// const strap = new ArrayPopper(['Hi', 'there', 'from', 'JS']);
// strap.togglePopper();
// strap.togglePopper();
// strap.togglePopper();
// strap.togglePopper();

