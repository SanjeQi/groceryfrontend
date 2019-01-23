import React from 'react'
import DrinkCard from '../components/DrinkCard.js'
import { Search } from 'semantic-ui-react'

class BotCollection extends React.Component {
  render () {
    return (
      <div className='ui four column grid'>
        <br />
        <div className='ui category search'>
          <div className='ui icon input'>
            <input
              onChange={event => this.props.searchInput(event)}
              className='prompt'
              type='text'
              placeholder='Search beers...'
            />
            <i className='search icon' />
          </div>
          <div className='results' />
        </div>
        <div className='row'>
          {this.props.drinks.map(drink => (
            <DrinkCard beer={drink} handleBeer={this.props.addBeer} />
          ))}
        </div>
      </div>
    )
  }
}

export default BotCollection
