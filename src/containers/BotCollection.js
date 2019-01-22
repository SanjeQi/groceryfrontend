import React from 'react'
import DrinkCard from '../components/DrinkCard.js'

class BotCollection extends React.Component {
  render () {
    return (
      <div className='ui four column grid'>
        <div className='row'>
          {this.props.drinks.map(drink => (
            <DrinkCard
              beer={drink}
              handleBeer={this.props.addBeer}
              handleMouseEnter={this.props.handleMouseEnter}
              handleMouseLeave={this.props.handleMouseLeave}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default BotCollection
