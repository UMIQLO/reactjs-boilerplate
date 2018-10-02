import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux'
import {clickCount} from '../../_actions'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.onAddClickCount = this.onAddClickCount.bind(this)
    }

    onAddClickCount() {
        this.props.addClickCount()
    }

    render() {
        return (<div>
            <p>
                Hello World (Click Count: {this.props.clickCount})
            </p>
            <p><input type="submit" value="Click Me" onClick={this.onAddClickCount}/></p>
        </div>)
    }
}

const mapStateToProps = state => {
    return {clickCount: state.demo.clickCount}
}

const mapDispatchToProps = dispatch => {
    return {
        addClickCount: () => {
            dispatch(clickCount())
        }
    }
}

const connected = connect(mapStateToProps, mapDispatchToProps)(App)
export {
    connected as App
}
