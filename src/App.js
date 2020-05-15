import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import HeaderContainer from './components/Header/Header.container';

import StylistPageContatiner from './pages/StylistPage/StylistPage.container';
import StylistListPage from './pages/StylistListPage/StylistListPage';
import HomePage from './pages/HomePage/HomePage';
import SignInPage from './pages/SignInPage/SignInPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';

import { createStructuredSelector } from 'reselect';
import { auth, createProfieDocument } from './firebase/firebase.utils';

import { setStylistData as setStylistDataAction } from './redux/organizer/organizer.actions';
import { selectStylistData } from './redux/organizer/organizer.selectors';

class App extends React.Component {
  componentDidMount() {
    const { setStylistData, history } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createProfieDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setStylistData({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
        history.push('/');
      } else setStylistData(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    const isAuthorized = !!this.props.stylistData;
    return (
      <>
        <HeaderContainer />
        <Switch>
          <Route path='/stylist/:id' component={StylistPageContatiner} />
          {isAuthorized ? (
            <Switch>
              <Route path='/stylist-list' component={StylistListPage} />
              <Route path='/' component={HomePage} />
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
  stylistData: selectStylistData,
});

const mapDispatchToProps = (dispatch) => ({
  setStylistData: (user) => dispatch(setStylistDataAction(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
