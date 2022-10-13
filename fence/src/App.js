import {Routes, Route } from "react-router-dom";
import * as React from "react";
import { BrowserRouter} from "react-router-dom";
import Login from "./pages/Authentication/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
