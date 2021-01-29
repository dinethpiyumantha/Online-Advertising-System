import React from 'react'
import AuthApi from './AuthApi';



export default function Suceeslogin() {
    const Auth = React.useContext(AuthApi);

    const handleOnClick = () =>{
        Auth.setAuth(true);
    }
    return (
        <div>
            <button type="submit" className="btn btn-primary" >Login</button>
        </div>
    )
}