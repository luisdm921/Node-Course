const fs = require("fs");

// const first = fs.readFileSync('./data/first.txt', 'utf-8')
// const second = fs.readFileSync('./data/second.txt')

// console.log(first)
// console.log(second.toString())

// const title = "Este es el contenido del archivo"

// //we can use the object {flag:'a'} as a third parameter, if you want to add other text without overwrite.
// fs.writeFileSync('./data/third.txt', 'Hello world 3');
// fs.writeFileSync('./data/fourth.txt', title);
// console.log("Hola")

fs.readFile("./data/first.txt",'utf-8', function (error, data) {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
  fs.readFile("./data/second.txt",'utf-8', function (error, data) {
    if (error) {
      console.log(error);
    } else {
      console.log(data);
    }
    fs.writeFile("./data/newFile.txt", "Archivo creado desde fs", (error,data)=>{
        console.log(error)
        console.log(data)
    })
  });
});
