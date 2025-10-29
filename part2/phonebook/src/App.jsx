import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'
import phonebookServices from './services/phonebook'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchName, setSearchPerson] = useState('')
  const [searchedPerson, setSearchedPerson] = useState(persons)

  useEffect(() => {

    phonebookServices
      .getAll()
      .then(initialPhoneBook => {
        setPersons(initialPhoneBook),
        setSearchedPerson(initialPhoneBook)

      }

      )
    
  }, [])


  const capitalizeNames = str => str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')

  const addNames = (event) => {
    event.preventDefault()

    const normalized = capitalizeNames(newName)
    const existingPerson = persons.find(person => person.name === normalized)

    if (existingPerson) {
      const confirmMsg = `${normalized} is already in the phonebook, replace the old number with a new one?`
      if (window.confirm(confirmMsg)) {
        const updatedPerson = { ...existingPerson, number: newNumber }
        phonebookServices
          .update(existingPerson.id, updatedPerson)
          .then(returnedPerson => {
          setPersons(persons.map(p => p.id === returnedPerson.id ? returnedPerson : p))
          setSearchedPerson(searchedPerson.map(p => p.id === returnedPerson.id ? returnedPerson : p))
          setNewName('')
          setNewNumber('')
        })

      }else{

      }
      return
    }

    const namesObject = {
      name: normalized,
      number : newNumber,
      id: String(persons.length + 1),
      
    }


    phonebookServices
    .create(namesObject)
    .then(returnedPhoneBook => {
      setPersons(persons.concat(returnedPhoneBook))    
      setNewName('')
      setNewNumber('')
      setSearchedPerson(persons.concat(returnedPhoneBook))

    })

  }

  const removeName = (id) => {

    phonebookServices
      .remove(id)
      .then(() => {
        setPersons(persons.filter(person => person.id !== id))
        setSearchedPerson(searchedPerson.filter(person => person.id !== id))
      })
  }

  const handleNamesChange = (event) => {
    setNewName(event.target.value)
    
  }
  const handleNumbersChange = (event) => {
    setNewNumber(event.target.value)
    
  }
  const handleSearchName = (event) => {
    const searchTerm = event.target.value;
    setSearchPerson(searchTerm)
    const filtered = persons.filter((person) =>
      person.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchedPerson(filtered)
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
      <Persons 
        searchedPerson={searchedPerson} 
        deleteContact={removeName}
        
      />
    </div>
  )
}

export default App