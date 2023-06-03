import React from 'react';
// import { Link } from 'react-router-dom';
import MoveToTop from '../components/MoveToTop';
import Footer from '../components/Footer';
// import Spinnner from '../components/Spinner';
import Navbar from '../components/Navbar';
const Home = () => {
  return (
    <div>
      {/* <!-- Spinner Start --> */}
      {/* <Spinnner /> */}
      {/* <!-- Spinner End --> */}

      {/* <!-- Navbar Start --> */}
      <Navbar />
      {/* <!-- Navbar End --> */}

      {/* <!-- Carousel Start --> */}
      <div className="container-fluid p-0 pb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="owl-carousel header-carousel position-relative">
          <div
            className="owl-carousel-item position-relative"
            data-dot="<img src='img/carousel-1.jpg'>"
          >
            <img className="img-fluid" src="img/carousel-1.jpg" alt="" />
            <div className="owl-carousel-inner">
              <div className="container">
                <div className="row justify-content-start">
                  <div className="col-10 col-lg-8">
                    <h1 className="display-2 text-white animated slideInDown">
                      Pioneers Of Solar And Renewable Energy
                    </h1>
                    <p className="fs-5 fw-medium text-white mb-4 pb-3">
                      {' '}
                      Ensure access to affordable, reliable, sustainable  and modern energy for all
                    </p>
                    <a
                      href
                      className="btn btn-primary rounded-pill py-3 px-5 animated slideInLeft"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="owl-carousel-item position-relative"
            data-dot="<img src='img/carousel-2.jpg'>"
          >
            <img className="img-fluid" src="img/carousel-2.jpg" alt="" />
            <div className="owl-carousel-inner">
              <div className="container">
                <div className="row justify-content-start">
                  <div className="col-10 col-lg-8">
                    <h1 className="display-2 text-white animated slideInDown">
                      Pioneers Of Solar And Renewable Energy
                    </h1>
                    <p className="fs-5 fw-medium text-white mb-4 pb-3">
                      Ensure access to affordable, reliable, sustainable  and modern energy for all
                    </p>
                    <a
                      href
                      className="btn btn-primary rounded-pill py-3 px-5 animated slideInLeft"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="owl-carousel-item position-relative"
            data-dot="<img src='img/carousel-3.jpg'>"
          >
            <img className="img-fluid" src="img/carousel-3.jpg" alt="" />
            <div className="owl-carousel-inner">
              <div className="container">
                <div className="row justify-content-start">
                  <div className="col-10 col-lg-8">
                    <h1 className="display-2 text-white animated slideInDown">
                      Pioneers Of Solar And Renewable Energy
                    </h1>
                    <p className="fs-5 fw-medium text-white mb-4 pb-3">
                      {' '}
                      Ensure access to affordable, reliable, sustainable  and modern energy for all
                    </p>
                    <a
                      href
                      className="btn btn-primary rounded-pill py-3 px-5 animated slideInLeft"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Carousel End --> */}

      {/* <!-- Feature Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
              <div className="d-flex align-items-center mb-4">
                <div className="btn-lg-square bg-primary rounded-circle me-3">
                  <i className="fa fa-users text-white" />
                </div>
                <h1 className="mb-0" data-toggle="counter-up">3453</h1>
              </div>
              <h5 className="mb-3">Happy Customers</h5>
              <span>We aim to give our customers the very best</span>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
              <div className="d-flex align-items-center mb-4">
                <div className="btn-lg-square bg-primary rounded-circle me-3">
                  <i className="fa fa-check text-white" />
                </div>
                <h1 className="mb-0" data-toggle="counter-up">4234</h1>
              </div>
              <h5 className="mb-3">Project Done</h5>
              <span>We have accomplished a lot</span>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
              <div className="d-flex align-items-center mb-4">
                <div className="btn-lg-square bg-primary rounded-circle me-3">
                  <i className="fa fa-award text-white" />
                </div>
                <h1 className="mb-0" data-toggle="counter-up">3123</h1>
              </div>
              <h5 className="mb-3">Awards Win</h5>
              <span>We have received a lot of Awards</span>
            </div>

          </div>
        </div>
      </div>
      {/* <!-- Feature Start --> */}

      {/* <!-- About Start --> */}
      <div class="container-fluid bg-light overflow-hidden my-5 px-lg-0">
        <div class="container about px-lg-0">
          <div class="row g-0 mx-lg-0">
            <div
              class="col-lg-6 ps-lg-0 wow fadeIn"
              data-wow-delay="0.1s"
              style={{minheight: "25rem"}}
            >
              <div class="position-relative h-100">
                <img
                  class="position-absolute img-fluid w-100 h-100"
                  src="img/about.jpg"
                  style={{objectFit: "cover"}}
                  alt=""
                />
              </div>
            </div>
            <div
              class="col-lg-6 about-text py-5 wow fadeIn"
              data-wow-delay="0.5s"
            >
              <div class="p-lg-5 pe-lg-0">
                <h6 class="text-primary">About Us</h6>
                <h1 class="mb-4">
                  25+ Years Experience In Solar & Renewable Energy Industry
                </h1>
                <p>Making the earth a better place, one Purchase at a time</p>
                <p>
                  <i class="fa fa-check-circle text-primary me-3" />
                  Happy customers
                </p>
                <p>
                  <i class="fa fa-check-circle text-primary me-3" />
                  Completed Projects
                </p>
                <p>
                  <i class="fa fa-check-circle text-primary me-3" />
                  Awards gotten
                </p>
                <a href class="btn btn-primary rounded-pill py-3 px-5 mt-3">
                  Explore More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About End --> */}

      {/* <!-- Service Start --> */}
      <div class="container-xxl py-5">
        <div class="container">
          <div
            class="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{maxWidth: "37.5rem"}}
          >
            <h6 class="text-primary">Our Services</h6>
            <h1 class="mb-4">
              We Are Pioneers In The World Of Renewable Energy
            </h1>
          </div>
          <div class="row g-4">
            <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
              <div class="service-item rounded overflow-hidden">
                <img class="img-fluid" src="img/img-600x400-1.jpg" alt="" />
                <div class="position-relative p-4 pt-0">
                  <div class="service-icon">
                    <i class="fa fa-solar-panel fa-3x" />
                  </div>
                  <h4 class="mb-3">Solar Panels</h4>
                  <p>
                    {' '}
                    A solar panel is a device that converts sunlight into electricity
                    {' '}
                    by using photovoltaic (PV) cells.
                    PV cells are made of materials that generate electrons
                  </p>
                  <a class="small fw-medium" href>
                    Read More<i class="fa fa-arrow-right ms-2" />
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
              <div class="service-item rounded overflow-hidden">
                <img class="img-fluid" src="img/img-600x400-2.jpg" alt="" />
                <div class="position-relative p-4 pt-0">
                  <div class="service-icon">
                    <i class="fa fa-wind fa-3x" />
                  </div>
                  <h4 class="mb-3">Wind Turbines</h4>
                  <p>
                    A wind turbine turns wind energy into electricity using the aerodynamic
                    force from the rotor blades,
                    which work like an airplane wing or helicopter rotor blade.
                  </p>
                  <a class="small fw-medium" href>
                    Read More<i class="fa fa-arrow-right ms-2" />
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
              <div class="service-item rounded overflow-hidden">
                <img class="img-fluid" src="img/img-600x400-3.jpg" alt="" />
                <div class="position-relative p-4 pt-0">
                  <div class="service-icon">
                    <i class="fa fa-lightbulb fa-3x" />
                  </div>
                  <h4 class="mb-3">Hydropower Plants</h4>
                  <p>
                    A micro hydropower plant has a capacity of up to 100 kilowatts.
                    A small or micro hydroelectric
                    power system can produce enough electricity for a single home
                  </p>
                  <a class="small fw-medium" href>
                    Read More<i class="fa fa-arrow-right ms-2" />
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
              <div class="service-item rounded overflow-hidden">
                <img class="img-fluid" src="img/img-600x400-4.jpg" alt="" />
                <div class="position-relative p-4 pt-0">
                  <div class="service-icon">
                    <i class="fa fa-solar-panel fa-3x" />
                  </div>
                  <h4 class="mb-3">Solar Panels</h4>
                  <p>
                    A solar panel is a device that converts sunlight into electricity
                    {' '}
                    by using photovoltaic (PV) cells.
                    PV cells are made of materials that generate electrons
                  </p>
                  <a class="small fw-medium" href>
                    Read More<i class="fa fa-arrow-right ms-2" />
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
              <div class="service-item rounded overflow-hidden">
                <img class="img-fluid" src="img/img-600x400-5.jpg" alt="" />
                <div class="position-relative p-4 pt-0">
                  <div class="service-icon">
                    <i class="fa fa-wind fa-3x" />
                  </div>
                  <h4 class="mb-3">Wind Turbines</h4>
                  <p>
                    A wind turbine turns wind energy into electricity using the aerodynamic
                    force from the rotor blades,
                    which work like an airplane wing or helicopter rotor blade.
                  </p>
                  <a class="small fw-medium" href>
                    Read More<i class="fa fa-arrow-right ms-2" />
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
              <div class="service-item rounded overflow-hidden">
                <img class="img-fluid" src="img/img-600x400-6.jpg" alt="" />
                <div class="position-relative p-4 pt-0">
                  <div class="service-icon">
                    <i class="fa fa-lightbulb fa-3x" />
                  </div>
                  <h4 class="mb-3">Hydropower Plants</h4>
                  <p>
                    A micro hydropower plant has a capacity of up to 100 kilowatts.
                    A small or micro hydroelectric
                    power system can produce enough electricity for a single home
                  </p>
                  <a class="small fw-medium" href>
                    Read More<i class="fa fa-arrow-right ms-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Service End --> */}

      {/* <!-- Feature Start --> */}
      <div class="container-fluid bg-light overflow-hidden my-5 px-lg-0">
        <div class="container feature px-lg-0">
          <div class="row g-0 mx-lg-0">
            <div
              class="col-lg-6 feature-text py-5 wow fadeIn"
              data-wow-delay="0.1s"
            >
              <div class="p-lg-5 ps-lg-0">
                <h6 class="text-primary">Why Choose Us!</h6>
                <h1 class="mb-4">
                  Complete Commercial & Residential clean and Renewable Energy products
                </h1>
                <p class="mb-4 pb-2">
                  Our key Goal is to bring Accessability and Affordability to the avrage individual
                </p>
                <div class="row g-4">
                  <div class="col-6">
                    <div class="d-flex align-items-center">
                      <div class="btn-lg-square bg-primary rounded-circle">
                        <i class="fa fa-check text-white" />
                      </div>
                      <div class="ms-4">
                        <p class="mb-0">Quality</p>
                        <h5 class="mb-0">Services</h5>
                      </div>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="d-flex align-items-center">
                      <div class="btn-lg-square bg-primary rounded-circle">
                        <i class="fa fa-user-check text-white" />
                      </div>
                      <div class="ms-4">
                        <p class="mb-0">Expert</p>
                        <h5 class="mb-0">Vendors</h5>
                      </div>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="d-flex align-items-center">
                      <div class="btn-lg-square bg-primary rounded-circle">
                        <i class="fa fa-drafting-compass text-white" />
                      </div>
                      <div class="ms-4">
                        <p class="mb-0">Free</p>
                        <h5 class="mb-0">Consultation</h5>
                      </div>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="d-flex align-items-center">
                      <div class="btn-lg-square bg-primary rounded-circle">
                        <i class="fa fa-headphones text-white" />
                      </div>
                      <div class="ms-4">
                        <p class="mb-0">Customer</p>
                        <h5 class="mb-0">Support</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-lg-6 pe-lg-0 wow fadeIn"
              data-wow-delay="0.5s"
              style={{minHeight: "25rem"}}
            >
              <div class="position-relative h-100">
                {/* <img class="position-absolute img-fluid w-100 h-100" src="img/feature.jpg" style="object-fit: cover;" alt=""> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Feature End --> */}

      {/* <!-- Testimonial Start --> */}
      <div class="container-xxl py-5">
        <div class="container">
          <div
            class="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{maxWidth: "37.5rem"}}
          >
            <h6 class="text-primary">Testimonial</h6>
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
                  alt="circle"
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
                  alt='curved'
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

export default Home;
