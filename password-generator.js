const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function generatePassword() {
    rl.question("first name: ", (firstName) => {
        rl.question("last name: ", (lastName) => {
            
            const firstThree = firstName.slice(0, 3);
           
            const lastThree = lastName.slice(-3);
           
            const password = firstThree + lastThree + "@2024";
            
            console.log("Your generated password is:", password);
            rl.close();
        });
    });
}

generatePassword();
