const countryName = new URLSearchParams(location.search).get('name')
const flagImage = document.querySelector('.country-details img')
const countryNameH1= document.querySelector('.country-details h1')

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
.then((res) => res.json())
.then(([country]) => {
    
    flagImage.src = country.flags.svg
    countryNameH1.innerText = country.name.common

    if (country.name.nativeName) {
        console.log(Object.values(country.name.nativeName)[0].common)
    }
})