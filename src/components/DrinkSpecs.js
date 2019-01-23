import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const DrinkSpecs = props => (
  <Card>
    {/* <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' /> */}
    <Card.Content>
      <Card.Header>{props.beer.name}</Card.Header>
      <Card.Meta>
        <span className='date'>Made in England</span>
      </Card.Meta>
      <Card.Description>{props.beer.description}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        {props.beer.tagline}
      </a>
    </Card.Content>
  </Card>
)

export default DrinkSpecs
