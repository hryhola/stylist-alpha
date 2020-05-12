import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import StylistPage from './StylistPage';

import {
  selectStylistList,
  selectFetchStylistError,
} from '../../redux/stylits/stylist.selectors';

import { fetchStylistListByIdAsync } from '../../redux/stylits/redux-thunk/fetchStylistById';
import { fetchStylistContentAsync } from '../../redux/stylits/redux-thunk/fetchStylistContent';

const mapStateToProps = createStructuredSelector({
  stylistList: selectStylistList,
  fetchStylistError: selectFetchStylistError,
});

const mapDispatchToProps = (dispatch) => ({
  fetchStylistById: (id) => dispatch(fetchStylistListByIdAsync(id)),
  fetchStylistContent: (id) => dispatch(fetchStylistContentAsync(id)),
});

const StylistPageContatiner = connect(
  mapStateToProps,
  mapDispatchToProps
)(StylistPage);

export default StylistPageContatiner;
