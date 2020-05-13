import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectSendCommentError,
  selectIsSendingComment,
} from '../../redux/stylits/stylist.selectors';

import { sendCommentAsync } from '../../redux/stylits/redux-thunk/sendComment';

import AddCommentDialog from './AddCommentDialog';

const mapStateToProps = createStructuredSelector({
  error: selectSendCommentError,
  isSending: selectIsSendingComment,
});

const mapDispatchToProps = (dispatch) => ({
  sendComment: ({ stylistId, comment }) =>
    dispatch(sendCommentAsync({ stylistId, comment })),
});

const AddCommentDialogContatiner = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCommentDialog);

export default AddCommentDialogContatiner;
