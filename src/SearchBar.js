import { useState } from 'react'
function SearchBar(props){
    let [searchTerm, setSearchTerm] = useState('')    

    return(
        <div>
           <form onSubmit={(e)=>props.handleSearch(e, searchTerm)}>
            <input type="text" onClick={(e) =>{
                e.preventDefault()
                setSearchTerm(e.target.value)
            }} placeholder="Enter a Search term hur" onChange={(e)=>setSearchTerm(e.target.value)}/>
            <input type="submit"/>
           </form>
        </div>
    )
}

export default SearchBar