import { connect } from "react-redux";
import Read from "../components/Read";

const mapStateToProps = (state) => {
  return {
    content : state.contents[state.selected_id]
  }
}

export default connect(mapStateToProps)(Read);