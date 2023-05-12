
const hoaxer = require('hoaxer')
const addresses = require("../adresses/adresses");
function generateEmployees () {
    const employees = []
    for (let id = 1; id <= 500; id+=1) {
        const firstName = hoaxer.name.firstName()
        const lastName = hoaxer.name.lastName()
        const email = hoaxer.internet.email()
        const phone1=hoaxer.phone.phoneNumberFormat(1, '{{countryCode}}-###-###-####', 'CM');
        const phone2=hoaxer.phone.phoneNumberFormat(1, '{{countryCode}}-###-###-####', 'CM');

        const genders = ['Male', 'Female', 'Non-binary', 'Genderqueer', 'Agender', 'Bigender'];
        const gender = hoaxer.random.arrayElement(genders); // sélectionne un genre aléatoire dans le tableau "genders"


        const startDate = new Date('1940-01-01');
        const endDate = new Date('2003-12-31');
        const randomBirthDate = hoaxer.date.between(startDate, endDate);

        //console.log(randomBirthDate.toLocaleDateString()); // affiche la date de naissance aléatoire sous forme de chaîne de caractères dans le format "mm/jj/aaaa"
        //hoaxer.locale="fr_CM";
        //console.log(hoaxer.address)
        const date_of_birth=randomBirthDate.toLocaleDateString();
        const adresseId=hoaxer.random.arrayElement(addresses).id;
        const verifieds = [true ,false ];
        const verified = hoaxer.random.arrayElement(verifieds);
        const verified_at="";
        const actives = [true ,false ];
        const active = hoaxer.random.arrayElement(actives);
        const activated_at="";
        const current_gps_location="";
        const password =hoaxer.internet.password(12);
        const countries = ['Cameroon', 'Gabon', 'Congo', 'Senegal', 'Côte d\'Ivoire', 'Guinée Equatoriale'];
        const roles = ['Global Admin', 'Country Admin', 'Partner'];
        const country = hoaxer.random.arrayElement(countries); // sélectionne un genre aléatoire dans le tableau "Countries"
        const role=hoaxer.random.arrayElement(roles);
        employees.push({
            id: id,
            first_name: firstName,
            last_name: lastName,
            email: email,
            phone1: phone1,
            phone2: phone2,
            gender: gender,
            date_of_birth: date_of_birth,
            adresseId: adresseId,
            role: role,
            verified: verified,
            verified_at: verified_at,
            active: active,
            activated_at: activated_at,
            password: password,
            current_gps_location:current_gps_location,
        })
    }
    return employees
}
module.exports = generateEmployees()



/*

module.exports=[
        {
            id: 1,
            username:"john.doe",
            first_name: "John",
            last_name: "Doe",
            email: "John.Doe@ayilaa.com",
            phone1: "+237676734654",
            phone2: "+237696167346",
            gender: "Male",
            date_of_birth: 1990,
            adresse:{},
            role: {},
            verified: "",
            verified_at:"",
            active:"",
            activated_at:"",
            password:"",
            country: "Cameroon"
        },
        {
            id: 2,
            username:"marc.ebounge",
            first_name: "Marc",
            last_name: "Ebounge",
            email: "marc.ebounge@ayilaa.com",
            phone1: "+237676104654",
            phone2: "+237696777346",
            gender: "Male",
            date_of_birth: 1985,
            adresse:{},
            role: {},
            verified: "",
            verified_at:"",
            active:"",
            activated_at:"",
            password:"",
            country: "Cameroon"
        },
        {
            id: 3,
            username:"yvette.ndounga",
            first_name: "Yvette",
            last_name: "Ndounga",
            email: "yvette.ndounge@gmail.com",
            phone1: "+237678834654",
            phone2: "+237693467346",
            gender: "Female",
            date_of_birth: 1989,
            adresse:{},
            role: {},
            verified: "",
            verified_at:"",
            active:"",
            activated_at:"",
            password:"",
            country: "Gabon"
        },
    ]

*/
