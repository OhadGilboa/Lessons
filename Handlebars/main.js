// var classData = {
//     classmates: [
//         {name: "That on gal", description: "Always has the ansswer"},
//         {name: "The weird dude", description: "Quick with a smile"},
//         {name: "Taylor", description: "Just Taylor"}
//     ]
// }


// const source = $('#classmates-template').html();
// const template = Handlebars.compile(source);
// const newHTML = template(classData);

// $(`#classmates`).append(newHTML)

// const menuData = {
//     menu: [
//       { name: "Google", link: "http://google.com", socialNetwork: true },
//       { name: "Facebook", link: "http://facebook.com", socialNetwork: false },
//       { name: "Instagram", link: "http://nstagram.com", socialNetwork: true },
//       { name: "Twitter", link: "http://twitter.com", socialNetwork: true },
//     ]
//   };

//   const source = $('#menu-template').html();
//   const template = Handlebars.compile(source);
//   const newHTML = template(menuData);

//   // append our new html to the page
//   $('.menu').append(newHTML);

// const renderFirst = function(){
//     const source = $('#first-template').html();
//     const template = Handlebars.compile(source);
//     let newHTML = template({ text: "This gets rendered" });
//     $('body').append(newHTML);  
//   }

//   const renderSecond = function(){
//     const source = $('#second-template').html();
//     const template = Handlebars.compile(source);
//     let newHTML = template({ moreText: "This also gets rendered" });
//     $('#special').append(newHTML);  
//   }

//   renderFirst()
//   renderSecond()


const animals = ["Rabbit", "Giraffe", "Kangaroo", "Whale", "Seagull", "Caterpie"]

const languages = ["French", "Spanish", "Togolese", "Javascript", "Uruk"]

const animalsData = { animals }
const languagesData = { languages }

const animalsFunc = function () {
    const source = $('#animals-template').html();
    const template = Handlebars.compile(source);
    let newHTML = template(animalsData);
    $('#animals').append(newHTML);
}

const languagesFunc = function () {
    const source = $('#languages-template').html();
    const template = Handlebars.compile(source);
    let newHTML = template(languagesData);
    $('#languages').append(newHTML);
}

animalsFunc()
languagesFunc()