import React from 'react'
import DrinkCard from '../components/DrinkCard'

class YourBotArmy extends React.Component {
  // your bot army code here...

  render () {
    return (
      <div className='ui segment inverted purple bot-army'>
        <div className='ui five column grid'>
          <div className='row bot-army-row'>
            {this.props.drinks.map(drink => (
              <DrinkCard beer={drink} handleBeer={this.props.delBeer} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default YourBotArmy
