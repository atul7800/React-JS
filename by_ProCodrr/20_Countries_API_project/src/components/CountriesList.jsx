import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
//import countriesData from "../data/countriesData";

function CountriesList({ query }) {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountriesData(data));
  }, []);

  return (
    <div className="countries-container">
      {countriesData
        .filter((country) =>
          country.name.common.toLocaleLowerCase().includes(query)
        )
        .map((country) => {
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
