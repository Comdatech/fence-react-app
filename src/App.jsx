import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Authentication/Login";
import ForgotPassword from "./pages/Authentication/ForgotPassword";
import SignUp from "./pages/Authentication/SignUp";
import Home from "./pages/Landing/home";
import Devices from "./pages/Device-Management/devices";
import Configurations from "./pages/Device-Management/configurations";
import Activity from "./pages/Monitoring/activity";
import Alerts from "./pages/Monitoring/alerts";

import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";
import { loginRequest } from "./authConfig";
// import { PageLayout } from "./components/PageLayout";
// import { ProfileData } from "./components/ProfileData";
import { callMsGraph } from "./graph";

// Renders information about the signed-in user or a button to retrieve data about the user
const ProfileContent = () => {
  const { instance, accounts } = useMsal();
  const [graphData, setGraphData] = useState(null);

  function RequestProfileData(){
    instance.acquireTokenSilent({
        ...loginRequest,
        account: accounts[0]
    }).then((response) => {
      callMsGraph(response.accessToken).then(response => setGraphData(response));
    });
  }
};

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
            
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}
export default App;
