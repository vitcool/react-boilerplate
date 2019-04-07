import { connect } from 'react-redux';

import { ApplicationState } from 'redux/reducers';
import Posts from 'pages/Posts';
import { getIsFetching, getData, getErrorMessage } from 'redux/modules/posts/selectors';
import { fetchPostsRequest } from 'redux/modules/posts/actions';

const mapStateToProps = (state: ApplicationState) => ({
  isFetching: getIsFetching(state),
  data: getData(state),
  errorMessage: getErrorMessage(state),
});

const mapDispatchToProps = {
  fetchPosts: fetchPostsRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
