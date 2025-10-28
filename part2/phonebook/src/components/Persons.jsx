const Persons = ({ searchedPerson, deleteContact }) => {
  return (
    <ul>
      {searchedPerson.map(person => (
        <li key={person.id}>
          {person.name} {person.number} 
          <button onClick={() => {
            if(window.confirm(`Delete ${person.name} ?`)){deleteContact(person.id)}}}>
            delete
          </button>
        </li>
      ))}
    </ul>
  )
}

export default Persons