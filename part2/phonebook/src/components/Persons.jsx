const Persons = ({ searchedPerson }) => {
  return (
    <ul>
      {searchedPerson.map(person => (
        <li key={person.id}>{person.name} {person.number}</li>
      ))}
    </ul>
  )
}

export default Persons