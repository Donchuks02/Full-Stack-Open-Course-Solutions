import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addNames = (event) => {
    event.preventDefault()
    const namesObject = {
      name: newName,
      id: persons.length + 1,
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
      {persons.map(person => <li key={person.name}>{person.name}</li>)}
      </ul>
    </div>
  )
}

export default App