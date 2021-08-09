import { connect } from "react-redux";
import InputNum from "../components/InputNum";

const mapReduxStateToReactProps = (state) => {
  return{

  }
}
const mapReduxDispatchToReactProps = (dispatch) => {
  return{
    onClick : (input)=>{
      dispatch({type:"INCREMENT", size:input})
    }
  }
}

export default connect(mapReduxStateToReactProps,mapReduxDispatchToReactProps)(InputNum);