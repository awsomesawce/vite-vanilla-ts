#!/usr/bin/env node
// Module experiment

// test if it works
function addTwo(num) {
  return num + 2;
}

// test complete

import chalk from 'chalk';

import fs from 'fs';

const nmdir = fs.readdirSync('../node_modules')

const print = console.log

const printYellow = (msg) => {
    let myText = chalk.yellow(`${msg}`)
    return print(myText)
}

const listdir = () => {
    for (let prop of nmdir) {
        console.log(prop)
    }
    return "done"
}

export { nmdir, listdir, addTwo, print, printYellow };
