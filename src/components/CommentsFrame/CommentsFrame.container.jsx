import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectStylistId } from '../../redux/organizer/organizer.selectors';
import {
  selectError,
  selectIsLoading,
  selectComments,
} from '../../redux/organizerComments/comments.selectors';

import { fetchCommentsAsync } from '../../redux/organizerComments/actions/fetchComments';

import CommentsFrame from './CommentsFrame';

const mapStateToProps = createStructuredSelector({
  error: selectError,
  isLoading: selectIsLoading,
  comments: selectComments,
  id: selectStylistId,
});

const mapDispatchToProps = {
  fetchComments: fetchCommentsAsync,
};

const CommentsFrameContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsFrame);

export default CommentsFrameContainer;
