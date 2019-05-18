import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';

import Review from './review/Review.container';
import MainLayout from '../layouts/MainLayout.layout';
import NotFound from '../components/NotFound.component';
import Search from './search/Search.container';
import Proposals from './proposals/Proposals.container';

const MainRouter = () => (
    <MainLayout>
        <Switch>
            <Route path="/" exact component={Search} />
            <Route path="/review" exact component={Review} />
            <Route path="/proposals" exact component={Proposals} />
            <Route path="/notifications" exact component={NotFound} />
            <Route path="/profile" exact component={NotFound} />
            <Route path="/settings" exact component={NotFound} />
            <Route component={NotFound} />
        </Switch>
    </MainLayout>
);

export default withRouter(MainRouter);
