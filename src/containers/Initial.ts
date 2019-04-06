import { connect } from 'react-redux';

import { ApplicationState } from '../redux/reducers';
import Initial from '../pages/Initial';
import { getIsStarted } from '../redux/modules/application/selectors';
import { exampleAction } from '../redux/modules/application/actions';

const mapStateToProps = (state: ApplicationState) => ({
  isStarted: getIsStarted(state),
});

const mapDispatchToProps = {
  exampleAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Initial);
