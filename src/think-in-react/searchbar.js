import React from 'react'

class SearchBar extends React.Component{
    render(){
        return (
            <form className= 'searchbar'>
                <input type='text'  placeholder= 'Search...' />
                <p>
                  <input type = 'checkbox'/>
                  {' '}
                  Only show products in stock
                </p>
            </form>
        )
    }
}

export default SearchBar;