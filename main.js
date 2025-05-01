//1) create a three file. write any
// file name in the first one, then read this file and delete exact file.

const fs = require("fs/promises");
const path = require("path");
const moment = require("moment");

async function main() {
  const dirs = await fs.readdir(__dirname);
  console.log(dirs);

  const deletebyName = await fs.readFile("test.txt", "utf-8");

  console.log(deletebyName);

  for (let dir of dirs) {
    if (deletebyName === dir) {
      fs.unlink(dir);
    } else {
      console.log("no matching files");
    }
  }
}

//Easy pirveli, imena cookie batono davit chavylape.

//! main();

//
//create a files and folders in root directory,
//  make some nested direcotirs with some files,
// then write a script that deletes only .txt files from directories.

async function foo1(fullPath) {
  const dirs = await fs.readdir(fullPath);
  for (let dir of dirs) {
    const absolutePath = path.join(fullPath, dir);
    const stat = await fs.stat(path.join(fullPath, dir));
    if (stat.isDirectory()) {
      console.log("dir: " + dir);

      foo1(absolutePath);
    } else if (path.extname(dir) === ".txt") {
      await fs.unlink(absolutePath);
    }
  }
}

//! foo1(__dirname);

//extname arvicodi nagdad

//3) Print all files in a folder along with size and last modified time.
//index.js - 2.1 KB - modified: 2024-01-01, you can use moment js.

async function main1(fullPath) {
  const dirs = await fs.readdir(fullPath);
  for (let dir of dirs) {
    const stat = await fs.stat(path.join(fullPath, dir));
    if (stat.isDirectory()) {
      continue;
    } else {
      const size = stat.size / 1024;
      const lastModified = moment(stat.mtime).format("YYYY-MM-DD HH:mm:ss");
      console.log(`${dir} - ${size} KB - Last modified at : ${lastModified}`);
    }
  }
}

//! main1(__dirname);

//continue-ზე ჯპიტის ვკითხე
//უაზრო ერორი მომცა მიყრიდა უაზრო ფაილებს
//რაც შექმნილი არ მქონდა მე
//რო ვკითხე ან გითჰაბის ან ნოუდ მოდულების გამოო

//4) create a product.json files where should be some products with
//  folowing properties: name, description, price, color, id. When you run next command "
// node main.js ASC" it should return all sorted
// products with price ascending. "node main.js  DESC"  => sorted products with price descending.

async function main2() {
  const [, , command] = process.argv;
  const data = await fs.readFile("product.json", "utf-8");
  const object = JSON.parse(data);

  let array = [];

  object.map((el) => {
    if (command === "ASC") {
      price = el.price;
      array.push(el.price);
      const res = array.sort((a, b) => a - b);
      console.log(res, "Ascending");
    } else if (command === "DESC") {
      price = el.price;
      array.push(el.price);
      const res = array.sort((a, b) => b - a);
      console.log(res, "Descending");
    }
  });
}

main2();

//უმაგრესი დავალება იყო ბოლო მაგრად მომეწონა
//თან სორტიც გავიხსენე იმენა W homework
