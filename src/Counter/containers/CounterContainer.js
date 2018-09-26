import {connect} from 'react-redux'
import Counter from '../components/Counter'
import {increaseCounter, decreaseCouter} from '../actions'

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
const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter)
export default CounterContainer
