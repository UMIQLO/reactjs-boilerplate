import React from 'react'
class SimpleLogin extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      userdata: [
        {
          user: "admin",
          pw: "admin"
        }, {
          user: "admin",
          pw: "123456"
        }
      ]
    }
    this.Login = this.Login.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  Login() {
    let message = ""
    let user = this.state.username
    let pw = this.state.password
    if (user == "" && pw == "") {
      message = "Please Enter Username & Password"
    } else {
      if (user == "") {
        message = "Please Enter Username"
      } else if (pw == "") {
        message = "Please Enter Password"
      } else {
        let isValid = this.state.userdata.filter((item, index, array) => {
          return item.user == user && item.pw == pw
        })
        message = (isValid.length >= 1)
          ? "Login Success"
          : "Login Fail"
      }
    }
    this.setState({message: message})
  }

  handleChange(e) {
    let name = e.target.name
    let value = e.target.value
    this.setState({[name]: value})
  }

  render() {
    const errMsgStyle = {
      color: "red"
    }
    return (<div>
      <h5>Login Page</h5>
      <h5 style={errMsgStyle}>{this.state.message}</h5>
      <p><input type="text" name="username" onChange={this.handleChange}/></p>
      <p><input type="password" name="password" onChange={this.handleChange}/></p>
      <p><input type="button" value="Login" onClick={this.Login}/></p>
    </div>);
  }
}
export default SimpleLogin;
