const Countries = ({ filteredCountries, toggleShowButton, selectedCountry, weatherData }) => {
  const CountryDetails = ({ country, weatherData }) => (
    <div>
      <h1>{country.name.common}</h1>
      <p>Capital: {country.capital}</p>
      <p>Area: {country.area}</p>
      <h2>Languages:</h2>
      <ul>
        {Object.values(country.languages).map(language => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />

      <h2>Weather in {country.capital}</h2>
        <p>Temperature {weatherData?.main?.temp} Celsius</p>
        <img 
          src={`http://openweathermap.org/img/wn/${weatherData?.weather?.[0]?.icon}@2x.png`} 
          alt={weatherData?.weather?.[0]?.description} 
        />
          <p>Wind: {weatherData?.wind?.speed} m/s</p>
    </div>
  )

  if (filteredCountries.length > 10) {
    return <p>Too many matches, specify another filter</p>
  } 

  if (filteredCountries.length === 1) {
    return <CountryDetails country={filteredCountries[0]} weatherData={weatherData} />
  }

  if (selectedCountry) {
    return (
      <div>
        <CountryDetails country={selectedCountry} weatherData={weatherData} />
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
