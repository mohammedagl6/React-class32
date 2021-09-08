import { useState } from "react"




const SearchForm = ({ setCityList, setShowNotValid }) => {

    const [searchInput, setSearchInput] = useState('');

    const handleSubmit = async ( e ) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&units=metric&APPID=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`
        e.preventDefault();
        if(searchInput){
            try {
                const result = await fetch(url);
                const data = await result.json();
                if(data?.cod === 200){
                    setCityList(cityList => {
                        // not to add the city more than once
                        cityList = cityList.filter(city => city.id !== data.id);
                        cityList = [data, ...cityList]
                        return cityList
                    })
                    setShowNotValid(false)
                }else{
                    setShowNotValid(true)
                }
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <form onSubmit={handleSubmit} className="searchForm">
            <span className="searchIcon">
                <i className="fas fa-search"></i>
            </span>
            
            <input type="search" placeholder="Search City" value={searchInput} onChange ={e => setSearchInput(e.target.value)} className="searchInput"/>
            <button type="submit" className="searchButton" disabled={!searchInput}>Search</button>
        </form>
    )
}

export default SearchForm