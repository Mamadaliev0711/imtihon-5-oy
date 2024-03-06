function createCard(country) {
  return `
      <div class="card">
        <img src="${country.flags.png}" alt="">
        <h2>${country.name.common}</h2>
        <p>Population-${country.population}</p>
        <p>Region-${country.region}</p>
        <p>Capital-${country.capital}</p>
      </div>
    `;
}


export {createCard};