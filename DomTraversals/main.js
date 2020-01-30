// $(`button`).on(`click`, function() {
//     console.log($(this).closest(`div`).find(`span`).text());    
// })

// $(`button`).on(`click`, function() {
//     console.log($(`.container`).find(`p`).text());
// })

let array = []

$(`.generator`).on(`click`, function() {
    console.log($(this).closest(`.processor`).attr('id'))
    console.log($(this).closest(`.computer`).data(`id`));
    let id = $(this).closest(`.computer`).data(`id`)
    array.push({cmp_id: id})
    console.log($(this).closest(`.computer`).find(`.BUS`).text());    
})

$(`.validator`).on(`click`, function(){
    console.log($(this).closest(`.ram`).siblings(`.processor`).find(`.generator`).text())
    console.log($(this).closest(`.computer`).find(`.MB`).text());
    console.log($(this).closest(`.ram`).siblings(`.processor`).find(`.QR`).text())
    console.log($($(this).closest(`.ram`).siblings(`.processor`).find(`.QR`)[1]).text())
})