const fs = require("fs");
const path = require("path");

//Create a folder
/*fs.mkdir(path.join(__dirname,'/test'),{}, err=>{
    if(err) throw err
    console.log("Folder created")
})*/

//Write into a file
// fs.writeFile(path.join(__dirname,'/test','hello.txt'),'Hello World!', err=>{
//     if(err) throw err
//     console.log("File Written to")
// })

//Append into a file
// fs.appendFile(path.join(__dirname,'/test','hello.txt'),'This one is appended', err=>{
//     if(err) throw err
//     console.log("File Modified...")
// })

//Read from a file
// fs.readFile(path.join(__dirname,'/test','hello.txt'),'utf8', (err,data)=>{
//     if(err) throw err
//     console.log("File Content Read...",data)
// })

//Write into a file
fs.rename(
  path.join(__dirname, "/test", "hello.txt"),
  path.join(__dirname, "/test", "helloworld.txt"),
  (err) => {
    if (err) throw err;
    console.log("File Renamed...");
  }
);
