// let users = []

// const getData = function () {
//     setTimeout(function () {
//         users = [{ name: "Rick" }, { name: "Morty" }]
//         console.log("Got users")
//     }, 3000);
// }

// const displayData = function () {
//     console.log("Going to display users")
//     for (user of users) {
//         console.log(user.name)
//     }
// }

// getData()
// displayData()

// let users = []

// const getData = function (displayData) {
//     setTimeout(function () {
//         users = [{ name: "Rick" }, { name: "Morty" }]
//         console.log("Got users")
//         displayData()
//     }, 3000);
// }

// const displayData = function () {
//     console.log("Going to display: " + users)
//     for (user of users) {
//         console.log(user.name)
//     }
// }

// getData(displayData)




// setInterval(function () {
//     console.log(new Date())
// }, 1000)

// const square = number => console.log(number*number);

// square(4)

// const getFormalTitle = (title, name) => {
//     return title + " " + name
// } 

// formalTitle = getFormalTitle("Madamme", "Lellouche")
// console.log(formalTitle) //returns "Maddame Lellouche"




// push it pull it

// const push = function () {
//     console.log("pushing it!")
// }

// const pull = function () {
//     console.log("pulling it!")
// }

// const pushPull = (func) => {
//     func()
// }





// pushPull(push) //should print "pushing it!"
// pushPull(pull) //should print "pulling it!"

// const returnTime = function (time) {
//     alert('The current time is: ' + time)
// }

// const getTime = (returnTime) => {
//     const time = new Date()
//     returnTime(time)
// }

// getTime(returnTime)



// let Summon = (num1, num2, num3) => num1 + num2 + num3

// console.log(Summon(1, 2, 3));




// //How To Capitalize

// let capitalize = name => {console.log(name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());}

// capitalize("bOb") // returns Bob
// capitalize("TAYLOR") // returns Taylor
// capitalize("feliSHIA") // returns Felishia






// const determineWeather = temp => {
//     if (temp > 25) {
//         return "hot"
//     }
//     return "cold"
// }


// const commentOnWeather = temp => console.log(`it's ${determineWeather(temp)}`);


// commentOnWeather(30) //returns "It's hot"
// commentOnWeather(22) //returns "It's cold"






const displayData = function (alertDataFunc, logDataFunc, data) {
    alertDataFunc(data);
    logDataFunc(data);
  };
  
  displayData(alert, logData, "I like to party")
  