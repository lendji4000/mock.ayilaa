// La table attractionServices stocke les informations sur les services proposés dans chaque attraction touristique,
// telles que le nom, la description et le prix, en référençant la table Locations

const { generateRandomWord, generateRandomImageLinks } = require('../globalFunctions');
const hoaxer = require('hoaxer');

function generateServices () {
    const services = []
    for (let id = 1; id <= 500; id += 1) {
        const name = generateRandomWord(6);
        const attractionId = hoaxer.datatype.number({ min: 1, max: 499 });
        const description = hoaxer.lorem.text();
        const additionnalDatas={};
        const images = generateRandomImageLinks(5);
        services.push({
            id: id,
            name: name,
            attractionId:attractionId,
            additionnalDatas:additionnalDatas,
            price: hoaxer.commerce.price(),
            description:description,
            images:images
        })

    }
    return services
}

module.exports = generateServices()

