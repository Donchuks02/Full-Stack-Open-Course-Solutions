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
    console.log('effect');
    
    phonebookServices
      .getAll()
      .then(initialPhoneBook => {
        console.log('promise fulfilled'),
        setPersons(initialPhoneBook),
        setSearchedPerson(initialPhoneBook)

      }

      )
    // console.log('effect')
    // axios
    //   .get('http://localhost:3001/persons')
    //   .then(response => {
    //     console.log('promise fulfilled')
    //     setPersons(response.data)
    //     setSearchedPerson(response.data)
        
    //   })
    
  }, [])


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
    phonebookServices
    .create(namesObject)
    .then(returnedPhoneBook => {
      setPersons(persons.concat(returnedPhoneBook))    
      setNewName('')
      setNewNumber('')
      setSearchedPerson(persons.concat(returnedPhoneBook))

    })
    // axios
    //   .post('http://localhost:3001/persons', namesObject)
    //   .then(response => {
    //     console.log(response)
    //     setPersons(persons.concat(namesObject))    
    //     setNewName('')
    //     setNewNumber('')
    //     setSearchedPerson(persons.concat(namesObject))
        
    //   })
    


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
      <Persons searchedPerson={searchedPerson} />
    </div>
  )
}

export default App