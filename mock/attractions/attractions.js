// Attractions stocke les informations sur les attractions touristiques
// proposées dans chaque lieu, en référençant la table Locations
const addresses = require("../adresses/adresses");
const locations = require("../attractions/locations");
const products = require("../attractions/attractionProducts");
const services = require("../attractions/locations");
const categories = require("../categories/categories")
const users = require("../users/users")
const { generateRandomWord, generateRandomImageLinks, getRandomSubarray } = require('../globalFunctions');

const hoaxer = require('hoaxer');
function generateAttractions () {
    const booleanTabs = [true, false];
    const paymentsOptions=['OM', 'MOMO','Carte','Visa','PayPal']
    const openedDaysTabs = ['Monday', 'Thursday', 'Wenesday', 'Thursday', 'Friday', 'Saturday','Sunday'];
    const openedHoursTabs =["9h-12h","9h-14h","9h-15h","8h-16h","7h-17h","7h-18h"];
    const whereToPays =["Ayilaa","attraction"]
    const paymentModes =["partial","total"];
    const rates =[0,0.5,1,1.5,2,2.5,3,3.5,4,4.5,5];

    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // The input array
    const subarraySize = 4; // The desired size of the random subarray

    const randomProducts = getRandomSubarray(products, 4);
    const randomServices = getRandomSubarray(services, 4);
    const randomCategories = getRandomSubarray(categories, 4);

    const randomOpenedDaysTabs = getRandomSubarray(openedDaysTabs, 4);
    const randomOpenedHoursTabs = getRandomSubarray(openedHoursTabs, 4);

    const attractions = []
    for (let id = 1; id <= 500; id += 1) {

        const name = generateRandomWord(6)
        const rate = hoaxer.random.arrayElement(rates)
        const addressId = hoaxer.random.arrayElement(addresses).id;
        const locationId = hoaxer.random.arrayElement(locations).id;
        const logo = hoaxer.internet.url()
        const description = hoaxer.lorem.text()
        const additionnalData = {
            tempDAttenteMoyen: "1 heure"
        }
        const images = generateRandomImageLinks(5)
        const categoriesTabs = randomCategories
        const email = hoaxer.internet.email()
        const phone1=hoaxer.phone.phoneNumberFormat(1, '{{countryCode}}-###-###-####', 'CM');
        const phone2=hoaxer.phone.phoneNumberFormat(1, '{{countryCode}}-###-###-####', 'CM');
        const userId = hoaxer.random.arrayElement(users).id;
        const documents = {}
        const services = randomServices
        const products = randomProducts

        const whereToPay = hoaxer.random.arrayElement(whereToPays)
        const paymentMode = hoaxer.random.arrayElement(paymentModes)
        const annulation = ""
        const remboursement = ""
        const is_certify = hoaxer.random.arrayElement(booleanTabs)

        const certification_start_date = []
        const certification_end_date = []



        attractions.push({
            id: id,
            locationId:locationId,
            name:name,
            rate:rate,
            logo:logo,
            description:description,
            additionnalData:additionnalData,
            images:images,
            categories:categoriesTabs,
            email:email,
            phone1: phone1,
            phone2 :phone2,
            whatsapp_number:phone2,
            adresseId: addressId,
            openedDays:randomOpenedDaysTabs,
            openedHours:randomOpenedHoursTabs,
            userId:userId, // User
            documents: {}, //Documents du coin (registre du commerce , etc ...
            services: services, //Services
            products: products, //Produits
            paymentsOptions:[], //Moyens de paiements (OM, MOMO,Carte Visa, etc ...)
            whereToPay: whereToPay,
            paymentMode: paymentMode,
            annulation: "",
            remboursement: "",
            active: hoaxer.random.arrayElement(booleanTabs),
            certification_start_date: hoaxer.date.between('2020-01-01', '2023-05-05'),
            certification_end_date:  hoaxer.date.between('2023-05-05', '2026-05-05'),
            is_certify:hoaxer.random.arrayElement(booleanTabs)
        })

    }
    return attractions
}

module.exports = generateAttractions()


