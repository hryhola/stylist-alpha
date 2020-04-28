import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentStylist } from '../../redux/stylits/stylist.selectors';
import Header from './Header';

const mapStateToProps = createStructuredSelector({
  currentStylist: selectCurrentStylist,
});

const HeaderContainer = connect(mapStateToProps)(Header);

export default HeaderContainer;
