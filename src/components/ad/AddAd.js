import React, {Component} from 'react';
import '../../custom.css';



export default class AddAd extends Component {
    render() {
        return(
            <div className="container">
                {/* <InitialStep/>
                <FirstStep/> */}
                
                <Hello/>
            </div>
        );
    }
}

// Initial Step 
export class InitialStep extends Component {
    render() {
        return(
            <div>
                Hello World
            </div>
        );
    }
}

export class Hello extends Component {
    render() {
        return(
            <section className="multi_step_form">  
                <form id="msform"> 
            
                    <div class="tittle">
                        <h2>Create an Ad Easy Fast</h2>
                        <p>In order to use this service, you have to complete this verification process</p>
                    </div>

                    <ul id="progressbar">
                        <li class="active">Categories</li>  
                        <li>Ad Details</li> 
                        <li>Post</li>
                    </ul>
            
                    <fieldset>

                        <h3>Setup your phone</h3>
                        <h6>We will send you a SMS. Input the code to verify.</h6> 
                        <div class="form-row"> 
                            <div class="form-group col-md-6">  
                                <input type="tel" id="phone" class="form-control" placeholder="+880"/> 
                            </div>  
                            <div class="form-group col-md-6"> 
                                <input type="text" class="form-control" placeholder="+8801123456789"/>
                            </div> 
                        </div> 
                        <div class="done_text"> 
                            <a href="#" class="don_icon"><i class="ion-android-done"></i></a> 
                            <h6>A secret code is sent to your phone. <br/>Please enter it here.</h6> 
                        </div>  
                        <div class="code_group"> 
                            <input type="text" class="form-control" placeholder="0"/>
                            <input type="text" class="form-control" placeholder="0"/>
                            <input type="text" class="form-control" placeholder="0"/>
                            <input type="text" class="form-control" placeholder="0"/>
                        </div>  
                        <button type="button" class="action-button previous_button">Back</button>
                        <button type="button" class="next action-button">Continue</button>  
                    </fieldset>

                    <fieldset>
                        <h3>Verify Your Identity</h3>
                        <h6>Please upload any of these documents to verify your Identity.</h6>
                        <div class="passport">
                            <h4>Govt. ID card <br/>PassPort <br/>Driving License.</h4> 
                            <a href="#" class="don_icon"><i class="ion-android-done"></i></a> 
                        </div>
                        <div class="input-group"> 
                            <div class="custom-file">
                            <input type="file" class="custom-file-input" id="upload"/>
                            <label class="custom-file-label" for="upload"><i class="ion-android-cloud-outline"></i>Choose file</label>
                        </div>
                    </div>
                    <ul class="file_added">
                        <li>File Added:</li>
                        <li><a href="#"><i class="ion-paperclip"></i>national_id_card.png</a></li>
                        <li><a href="#"><i class="ion-paperclip"></i>national_id_card_back.png</a></li>
                    </ul>
                    <button type="button" class="action-button previous previous_button">Back</button>
                    <button type="button" class="next action-button">Continue</button>  
                    </fieldset>  

                    <fieldset>
                        <h3>Create Security Questions</h3>
                        <h6>Please update your account with security questions</h6> 
                        <div class="form-group"> 
                            <select class="product_select">
                                <option data-display="1. Choose A Question">1. Choose A Question</option> 
                                <option>2. Choose A Question</option>
                                <option>3. Choose A Question</option> 
                            </select>
                        </div> 

                        <div class="form-group fg_2"> 
                            <input type="text" class="form-control" placeholder="Anwser here:"/>
                        </div> 

                        <div class="form-group"> 
                            <select class="product_select">
                                <option data-display="1. Choose A Question">1. Choose A Question</option> 
                                <option>2. Choose A Question</option>
                                <option>3. Choose A Question</option> 
                            </select>
                        </div> 

                        <div class="form-group fg_3"> 
                            <input type="text" class="form-control" placeholder="Anwser here:"/>
                        </div> 
                        <button type="button" class="action-button previous previous_button">Back</button> 
                        <a href="#" class="action-button">Finish</a> 
                    </fieldset>  
                </form>  
            </section> 
        );
    }
}

// First Step
export class FirstStep extends Component {
    render() {
        return(
            <div class="col-md-7 col-lg-8">
            <h4 class="mb-3">Billing address</h4>
            <form className="needs-validation" novalidate>
                <div className="row g-3">
                    <div className="col-sm-6">
                        <label for="firstName" className="form-label">First name</label>
                        <input type="text" className="form-control" id="firstName" placeholder="" value="" required/>
                        <div className="invalid-feedback">
                            Valid first name is required.
                        </div>
                    </div>

                    <div className="col-sm-6">
                        <label for="lastName" className="form-label">Last name</label>
                        <input type="text" className="form-control" id="lastName" placeholder="" value="" required/>
                        <div className="invalid-feedback">
                            Valid last name is required.
                        </div>
                    </div>

                    <div className="col-12">
                        <label for="username" className="form-label">Username</label>
                        <div className="input-group">
                            <span className="input-group-text">@</span>
                            <input type="text" className="form-control" id="username" placeholder="Username" required/>
                            <div className="invalid-feedback">
                                Your username is required.
                            </div>
                        </div>
                    </div>

                    <div className="col-12">
                        <label for="email" className="form-label">Email <span className="text-muted">(Optional)</span></label>
                        <input type="email" className="form-control" id="email" placeholder="you@example.com"/>
                        <div className="invalid-feedback">
                            Please enter a valid email address for shipping updates.
                        </div>
                    </div>

                    <div className="col-12">
                        <label for="address" className="form-label">Address</label>
                        <input type="text" className="form-control" id="address" placeholder="1234 Main St" required/>
                        <div className="invalid-feedback">
                            Please enter your shipping address.
                        </div>
                    </div>

                    <div className="col-12">
                        <label for="address2" className="form-label">Address 2 <span className="text-muted">(Optional)</span></label>
                        <input type="text" className="form-control" id="address2" placeholder="Apartment or suite"/>
                    </div>

                    <div className="col-md-5">
                        <label for="country" className="form-label">Country</label>
                        <select className="form-select" id="country" required>
                            <option value="">Choose...</option>
                            <option>United States</option>
                        </select>
                        <div className="invalid-feedback">
                            Please select a valid country.
                        </div>
                    </div>

                    <div className="col-md-4">
                        <label for="state" className="form-label">State</label>
                        <select className="form-select" id="state" required>
                            <option value="">Choose...</option>
                            <option>California</option>
                        </select>
                        <div className="invalid-feedback">
                            Please provide a valid state.
                        </div>
                    </div>

                    <div className="col-md-3">
                        <label for="zip" className="form-label">Zip</label>
                        <input type="text" className="form-control" id="zip" placeholder="" required/>
                        <div className="invalid-feedback">
                            Zip code required.
                        </div>
                    </div>
                </div>

                <hr className="my-4"/>

                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="same-address"/>
                    <label className="form-check-label" for="same-address">Shipping address is the same as my billing address</label>
                </div>

                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="save-info"/>
                    <label className="form-check-label" for="save-info">Save this information for next time</label>
                </div>
            </form>
            </div>
        );
    }
}