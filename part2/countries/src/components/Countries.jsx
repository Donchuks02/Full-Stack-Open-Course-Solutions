const Countries = ({filteredCountries}) => {

        if (filteredCountries.length > 10) {
            return (
                <p>Too many matches, specify another filter</p>
            )
         } else if (filteredCountries.length >= 2 && filteredCountries.length <= 10) {
             return (
             <ul>
                 {filteredCountries.map(country => (
                     <li key={country.cca2}>{country.name.common}</li>
                 ))}
             </ul>
            )
        } else if (filteredCountries.length === 1) {
            const country = filteredCountries[0]
            return (
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
        }}
        
export default Countries