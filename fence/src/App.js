import {Routes, Route } from "react-router-dom";
import * as React from "react";
import { BrowserRouter} from "react-router-dom";
import Login from "./pages/Authentication/Login";
import ForgotPassword from "./pages/Authentication/ForgotPassword";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          {/* Authentication Page routes*/}
          <Route index path="/" element={<Login/>} />
          <Route path="/forgot-password" element={<ForgotPassword/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
