import React from 'react'
import { Route } from 'react-router'
import Connect from './containers/Connect'

import RequiredAuth from './containers/RequiredAuth'

import Main from './containers/Main'

import Statements from './containers/Statements'
import Statement from './containers/Statement'
import StatementCreator from './containers/StatementCreator'

import Activities from './containers/Activities'
import Activity from './containers/Activity'
import ActivityCreator from './containers/ActivityCreator'

import Admin from './containers/Admin'

export default
<Route>
    <Route path="/" component={Connect} />
    <Route component={RequiredAuth(Main)}>
        <Route path="/statements"         components={{main: Statements}} />
        <Route path="/statements/:id"     components={{main: Statement}} />
        <Route path="/statement-creator"  components={{main: StatementCreator}} />

        <Route path="/activities"         components={{main: Activities}} />
        <Route path="/activities/:id"     components={{main: Activity}} />
        <Route path="/activity-creator"   components={{main: ActivityCreator}} />

        <Route path="/admin"              components={{main: Admin}} />
    </Route>
</Route>
