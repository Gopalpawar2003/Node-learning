const fs = require ('fs');
const content = fs.readFileSync("story.txt" , "utf-8");
console.log(content);