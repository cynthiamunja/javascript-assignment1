const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function passwordChecker() {
    rl.question("Enter your password: ", (password) => {
        const commonWords = ["password", "123456", "qwerty"];
        
        // Check if password is blank
        if (!password) {
            console.log("Password cannot be blank. try again.");
            passwordChecker();
            return;
        }
        
        // Check for repeated characters
        let previousCharacter = null;
        for (let char of password) {
            if (char === previousCharacter) {
                console.log("Password cannot contain repeated characters.try again.");
                passwordChecker();
                return;
            }
            previousCharacter = char;
        }
        
        // Check against common words
        for (let commonWord of commonWords) {
            if (password.toLowerCase().includes(commonWord.toLowerCase())) {
                console.log("Password cannot contain common words.try again.");
                passwordChecker();
                return;
            }
        }
        
        // Password meets all criteria
        console.log("Strong password!");
        rl.close();
    });
}

passwordChecker();
