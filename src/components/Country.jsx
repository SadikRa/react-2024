/* eslint-disable react/prop-types */

const Country = ({ country }) => {
  console.log(country);
  return (
    <div>

      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img src={country.flags.png} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{country.name.common}</h1>
            <p className="py-6">
            {country.region}
            </p>
            <p className="py-6">
            {country.population}
            </p>
            <button className="btn btn-primary">View details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
