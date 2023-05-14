//  Gestion des plans d'abonnements
const hoaxer = require('hoaxer')
const { generateRandomWord } = require('../globalFunctions');
function generateSubscriptionPlan () {
    const subscriptionPlans = []
    const durations = ["Monthly", "Annual","Weekly"];
    for (let id = 1; id <= 10; id+=1) {
        let plan={};
        plan.id=id;
        plan.name= generateRandomWord(6);
        plan.description=hoaxer.lorem.text()
        plan.duration=hoaxer.random.arrayElement(durations);
        plan.price=hoaxer.commerce.price()
        subscriptionPlans.push(plan)
    }
    return subscriptionPlans;
}
module.exports = generateSubscriptionPlan()
