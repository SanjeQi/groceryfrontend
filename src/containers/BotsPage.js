import React from 'react'
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'

const URL = 'http://localhost:5000/api/v1/todos'

class BotsPage extends React.Component {
  state = {
    drinks: []
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

  render () {
    return (
      <div>
        <YourBotArmy />
        <BotCollection drinks={this.state.drinks} />
      </div>
    )
  }
}

export default BotsPage
