// La table AttractionProducts stocke les informations sur les produits proposés dans chaque attraction touristique,
//     telles que le nom, la description et le prix, en référençant la table Locations.
const { generateRandomWord, generateRandomImageLinks, getRandomSubarray } = require('../globalFunctions');
//const attractions = require("../attractions/attractions");
const hoaxer = require('hoaxer');

function generateProducts () {
    const products = []
    for (let id = 1; id <= 500; id += 1) {
        const name = generateRandomWord(6);
        //const attractionId = hoaxer.random.arrayElement(attractions).id;
        const attractionId = hoaxer.datatype.number({ min: 1, max: 499 });
        const description = hoaxer.lorem.text();
        const additionnalDatas={};
        const images = generateRandomImageLinks(5);
        products.push({
            id: id,
            name: name,
            attractionId:attractionId,
            additionnalDatas:additionnalDatas,
            price: hoaxer.commerce.price(),
            description:description,
            images:images
        })

    }
    return products
}

module.exports = generateProducts()


