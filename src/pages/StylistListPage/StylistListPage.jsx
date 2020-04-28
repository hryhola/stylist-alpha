import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Container, CircularProgress } from '@material-ui/core';
import StylistListItem from '../../components/StylistListItem/StylistListItem';

import {
  selectStylistList,
  selectStylistListLoading,
} from '../../redux/stylits/stylist.selectors';
import { fetchStylistListAsync } from '../../redux/stylits/redux-thunk/fetchStylistList';

const StylistListPage = ({ stylistList, fetchStylistList, isLoading }) => {
  useEffect(() => fetchStylistList(), []);

  return (
    <Container>
      {isLoading ? (
        <CircularProgress />
      ) : (
        stylistList.map((stylist) => <StylistListItem stylist={stylist} />)
      )}
    </Container>
  );
};

const mapStateToProps = createStructuredSelector({
  stylistList: selectStylistList,
  isLoading: selectStylistListLoading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchStylistList: () => dispatch(fetchStylistListAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(StylistListPage);
