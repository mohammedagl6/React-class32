import { useState } from "react"




const SearchForm = ({ setCity }) => {

    const [searchInput, setSearchInput] = useState('');

    const handleSubmit = async ( e ) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&units=metric&APPID=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`
        e.preventDefault();
        if(searchInput){
            try {
                const result = await fetch(url);
                const data = await result.json();
                setCity(data);
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <form onSubmit={handleSubmit} className="searchForm">
            <span className="searchIcon"></span>
            <input type="text" placeholder="Search City" value={searchInput} onChange ={e => setSearchInput(e.target.value)} className="searchInput"/>
            <button type="submit" className="searchButton">Search</button>
        </form>
    )
}

export default SearchForm