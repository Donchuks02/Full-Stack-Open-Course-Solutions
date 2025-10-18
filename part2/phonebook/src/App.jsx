import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchName, setSearchPerson] = useState('')
  const [searchedPerson, setSearchedPerson] = useState(persons)

  const capitalizeNames = str => str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')

  const addNames = (event) => {
    event.preventDefault()

    const nameAlreadyExists = persons.some(person => person.name === capitalizeNames(newName))
    if (nameAlreadyExists) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    const namesObject = {
      name: capitalizeNames(newName),
      number : newNumber,
      id: String(persons.length + 1),
      
    }
    
    setPersons(persons.concat(namesObject))    
    setNewName('')
    setNewNumber('')
    setSearchedPerson(persons.concat(namesObject))

  }

  const handleNamesChange = (event) => {
    setNewName(event.target.value)
    
  }
  const handleNumbersChange = (event) => {
    setNewNumber(event.target.value)
    
  }
  const handleSearchName = (event) => {
    const searchTerm = event.target.value;
    setSearchPerson(searchTerm);
    const filtered = persons.filter((person) =>
      person.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchedPerson(filtered);
  };


  

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchName={searchName} handleSearchName={handleSearchName} />
      <h3>Add a new</h3>
      <PersonForm 
        addNames={addNames}
        newName={newName}
        handleNamesChange={handleNamesChange}
        newNumber={newNumber}
        handleNumbersChange={handleNumbersChange}
      />
      <h3>Numbers</h3>
      <Persons searchedPerson={searchedPerson} />
    </div>
  )
}

export default App