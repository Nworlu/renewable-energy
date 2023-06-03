import React from 'react';
// import Spinnner from '../components/Spinner';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MoveToTop from '../components/MoveToTop';

const MyAccount = () => {
  return (
    <div>
      {/* <Spinnner /> */}
      <Navbar />
      <div>
        <div style={{backgroundColor: "#32C36C" , width: "100%", height: "300px", marginTop: "3px"}}>

          <div style={{backgroundColor: "white", width: "200px", height: "200px", borderRadius: "100px", display: "flex", flexDirection: "column", backgroundImage: "url('../img/Screenshot 2023-05-31 at 21.38.26.png')" }}/>

          <div style={{color: "white"}}>
            <h1 style={{color: "white"}}>Welcom Back Victoria!</h1>
            <p>victoriagrant301@gmail.com</p>

          </div>

        </div>

        <div style={{display: "flex"}}>

          <div style={{display: "flex;"}}>
            <img
              src="img/notifications.svg"
              alt=""
              style={{width: "50px", height: "30px", cursor: "pointer"}}
            />
            <p style={{display: "block"}}>notifications</p>
          </div>

          <div style={{display: "flex"}}>
            <img
              src="img/img.icons8.com.png"
              alt=""
              style={{width: "30px", height: "30px", cursor: "pointer"}}
            />
            <p style={{display: "inline"}}>Whishlist</p>
          </div>

          <div style={{display: "flex"}}>
            <img
              src="img/img.icons8.com copy.png"
              alt=""
              style={{width: "30px", height: "30px", cursor: "pointer"}}
            />
            <p style={{display: "inline"}}>Cart</p>
          </div>

        </div>

        <div class=" pe-lg-0">
          <hr style={{height: "5px", marginLeft: "0px"}}/>
          <p><i class="fa fa-check-circle text-primary me-3" />Due Dates</p>
          <br />
          <p><i class="fa fa-check-circle text-primary me-3" />My Account</p>
          <br />
          <p>
            <i class="fa fa-check-circle text-primary me-3" />Location(Nigeria)
          </p>
          <br />
          <p>
            <i class="fa fa-check-circle text-primary me-3" />Rate your Purchase
          </p>
          <br />
          <p>
            <i class="fa fa-check-circle text-primary me-3" />Terms & Conditions
          </p>
          <br />
          <a
            href="login.html"
            class="btn btn-primary rounded-pill py-3 px-5 mt-3"
          >
            Log Out
          </a>
        </div>

      </div>
      <Footer />
      <MoveToTop />
    </div>
  );
};

export default MyAccount;
