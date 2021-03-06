import React from 'react'
import { Router, Link, NavLink, Route, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import DashboardPage from '../components/DashboardPage'
import NotFoundPage from '../components/NotFoundPage'
import LoginPage from '../components/LoginPage'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export const history = createHistory()

const AppRouter = () => (
    <Router history={history}>
        <div>            
            <Switch>
                <PublicRoute exact={true} path="/" component={LoginPage} />
                <PrivateRoute exact={true} path="/dashboard" component={ DashboardPage } />                     
                <Route component={ NotFoundPage }/>
            </Switch>
        </div>        
        
    </Router>
)

export default AppRouter

