import { useEffect, useState } from "react";

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
        {countries.map((country) => (
          <li key={country.cca3}> {/* Unique key from country code */}
            <h2>{country.name.common}</h2>
            <p>Region: {country.region}</p>
            <p>Population: {country.population}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Countries;
