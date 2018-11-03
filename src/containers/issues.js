import { connect } from "react-redux";
import Issues from "../components/issues";
import { getIssues } from "../actions/issues";

const mapStateToProps = ({ issues }) => ({
  issues
});

export default connect(
  mapStateToProps,
  { getIssues }
)(Issues);
