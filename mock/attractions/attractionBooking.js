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

module.exports=[
    {
        id: 1,
        user: {},
        attraction : {},
        service: {},
        product: {},
        additionnalDatas: {},
        booking_date: "",
        booking_status: "",
    },
    {
        id: 2,
        user: {},
        attraction : {},
        service: {},
        product: {},
        booking_date: "",
        booking_status: ""
    },
    {
        id: 3,
        user: {},
        attraction : {},
        service: {},
        product: {},
        booking_date: "",
        booking_status: ""
    },
]
