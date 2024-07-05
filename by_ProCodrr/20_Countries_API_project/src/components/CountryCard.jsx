import React from "react";

function CountryCard({ countriesDetails }) {
  return (
    <a className="country-card" href="/country.html?name=Wallis and Futuna">
      <img src={countriesDetails[4]} alt="Wallis and Futuna flag" />
      <div className="card-text">
        <h3 className="card-title">{countriesDetails[0]}</h3>
        <p>
          <b>Population: </b>
          {countriesDetails[1].toLocaleString("en-IN")}
        </p>
        <p>
          <b>Region: </b>
          {countriesDetails[2]}
        </p>
        <p>
          <b>Capital: </b>
          {countriesDetails[3]}
        </p>
      </div>
    </a>
  );
}

export default CountryCard;
