import React from 'react';
// import Spinnner from '../components/Spinner';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MoveToTop from '../components/MoveToTop';
import Swal from 'sweetalert2';
const Login = () => {

  const login = () => {
    const Toast = Swal.mixin ({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: toast => {
        toast.addEventListener ('mouseenter', Swal.stopTimer);
        toast.addEventListener ('mouseleave', Swal.resumeTimer);
      },
    });

    Toast.fire ({
      icon: 'success',
      title: `Signed in successfully Victoria`,
    })
    
      window.location.href = "/Home"
    
  }

  return (
    <div>

      {/* <!-- Spinner Start --> */}
      {/* <Spinnner /> */}
      {/* <!-- Spinner End --> */}

      {/* <!-- Navbar Start --> */}
      <Navbar />
      {/* <!-- Navbar End --> */}

      {/* <!-- Quote Start --> */}
      <div class="container-fluid bg-light overflow-hidden my-5 px-lg-0">
        <div class="container quote px-lg-0">
          <div class="row g-0 mx-lg-0">
            <div
              class="col-lg-6 ps-lg-0 wow fadeIn"
              data-wow-delay="0.1s"
              style={{minHeight: "400px"}}
            >
              <div class="position-relative h-100">
                <img
                  class="position-absolute img-fluid w-100 h-100"
                  src="img/quote.jpg"
                  style={{objectFit: "cover"}}
                  alt=""
                />
              </div>
            </div>
            <div
              class="col-lg-6 quote-text py-5 wow fadeIn"
              data-wow-delay="0.5s"
            >
              <div class="p-lg-5 pe-lg-0">

                <h1 class="mb-4" style={{textAlign: "center"}}>
                  Welcome to CleanSpace!
                </h1>
                <p class="mb-4 pb-2" style={{textAlign: "center"}}>
                  {' '}
                  We Provide Clean and Renewable Energy Related Products to Everyone, By creating different payment plan options
                  {' '}
                  <br />
                  <p style={{textAlign: "center" , color: "#32C36C"}}>Login</p>
                </p>
                <form>
                  <div class="row g-3">
                    <div class="col-12 col-sm-6">
                      <input
                        type="text"
                        class="form-control border-0"
                        placeholder="Your Name"
                        style={{height: "55px"}}
                      />
                    </div>
                    <div class="col-12 col-sm-6">
                      <input
                        type="password"
                        class="form-control border-0"
                        placeholder="Password"
                        style={{height: "55px"}}
                      />
                    </div>
                    <div class="col-12 col-sm-6">
                      <input
                        type="text"
                        class="form-control border-0"
                        placeholder="Your Mobile"
                        style={{height: "55px"}}
                      />
                    </div>
                    <div class="col-12 col-sm-6">
                      <select
                        class="form-select border-0"
                        style={{height: "55px"}}
                      >
                        <option selected>Select A Service</option>
                        <option value="1">Vendor</option>
                        <option value="2">Customer</option>

                      </select>
                    </div>

                    <div class="col-12">
                      <textarea
                        class="form-control border-0"
                        placeholder="Special Note"
                      />
                    </div>

                    <div class="col-12">
                      <a
                        href
                        class="navbar-brand d-flex align-items-center border-end px-4 px-lg-5"
                      >
                        <button
                          class="btn btn-primary rounded-pill py-3 px-5"
                          type="button"
                          onClick={login}
                        >
                          {' '}Login
                        </button>
                      </a>

                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <span style={{textAlign: "center"}}>
                      don't have an account yet?
                      {' '}
                      <span style={{textAlign: "center" , color: "#32C36C"}}>
                        Sign Up{' '}
                      </span>
                      {' '}
                    </span>

                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Quote End --> */}

      {/* <!-- Testimonial Start --> */}
      <div class="container-xxl py-5">
        <div class="container">
          <div
            class="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{maxWidth: "600px"}}
          >

            <h1 class="mb-4">What Our Clients Say!</h1>
          </div>
          <div
            class="owl-carousel testimonial-carousel wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div class="testimonial-item text-center">
              <div class="testimonial-img position-relative">
                <img
                  class="img-fluid rounded-circle mx-auto mb-5"
                  src="img/testimonial-1.jpg"
                  alt='circle'
                />
                <div class="btn-square bg-primary rounded-circle">
                  <i class="fa fa-quote-left text-white" />
                </div>
              </div>
              <div class="testimonial-text text-center rounded p-4">
                <p>Using the payment plan made it so easy to Purchase Items</p>
                <h5 class="mb-1">Mary Epstine</h5>
                <span class="fst-italic">Accountant</span>
              </div>
            </div>
            <div class="testimonial-item text-center">
              <div class="testimonial-img position-relative">
                <img
                  class="img-fluid rounded-circle mx-auto mb-5"
                  src="img/testimonial-2.jpg"
                  alt='round'
                />
                <div class="btn-square bg-primary rounded-circle">
                  <i class="fa fa-quote-left text-white" />
                </div>
              </div>
              <div class="testimonial-text text-center rounded p-4">
                <p>
                  {' '}
                  I love this Platform so Much, It makes getting Items so easy
                </p>
                <h5 class="mb-1">Drizzy Drake</h5>
                <span class="fst-italic">Business Man</span>
              </div>
            </div>
            <div class="testimonial-item text-center">
              <div class="testimonial-img position-relative">
                <img
                  class="img-fluid rounded-circle mx-auto mb-5"
                  src="img/testimonial-3.jpg"
                  alt='cirlular'
                />
                <div class="btn-square bg-primary rounded-circle">
                  <i class="fa fa-quote-left text-white" />
                </div>
              </div>
              <div class="testimonial-text text-center rounded p-4">
                <p>
                  {' '}
                  Using the payment plan made it so easy to Purchase Items
                  {' '}
                </p>
                <h5 class="mb-1">Umar Mohammed</h5>
                <span class="fst-italic">Business man</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Testimonial End --> */}

      <Footer />
      <MoveToTop />
    </div>
  );
};

export default Login;
