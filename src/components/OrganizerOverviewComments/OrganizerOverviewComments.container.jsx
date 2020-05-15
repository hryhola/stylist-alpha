import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectOverviewComments,
  selectLoadingOverviewCommentsError,
  selectIsLoadingOverviewComments,
} from '../../redux/organizer/organizer.selectors';
import OrganizerOverviewComments from './OrganizerOverviewComments';

const mapStateToProps = createStructuredSelector({
  overviewComments: selectOverviewComments,
  loadingOverviewCommentsError: selectLoadingOverviewCommentsError,
  isLoadingOverviewComments: selectIsLoadingOverviewComments,
});

const OrganizerOverviewCommentsContainer = connect(mapStateToProps)(
  OrganizerOverviewComments
);

export default OrganizerOverviewCommentsContainer;
