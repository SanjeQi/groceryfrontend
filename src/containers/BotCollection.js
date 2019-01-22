import React from 'react'
import DrinkCard from '../components/DrinkCard.js'

class BotCollection extends React.Component {
  render () {
    return (
      <div className='ui four column grid'>
        <div className='row'>
          Collection of all drinks
          {this.props.drinks.map(drink => (
            <DrinkCard beer={drink} />
          ))}
        </div>
      </div>
    )
  }
}

export default BotCollection
