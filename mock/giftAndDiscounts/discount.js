// Table de gestion des réduction
const hoaxer = require('hoaxer')
const booleans = [true,false];
function generateDiscounts () {
    const discounts = []
    const statusTab = ["Active", "Expired"];
    for (let id = 1; id <= 200; id+=1) {
        let discount={};
        discount.id=id;
        discount.name=generateRandomWord(15);
        discount.code=generateRandomWord(6);
        discount.description=hoaxer.lorem.text();
        discount.start_date=hoaxer.date.between('2020-01-01', '2023-05-05');
        discount.end_date=hoaxer.date.between('2023-05-05', '2026-05-05');
        discount.percentage =hoaxer.datatype.number({ min: 1, max: 100 });
        discount.minimum_purchase =hoaxer.commerce.price()
        discount.isAyilaaDiscount=hoaxer.random.arrayElement(booleans)
        discount.status=hoaxer.random.arrayElement(statusTab)
        discounts.push(discount)
    }
    return discounts;
}
module.exports = generateDiscounts()
