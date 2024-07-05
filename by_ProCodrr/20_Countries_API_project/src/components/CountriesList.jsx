import React from "react";
import CountryCard from "./CountryCard";
import countriesData from "../data/countriesData";

function CountriesList() {
  return (
    <div className="countries-container">
      {countriesData.map((country) => {
        const countriesDetails = [];
        countriesDetails.push(country.name.common);
        countriesDetails.push(country.population);
        countriesDetails.push(country.region);
        countriesDetails.push(country.capital?.[0]);
        countriesDetails.push(country.flags.svg);

        return (
          <CountryCard
            key={country.name.common}
            countriesDetails={countriesDetails}
          />
        );
      })}
    </div>
  );
}

export default CountriesList;
