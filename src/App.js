import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./Pages/Home/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Explore from "./Pages/Explore/Explore";
import Purchase from "./Pages/Purchase/Purchase";
import AuthProvider from "./Pages/Context/AuthProvider/AuthProvider";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Footer from "./Shared/Header/Footer/Footer";

function App() {
  return (
    <div className="">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/exploreCars">
              <Explore></Explore>
            </Route>
            <Route exact path="/purchase/:id">
              <Purchase></Purchase>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/signUp">
              <SignUp></SignUp>
            </Route>
            <Route exact path="/ContactUs">
              <ContactUs></ContactUs>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
