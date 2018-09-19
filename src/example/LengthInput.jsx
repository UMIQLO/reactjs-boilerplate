import React from 'react'
import ReactDOM from 'react-dom'

class LengthInput extends React.Component {
    constructor() {
        super()
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.props.onLengthChange(e.target.value)
    }

    render() {
        const length = this.props.length
        const scale = this.props.scale
        return (<div>
            <fieldset>
                <legend>{scale}</legend>
                <input type="text" name="length" value={length} onChange={this.handleChange}/>
            </fieldset>
        </div>)
    }
}

export default LengthInput
