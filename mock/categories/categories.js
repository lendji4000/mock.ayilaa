const hoaxer = require('hoaxer')
// Catégories d'attractions touristiques
const catLevel1=['Hôtel','Centre climatique','Meublé','Auberge','Site touristique avec logement','Maison d\'hôte','Autres']
const catLevel2=['Restaurant','Restaurant d’hôtel','Snack','Lounge','Fast food','Restaurant livreur','Cuisine à la commande domicile','Traiteur','Autres Dans Restauration']
const catLevel3=['Manège','Cinéma','Théâtre','Boîte de nuit','Salle de concert','Plage','Parc d’attraction','Snack','Centre Commercial','Stade','Match','Compétition','Marché','SuperMarché','Autres Divertissements']
const catLevel4=['Aéroport','Gare Routière','Gare Ferrovière','Port','Agence de voyage Aérien','Agence de voyage Maritime','Agence de train','Agence de transport terrestre','Agence de taxi','Agence de Moto','Agence de location de véhicule','Agence de transport touriste']
const catLevel5=['Zoo','Parc','Monument','Habitat Historique','Construction historique','Musée','Chefferie','Royaume','Chute','Mont','Autres Sites Touristiques']
const catLevel6=['Instituts de beauté', 'salon de coiffure', 'shop de vêtements', 'stylistes-modelistes']
const catLevel7=['Urgences','Pompier','Hôpital','Centre de santé','Police','Gendarmerie','Autres Secours']
const catLevel8=['Ministères','Délégation Régionale','Délégation Départementale','Délégation Communale','Mairie','Services','Université','Institut','Etablissement scolaire','Office de tourisme Régional','Office de tourisme communal','Office de tourisme de Ville','Route des Chefferie','Autres Administrations']
const catLevel9=['Marché', 'Supermarché', 'Centre commercial']
const catLevel10=['Salle de sport','Fitness']

const catRoots=[
    {name:'Hôtels et hébergements',children:catLevel1},
    {name:'Restauration',children:catLevel2},
    {name:'Divertissements',children:catLevel3},
    {name:'Transport',children:catLevel4},
    {name:'Site touristique',children:catLevel5},
    {name:'Mode & Beauté',children:catLevel6},
    {name:'Secours',children:catLevel7},
    {name:'Administration',children:catLevel8},
    {name:'Commerce',children:catLevel9},
    {name:'Sport',children:catLevel10}
    ];
const rank =[0,0.5,1,1.5,2,2.5,3,3.5,4,4.5,5];
function generateCategories () {
    const categories = []
    let increment=1;
    catRoots.forEach((catRoot)=>{
        const cat={};
        cat.id=increment;
        cat.name=catRoot.name;
        cat.description=hoaxer.lorem.text();;
        cat.additionnalData={};
        cat.slug= sluggify(catRoot.name);
         // Champ permettant de définir le rang d'une catégorie.
        // Elle permettra de faire remonter les attractions de cette catégorie par rapport à d'autres
        cat.rank =hoaxer.random.arrayElement(rank);
        cat.parentId="";
        increment+=1;
        categories.push(cat);
        catRoot.children.forEach((child) => {
            child.id=increment;
            child.name=child;
            child.description=hoaxer.lorem.text();
            child.additionnalData={};
            child.slug= sluggify(child);
            // Champ permettant de définir le rang d'une catégorie.
            // Elle permettra de faire remonter les attractions de cette catégorie par rapport à d'autres
            child.rank =hoaxer.random.arrayElement(rank);
            child.parentId=cat.id;
            increment+=1
            categories.push(child);
        });
    });
    return categories;
}
module.exports = generateCategories()
function sluggify(str) {
    return str
        .toLowerCase() // Convert to lowercase
        .trim() // Remove leading and trailing whitespace
        .replace(/[^\w\s-]/g, '') // Remove non-word characters except spaces and hyphens
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/--+/g, '-'); // Replace multiple consecutive hyphens with a single hyphen
}
