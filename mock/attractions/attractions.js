// Attractions stocke les informations sur les attractions touristiques
// proposées dans chaque lieu, en référençant la table Locations
module.exports=[
    {
        id: 1,
        name: "Saut en parachute",
        description: "",
        images: [],
        location :{
            id: 2,
            name: "Tagidor",
            description: "",
            images: [],
            country : {}
        }
    },
    {
        id: 2,
        name: "Spa + Bain Chauffant + Piscine",
        description: "",
        images: [],
        location : {
            id: 1,
            name: "Vallée de Bana",
            description: "",
            images: [],
            country : {}
        }
    },
    {
        id: 3,
        name: "Safari",
        description: "",
        images: [],
        location : {
            id: 3,
            name: "Parc de Waza",
            description: "",
            images: [],
            country : {}
        }
    },
    {
        id: 4,
        name: "Dinée au pieds des chutes",
        description: "",
        images: [],
        location : {
            id: 4,
            name: "Chute de Fongo-tongo",
            description: "",
            images: [],
            country : {}
        }
    },
    {
        id: 5,
        name: "Casino du Mall",
        description: "",
        images: [],
        location : {
            id: 5,
            name: "Grand Mall",
            description: "",
            images: [],
            country : {}
        }
    },
    {
        id: 6,
        name: "Maison H",
        rate: 4.5, //Classement du coin selon Ayilaa ( Note sur 5),
        logo:"", //Logo de l'enseigne
        description: "",
        images: [],
        categories: [],
        email: "",
        phone1: "",
        phone2 :"",
        adresse: {},
        openedDays:[],
        openedHours:[],
        owner:{}, // User
        documents: {}, //Documents du coin (registre du commerce , etc ...
        services: [], //Services , produits offers
        paymentsOptions:[], //Moyens de paiements (OM, MOMO,Carte Visa, etc ...)
        whereToPay: ["Ayilaa","attraction"],
        paymentMode: ["partial","total"],
        annulation: "",
        remboursement:"",
        location : {
            id: 5,
            name: "Grand Mall",
            description: "",
            images: [],
            country : {}
        }
    },
]

