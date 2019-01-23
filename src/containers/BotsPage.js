import React from 'react'
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import DrinkSpecs from '../components/DrinkSpecs'

const URL = 'http://localhost:5000/api/v1/todos'

class BotsPage extends React.Component {
  state = {
    drinks: [],
    userBeer: [],
    searchTerm: ''
  }

  componentDidMount () {
    this.getAllBeers()
  }

  getAllBeers = () => {
    fetch(URL)
      .then(resp => resp.json())
      .then(drinks =>
        this.setState({
          drinks: drinks.drinks
        })
      )
  }

  get filteredBeer () {
    return this.state.drinks.filter(drink =>
      drink.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    )
  }

  searchInput = event => {
    this.setState({ searchTerm: event.target.value })
  }

  addBeer = beer => {
    this.setState({ userBeer: [...this.state.userBeer, beer] })
  }

  delBeer = beer => {
    let index = this.state.userBeer.indexOf(beer)
    this.setState(state => {
      if (index !== -1) {
        this.state.userBeer.splice(index, 1)
      }
      return state
    })
  }

  render () {
    return (
      <div>
        {}
        <YourBotArmy
          drinks={this.state.userBeer}
          delBeer={this.delBeer}
          handleMouseEnter={this.handleMouseEnter}
          handleMouseLeave={this.handleMouseLeave}
        />
        <BotCollection
          drinks={this.filteredBeer}
          addBeer={this.addBeer}
          searchInput={this.searchInput}
        />
      </div>
    )
  }
}

export default BotsPage
