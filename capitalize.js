const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a string: ", (inputString) => {
    const words = inputString.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    const capitalizedString = words.join(" ");
    console.log("Capitalized string:", capitalizedString);
    rl.close();
});
