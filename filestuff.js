


const { log } = require("console");
const filesys = require("fs")

const myFile = filesys.existsSync("./content/yo.txt",'utf8')
console.log(myFile)

const firstfile = filesys.readFileSync("./content/yo.txt",'utf8')
const sushifile = filesys.readFileSync('./content/test/sushi.txt','utf8')
console.log(firstfile,sushifile)

filesys.readFileSync(
    "./content/yo.txt",'utf8'

)

filesys.writeFileSync(
    './content/result.txt', 
    firstfile+ "" +sushifile,
    {flag: 'a'}
)

/*
const insidefile = filesys.readFileSync("./content/yo")

if (fs.existsSync(path)) {
    console.log('file exists');
  } else {
    console.log('file not found!');
  }
*/


 