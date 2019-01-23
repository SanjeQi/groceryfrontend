import React from 'react'
import './DrinkCard.css'
import DrinkSpecs from './DrinkSpecs'

class DrinkCard extends React.Component {
  state = {
    hovering: false
  }

  handleMouseEnter = () => this.setState({ hovering: true })
  handleMouseLeave = () => this.setState({ hovering: false })

  render () {
    const { beer, handleBeer } = this.props

    return (
      <div className='card_wrapper'>
        <div className='card' onClick={() => handleBeer(beer)}>
          <div className='card__img'>
            <div
              className='image_container'
              onMouseEnter={event => this.handleMouseEnter()}
              onMouseLeave={event => this.handleMouseLeave()}
            >
              {!this.state.hovering ? (
                <img src={beer.image_url} />
              ) : (
                <DrinkSpecs beer={beer} />
              )}
            </div>
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
}

export default DrinkCard
