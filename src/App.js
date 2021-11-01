import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/HomePage/HomePage';
import NotFound from './Pages/NotFound/NotFound';
import About from './Pages/About/About';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import AuthProvider from './contexts/AuthProvider';
import Login from './Pages/Login/Login/Login';

import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import ServiceDetails from './Pages/Home/ServiceDetails/ServiceDetails/ServiceDetails';
import MyOrders from './Pages/MyOrders/MyOrders';
import ManageOrders from './Pages/ManageOrders/ManageOrders';
import AddServices from './Pages/AddServices/AddServices';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/myorder">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/manageOrder">
              <ManageOrders></ManageOrders>
            </PrivateRoute>
            <PrivateRoute path="/addServices">
              <AddServices></AddServices>
            </PrivateRoute>
            <PrivateRoute path="/serviceDetails/:serviceid">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
