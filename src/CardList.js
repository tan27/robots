import React from 'react'
import Card from './Card'

function CardList ( { robots } ) {
    const cardArray = robots.map((user, i) => {
        return (
            <Card name={robots[i].name}/>
        )
    })

    return (
        <div>
        { cardArray }
        </div>   
    )
}

export default CardList;
