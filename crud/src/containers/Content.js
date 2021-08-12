import { connect } from "react-redux";
import Content from "../components/Content";

const mapStateToProps = (state) => {
  return {
    mode : state.mode
  }
}

export default connect(mapStateToProps)(Content);