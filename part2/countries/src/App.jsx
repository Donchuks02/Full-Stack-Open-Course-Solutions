import { useState, useEffect } from 'react'
import Search from './components/Search'
import countryServices from "./services/countryService"
import Countries from './components/Countries'
import weatherServices from './services/weatherService'


const App = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [countries, setCountries] = useState(null) //[]
  const [filteredCountries, setFilteredCountries] = useState([])
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [weatherData, setWeatherData] = useState(null)


  useEffect(() => {
    countryServices
      .getAll()
      .then(initialCountries => {
        setCountries(initialCountries)
      })
  }, [])

  useEffect(() => {
    if (selectedCountry) {
      weatherServices
        .getWeatherByCapital(selectedCountry.capital)
        .then(data => {
          setWeatherData(data)
        })
    }
  }, [selectedCountry])

  if(!countries) {
    return null
  }


  const toggleShowButton = (country) => {
    setSelectedCountry(country)
    
  }


  const handleSearchQuery = (event) => {
    const searchTerm = event.target.value
    setSearchQuery(searchTerm)
    setSelectedCountry(null)
    const filtered = countries.filter(country => country.name.common.toLowerCase().includes(searchTerm.toLowerCase()))
    setFilteredCountries(filtered)
  }


  return (
    <div>
      <Search searchQuery={searchQuery} handleSearchQuery={handleSearchQuery}/>
      <Countries 
        filteredCountries={filteredCountries}
        toggleShowButton={toggleShowButton}
        selectedCountry={selectedCountry}
        weatherData={weatherData}
      />
    </div>
  )


}

export default App
