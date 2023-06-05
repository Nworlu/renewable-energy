import React from 'react';
import Footer from '../components/Footer';
import MoveToTop from '../components/MoveToTop';
import Navbar from '../components/Navbar';
// import Spinnner from '../components/Spinner';
import PageHeader from '../components/PageHeader';
import {Link} from 'react-router-dom';
const About = () => {
  return (
    <div>
      {/* <Spinnner /> */}
      <Navbar />
      {/* <!-- Page Header Start --> */}
      <div class="container-fluid page-header py-5 mb-5">
        <div class="container py-5">
          <h1 class="display-3 text-white mb-3 animated slideInDown">
            About Us
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a class="text-white" href="#">Home</a>
              </li>
              <li class="breadcrumb-item">
                <a class="text-white" href="#">Pages</a>
              </li>
              <li class="breadcrumb-item text-white active" aria-current="page">
                About
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* <!-- Page Header End --> */}

      {/* <!-- Feature Start --> */}
      <div class="container-xxl py-5">
        <div class="container">
          <div class="row g-5">
            <div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
              <div class="d-flex align-items-center mb-4">
                <div class="btn-lg-square bg-primary rounded-circle me-3">
                  <i class="fa fa-users text-white" />
                </div>
                <h1 class="mb-0" data-toggle="counter-up">3453</h1>
              </div>
              <h5 class="mb-3">Happy Customers</h5>
              <span>We aim to give our customers the very best</span>
            </div>
            <div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
              <div class="d-flex align-items-center mb-4">
                <div class="btn-lg-square bg-primary rounded-circle me-3">
                  <i class="fa fa-check text-white" />
                </div>
                <h1 class="mb-0" data-toggle="counter-up">4234</h1>
              </div>
              <h5 class="mb-3">Project Done</h5>
              <span>We have accomplished a lot</span>
            </div>
            <div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
              <div class="d-flex align-items-center mb-4">
                <div class="btn-lg-square bg-primary rounded-circle me-3">
                  <i class="fa fa-award text-white" />
                </div>
                <h1 class="mb-0" data-toggle="counter-up">3123</h1>
              </div>
              <h5 class="mb-3">Awards Win</h5>
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
              style={{minHeight: '400px'}}
            >
              <div class="position-relative h-100">
                <img
                  class="position-absolute img-fluid w-100 h-100"
                  src="img/about.jpg"
                  style={{objectFit: 'cover'}}
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

      {/* <!-- Team Start --> */}
      <div class="container-xxl py-5">
        <div class="container">
          <div
            class="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{maxWidth: '600px'}}
          >
            <h6 class="text-primary">Team Member</h6>
            <h1 class="mb-4">Experienced Team Members</h1>
          </div>
          <div class="row g-4">
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div class="team-item rounded overflow-hidden">
                <div class="d-flex">
                  <img class="img-fluid w-75" src="img/team-1.jpg" alt="" />
                  <div class="team-social w-25">
                    <Link
                      class="btn btn-lg-square btn-outline-primary rounded-circle mt-3"
                      to="https://web.facebook.com/login.php/?_rdc=1&_rdr"
                    >
                      <i class="fab fa-facebook-f" />
                    </Link>
                    <Link
                      class="btn btn-lg-square btn-outline-primary rounded-circle mt-3"
                      to="https://twitter.com/explore"
                    >
                      <i class="fab fa-twitter" />
                    </Link>
                    <Link
                      class="btn btn-lg-square btn-outline-primary rounded-circle mt-3"
                      to="https://instagram.com"
                    >
                      <i class="fab fa-instagram" />
                    </Link>
                  </div>
                </div>
                <div class="p-4">
                  <h5>Rafe Gonzalez</h5>
                  <span>Solar Panel installer</span>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div class="team-item rounded overflow-hidden">
                <div class="d-flex">
                  <img class="img-fluid w-75" src="img/team-2.jpg" alt="" />
                  <div class="team-social w-25">
                    <Link
                      class="btn btn-lg-square btn-outline-primary rounded-circle mt-3"
                      to="https://web.facebook.com/login.php/?_rdc=1&_rdr"
                    >
                      <i class="fab fa-facebook-f" />
                    </Link>
                    <Link
                      class="btn btn-lg-square btn-outline-primary rounded-circle mt-3"
                      to="https://twitter.com/explore"
                    >
                      <i class="fab fa-twitter" />
                    </Link>
                    <Link
                      class="btn btn-lg-square btn-outline-primary rounded-circle mt-3"
                      to="https://instagram.com"
                    >
                      <i class="fab fa-instagram" />
                    </Link>
                  </div>
                </div>
                <div class="p-4">
                  <h5>Loui Vigesh</h5>
                  <span>Installer</span>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="team-item rounded overflow-hidden">
                <div className="d-flex">
                  <img className="img-fluid w-75" src="img/team-3.jpg" alt="" />
                  <div className="team-social w-25">
                    <a
                      className="btn btn-lg-square btn-outline-primary rounded-circle mt-3"
                      href
                    >
                      <i class="fab fa-facebook-f" />
                    </a>
                    <a
                      className="btn btn-lg-square btn-outline-primary rounded-circle mt-3"
                      href
                    >
                      <i class="fab fa-twitter" />
                    </a>
                    <a
                      className="btn btn-lg-square btn-outline-primary rounded-circle mt-3"
                      href
                    >
                      <i class="fab fa-instagram" />
                    </a>
                  </div>
                </div>
                <div className="p-4">
                  <h5>Bryson Tiller</h5>
                  <span>Solar Panel installer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Team End --> */}
      <Footer />
      <MoveToTop />
    </div>
  );
};

export default About;
