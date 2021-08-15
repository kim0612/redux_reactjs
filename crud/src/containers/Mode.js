import { connect } from "react-redux";
import Mode from "../components/Mode";

const mapStateToProps = (state) => {
  return{
    contents : state.contents,
    selected_id : state.selected_id
  }
}
const mapDispatchToProps = (dispatch) =>{
  return {
    onChangeMode:(input)=>{dispatch({type:"CHANGE_MODE", mode:input})},
    onDeleteContent : () => {dispatch({type:"DELETE_CONTENT"})}
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Mode);