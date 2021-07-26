#!/usr/bin/env node
// From ./modOne.mjs
// It works!  Success!

import { addTwo, listdir, print, printYellow } from './modOne.mjs';

// Prints: 6

const deliver = () => {
    return printYellow(`The answer was ${addTwo(4)}`)
}

deliver()
console.log()
listdir()
