//  Gestion des abonnements
const hoaxer = require('hoaxer')
const { generateRandomWord } = require('../globalFunctions');
function generateSubscriptions () {
    const subscriptions = []
    const statusTab = ["Expiried", "Cancelled","PartiallyActivated","Activated"];
    for (let id = 1; id <= 10; id+=1) {
        let subscription={};
        subscription.id=id;
        subscription.planId= hoaxer.datatype.number({ min: 1, max: 6 });
        subscription.userId=hoaxer.datatype.number({ min: 1, max: 499 })
        subscription.attractionId=hoaxer.datatype.number({ min: 1, max: 499 });
        subscription.status=hoaxer.random.arrayElement(statusTab);
        subscription.start_date=hoaxer.date.between('2020-01-01', '2023-05-05');
        subscription.end_date=hoaxer.date.between('2023-05-05', '2026-05-05');
        subscriptions.push(subscription)
    }
    return subscriptions;
}
module.exports = generateSubscriptions()
