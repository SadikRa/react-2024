/* eslint-disable react/prop-types */

import { useState } from "react";

const Country = ({ country }) => {
    const [visited, setVisited] = useState(false)

    const handleVisited = () =>  {
        setVisited(!visited)
    }
  console.log(country);
  return (
    <div>
      <div className="hero bg-base-200 rounded-lg">
        <div className="hero-content flex-col lg:flex-row">
          <img src={country.flags.png} className="w-80 h-60 rounded-lg shadow-2xl" />
          <div className="w-80 ">
            <h1 className="text-3xl font-bold">{country.name.common}</h1>
            <p className="py-6">
            {country.region}
            </p>
            <p className="py-6">
            {country.population}
            </p>
            <button className="btn btn-primary" onClick={handleVisited}>View</button>
            <br />
            {visited ? 'i already visited the country ' : 'i want to visit'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
