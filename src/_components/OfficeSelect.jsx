import React, {Component} from 'react'
import Select from 'react-select'
import {connect} from 'react-redux'
import {fetchOfficeList, onChangeOffice} from '../_actions/officeSelect.action'
import {filterCountryByOffice, fetchCountryList} from '../_actions/countrySelect.action'

class OfficeSelect extends Component {

    constructor(props) {
        super(props)
        this.officeSelectChange = this.officeSelectChange.bind(this)
    }

    componentDidMount() {
        const {initOfficeList} = this.props
        initOfficeList()
    }

    officeSelectChange(event) {
        const {onChangeOfficeOption} = this.props
        const officeName = event.value
        onChangeOfficeOption(officeName)
    }

    render() {
        const officeList = Array.from(this.props.officeList)
        const officeOptions = officeList.map(item => ({label: item.office_name, value: item.office_name}))
        return (<Select options={officeOptions} onChange={this.officeSelectChange}/>)
    }
}

const mapStateToProps = state => ({officeList: state.officeSelect.officeList, selectedOffice: state.officeSelect.selectedOffice})
const mapDispatchToProps = dispatch => ({
    initOfficeList: () => {
        dispatch(fetchOfficeList())
    },
    onChangeOfficeOption: (officeName) => {
        dispatch(fetchCountryList()).then(() => {
            dispatch(filterCountryByOffice(officeName))
            dispatch(onChangeOffice(officeName))
        })
    }
})

const connected = connect(mapStateToProps, mapDispatchToProps)(OfficeSelect)
export {
    connected as OfficeSelect
}
