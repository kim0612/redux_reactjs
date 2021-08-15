import { connect } from "react-redux";
import TOC from "../components/TOC";

const mapStateToProps = (state) => {
  return{
    contents : state.contents
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onChangeContent : (input)=> {
      dispatch({type:"SELECT_CONTENT", selected_id: input})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TOC);