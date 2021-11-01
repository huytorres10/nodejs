var fs = require('fs')

//Open
// fs.open("data.txt", "r+", function (err, file) {
//     if(err){
//         console.log("Open file is Error");
//         return;
//     }
//     console.log("Open file successfully!");
// })

//Read file sync
// var data = fs.readFileSync("data.txt");
// console.log(data.toString());

// fs.readFile("data.txt", function (err, data) {
//     if(err){
//         console.log("Open file is Error1");
//         return;
//     }
//     console.log(data.toString() + " 1");
// })

// //Write file
// fs.writeFile("data.txt", "New content file", function (err) {
//     if(err){
//         console.log("Write file ERROR");
//         return
//     }
//     fs.readFile("data.txt", function (err, data) {
//         if(err){
//             console.log("Open file data.txt ERROR");
//             return;
//         }
//         console.log(data.toString());
//     })
// })

// //Create Folder
// fs.mkdir("new_folder", function (err) {
//     if(err){
//         console.log("create folder is ERROR");
//         return;
//     }
//     console.log("create folder new_folder success");
// })
console.log('endd');