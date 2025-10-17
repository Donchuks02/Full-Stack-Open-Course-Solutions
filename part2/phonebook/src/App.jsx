import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addNames = (event) => {
    event.preventDefault()

    const nameAlreadyExists = persons.some(person => person.name === newName)
    if (nameAlreadyExists) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    const namesObject = {
      name: newName,
    }
    setPersons(persons.concat(namesObject))
    setNewName('')
    
    
  }

  const handleNamesChange = (event) => {
    setNewName(event.target.value)
    
  }

  

  return (
    <div>
     
      <h2>Phonebook</h2>
      <form onSubmit={addNames}>
        <div>
          name: <input value={newName} onChange={handleNamesChange} />

        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
      {persons.map(person => (<li key={person.name}>{person.name}</li>))}
      </ul>
    </div>
  )
}

export default App