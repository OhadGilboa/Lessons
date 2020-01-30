// const family = () => {
//     let members = []
//     let birth = (name) => {
//         members.push(name)
//         console.log(members);
//     }

//     return birth
// } 

// let giveBirth = family()
// giveBirth(`josh`)

// const mathOperations = function () {
//     const add = function (x, y) {
//         return x + y;
//     }

//     const subtract = function (x, y) {
//         return x - y;
//     }

//     const multiply = function (x, y) {
//         return x * y;
//     }

//     const divide = function (x, y) {
//         return x / y;
//     }

//     return {
//         add: add,
//         sub: subtract,
//         mult: multiply,
//         div: divide
//     }
// }



// const m = mathOperations()

// m.add(13, 29)
// m.mult(1.75, 24)
// m.mult(7, m.div(36, 6))




// // ACTS OF LOVE

// const Love = () => {

//     let name = `ohad`

//     const give = function () {
//         console.log(`take this cause I love you ${name}`);
//     }

//     const share = function () {
//         console.log(`I want to share this with you ${name}, I love you`);
//     }

//     return {give, share}
// }

// const actsOfLove = Love()
// actsOfLove.give()
// actsOfLove.share()







// const StringFormatter = function () {

//     const capitalizeFirst = function (name) {
//         let newName = name.charAt(0).toUpperCase() + name.slice(1)
//         return console.log(newName);
//     }

//     const skewerCase = function (name) {
//         let newName = name.replace(/ /g, "-");
//         return console.log(newName);
//     }

//     return {
//         capitalizeFirst, skewerCase
//     }
// }

// const formatter = StringFormatter()

// formatter.capitalizeFirst("dorothy") //should print Dorothy
// formatter.skewerCase("blue box") //should print blue-box




// bank - exercise 2

const Bank = function () {

    let money = 500

    const depositCash = (cash) => {
        return money += cash
    }

    const checkBalance = () => {
        return console.log(money);
    }

    return { deposit: depositCash, showBalance: checkBalance }
}

const bank = Bank()
bank.deposit(200)
bank.deposit(250)
bank.showBalance() //should print 950













// Song Manager!!!!!!!!!!!!!!!!!!!!!




const SongsManager = function () {
    const songs = {}
    const youtube = "https://www.youtube.com/watch?v="  
    
    const addSong = (name, theURL) => {
        return songs[name] = theURL.slice(youtube.length)
    }

    const getSong = (name) => {
        return console.log(`${youtube}${songs[name]}`);
    }

    return { addSong, getSong }
}

// const SongsManager = function () {
//     const _songs = {}
//     const _youtubeBase = "https://www.youtube.com/watch?v="

//     //assumes the given URL is in the form of https://www.youtube.com/watch?v=kJQP7kiw5Fk
//     const _extractIdentifier = url => url.split("").splice(32).join("")
//     const _getUrl = identifier => _youtubeBase + identifier

//     const addSong = (name, url) => _songs[name] = _extractIdentifier(url)
//     const getSong = name => console.log(_getUrl(_songs[name]))

//     return {
//         addSong: addSong,
//         getSong: getSong
//     }
// }



const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

songsManager.getSong("sax") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ
