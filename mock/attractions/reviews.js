// la table Reviews stocke les informations sur les
// avis laissés par les visiteurs pour chaque attraction

// La table Visits stocke les informations sur les visites effectuées par les utilisateurs pour chaque attraction touristique,
//     en référençant la table Attractions et la table Users

// Table de gestion des commantaires utilisateurs
const hoaxer = require('hoaxer')
const booleans = [true,false];
function generateReviews () {
    const reviews = []
    const rates =[0,0.5,1,1.5,2,2.5,3,3.5,4,4.5,5];
    for (let id = 1; id <= 200; id+=1) {
        let review={};
        review.id=id;
        review.attractionId=hoaxer.datatype.number({ min: 1, max: 499 });
        review.userId=hoaxer.datatype.number({ min: 1, max: 499 });
        review.comment=hoaxer.lorem.text();
        review.rating=hoaxer.random.arrayElement(rates)
        review.review_date=hoaxer.date.between('2023-05-05', '2026-05-05');
        review.verified_by_ayilaa =hoaxer.random.arrayElement(booleans)
        review.ayilaa_verification_date =hoaxer.date.between('2023-05-05', '2026-05-05');
        review.blocked_by_ayilaa=hoaxer.random.arrayElement(booleans)
        review.ayilaa_verification_date=hoaxer.date.between('2023-05-05', '2026-05-05');
        reviews.push(review)
    }
    return reviews;
}
module.exports = generateReviews()
