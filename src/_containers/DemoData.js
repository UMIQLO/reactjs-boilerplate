import React from 'react'
import {connect} from 'react-redux'
import Demo from '../_components/App/Demo'
import {clickCount} from '../_actions/demo.action'

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

const connected = connect(mapStateToProps, mapDispatchToProps)(Demo)
export {
    connected as Demo
}
