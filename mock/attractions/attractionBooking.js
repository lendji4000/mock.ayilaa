/*
La table attractionBookings stocke les informations sur les réservations effectuées par
les utilisateurs pour les services et produits proposés dans chaque lieu touristique,
    en référençant les tables Users, Locations, Services et Products.
    Les champs booking_date et booking_status stockent respectivement la date de la réservation et
l'état de la réservation (confirmée, annulée, en attente).

Avec ce modèle de données, il est possible de gérer les services et produits
proposés dans chaque lieu touristique, ainsi que les réservations effectuées par les utilisateurs.
    Les informations sur les réservations peuvent être utilisées pour améliorer la qualité de service
et pour offrir des offres et des promotions personnalisées en fonction de l'historique de réservations des utilisateurs.
*/
const { generateRandomWord, generateRandomImageLinks, getRandomSubarray } = require('../globalFunctions');
//const attractions = require("../attractions/attractions");
const hoaxer = require('hoaxer');
const bookingStatuses = [
    'Pending',          // The booking is awaiting confirmation
    'Confirmed',        // The booking has been confirmed
    'Cancelled',        // The booking has been cancelled
    'Completed',        // The booking has been successfully completed
    'In Progress',      // The booking is currently in progress
    'On Hold',          // The booking is temporarily on hold
    'Refunded',         // The booking has been refunded
    'Expired'           // The booking has expired
];
function generateBookings () {
    const bookings = []

    for (let id = 1; id <= 500; id += 1) {
        const userId = hoaxer.datatype.number({ min: 1, max: 499 });
        const attractionId = hoaxer.datatype.number({ min: 1, max: 499 });
        const serviceId = hoaxer.datatype.number({ min: 1, max: 499 });
        const productId = hoaxer.datatype.number({ min: 1, max: 499 });
        const description = hoaxer.lorem.text();
        const additionnalDatas={};
        const booking_date=hoaxer.date.between('2023-05-05', '2026-05-05');
        const booking_expired_date=hoaxer.date.between('2023-05-05', '2026-05-05');
        bookings.push({
            id: id,
            userId: userId,
            attractionId: attractionId,
            serviceId:serviceId,
            productId:productId,
            description:description,
            additionnalDatas:additionnalDatas,
            booking_date: booking_date,
            booking_expired_date: booking_expired_date,
            booking_status:hoaxer.random.arrayElement(bookingStatuses)

        })

    }
    return bookings
}

module.exports = generateBookings()
