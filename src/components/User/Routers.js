import React from 'react';
import {Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import AuthApi from './AuthApi';
import Login from './Login';
import Suceeslogin from './Suceeslogin';
import ValiationForm from './ValidationForm';




export default function Routers() {
    const Auth = React.useContext(AuthApi);
    return (
        <div>
              <Switch>
                        
                        <ProtectedLogin path="/login" component={Login} auth={Auth.auth}/>
                        <Route path="/register" component={ValiationForm}/>
                        <ProtectedRoute path="/dashbord" auth={Auth.auth} component={Dashbord}/>
                    </Switch>
        </div>
    )
}



const Dashbord = () =>{
  
    
    return(
        <div>
            <button class="btn btn-success m-2">Logout</button>
        </div>
    )
}

const ProtectedRoute = ({auth,component:Component,...rest})  =>{
 return(
    <Route
    {...rest}
    render ={()=> auth ?(
        <Component/>
    ):(
        <Redirect to="/login"/>
    )}
    />
 )
}

const ProtectedLogin = ({auth,component:Component,...rest})  =>{
    return(
       <Route
       {...rest}
       render ={()=>!auth ?(
           <Component/>
       ):(
           <Redirect to="/dashbord"/>
       )}
       />
    )
   }