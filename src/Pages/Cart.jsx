import React, {useState} from 'react';
// import Spinnner from '../components/Spinner';
import PageHeader from '../components/PageHeader';
import Navbar from '../components/Navbar';
// import Spinnner from '../components/Spinner';
import {FlutterWaveButton, closePaymentModal} from 'flutterwave-react-v3';
const Cart = () => {
  const [name, setName] = useState ('');
  // const [lname, setLname] = useState("")
  const [email, setEmail] = useState ('');
  const [phone, setPhone] = useState ('');

  // const pay = () => {

  // }
  // const style = {
  //   fontSize: '14px',
  //   fontWeight: '600',
  //   padding: '15px 30px',
  //   color: 'white',
  //   backgroundColor: '#088178',
  //   borderRadius: '4px',
  //   cursor: 'pointer',
  //   border: 'none',
  //   outline: 'none',
  //   transition: '0.2s',
  //   marginLeft: '70%',
  //   marginTop: '3%',
  //   marginBottom: '3%',
  // };

  const config = {
    // public_key: process.env.FLUTTERWAVE_PUBLIC_API_KEY,
    public_key: 'FLWPUBK_TEST-21c38cdcf4a96ed2f051470b7d362f30-X',
    tx_ref: Date.now (),
    amount: 5000,
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

      <div id='subtotal'>
        <h3>Cart Totals</h3>
        <table>
          <tr>
            <td>Cart Subtotal</td>
            <td>₦20,000</td>
          </tr>
          <tr>
            <td>Shipping</td>
            <td>Free</td>
          </tr>
          <tr>
            <td><strong>Total</strong></td>
            <td><strong>₦150,000</strong></td>
          </tr>
        </table>
        <button
            className="normal"
            data-bs-toggle="modal"
            data-bs-target="#exampleModalSignUp"
          >
            Proceed to CheckOut
          </button>
        {/* <FlutterWaveButton
          type="submit"
          className="btn btn-success btn-md ms-auto p-md-4"
          {...fwConfig}
        >
          Proceed to Payment
        </FlutterWaveButton> */}
        {/* <button
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
        </button> */}
      </div>

      <div
        className="modal fade"
        id="exampleModalSignUp"
        tabIndex="-1"
        data-bs-backdrop="static"
        role="dialog"
        aria-labelledby="exampleModalSignTitle"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-md"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-body p-0 ">
              <div className="container ">
                {/* <div className="row mt-lg-n10 mt-md-n11 mt-n10 justify-content-center"> */}
                {/* <div className="col-xl-4 col-lg-5 col-md-7 mx-auto"> */}
                <div className="card z-index-0">
                  <div className="card-header text-center pt-4">
                    <h5>My Details</h5>
                  </div>
                  <div className="card-body ">
                    <form>
                      <div className="mb-4">
                        <label
                          htmlFor="example-text-input"
                          className="form-control-label"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Victoria Davis"
                          aria-label="Name"
                          onChange={e => {
                            setName (e.target.value);
                          }}
                        />
                      </div>

                      <div className="mb-4">
                        <label
                          htmlFor="example-text-input"
                          className="form-control-label"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="myemail@gmail.com"
                          aria-label="Name"
                          required
                          onChange={e => {
                            setEmail (e.target.value);
                          }}
                        />
                      </div>

                      <div className="mb-4">
                        <label
                          htmlFor="example-text-input"
                          className="form-control-label"
                        >
                          Phone no
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="08169949396"
                          required
                          aria-label="Name"
                          onChange={e => {
                            setPhone (e.target.value);
                          }}
                        />
                      </div>
                      

                      <hr className="horizontal dark mt-0" />
                      <div className="d-flex align-items-center">
                        <button className="btn btn-danger" data-bs-dismiss="modal">
                          Cancel
                        </button>
                        <button type="submit" className='btn btn-success' style={{marginLeft: "40%", backgroundColor: "#32C36C"}}>Proceed to payment</button>
                        {/* <FlutterWaveButton type="submit"  className="btn btn-success btn-md ms-auto" {...fwConfig} >Proceed to Payment</FlutterWaveButton> */}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
