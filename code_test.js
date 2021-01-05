// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('What do you think of Node.js? ', (answer) => {
//   console.log('Thank you for your valuable feedback:', answer);
//     function q(); {
//         if (answer) == (Lunch);

//     }
        

  //   rl.close();
// });

const io = require('console-read-write');

async function main() {
  // Simple readline scenario
  io.write('I will echo whatever you write!');
  io.write(await io.read());

  // Simple question scenario
  io.write(`hello ${await io.ask('Who are you?')}!`);

  // Since you are not blocking the IO, you can go wild with while loops!
  let saidHi = false;
  while (!saidHi) {
    io.write('Say hi or I will repeat...');
    saidHi = await io.read() === 'hi';
  }

  io.write('Thanks! Now you may leave.');
}

main();
