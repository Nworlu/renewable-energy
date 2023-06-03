import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import MoveToTop from '../components/MoveToTop';
import Navbar from '../components/Navbar';
// import Spinnner from '../components/Spinner';
import PageHeader from '../components/PageHeader';
const Shop = () => {
  return (
    <div>
        {/* <Spinnner /> */}
        <Navbar />
        <PageHeader />
      {/* <!-- Service Start --> */}
      <div class="container-xxl py-5">
        <div class="container">
          <div
            class="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{maxWidth: "600px"}}
          >
            <h6 class="text-primary">Our Items</h6>
            <h1 class="mb-4">
              We Are The Best In The World Of Renewable Energy
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
                  <h4 class="mb-3">Solar Panel</h4>
                  <p>
                    {' '}
                    A solar panel is a device that converts sunlight into electricity
                    {' '}
                    by using photovoltaic (PV) cells. PV cells are made of materials that generate electrons
                  </p>
                  <p>&#8358;100,000</p>
                  <Link to="/Cart">
                    <button
                      class="btn btn-primary rounded-pill py-3 px-5"
                      type="Buy"
                    >
                      Buy
                    </button>
                  </Link>

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
                  <p>&#8358;200,000</p>
                  <Link to="/Cart">
                    <button
                      class="btn btn-primary rounded-pill py-3 px-5"
                      type="Buy"
                    >
                      Buy
                    </button>
                  </Link>

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
                  <p>&#8358;120,000</p>
                  <Link to="/Cart">
                    <button
                      class="btn btn-primary rounded-pill py-3 px-5"
                      type="Buy"
                    >
                      Buy
                    </button>
                  </Link>

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
                  <p>&#8358;100,000</p>
                  <Link to="/Cart">
                    <button
                      class="btn btn-primary rounded-pill py-3 px-5"
                      type="Buy"
                    >
                      Buy
                    </button>
                  </Link>

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
                  <p>&#8358;200,000</p>
                  <Link to="/Cart">
                    <button
                      class="btn btn-primary rounded-pill py-3 px-5"
                      type="Buy"
                    >
                      Buy
                    </button>
                  </Link>

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
                  <p>&#8358;120,000</p>
                  <Link to="/Cart">
                    <button
                      class="btn btn-primary rounded-pill py-3 px-5"
                      type="Buy"
                    >
                      Buy
                    </button>
                  </Link>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Service End --> */}
      <Footer />
      <MoveToTop />
    </div>
  );
};

export default Shop;
