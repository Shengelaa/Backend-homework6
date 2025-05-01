//1) create a three file. write any
// file name in the first one, then read this file and delete exact file.

const fs = require("fs/promises");
const path = require("path");

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