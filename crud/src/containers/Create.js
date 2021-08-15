import { connect } from "react-redux";
import Create from "../components/Create";

const mapDispatchToProps = (dispatch) => {
  return{
    onCreateContent : (input1, input2)=>{
      dispatch({
        type : "CREATE_CONTENT",
        title : input1,
        desc : input2
      });
    }
  }
}

export default connect(null, mapDispatchToProps)(Create);