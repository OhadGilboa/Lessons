// //request the data with a GET request
// $.get("https://jsonplaceholder.typicode.com/users", function(users){
//   //extract the geo data of the first userlet lat = users[0].address.geo.lat
//   let long = users[users.length - 1].company.catchPhrase
//   console.log(long);
  
//   //log the dataconsole.log(`${lat}, ${long}`) //prints -37.3159, 81.1496
// })

// const fetch = function (queryType, queryValue) {
//     $.ajax({
//         method: "GET",
//         url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
//         success: function (data) {
//         data.items.forEach(book => {
//                 console.log(book.volumeInfo.title)
//         });
//         },
//         error: function (xhr, text, error) {
//             console.log(text)
//         }
//     })
// }

const fetch = function(whatever) {
    $.ajax({
        method: "GET",
        url: `http://api.giphy.com/v1/gifs/search?q=${whatever}&api_key=ZVI2zFfE7e8dvKCZTUkI5gE4sW6Ow7Ro`,
        success: function(cats) {
            cats.data.forEach(cat => {
                // console.log(cat);
                $(`body`).append(`<iframe src="${cat.embed_url}">`)                
            });
        } 
    })
}





// var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=ZVI2zFfE7e8dvKCZTUkI5gE4sW6Ow7Ro");
// xhr.done(function(data) { console.log("success got data", data); });

// $(`body`).append(`
// <iframe src="http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=ZVI2zFfE7e8dvKCZTUkI5gE4sW6Ow7Ro"></iframe>`)