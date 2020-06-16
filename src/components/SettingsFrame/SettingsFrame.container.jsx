import { connect } from 'react-redux';

import SettingsFrame from './SettingsFrame';

import { selectStylistData } from '../../redux/organizer/organizer.selectors';

import { setStylistData } from '../../redux/organizer/organizer.actions';

const mapStateToProps = (state) => ({
  stylistData: selectStylistData(state),
});

const mapDispatchToProps = (dispatch) => ({
  setStylistData: (data) => dispatch(setStylistData(data)),
});

const SettingsFrameContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsFrame);

export default SettingsFrameContainer;
