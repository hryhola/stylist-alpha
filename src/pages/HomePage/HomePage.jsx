import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Container from '@material-ui/core/Container';

import OrganizerNavigation from '../../components/OrganizerNavigation/OrganizerNavigation';
import OrganizerOverviewContainer from '../../components/OrganizerOverview/OrganizerOverview.container';

const HomePage = () => {
  return (
    <Container>
      <OrganizerNavigation />
      <Switch>
        <Route exact path='/' component={OrganizerOverviewContainer} />
      </Switch>
    </Container>
  );
};

export default HomePage;
