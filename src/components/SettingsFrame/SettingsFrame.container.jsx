import { connect } from 'react-redux';

import SettingsFrame from './SettingsFrame';

import { selectStylistData } from '../../redux/organizer/organizer.selectors';

const mapStateToProps = (state) => ({
  stylistData: selectStylistData(state),
});

const SettingsFrameContainer = connect(mapStateToProps)(SettingsFrame);

export default SettingsFrameContainer;
