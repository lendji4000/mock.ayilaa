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
        adr.neighborhood=generateRandomWord(15);  // Quartier
        adr.adr_line1=generateRandomWord(15)
        adr.adr_line2=generateRandomWord(15)
        adr.latitude=city.latitude
        adr.longitude=city.longitude
        adr.gps_location=""
        adr.city=city.name
        adresses.push(adr)
    }
    return adresses;
}
module.exports = generateAddresses()
