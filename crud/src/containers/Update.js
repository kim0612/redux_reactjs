import { connect } from "react-redux";
import Update from "../components/Update";

const mapStateToProps = (state) => {
  let selected_contents;
  // let selected_contents_index;
  for (let i=0 ; i<state.contents.length ; i++){
    if(state.contents[i].id === state.selected_id){
      selected_contents = state.contents[i];
      // selected_contents_index = i;
      break;
    }
  }
  return {
    title : selected_contents.title,
    desc : selected_contents.desc
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateContent : (input1, input2)=>{dispatch({
        type:"UPDATE_CONTENT",
        title : input1,
        desc : input2
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Update);