import React from 'react'
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import DrinkSpecs from '../components/DrinkSpecs'

const URL = 'http://localhost:5000/api/v1/todos'

class BotsPage extends React.Component {
  state = {
    drinks: [],
    userBeer: [],
    hovering: false
  }
  handleMouseEnter = () => this.setState({ hovering: true })
  handleMouseLeave = () => this.setState({ hovering: false })

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
        <YourBotArmy
          drinks={this.state.userBeer}
          delBeer={this.delBeer}
          handleMouseEnter={this.handleMouseEnter}
          handleMouseLeave={this.handleMouseLeave}
        />
        <BotCollection
          drinks={this.state.drinks}
          addBeer={this.addBeer}
          handleMouseEnter={this.handleMouseEnter}
          handleMouseLeave={this.handleMouseLeave}
        />
        <DrinkSpecs />
      </div>
    )
  }
}

export default BotsPage
