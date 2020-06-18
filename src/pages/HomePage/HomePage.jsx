import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Container from '@material-ui/core/Container';

import OrganizerNavigation from '../../components/OrganizerNavigation/OrganizerNavigation';
import OrganizerOverviewContainer from '../../components/OrganizerOverview/OrganizerOverview.container';
import ServicesFrameContainer from '../../components/ServicesFrame/ServicesFrame.container';
import ClientsFrameContainer from '../../components/ClientsFrame/ClientsFrame.container';
import CommentsFrameContainer from '../../components/CommentsFrame/CommentsFrame.container';
import SessionsFrameContainer from '../../components/SessionsFrame/SessionsFrame.container';
import SettingsFrameContainer from '../../components/SettingsFrame/SettingsFrame.container';

const HomePage = () => {
  return (
    <Container>
      <OrganizerNavigation />
      <Switch>
        <Route
          exact
          path='/stylist-alpha'
          component={OrganizerOverviewContainer}
        />
        <Route
          exact
          path='/stylist-alpha/services'
          component={ServicesFrameContainer}
        />
        <Route
          exact
          path='/stylist-alpha/clients'
          component={ClientsFrameContainer}
        />
        <Route
          exact
          path='/stylist-alpha/comments'
          component={CommentsFrameContainer}
        />
        <Route
          exact
          path='/stylist-alpha/sessions'
          component={SessionsFrameContainer}
        />
        <Route
          exact
          path='/stylist-alpha/settings'
          component={SettingsFrameContainer}
        />
      </Switch>
    </Container>
  );
};

export default HomePage;
