// La table Visits stocke les informations sur les visites effectuées par les utilisateurs pour chaque attraction touristique,
//     en référençant la table Attractions et la table Users

const hoaxer = require('hoaxer')
const booleans = [true,false];
function generateVisits () {
    const visits = []
    for (let id = 1; id <= 200; id+=1) {
        let visit={};
        visit.id=id;
        visit.attractionId=hoaxer.datatype.number({ min: 1, max: 499 });
        visit.userId=hoaxer.datatype.number({ min: 1, max: 499 });
        visit.visit_date=hoaxer.date.between('2023-05-05', '2026-05-05');
        visit.verified_by_ayilaa =hoaxer.random.arrayElement(booleans)
        visit.ayilaa_verification_date =hoaxer.date.between('2023-05-05', '2026-05-05');
        visits.push(visit)
    }
    return visits;
}
module.exports = generateVisits()


