const fs= require("fs");



// const currentDate = new Date()
// const formatedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`
// const formatedTime = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`
// console.log(currentDate)

// const fileName = `${formatedDate}_${formatedTime}.txt`
// console.log(fileName)

// const timestamp = currentDate.toISOString()
// const content = `TimeStamp: ${timestamp} `
// console.log(content)

// fs.writeFile(`./${fileName}`, content, (err) => {
//         if (err) console.log(err)
//         console.log(`File: ${fileName} created Successfully`)
//     })

let ts = Date.now();

let date_ob = new Date(ts);
let date = date_ob.getDate();
let month = date_ob.getMonth() + 1;
let year = date_ob.getFullYear();

// prints date & time in YYYY-MM-DD format
let datee= year + "-" + month + "-" + date
console.log(datee);

let hours=date_ob.getHours();
let minutes=date_ob.getMinutes();
let seconds=date_ob.getSeconds();
let time=hours + ":" + minutes + ":" + seconds
console.log(time)

let fileName=`${datee}_${time}`
console.log(fileName)

const currentDate = new Date()
const timestamp = currentDate.toISOString()
const content = `TimeStamp: ${timestamp} `
console.log(content)



fs.writeFile(`./${fileName}.txt`,"hello",()=>{
  console.log("completed")
})

// fs.writeFile(`./${fileName}.txt`, content, (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(`File "${fileName}" has been written successfully.`);
//     }
//   });

