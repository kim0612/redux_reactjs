import { connect } from "react-redux";
import Mode from "../components/Mode";

const mapDispatchToProps = (dispatch) =>{
  return {
    onChangeMode:(input)=>{dispatch({type:"CHANGE_MODE", mode:input})}
  }
}
export default connect(null,mapDispatchToProps)(Mode);