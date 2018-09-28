import {connect} from 'react-redux'
import {login} from '../actions'
import MainApp from '../components/MainApp'
import Navbar from '../components/Navbar'

const mapStateToProps = state => {
    return {username: state.mainApp.username}
}

const mapDispatchToProps = dispatch => {
    return {
        login: (username) => {
            dispatch(login(username))
        }
    }
}

const MainAppContainer = connect(mapStateToProps, mapDispatchToProps)(MainApp)
export default MainAppContainer
