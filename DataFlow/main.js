const posts = [
    {
        name: "Uncle Jerome",
        text: "Happy birthday kido!"
    },
    {
        name: "BFF Charlene",
        text: "HEARTS LOVE YOU FOREVER BFF4LYFE HBD"
    },
    {
        name: "Old High School Teacher",
        text: "Hey ace, have a good one."
    }
]

$(`#button`).on(`click`, function () {
    posts.push({ name: $(`#name`).val(), text: $(`#bDayWish`).val() })
    render()
})

const render = function () {
    for (let post of posts) {
        $(`body`).append(`<div>${post.name}, ${post.text}</div>`)
    }
}

