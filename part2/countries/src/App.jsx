import { useState, useEffect } from 'react'
import Search from './components/Search'
import countryServices from "./services/countryService"
import Countries from './components/Countries'

// Use the capital city name to fetch weather data:

// Endpoint: https://api.openweathermap.org/data/2.5/weather?q={capital}&appid={API_KEY}&units=metric

const App = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [countries, setCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])


  useEffect(() => {
    countryServices
      .getAll()
      .then(initialCountries => {
        setCountries(initialCountries)
        
      })
    
  }, [])




  const handleSearchQuery = (event) => {
    const searchTerm = event.target.value
    setSearchQuery(searchTerm)
    const filtered = countries.filter(country => country.name.common.toLowerCase().includes(searchTerm.toLowerCase()))
    setFilteredCountries(filtered)
  }


  return (
    <div>
      <h1>Data for countries</h1>
      <Search searchQuery={searchQuery} handleSearchQuery={handleSearchQuery}/>
      <Countries filteredCountries={filteredCountries}/>
    </div>
  )


}

export default App
