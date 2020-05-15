import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectStylistId } from '../../redux/organizer/organizer.selectors';
import { fetchOverviewCommentsAsync } from '../../redux/organizer/redux-thunk/fetchOverviewComments';
import OrganizerOverview from './OrganizerOverview';

const mapStateToProps = createStructuredSelector({
  id: selectStylistId,
});
const mapDispatchToProps = (dispatch) => ({
  fetchOverviewComments: (id) => dispatch(fetchOverviewCommentsAsync(id)),
});

const OrganizerOverviewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(OrganizerOverview);

export default OrganizerOverviewContainer;
