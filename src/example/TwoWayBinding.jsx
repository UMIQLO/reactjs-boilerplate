import React from 'react'

class TwoWayBinding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '預設資料'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (<form onSubmit={this.handleSubmit}>
      <label>
        Name:
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
      </label>
      <p>{this.state.value}，您好。</p>
      <input type="submit" value="Submit"/>
    </form>);
  }
}
export default TwoWayBinding
