function createCountryCard(country) {
    const card = document.createElement('div')
    card.classList.add('country')
  
    const countryName = country.name.common
    const name = document.createElement('h2')
    name.textContent = countryName
  
    const flag = document.createElement('img')
    flag.src = country.flags.svg
    flag.alt = countryName

    const continentName = country.continents
    const continent = document.createElement('h3')
    continent.textContent = continentName

    const linkMap = country.maps.googleMaps
    const maps = document.createElement('button')
    maps.textContent = "Mapas"
    maps.addEventListener('click', ()=>{open(linkMap)})
   
   console.log(linkMap)
  
    card.append(name, continentName, flag, maps)
    document.querySelector('#countries').append(card)
  }
  
  async function getCountries() {
    const response = await fetch('https://restcountries.com/v3.1/all')
    const countries = await response.json()
  
    console.log(countries)
    countries.forEach(createCountryCard)
  }
  
  getCountries()