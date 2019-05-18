import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';

import Contribute from './contribute/Contribute.container';
import MainLayout from '../layouts/MainLayout.layout';
import NotFound from '../components/NotFound.component';
import Search from './search/Search.container';
import Resources from './resources/Resources.container';

const MainRouter = () => (
    <MainLayout>
        <Switch>
            <Route path="/" exact component={Search} />
            <Route path="/contribute" exact component={Contribute} />
            <Route path="/resources" exact component={Resources} />
            <Route path="/notifications" exact component={NotFound} />
            <Route path="/profile" exact component={NotFound} />
            <Route path="/settings" exact component={NotFound} />
            <Route component={NotFound} />
        </Switch>
    </MainLayout>
);

export default withRouter(MainRouter);
