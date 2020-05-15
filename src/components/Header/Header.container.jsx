import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectStylistData } from '../../redux/organizer/organizer.selectors';
import Header from './Header';

const mapStateToProps = createStructuredSelector({
  stylistData: selectStylistData,
});

const HeaderContainer = connect(mapStateToProps)(Header);

export default HeaderContainer;
