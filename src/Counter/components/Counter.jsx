import React, {Component} from 'react'
import {connect} from 'react-redux'
import {increaseCounter, decreaseCouter} from '../actions'

class Counter extends Component {

    constructor(props) {
        super(props)
        this.increase = this.increase.bind(this)
        this.decrease = this.decrease.bind(this)
    }

    increase() {
        this.props.increase()
    }

    decrease() {
        this.props.decrease()
    }

    render() {
        const {counter} = this.props
        return (<div>
            <p>Counter</p>
            <p>
                <input type="button" value="-1" onClick={this.decrease}/>
                <span>{counter}</span>
                <input type="button" value="+1" onClick={this.increase}/>
            </p>
        </div>)
    }
}

const mapStateToProps = state => {
    return {counter: state.counterApp.counter}
}

const mapDispatchToProps = (dispatch) => {
    return {
        increase: () => {
            dispatch(increaseCounter())
        },
        decrease: () => {
            dispatch(decreaseCouter())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
