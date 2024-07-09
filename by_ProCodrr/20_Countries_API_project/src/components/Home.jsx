import React from "react";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import SelectMenu from "../components/SelectMenu";
import CountriesList from "../components/CountriesList";

function Home() {
  const [query, setQuery] = useState("");
  return (
    <main>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />;
        <SelectMenu />
      </div>
      {/* {query == "unmount" ? "" : <CountriesList query={query} />} */}
      <CountriesList query={query} />
    </main>
  );
}

export default Home;
