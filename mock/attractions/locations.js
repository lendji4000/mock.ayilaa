// La table Locations stocke les informations sur les lieux touristiques proposés pour chaque pays,
// en référençant la table Countries
const { generateRandomWord, generateRandomImageLinks, getRandomSubarray } = require('../globalFunctions');
const categories = require("../categories/categories");
const addresses = require("../adresses/adresses");
const hoaxer = require('hoaxer');

function generateLocations () {
    const rates =[0,0.5,1,1.5,2,2.5,3,3.5,4,4.5,5];
    const randomCategories = getRandomSubarray(categories, 4);
    const locations = []
    for (let id = 1; id <= 500; id += 1) {

        const name = generateRandomWord(6);
        const rate = hoaxer.random.arrayElement(rates);
        const addressId = hoaxer.random.arrayElement(addresses).id;
        const description = hoaxer.lorem.text();
        const images = generateRandomImageLinks(5);
        locations.push({
            id: id,
            name: name,
            rate:rate,
            categories:randomCategories,
            adresseId: addressId,
            description:description,
            images:images
        })

    }
    return locations
}

module.exports = generateLocations()

