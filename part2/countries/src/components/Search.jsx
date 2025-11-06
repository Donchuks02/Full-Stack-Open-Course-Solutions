const Search = ({searchQuery, handleSearchQuery}) => {
    return (
    <div>
        Find countries <input value={searchQuery} onChange={handleSearchQuery}/>
    </div>
    )
}

export default Search