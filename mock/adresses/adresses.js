// Adresses stocke les informations sur les adresses de user , lieu , etc ...
const hoaxer = require('hoaxer')
const csc = require('country-state-city')
const countries = require("../attractions/countries");
const restrictCountriesId = [42, 82, 54, 199, 107, 70];
function generateAddresses () {
    const adresses = []
    for (let id = 1; id <= 200; id+=1) {
        let adr={};
        const randomCountryId=hoaxer.random.arrayElement(restrictCountriesId);
        const randomCompleteCountry=countries.filter((country)=> country.id===randomCountryId)[0];
        //console.log(randomCompleteCountry)
        countryCities=csc.City.getCitiesOfCountry(randomCompleteCountry.alpha2Code);
        console.log(countryCities[0])
        const city = hoaxer.random.arrayElement(countryCities)
        adr.id=id;
        adr.countryId=randomCountryId;
        adr.state="";
        adr.zip="";
        adr.adr_line1=hoaxer.lorem.text()
        adr.adr_line2=hoaxer.lorem.text()
        adr.latitude=city.latitude
        adr.longitude=city.longitude
        adr.gps_location=""
        adr.city=city.name
        adresses.push(adr)
    }
    return adresses;
}
module.exports = generateAddresses()
/*
module.exports=[
    {
        id: 1,
        adr_line1: "2 bd de la paix",
        adr_line2: "lieu dit manguier",
        gps_location: "",
        latitude:"",
        longitude:"",
        zip: 48000,
        city:"Douala",
        state:"Littoral",
        country: "Cameroon"
    },
    {
        id: 1,
        adr_line1: "3 rue du templier",
        adr_line2: "lieu dit poste centrale",
        gps_location: "",
        zip: 33000,
        city:"Yaoundé",
        state:"Centre",
        country: "Cameroon"
    },
    {
        id: 1,
        adr_line1: "2 bd de la tronch",
        adr_line2: "quartier tino",
        gps_location: "",
        zip: 28000,
        city:"Bamenda",
        state:"Nord Ouest",
        country: "Cameroon"
    },
]
*/
