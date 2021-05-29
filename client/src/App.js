import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route} from "react-router-dom";

import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import Profile from './components/Profile/Profile';
import NavbarSidebar from './components/NavbarSidebar/NavbarSidebar';
import Edit from './components/Profile/Edit/Edit';
import Create from './components/Create/Create';
import AboutUs from './components/AboutUs/AboutUs';

const App = () => (
      <BrowserRouter>
        <NavbarSidebar />
        <Container maxWidth="lg">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/auth" exact component={Auth} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/edit" exact component={Edit} />
            <Route path="/create" exact component={Create} />
            <Route path="/aboutus" exact component={AboutUs} />
          </Switch>
        </Container>
      </BrowserRouter>
);

export default App;
