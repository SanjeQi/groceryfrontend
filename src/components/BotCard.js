import React from 'react'

const BotCard = props => {
  const { bot } = props

  let botType

  // switch (bot.bot_class) {
  //   case 'Assault':
  //     botType = <i className='icon military' />
  //     break
  //   case 'Defender':
  //     botType = <i className='icon shield' />
  //     break
  //   case 'Support':
  //     botType = <i className='icon ambulance' />
  //     break
  //   default:
  //     botType = <div />
  // }

  return (
    <div className='ui column'>
      <div
        className='ui card'
        key={bot.id}
        onClick={() => console.log('add code to connect event listener')}
      >
        <div className='image'>
          <img alt='oh no!' src={bot.image_url} />
        </div>
        <div className='content'>
          <div className='header'>{bot.name}</div>

          <div className='meta text-wrap'>
            <small>{bot.description}</small>
          </div>
        </div>
        <div className='extra content'>
          <span>
            <i className='icon heartbeat' />
            {bot.ph}
          </span>
        </div>
      </div>
    </div>
  )
}

export default BotCard
