//1) create a three file. write any
// file name in the first one, then read this file and delete exact file.

const fs = require("fs/promises");

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

main();
