import React from 'react'
import './DrinkCard.css'

const DrinkCard = props => {
  const { beer, handleBeer } = props
  return (
    <div className='card_wrapper'>
      <div className='card' onClick={() => handleBeer(beer)}>
        <div className='card__img'>
          <img src={beer.image_url} />
        </div>
        {/* <div className='card_content'>
          <p className='card_content__header'>
            <strong>Beer Name:</strong> {beer.name}
          </p>
          <p className='card_content__description'>
            <strong>Description:</strong> {beer.description}
          </p>
          <p className='card_content__price'>
            <strong> Price:</strong> £ {beer.ibu}
          </p>
        </div> */}
      </div>
    </div>
  )
}

export default DrinkCard
