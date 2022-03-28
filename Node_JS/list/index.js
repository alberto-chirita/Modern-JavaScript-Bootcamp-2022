#!/usr/bin/env node

import fs from "fs";
import chalk from "chalk";
import path from "path";
// const fs = require("fs");
// const chalk = require("chalk");

// Method #2 of wrapping lstat inside of a promise
// const util = require("util");
// const lstat = util.promisify(fs.lstat);

// Method #3 of wrapping lstat inside of a promise
const { lstat } = fs.promises;

const targetDir = process.argv[2] || process.cwd();

fs.readdir(targetDir, async (err, fileNames) => {
  // EITHER
  // err === an error object, which means something went wrong
  // OR
  // err === null, which means everything is OK

  if (err) {
    // error handling code here
    // throw new Error(err); // better
    console.log(err);
  }

  // prints out an array with all the files present in the current folder
  // console.log(fileNames);

  // BAD CODE HERE!!!
  // for (let fileName of fileNames) {
  //   fs.lstat(fileName, (err, stats) => {
  //     if (err) {
  //       console.log(err);
  //     }

  //     console.log(fileName, stats.isFile());
  //   });
  // }

  // SOLUTION #1
  // const allStats = Array(fileNames.length).fill(null);

  // for (let fileName of fileNames) {
  //   const index = fileNames.indexOf(fileName);

  //   fs.lstat(fileName, (err, stats) => {
  //     if (err) {
  //       console.log(err);
  //     }

  //     allStats[index] = stats;

  //     const ready = allStats.every((stats) => {
  //       return stats;
  //     });

  //     if (ready) {
  //       allStats.forEach((stats, index) => {
  //         console.log(fileNames[index], stats.isFile());
  //       });
  //     }
  //   });
  // }

  // SOLUTION #2
  // Method #1 of wrapping lstat inside of a promise
  // const lstat = (fileName) => {
  //   return new Promise((resolve, reject) => {
  //     fs.lstat(fileName, (err, stats) => {
  //       if (err) {
  //         reject(err);
  //       }

  //       resolve(stats);
  //     });
  //   });
  // };
  // for (let fileName of fileNames) {
  //   try {
  //     const stats = await lstat(fileName);
  //     console.log(fileName, stats.isFile());
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  // BEST SOLUTION
  const statPromises = fileNames.map((fileName) => {
    return lstat(path.join(targetDir, fileName));
  });

  const allStats = await Promise.all(statPromises);

  for (let stats of allStats) {
    const index = allStats.indexOf(stats);

    if (stats.isFile()) {
      console.log(fileNames[index]);
    } else {
      console.log(chalk.bold(fileNames[index]));
    }
  }
});
