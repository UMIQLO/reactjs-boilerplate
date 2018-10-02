import React from 'react'
import ReactDOM from 'react-dom'
import LengthInput from './LengthInput'

class Calculator extends React.Component {
    constructor() {
        super()
        this.state = {
            length: "",
            scale: "",
        }
        this.handleCenterMeterChange = this.handleCenterMeterChange.bind(this)
        this.handleMeterChange = this.handleMeterChange.bind(this)
        this.handleMillimeterChange = this.handleMillimeterChange.bind(this)
        this.handleKiloMeterChange = this.handleKiloMeterChange.bind(this)
        this.convert = this.convert.bind(this)
    }

    handleMillimeterChange(length) {
        this.setState({
            scale: "mm",
            length: length
        })
    }

    handleCenterMeterChange(length) {
        this.setState({
            scale: "cm",
            length: length
        })
    }

    handleMeterChange(length) {
        this.setState({
            scale: "m",
            length: length
        })
    }

    handleKiloMeterChange(length) {
        this.setState({
            scale: "km",
            length: length
        })
    }

    convert() {
        const length = this.state.length
        const scale = this.state.scale
        let mm = 0, cm = 0, m = 0, km = 0
        if (scale === 'mm') {
            mm = length
            cm = mm / 10
            m = cm / 100
            km = m / 1000
        } else if (scale === 'cm') {
            cm = length
            mm = cm * 10
            m = cm / 100
            km = m / 1000
        } else if (scale === 'm') {
            m = length
            cm = m * 100
            mm = cm * 10
            km = m / 1000
        } else if (scale === 'km') {
            km = length
            m = km * 1000
            cm = m * 100
            mm = cm * 10
        }
        return {mm: mm, cm: cm, m: m, km: km}
    }

    render() {
        const value = this.convert()
        return (<div>
            <LengthInput scale="MM" length={value.mm} onLengthChange={this.handleMillimeterChange}/>
            <LengthInput scale="CM" length={value.cm} onLengthChange={this.handleCenterMeterChange}/>
            <LengthInput scale="M" length={value.m} onLengthChange={this.handleMeterChange}/>
            <LengthInput scale="KM" length={value.km} onLengthChange={this.handleKiloMeterChange}/>
        </div>)
    }
}

export default Calculator
