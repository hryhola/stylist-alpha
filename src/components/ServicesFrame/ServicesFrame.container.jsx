import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectError,
  selectIsLoading,
  selectServices,
} from './../../redux/organizerServices/selectors';
import { selectStylistId } from './../../redux/organizer/organizer.selectors';
import { fetchServicesAsync } from './../../redux/organizerServices/actions/fetchServices';

import ServicesFrame from './ServicesFrame';

const mapStateToProps = createStructuredSelector({
  id: selectStylistId,
  error: selectError,
  isLoading: selectIsLoading,
  services: selectServices,
});

const mapDispatchToProps = {
  fetchServices: fetchServicesAsync,
};

const ServicesFrameContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ServicesFrame);

export default ServicesFrameContainer;
