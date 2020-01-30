// const header = $("h1")
// console.log(header);


// $(`h1`).css(`color`, `blue`)
// $(`.red-div`).css(`color`, `red`)

// $(`#b1`).addClass(`box`)
// $(`#b2`).addClass(`box`)

// $(`my-input`).val("Terabyte")

// const Barcode = $(`h2`).data().barcode

// const ExpirationDate = $(`h2`).data().expirationdate

// $(`#by`).hover(
//     function () {
//         $(`#by`).css(`background-color`, `blue`)
//     }
// )

// console.log(`the item w the barcode ${Barcode} will expire at ${ExpirationDate}`);


// $(`button`).on(`click`, function () { alert($(`#my-input`).val()) })

// $(`.box`).hover(
//     function (){
//         $(`.box`).css(`background-color`, `red`) 
//     })

// const text = "Banana"
// const item = $("<div class=fruit>" + text + "</div>")

// console.log(item) //prints <div class=fruit>Banana</div> as a jQuery object - this is what we created!

// $(".feedme").on("click", function(){
//     let divCopy = `<div class=feedme> ${$(this).text()} </div>`

//     $("body").append(divCopy)
//   })

// const names = [
//     { first: "Alex", last: "Johnson" },
//     { first: "Byron", last: "Loveall" },
//     { first: "Cassandra", last: "Wuthers" },
//     { first: "Deandre", last: "Rahm" },
//     { first: "Ellena", last: "Freeman" }
// ]

// for (let name of names) {
//     let eachName = `<div class='human'>${name.first} - ${name.last}</div>`
//     $("body").append(eachName)
// }

// const addDiv = function() {
//     $("body").append("<div class=box></div>");

//     $(".box").on("click", function() {
//       alert("hi");
//     });
//   };

//   $("button").on("click", function() {
//     addDiv();
//   });


// $(`button`).on(`click`, function () {
//     $(`#blogs`).append(`<div class="blog">Hey you</div>`)
// })

// $(`#blogs`).on(`click`, `.blog`, function () {
//     $(this).text(`blargh`)
// })




////////////////////////////////////////////////////////////////

// Exercise 1 + 2


// $(`#button`).on(`click`, function(){ 
//     let newName = $(`#input`).val()
//     $(`#names`).append(`<li class="name">${newName}</li>`)
// })

// $(`#names`).on(`click`, `.name`, function(){
//     $(this).remove()
// })

////////////////////////////////////////////////////////////////





////////////////////////////////////////////////////////////////

// Exercise 3

// $(`body`).append(`<div class="box" id="box1"></div>`)
// $(`body`).append(`<div class="box" id="box2"></div>`)

// $(`#box 1`).hover(
//     $(`box1`).css(`background-color`, `red`)
// )

// ?????????
////////////////////////////////////////////////////////////////




///////////////////////////////////////////////////////////////

// Exercise 4

// const itemArr = $(`.item`)
// for (let item of itemArr) {
//     item = $(item)
//     if (item.data().instock) {
//         $(`.item`).on(`click`, function () {
//             $(`#cart`).append(`<div class="cart-item">${item.text()}</div>`)
//         })
//     }
// }
