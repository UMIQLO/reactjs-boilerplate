import React from 'react'
import {Menu, Segment} from 'semantic-ui-react'

const Navbar = () => (<Segment inverted={true}>
  <Menu inverted={true} pointing={true} secondary={true}>
    <Menu.Item name='home'/>
    <Menu.Item name='messages'/>
    <Menu.Item name='friends'/>
  </Menu>
</Segment>)

export default Navbar
