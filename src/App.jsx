import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Authentication/Login";
import ForgotPassword from "./pages/Authentication/ForgotPassword";
import SignUp from "./pages/Authentication/SignUp";

//Landing Page
import Home from "./pages/Landing/home";
import Devices from "./pages/Device-Management/devices";
import Configurations from "./pages/Device-Management/configurations";
import Activity from "./pages/Monitoring/activity";
import Alerts from "./pages/Monitoring/alerts";
import Profile from "./pages/User/profile";
import { Button } from "@chakra-ui/react";



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
            <Route path="/devices" element={<Devices/>}/>
            <Route path="/configurations" element={<Configurations/>}/>
            <Route path="/alerts" element={<Alerts/>}/>
            <Route path="/activity" element={<Activity/>}/>

            <Route path="/user/profile" element={<Profile/>}/>
            
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}
export default App;
