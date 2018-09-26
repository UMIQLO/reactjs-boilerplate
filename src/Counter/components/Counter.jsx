import React from 'react'
import ReactDOM from 'react-dom'

const Counter = ({counter, increase, decrease}) => (<div>
  <p>Counter</p>
  <p>
    <input type="button" value="-1" onClick={decrease}/>
    <span>{counter}</span>
    <input type="button" value="+1" onClick={increase}/>
  </p>
</div>)

export default Counter
