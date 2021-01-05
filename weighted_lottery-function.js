// Weighted Lottery Function

const weightedLottery = weights => {                     //  first create a function takes in object weights as the arg(as an arrow function)
    let containerArray = [];                                              // create a container array set to emtpy array  
  
    Object.keys(weights).forEach(key => {                // call object.keys and pass weights method(iterating over object). then call forEach(takes a function as argg of key)
      for (let i = 0; i < weights[key]; i++) {                      // secondary loop-let i equal 0 and i is less than weights key and incrememnt i++
        containerArray.push(key);                                   // say container array push key
      }
    });
  
    return containerArray[(Math.random() * containerArray.length) | 0];   // return the containerArray-pass in Math.random() now to get the random element
                                                                                                                                      // now call the containerArray length to get a random, now pipe(bitwise or return 0) then 0
  };
  
  const weights = {     
    green: 1,           
    yellow: 2,
    red: 3
  };
  
  weightedLottery(weights); 



// -------- Another Answer ----------  
// function weightedRandom(prob) {
//     let i, sum=0, r=Math.random();
//     for (i in prob) {
//       sum += prob[i];
//       if (r <= sum) return i;
//     }
//   }

//   let result = weightedRandom({green:0.1, yellow:0.2, red:0.3});
//   console.log(result);
