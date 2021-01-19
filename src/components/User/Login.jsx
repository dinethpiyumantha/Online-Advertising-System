 import React from 'react'
 
 function Login() {
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
                                <form>
                                <div className="form-group">
                                    <label>Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                                    <small id="emailHelp" className="form-text text-muted">Ex:-joshon@gmail.com</small>
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
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
 
 export default Login
 