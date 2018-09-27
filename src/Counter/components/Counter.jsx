import React from 'react'
import ReactDOM from 'react-dom'
import {Button, Container, Header} from 'semantic-ui-react'

const Counter = ({counter, increase, decrease}) => (<Container>
    <Header size='medium'>Counter</Header>
    <Button.Group>
        <Button onClick={() => decrease()} color='black'>
            -1
        </Button>
        <Button.Or text={counter}/>
        <Button onClick={() => increase()} color='red'>
            +1
        </Button>
    </Button.Group>
</Container>)

export default Counter
