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
    <div className="m-10 p-10">
      <h1>Countries List</h1>
      <ul>
        {countries.map((country) => <Country key={country.cca3} country={country}></Country>)}
      </ul>
    </div>
  );
};

export default Countries;
