import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Login from './components/Login/Login';
import AdminLogin from './components/AdminLogin/AdminLogin';
import AdminRegistration from './components/AdminRegistration/AdminRegistration';
import AddService from './components/Dashboard/AddService/AddService';
import AddReview from './components/Dashboard/AddReview/AddReview';
import Order from './components/Dashboard/Order/Order';
import { createContext } from 'react';
import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import OrderedService from './components/Dashboard/OrderedService/OrderedService';
import AdminServiceList from './components/Dashboard/AdminServiceList/AdminServiceList';
import NotFound from './components/Home/NotFound/NotFound';
import MakeAdmin from './components/Dashboard/MakeAdmin/MakeAdmin';

export const userContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/adminLogin">
            <AdminLogin></AdminLogin>
          </Route>
          <PrivateRoute path="/adminRegistration">
            <AdminRegistration></AdminRegistration>
          </PrivateRoute>
          <PrivateRoute path="/addService">
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path="/addReview">
            <AddReview></AddReview>
          </PrivateRoute>
          <PrivateRoute path="/order/:serviceId">
            <Order></Order>
          </PrivateRoute>
          <PrivateRoute path="/orderedService">
            <OrderedService></OrderedService>
          </PrivateRoute>
          <PrivateRoute path="/adminServiceList">
            <AdminServiceList></AdminServiceList>
          </PrivateRoute>
          <PrivateRoute path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
