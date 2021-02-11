import React from 'react'
import AuthApi from './AuthApi';
import Login from './Login';


//const isValid = Login.validate;
export default function Suceeslogin(props) {
    const Auth = React.useContext(AuthApi);
    //loginObj.handleOnClick();
    //console.log(loginObj.state.email);

    //const l  = new Login();
    
    const handleOnClick = () =>{
        //console.log(myfun.props.email);
        console.log(props);
        if (props.name=="password_ok") {
            Auth.setAuth(true);
        } else {
            
        }
        //const login = Login.isvalidornot();
        
        //Auth.setAuth(true);
    }
    return (
        <div>
            
            <button type="submit" className="btn btn-primary" onClick={handleOnClick}>Login</button>
        </div>
    )
}

