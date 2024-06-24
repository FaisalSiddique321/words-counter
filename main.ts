#! /usr/bin/env node


import inquirer from "inquirer";
import chalk from "chalk";

console.log("\n\twellcome to \'faisalsiddique\' - CLI word counter\n");

const answers: {
    sentence: String
} = await inquirer.prompt(
    {
        name: "sentence",
        type: "input",
        message: `${chalk.cyan.bold("Enter your sentence to count words: ")}`
    }
);

const words = answers.sentence.trim().split(" ");


console.log(words);
console.log (`${chalk.yellowBright.italic(`Your sentence has ${words.length} words.`)}`);