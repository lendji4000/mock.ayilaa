//  Gestion des plans d'abonnements
const hoaxer = require('hoaxer')
const { generateRandomWord } = require('../globalFunctions');
function generateSubscriptionPlan () {
    const subscriptionPlans = []
    const durations = ["Monthly", "Annual","Weekly"];
    const booleans = [true,false];
    const planNames = ["No Relation Ship","Service To Service", "Basic Partner","Business Partner","Premium Partner","Platinium Partner"];
    const planCodes = ["NoRelationShip","ServiceToService", "BasicPartner","BusinessPartner","PremiumPartner","PlatiniumPartner"];
    let i=0;
    planNames.forEach((item)=>   {
        let plan={};
        plan.id=id;
        plan.name= item;
        plan.code=  planCodes[i];
        plan.description=hoaxer.lorem.text();
        plan.options={
            paidPartnerShip: hoaxer.random.arrayElement(booleans) , // Le partenariat est payant ?
            advertisement: hoaxer.random.arrayElement(booleans),   // Le partenaire paie pour l'espace pub chez nous
            afterSalesService: hoaxer.random.arrayElement(booleans), // Gestion du service client ?
            bookingManagement: hoaxer.random.arrayElement(booleans),  // Gestion de la reservation ?
            paymentManagement: hoaxer.random.arrayElement(booleans),  // Gestion du paiement ?
            billingManagement: hoaxer.random.arrayElement(booleans),  // Gestion de la facturation ?
            topOfTheList: hoaxer.random.arrayElement(booleans),
        }
        plan.duration=hoaxer.random.arrayElement(durations);
        plan.price=hoaxer.commerce.price()
        subscriptionPlans.push(plan);
        i+=1;
    });
    return subscriptionPlans;
}
module.exports = generateSubscriptionPlan()
