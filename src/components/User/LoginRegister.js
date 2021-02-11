import React from 'react';
import AuthApi from "./AuthApi";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Routers from './Routers';

export default function LoginRegister() {
    const[auth,setAuth] = React.useState(false);
    return (
        <div>
              <AuthApi.Provider value={{auth,setAuth}}>
                    <Router>
                    {/* <Login></Login>
                    <ValiationForm></ValiationForm> */}
                    <Routers></Routers>
                    </Router>
              </AuthApi.Provider>
            
        </div>
    )
}

