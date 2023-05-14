const hoaxer = require('hoaxer');
const addresses = require("../mock/adresses/adresses");
function generateRandomWord(length) {
    let word = hoaxer.lorem.word();
    while (word.length !== length) {
        word = hoaxer.lorem.word();
    }
    return word;
}

function generateRandomImageLinks(count) {
    const imageLinks = [];
    for (let i = 0; i < count; i++) {
        const imageLink = hoaxer.image.imageUrl();
        imageLinks.push(imageLink);
    }
    return imageLinks;
}

function getRandomSubarray(array, size) {
    const shuffled = array.slice();
    let currentIndex = shuffled.length;
    let temporaryValue;
    let randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = shuffled[currentIndex];
        shuffled[currentIndex] = shuffled[randomIndex];
        shuffled[randomIndex] = temporaryValue;
    }

    return shuffled.slice(0, size);
}



module.exports = {
    generateRandomWord,
    generateRandomImageLinks,
    getRandomSubarray
};
