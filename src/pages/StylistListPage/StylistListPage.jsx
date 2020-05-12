import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Container, CircularProgress, Grid } from '@material-ui/core';
import StylistListItem from '../../components/StylistListItem/StylistListItem';

import {
  selectStylistList,
  selectStylistListLoading,
} from '../../redux/stylits/stylist.selectors';
import { fetchStylistListAsync } from '../../redux/stylits/redux-thunk/fetchStylistList';

const StylistListPage = ({ stylistList, fetchStylistList, isLoading }) => {
  useEffect(() => {
    const fetchList = async () => fetchStylistList();
    fetchList();
  }, [fetchStylistList]);

  return (
    <Container>
      {isLoading ? (
        <Grid container direction='row' justify='center' alignItems='center'>
          <CircularProgress />
        </Grid>
      ) : (
        stylistList.map((stylist) => (
          <StylistListItem key={stylist.id} stylist={stylist} />
        ))
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
