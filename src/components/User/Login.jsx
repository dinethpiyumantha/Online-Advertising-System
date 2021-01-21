 import React from 'react';
 import axios from 'axios';
 
 const initialstate = {
    email: "",
    password: ""
};

 const api=axios.create(
     {
         baseURL:'http://localhost:8080/User/all'
     }
 )

 export default class Login extends React.Component {
 
    state=initialstate;

    validate = () => {
      let passwordError = "";
      let emailError = "";
      if (!this.state.email) {
        emailError = "Email cannot be blank";
      } else if (!this.state.email.includes("@")) {
          emailError = "invalid email";
        }
      if (!this.state.password) {
          passwordError = "password cannot be blank";
        }
        
        if (emailError || passwordError) {
          this.setState({ emailError, passwordError});
          return false;
        }
    
        return true;  
    }
    handleChange = event => {
       const isCheckbox = event.target.type === "checkbox";
       this.setState({
         [event.target.name]: isCheckbox
           ? event.target.checked
           : event.target.value
       });
     };
     constructor(){
      super();
      this.state = {
       users:[]
      }
      api.get('/').then(res => {
       this.setState({ users: res.data })
          //console.log(this.state.users[1]);
      })
  }

  
     handleSubmit = event => {
       event.preventDefault();
       const isValid = this.validate();
       if (isValid) {
         //console.log(this.state);
         // clear form
         //let num=0;
          for (let index = 0; index < this.state.users.length; index++) {
             if ((this.state.email)===(this.state.users[index].email)) {
               if ((this.state.password)===(this.state.users[index].name)) {
                console.log('register succesdfull');
               }else{
                console.log('unsuccesfull');
              }
               
            }
          }
          
         this.setState(initialstate);
       }
     };
     render() {
         return (
             <div>
                 <button class="btn btn-success m-2" data-toggle="modal" data-target="#loginPage">Login</button>
                  {/* Login and Register model poop css use */}

                  <div className="modal fade" tabindex="-1" id="loginPage" role="dialog">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Login</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                                <form className="form-group" onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label>Email address</label>
                                    <input type="email" className="form-control" name="email"
                                    placeholder="email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    aria-describedby="emailHelp" placeholder="Enter email"></input>
                                    <small id="emailHelp" className="form-text text-muted">Ex:-joshon@gmail.com</small>
                                    <div style={{ fontSize: 12, color: "red" }}>
                                    {this.state.emailError}
                          </div>
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control" type="password"
                            name="password"
                            placeholder="password"
                            value={this.state.password}
                            onChange={this.handleChange} placeholder="Password"></input>
                            <div style={{ fontSize: 12, color: "red" }}>
                            {this.state.passwordError}
                          </div>
                                </div>
                                <div className="form-group form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                                </div>
                                <button type="submit" className="btn btn-primary">Login</button>
                                </form>
                    </div>
                    <div class="modal-footer">
                        <p>Create an account <button className="btn-primary">Register</button>  </p>
                    </div>
                    </div>
                </div>
                </div>
             </div>
         )
     }
 }
 