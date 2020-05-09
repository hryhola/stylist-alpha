import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import HeaderContainer from './components/Header/Header.container';

import StylistPage from './pages/StylistPage/StylistPage';
import StylistListPage from './pages/StylistListPage/StylistListPage';
import HomePage from './pages/HomePage/HomePage';
import SignInPage from './pages/SignInPage/SignInPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';

import { createStructuredSelector } from 'reselect';
import { auth, createProfieDocument } from './firebase/firebase.utils';
import { setCurrentStylist as setCurrentStylistAction } from './redux/stylits/stylist.actions';

import { selectCurrentStylist } from './redux/stylits/stylist.selectors';

class App extends React.Component {
  componentDidMount() {
    const { setCurrentStylist } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createProfieDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentStylist({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else setCurrentStylist(null);
    });
    auth.signOut();
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    const { currentStylist } = this.props;
    return (
      <>
        <HeaderContainer />
        <Switch>
          <Route path='/stylist/:id' component={StylistPage} />
          {currentStylist ? (
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route path='/stylist-list' component={StylistListPage} />
            </Switch>
          ) : (
            <Switch>
              <Route exact path='/' component={StylistListPage} />
              <Route path='/signin' component={SignInPage} />
              <Route path='/signup' component={SignUpPage} />
            </Switch>
          )}
        </Switch>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentStylist: selectCurrentStylist,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentStylist: (user) => dispatch(setCurrentStylistAction(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
