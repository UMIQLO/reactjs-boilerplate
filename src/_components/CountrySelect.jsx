import React, {Component} from 'react'
import Select from 'react-select'
import {connect} from 'react-redux'
import {fetchCountryList, onChangeCountry} from '../_actions/countrySelect.action'

class CountrySelect extends Component {

    constructor(props) {
        super(props)
        this.countrySelectChange = this.countrySelectChange.bind(this)
    }

    countrySelectChange(event) {
        const {onChangeCountryOption} = this.props
        const countryCode = event.value
        onChangeCountryOption(countryCode)
    }

    render() {
        const countryList = Array.from(this.props.countryList)
        const countryOptions = countryList.map(item => ({label: item.country_name, value: item.country_code}))
        return (<Select options={countryOptions} onChange={this.countrySelectChange}/>)
    }
}
const mapStateToProps = state => ({countryList: state.countrySelect.countryList})
const mapDispatchToProps = dispatch => ({
    onChangeCountryOption: (countryCode) => {
        dispatch(onChangeCountry(countryCode))
    }
})
const connected = connect(mapStateToProps, mapDispatchToProps)(CountrySelect)
export {
    connected as CountrySelect
}
