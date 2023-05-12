// Catégories d'attractions touristiques
const catLevel1=['Hôtel','Centre climatique','Meublé','Auberge','Site touristique avec logement','Maison d\'hôte','Autres']
const catLevel2=['Restaurant','Restaurant d’hôtel','Snack','Lounge','Fast food','Restaurant livreur','Cuisine à la commande domicile','Traiteur','Autres Dans Restauration']
const catLevel3=['Manège','Cinéma','Théâtre','Boîte de nuit','Salle de concert','Plage','Parc d’attraction','Snack','Centre Commercial','Stade','Match','Compétition','Marché','SuperMarché','Autres Divertissements']
const catLevel4=['Aéroport','Gare Routière','Gare Ferrovière','Port','Agence de voyage Aérien','Agence de voyage Maritime','Agence de train','Agence de transport terrestre','Agence de taxi','Agence de Moto','Agence de location de véhicule','Agence de transport touriste']
const catLevel5=['Zoo','Parc','Monument','Habitat Historique','Construction historique','Musée','Chefferie','Royaume','Chute','Mont','Autres Sites Touristiques']
const catLevel6=['Office de tourisme Régional','Office de tourisme communal','Office de tourisme de Ville','Route des Chefferie','Autres Offices']
const catLevel7=['Urgences','Pompier','Hôpital','Centre de santé','Police','Gendarmerie','Autres Secours']
const catLevel8=['Ministères','Délégation Régionale','Délégation Départementale','Délégation Communale','Mairie','Services','Université','Institut','Etablissement scolaire','Autres Administrations']
const catRoots=[
    {name:'Hôtels et hébergements',children:catLevel1},
    {name:'Restauration',children:catLevel2},
    {name:'Divertissements',children:catLevel3},
    {name:'Transport',children:catLevel4},
    {name:'Site touristique',children:catLevel5},
    {name:'Office de tourisme',children:catLevel6},
    {name:'Secours',children:catLevel7},
    {name:'Administration',children:catLevel8}
    ];

function generateCategories () {
    const categories = []
    let increment=1;
    catRoots.forEach((catRoot)=>{
        const cat={};
        cat.name=catRoot.name;
        cat.description="";
        cat.additionnalData="";
        cat.slug= sluggify(name);
        cat.parentId="";
    })
}
module.exports=[
    {
        id: 1,
        name: "Restauration",
        description:'',
        additionnalData:{},
        slug: "",
        parent: "",
    },
    {
        id: 2,
        name: "Hotels & Hébergements",
        slug: "hotels-hebergements",
        parent: "",
    },
    {
        id: 3,
        name: "Divertissements",
        slug: "",
        parent: "",
    },
    {
        id: 4,
        name: "Transport",
        slug: "",
        parent: "",
    },
    {
        id: 5,
        name: "Sites touristiques",
        slug: "sites-touristiques",
        parent: "",
    },
    {
        id: 6,
        name: "Secours",
        slug: "",
        parent: "",
    },
    {
        id: 7,
        name: "Urgences",
        slug: "",
        parent: 6,
    },
    {
        id: 8,
        name: "Pompiers",
        slug: "",
        parent: 6,
    },
    {
        id: 9,
        name: "Hôpital",
        slug: "",
        parent: 6,
    },
    {
        id: 10,
        name: "Centre de Santé",
        slug: "",
        parent: 6,
    },
    {
        id: 11,
        name: "Police-Gendarmerie",
        slug: "",
        parent: 6,
    },
    {
        id: 12,
        name: "Administration",
        slug: "",
        parent: "",
    },
    {
        id: 13,
        name: "Ministère",
        slug: "",
        parent: 12,
    },
    {
        id: 14,
        name: "Délégations",
        slug: "",
        parent: 12,
    },
    {
        id: 15,
        name: "Mairie",
        slug: "",
        parent: 12,
    },
    {
        id: 16,
        name: "Services",
        slug: "",
        parent: 12,
    },
    {
        id: 17,
        name: "Université",
        slug: "",
        parent: 12,
    },
    {
        id: 18,
        name: "Etablissement Scolaires",
        slug: "",
        parent: 12,
    },
    {
        id: 19,
        name: "Manèges",
        slug: "",
        parent: 3,
    },
    {
        id: 20,
        name: "Musée",
        slug: "",
        parent: 5,
    },
]

function sluggify(str) {
    return str
        .toLowerCase() // Convert to lowercase
        .trim() // Remove leading and trailing whitespace
        .replace(/[^\w\s-]/g, '') // Remove non-word characters except spaces and hyphens
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/--+/g, '-'); // Replace multiple consecutive hyphens with a single hyphen
}
