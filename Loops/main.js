// let names = ["dan", "josh", "joe"]
// let ages = [14, 15, 18]

// for(i in names){
//     console.log(names[i] + " is " + ages[i] + " years old.");

// }










// let nums = []

// for (let i = 1; i <= 100; i++) {
//     nums.push(i)
// }

// for (let i in nums) {
//     if (i % 2 !== 0) {
//         console.log(i);

//     }

// }

// let nums = [773, 414, 213, 374, 434, 700, 506, 495, 852, 585, 271, 198, 689, 248, 708, 197, 96, 260, 921, 834, 258, 662, 501, 632, 715, 503, 538, 289, 596, 381, 817, 280, 968, 877, 431, 146, 491, 724, 83, 841, 174, 21, 460, 25, 785, 539, 291, 404, 903, 278, 159, 229, 216, 683, 84, 87, 879, 406, 661, 537, 890, 394, 382, 477, 271, 373, 82, 104, 709, 723, 333, 958, 95, 983, 732, 917, 324, 785, 754, 23, 659, 551, 408, 442, 766, 242, 611, 846, 802, 866, 817, 848, 227, 349, 243, 837, 21, 954, 146, 11]
// for(i in nums){
//     if (nums[i]==709){
//     console.log(i)}}

// const names = ["Ashley", "Donovan", "Lucas"]
// const ages = [23, 47, 18]
// const people = []


// for (i in names) {
//     people.push({ name: names[i], age: ages[i] })
// }

// console.log(people);

// for (let person of people) {
//     console.log(`${person.name} is ${person.age} years old`);

// }


const posts = [
    {id: 1, text: "Love this product"},
    {id: 2, text: "This is the worst. DON'T BUY!"},
    {id: 3, text: "So glad I found this. Bought four already!"}
  ]

for(post of posts) {
    if (post.id == 2) {
    posts.splice(1,1)        
    }
}

console.log(posts);
