import readline from "readline"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


export const userEnterPrompt = (question: string) => new Promise((resolve, reject) => {
    try {
        // Ask the user for input
        rl.question(question, (input: string) => {
            console.log(`You entered: ${input}`);
            rl.close();
            resolve(input);
        });
    } catch (error) {
        rl.close();
        return reject(new Error(error))
    }
})