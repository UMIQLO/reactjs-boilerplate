import React, {Component} from 'react'
import Select from 'react-select'
import {connect} from 'react-redux'
import {years} from '../_helpers/common'
import {onChangeYear} from '../_actions/yearSelect.action'

class CustomerSelect extends Component {
    constructor(props) {
        super(props)
        this.yearSelectChange = this.yearSelectChange.bind(this)
    }

    yearSelectChange(event) {
        const year = event.value
        const {onChangeYearOption} = this.props
        onChangeYearOption(year)
    }

    render() {
        const yearOptions = [...years].map((item) => ({label: item, value: item}))
        return (<Select options={yearOptions} onChange={this.yearSelectChange}/>)
    }
}
const mapStateToProps = state => ({selectedYear: state.yearSelect.selectedYear})

const mapDispatchToProps = dispatch => ({
    onChangeYearOption: (year) => {
        dispatch(onChangeYear(year))
    }
})

const connected = connect()(CustomerSelect)

export {
    connected as CustomerSelect
}
