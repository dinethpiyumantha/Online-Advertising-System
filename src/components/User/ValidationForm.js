//import {style} from './stylesheets/stylesheet.css' ;
import React from "react";
import './stylesheets/stylesheet.css' ;

const initialState = {
  name: "",
  email: "",
  phoneNum: "",
  password: "",
  conformPasword:""
};

export default class ValiationForm extends React.Component {
  state = initialState;

  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };

  validate = () => {
    let nameError = "";
    let emailError = "";
    let phoneNoRrror = "";
    let passwordError = "";
    let conformPassError= "";

    if (!this.state.name) {
      nameError = "name cannot be blank";
    }

    if (!this.state.email.includes("@")) {
      emailError = "invalid email";
    }
    if (this.state.phoneNum.length < 10 || this.state.phoneNum.length > 10){
      phoneNoRrror = "invalid Phone number"
    }
    if (this.state.password.length < 6){
      passwordError = "Password needs to be 6 characters or more";
    }
    if (!this.state.conformPasword) {
      conformPassError = "Confirm password is required";
    } else if (!(this.state.password==this.state.conformPasword)){
      conformPassError = "Passwords do not match";
    }

    if (emailError || nameError || passwordError || phoneNoRrror || conformPassError) {
      this.setState({ emailError, nameError,passwordError,phoneNoRrror,conformPassError });
      return false;
    }

    return true;
  };

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      // clear form
      this.setState(initialState);
    }
  };

  render() {
    return (
      <>
       <button class="btn btn-warning m-2" data-toggle="modal" data-target="#RegisterPage">Register</button>
                  {/* Register model poop css use */}

                  <div className="modal fade" tabindex="-1" id="RegisterPage" role="dialog" >
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                    <div className="modal-header  brackground-imag-register">
                        <h5 className="modal-title">Register</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                      <div className="row">
                        <div className="col-6">
                        <form className="form-group" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                        <label>Full Name</label>
                          <input
                            name="name"
                            placeholder="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                          />
                          <div style={{ fontSize: 12, color: "red" }}>
                            {this.state.nameError}
                          </div>
                        </div>
                        <div className="form-group">
                          <label>Email </label>
                          <input
                            name="email"
                            placeholder="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                          />
                          <div style={{ fontSize: 12, color: "red" }}>
                            {this.state.emailError}
                          </div>
                        </div>
                        <div className="form-group">
                        <label>Phone Number</label>
                          <input
                            name="phoneNum"
                            placeholder="phone"
                            value={this.state.phoneNum}
                            onChange={this.handleChange}
                          />
                          <div style={{ fontSize: 12, color: "red" }}>
                            {this.state.phoneNoRrror}
                          </div>
                        </div>
                        
                        
                        <div className="form-group">
                          <input
                            type="password"
                            name="password"
                            placeholder="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                          />
                          <div style={{ fontSize: 12, color: "red" }}>
                            {this.state.passwordError}
                          </div>
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            name="conformPasword"
                            placeholder="ConfirmPassword"
                            value={this.state.conformPasword}
                            onChange={this.handleChange}
                          />
                          <div style={{ fontSize: 12, color: "red" }}>
                            {this.state.conformPassError}
                          </div>
                        </div>
                        <button type="submit" className="btn-danger">Submit</button>
                      </form>
                        </div>
                        <div className="col-6">
                          Google,Facebok
                        </div>
                      
                      </div>
                      </div>
                    <div class="modal-footer">
                        <p> if you are register<button className="badge-dark">Login</button>  </p>
                    </div>
                    </div>
                </div>
                </div>
                
      </>
    );
  }
}
