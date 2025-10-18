const PersonForm = ({ addNames, newName, handleNamesChange, newNumber, handleNumbersChange }) => {
  return (
    <form onSubmit={addNames}>
      <div>
        name: <input value={newName} onChange={handleNamesChange} />
      </div>
      <div>
        number : <input value={newNumber} onChange={handleNumbersChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;