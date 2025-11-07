const Countries = ({ filteredCountries, toggleShowButton, selectedCountry }) => {
  const CountryDetails = ({ country }) => (
    <div>
      <h2>{country.name.common}</h2>
      <p>Capital: {country.capital}</p>
      <p>Area: {country.area}</p>
      <h3>Languages:</h3>
      <ul>
        {Object.values(country.languages).map(language => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
    </div>
  )

  if (filteredCountries.length > 10) {
    return <p>Too many matches, specify another filter</p>
  } 

  if (filteredCountries.length === 1) {
    return <CountryDetails country={filteredCountries[0]} />
  }

  if (selectedCountry) {
    return (
      <div>
        <CountryDetails country={selectedCountry} />
      </div>
    )
  }

  return (
    <ul>
      {filteredCountries.map(country => (
        <li key={country.cca2}>
          {country.name.common}
          <button onClick={() => toggleShowButton(country)}>
            show
          </button>
        </li>
      ))}
    </ul>
  )
}

export default Countries
