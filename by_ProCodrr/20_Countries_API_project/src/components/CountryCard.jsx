import React from "react";

function CountryCard() {
  return (
    <a class="country-card" href="/country.html?name=Wallis and Futuna">
      <img src="https://flagcdn.com/wf.svg" alt="Wallis and Futuna flag" />
      <div class="card-text">
        <h3 class="card-title">Wallis and Futuna</h3>
        <p>
          <b>Population: </b>11,750
        </p>
        <p>
          <b>Region: </b>Oceania
        </p>
        <p>
          <b>Capital: </b>Mata-Utu
        </p>
      </div>
    </a>
  );
}

export default CountryCard;
