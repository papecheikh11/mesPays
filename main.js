const countriesContainer = document.querySelector(".countries-container");
const myFetch = ('https://restcountries.com/v3.1/all/')
async function mesPays(api){
    try {
        const btnSearch = document.querySelector(".fa-solid");
        fetch(api)
        .then((res) => res.json())
        .then((data) => {
        data.forEach((pays) => {
            console.log(pays);
            
        const countryCard = document.createElement("a");
        countryCard.classList.add("country-card");
        countryCard.href = `country.html?name=${pays.name.common}`;
        countryCard.innerHTML = `
            <img src="${pays.flags.svg}" alt="flag">
            <div class="card-text">
                <h3 class="card-title">${pays.name.common}</h3>
                <p><b>Population: </b>${pays.population.toLocaleString("en-US")}</p>
                <p><b>Region: </b>${pays.region}</p>
                <p><b>Capital: </b>${pays.capital?.[0]}</p>
            </div>
            `;

      countriesContainer.append(countryCard);
    });
  });

const darkMode = document.querySelector(".fa-moon");
const body = document.querySelector("body");
darkMode.addEventListener("click", () => {
  body.classList.toggle("maMode");
  btnSearch.classList.toggle(".fa-solidMode");
});

console.log(pays);

    } catch (error) {
        
        console.log(error);
    }
}
mesPays(myFetch)

const paysAll = document.querySelector(".mesElements");
const region = document.querySelector(".mesElements2")

paysAll.addEventListener("input", (e) => {
    const valSaisie = e.target.value
    console.log(valSaisie);
    countriesContainer.innerHTML = ''
mesPays(`https://restcountries.com/v3.1/name/${valSaisie}`)
})

region.addEventListener('input', (e) => {
    const valSaisie = e.target.value
    console.log(valSaisie);
    countriesContainer.innerHTML = ''
mesPays(`https://restcountries.com/v3.1/region/${valSaisie}`)
})
