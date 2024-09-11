/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import Country from "./Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data)); // Set the data to state
  }, []);

  return (
    <div className="container mx-auto">
      <h1>Countries List</h1>
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-12 rounded-lg p-6">
        {countries.map((country) => <Country key={country.cca3} country={country}></Country>)}
      </ul>
    </div>
  );
};

export default Countries;
