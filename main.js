const countriesContainer = document.querySelector(".countries-container");
const filterByRegion = document.querySelector('.filter-by-region')
const searchInput = document.querySelector('.search-container')

const themeChanger  = document.querySelector('.theme-changer')

let allCountriesData 


  
    fetch('https://restcountries.com/v3.1/all/')
      .then((res) => res.json())
      .then((data) =>{
        renderCountries(data)
        allCountriesData = data
      });

    filterByRegion.addEventListener('change', (e) => {
        fetch(`https://restcountries.com/v3.1/region/${filterByRegion.value}`)
        .then((res) => res.json())
        .then(renderCountries);
        
    })

function renderCountries(data) {
    countriesContainer.innerHTML = ''
    data.forEach((pays) => {
      const countryCard = document.createElement("a");
      countryCard.classList.add("country-card");
      countryCard.href = `country.html?name=${pays.name.common}`;
      countryCard.innerHTML = `
        <img src="${pays.flags.svg}" alt="flag">
        <div class="card-text">
            <h3 class="card-title">${pays.name.common}</h3>
            <p><b>Population: </b>${pays.population.toLocaleString(
              "en-US"
            )}</p>
            <p><b>Region: </b>${pays.region}</p>
            <p><b>Capital: </b>${pays.capital?.[0]}</p>
        </div>
        `;
      countriesContainer.append(countryCard);
    });
}

searchInput.addEventListener('input', (e) => {
    const filteredCountries = allCountriesData.filter((country) => country.name.common.toLowerCase().includes(e.target.value.toLowerCase()))
    renderCountries(filteredCountries)
})

themeChanger.addEventListener('click', () => {
    document.body.classList.toggle('dark')
})