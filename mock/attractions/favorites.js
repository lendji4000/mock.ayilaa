// La table Favorites stocke les informations sur les attractions préférées des utilisateurs,
//     en référençant la table Attractions et la table Users.
const hoaxer = require('hoaxer');
function generateFavorites () {
    const favorites = []

    for (let id = 1; id <= 500; id += 1) {
        const userId = hoaxer.datatype.number({ min: 1, max: 499 });
        const attractionId = hoaxer.datatype.number({ min: 1, max: 499 });
        const additionnalDatas={};
        const favorite_added_date=hoaxer.date.between('2023-05-05', '2026-05-05');
        favorites.push({
            id:id,
            userId: userId,
            attractionId: attractionId,
            additionnalDatas:additionnalDatas,
            favorite_added_date: favorite_added_date,

        })

    }
    return favorites
}
module.exports = generateFavorites()

