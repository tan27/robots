import React from 'react'

const Searchbox = ({searchChange}) => {
    return (
        <div className='pa2 tc'>
        <input 
        className='pa2 b--green bg-lightest-blue' 
        type='search' 
        placeholder='search robots'
        onChange={searchChange}
        />
        </div>


    )
}

export default Searchbox;