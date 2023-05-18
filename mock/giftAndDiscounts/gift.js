// Table de gestion des cartes cadeaux
const hoaxer = require('hoaxer')
const { generateRandomWord, generateRandomImageLinks, getRandomSubarray } = require('../globalFunctions');
function generateGifts () {
    const gifts = []
    const statusTab = ["Active", "Expired","OutOfStock"];
    const booleans = [true,false];
    for (let id = 1; id <= 200; id+=1) {
        let gift={};
        gift.id=id;
        gift.name=generateRandomWord(15);
        gift.code=generateRandomWord(6);
        gift.description=hoaxer.lorem.text();
        gift.start_date=hoaxer.date.between('2020-01-01', '2023-05-05');
        gift.end_date=hoaxer.date.between('2023-05-05', '2026-05-05');
        gift.qty=hoaxer.datatype.number({ min: 1, max: 20 });
        gift.status=hoaxer.random.arrayElement(statusTab)
        gift.isAyilaaGift=hoaxer.random.arrayElement(booleans)
        gifts.push(gift)
    }
    return gifts;
}
module.exports = generateGifts()
