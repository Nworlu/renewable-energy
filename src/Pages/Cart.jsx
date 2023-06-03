import React, { useState } from 'react';
// import Spinnner from '../components/Spinner';
import PageHeader from '../components/PageHeader';
import Navbar from '../components/Navbar';
// import Spinnner from '../components/Spinner';
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';
const Cart = () => {
  const [name, setName] = useState("")
  // const [lname, setLname] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  // const pay = () => {

  // }
 const style={
    fontSize: '14px',
    fontWeight: '600',
    padding: '15px 30px',
    color: 'white',
    backgroundColor: '#088178',
    borderRadius: '4px',
    cursor: 'pointer',
    border: 'none',
    outline: 'none',
    transition: '0.2s',
    marginLeft: "70%",
    marginTop: "3%",
    marginBottom: "3%"
  }

  const config = {
        // public_key: process.env.FLUTTERWAVE_PUBLIC_API_KEY,
        public_key: 'FLWPUBK-8bc4fc27f95377a4bf1b478af957f69f-X',
        tx_ref: Date.now (),
        amount: 100,
        currency: 'NGN',
        payment_options: 'card,mobilemoney,ussd',
        customer: {
          email: email,
          phone: phone,
          name: name

          // email: email,
          // phone_number: phone,
          // name: name,
        },
        customizations: {
          title: 'My store',
          description: 'Payment for items in cart',
          logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
        },
      };

      const fwConfig = {
            ...config,
            text: 'Pay with Flutterwave!',
            callback: response => {
              console.log (response);
              closePaymentModal (); // this will close the modal programmatically
            },
            onClose: () => {},
          };

  return (
    <div>
      {/* <Spinnner /> */}
      {/* <!-- Spinner End --> */}

      {/* <!-- Navbar Start --> */}
      <Navbar />
      {/* <!-- Navbar End --> */}

      {/* <!-- Page Header Start --> */}
      <PageHeader />
      {/* <!-- Page Header End --> */}

      <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
        <span>Product</span> <span>Quantity</span> <span>Price</span>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          position: 'relative ',
        }}
      >
        <input type="checkbox" name="" id="" />
        <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
          <div>
            <img
              class="img-fluid"
              src="img/img-600x400-1.jpg"
              alt=""
              style={{width: '250px', borderRadius: '5px'}}
            />
            <div class="position-relative p-4 pt-0">

              <h4 class="mb-3">Solar Panel</h4>
              <p>254m X 175m</p>

            </div>
          </div>
        </div>

        <input
          type="number"
          name=""
          id=""
          style={{
            height: '30px',
            width: '60px',
            marginLeft: '20px',
            fontSize: '24px',
            marginTop: '100px',
            margin: 'right 200px;',
          }}
        />
        <p style={{marginTop: '100px', margin: 'right 200px'}}>
          &#8358; 100,000
        </p>
        <hr />

      </div>

      <hr />
      <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
        <input type="checkbox" name="" id="" />
        <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
          <div>
            <img
              class="img-fluid"
              src="img/img-600x400-1.jpg"
              alt=""
              style={{width: '250px', borderRadius: '5px;'}}
            />
            <div class="position-relative p-4 pt-0">

              <h4 class="mb-3">Solar Panel</h4>
              <p>254m X 175m</p>

            </div>
          </div>
        </div>

        <input
          type="number"
          name=""
          id=""
          style={{
            height: ' 30px',
            width: '60px',
            marginLeft: '20px',
            fontSize: '24px;',
          }}
        />
        <p>&#8358; 100,000</p>
        <hr />

      </div>
      <hr />

      <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
        <input type="checkbox" name="" id="" />
        <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
          <div>
            <img
              class="img-fluid"
              src="img/img-600x400-1.jpg"
              alt=""
              style={{width: '250px', borderRadius: '5px;'}}
            />
            <div class="position-relative p-4 pt-0">

              <h4 class="mb-3">Solar Panel</h4>
              <p>254m X 175m</p>

            </div>
          </div>
        </div>

        <input
          type="number"
          name=""
          id=""
          style={{
            height: '30px',
            width: '60px',
            marginLeft: '20px',
            fontSize: '24px;',
          }}
        />
        <p>&#8358; 100,000</p>
        <hr />

      </div>

      <div>
      <FlutterWaveButton type="submit"  className="btn btn-success btn-md ms-auto p-md-4" {...fwConfig}>Proceed to Payment</FlutterWaveButton>
        <button
          style={{
            fontSize: '14px',
            fontWeight: '600',
            padding: '15px 30px',
            color: 'white',
            backgroundColor: '#088178',
            borderRadius: '4px',
            cursor: 'pointer',
            border: 'none',
            outline: 'none',
            transition: '0.2s',
            marginLeft: "70%",
            marginTop: "3%",
            marginBottom: "3%"
          }}
        >
          Proceed to checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
