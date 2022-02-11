import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './AuthProvider/AuthProvider';
import Appoinment from './component/Appoinment/Appoinment';
import Details from './component/Home/Home/Details/Details';
import Footer from './component/Home/Home/Footer/Footer';
import Home from './component/Home/Home/Home';
import NavBar from './component/Home/NavBar/NavBar';
import Login from './component/Login/Login';
import More from './component/More/More';
import PrivetRoute from './component/PrivetRoute/PrivetRoute';
import Services from './component/Services/services';
import Signup from './component/Signup/Signup';
import NotFound from './component/NotFound/NotFound'
import AddDoctor from './component/Home/AddDoctor/AddDoctor';
import Boking from './Boking/Boking';
import ManageAddDoctor from './ManageAddDoctor/ManageAddDoctor';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <NavBar />
          <Switch>

            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/home">
              <Home />
            </Route>

            <Route path="/services">
              <Services />
            </Route>

            <Route path="/appoinment">
              <Appoinment />
            </Route>

            <Route path="/more">
              <More />
            </Route>

            <Route path="/log">
              <Login />
            </Route>

            <Route path="/sign">
              <Signup />
            </Route>

            <PrivetRoute path="/details/:Id">
              <Details />
            </PrivetRoute>

            <Route path="/adddoctor">
              <AddDoctor />
            </Route>

            <Route path="/boking">
              <Boking />
            </Route>


            <Route path="/manageadddoctor">
              <ManageAddDoctor />
            </Route>


            <Route path="*">
              <NotFound />
            </Route>

          </Switch>

          <Footer />

        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
