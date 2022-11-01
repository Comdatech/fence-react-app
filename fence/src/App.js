import {Routes, Route } from "react-router-dom";
import * as React from "react";
import { BrowserRouter} from "react-router-dom";
import Login from "./pages/Authentication/Login";
import ForgotPassword from "./pages/Authentication/ForgotPassword";
import SignUp from "./pages/Authentication/SignUp";
import Home from "./pages/Landing/home";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isUserAuthenticated: false,
    };
  }
  render() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            {/* Authentication Page routes*/}
            <Route path="/" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/sign-up" element={<SignUp />} />

            <Route path="/home" element={<Home />} />
            
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}
export default App;
