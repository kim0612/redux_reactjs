import { connect } from "react-redux";
import Read from "../components/Read";

const mapStateToProps = (state) => {
  let selected_contents;
  for (let i of state.contents){
    if(i.id === state.selected_id){
      selected_contents = i;
      break;
    }
  }
  return {
    content : selected_contents
  }
}

export default connect(mapStateToProps)(Read);