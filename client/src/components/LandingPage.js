import React, { Component } from 'react';

const LandingPage = () => {
    return(
        <div>
            <body>
                <section class="ftco-section">
                    <div class="container">
                        <div class="row justify-content-center js-fullheight">
                            <div class="col-md-6 text-center d-flex align-items-center">
                                <div class="wrap w-100">
                                    <h2 class="mb-2">Get Started</h2>
                                    <button type="button" class="btn btn-primary py-3 px-4" data-toggle="modal" data-target="#exampleModalCenter">
                                    Join Us
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
		
                <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close d-flex align-items-center justify-content-center" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true" class="ion-ios-close"></span>
                                </button>
                            </div>
                            <div class="row">
                                <div class="col-md mb-md-0 mb-5">
                                    <div class="modal-body p-0">
                                        <h3 class="mb-4">Sign In</h3>
                                        <form action="#" class="signin-form">
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="Username"/>
                                            </div>
                                            <div class="form-group">
                                                <input type="password" class="form-control" placeholder="Password"/>
                                            </div>
                                            <div class="form-group">
                                                <button type="submit" class="form-control btn btn-primary rounded submit px-3">Sign In</button>
                                            </div>
                                            <div class="form-group d-md-flex">
                                                <div class="form-check w-50">
                                                    <label class="custom-control fill-checkbox">
                                                        <input type="checkbox" class="fill-control-input"/>
                                                        <span class="fill-control-indicator"></span>
                                                        <span class="fill-control-description">Remember Me</span>
                                                    </label>
                                                </div>
                                                <div class="w-50 text-md-right">
                                                    <a href="#" style="color: #fff">Forgot Password</a>
                                                </div>
                                            </div>
                                        </form>

                                        <p class="w-100 text-center">&mdash; Or Sign In With &mdash;</p>
                                        <div class="social d-flex text-center">
                                            <a href="#" class="px-2 py-3 mr-md-1 rounded"><span class="ion-logo-facebook mr-2"></span> Facebook</a>
                                            <a href="#" class="px-2 py-3 ml-md-1 rounded"><span class="ion-logo-twitter mr-2"></span> Twitter</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-1 divider">
                                    <div class="col-md">
                                        <div class="modal-body p-0">
                                            <h3 class="mb-4">Sign Up</h3>
                                            <form action="#" class="signup-form"/>
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="First Name"/>
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Last Name"/>
                                        </div>
                                        <div class="form-group">
                                            <input type="email" class="form-control" placeholder="Email address"/>
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control" placeholder="Password"/>
                                        </div>
                                        <div class="form-group">
                                            <button type="submit" class="form-control btn btn-primary rounded submit px-3">Login</button>
                                        </div>
                                        <div class="form-group">
                                            <div class="w-100">
                                                <p class="mb-0">By creating an account, your agree to our terms.</p>
                                            </div>
                                        </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
            

                <script src="js/jquery.min.js"></script>
                <script src="js/popper.js"></script>
                <script src="js/bootstrap.min.js"></script>
                <script src="js/main.js"></script>
            />
        </div>
        
    )
}


export default LandingPage;
