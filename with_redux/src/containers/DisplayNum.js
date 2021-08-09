import {connect} from 'react-redux';
import DisplayNum from '../components/DisplayNum';

const mapReduxStateToReactProps = (state) => {
  return{
    number : state.number
  }
}
const mapReduxDispatchToReactProps = (dispatch) => {
 return{

 }
}

export default connect(mapReduxStateToReactProps,mapReduxDispatchToReactProps)(DisplayNum);