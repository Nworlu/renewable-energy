import React, {useState} from 'react';
import Footer from '../components/Footer';
import MoveToTop from '../components/MoveToTop';
// import Spinnner from '../components/Spinner';
import Navbar from '../components/Navbar';
import Swal from 'sweetalert2';

const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const send = () => {
    // setInterval(() => {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Message sent successfully'
      })
      localStorage.setItem("name", name)
      localStorage.setItem("email", email)
      localStorage.setItem("subject", subject)
      localStorage.setItem("message", message)
    // }, [1000]);
  }



  return (
    <div>

      {/* <!-- Spinner Start --> */}
      {/* <Spinnner /> */}
      {/* <!-- Spinner End --> */}

      {/* <!-- Navbar Start --> */}
      <Navbar />
      {/* <!-- Navbar End --> */}

      {/* <!-- Page Header Start --> */}
      <div class="container-fluid page-header py-5 mb-5">
        <div class="container py-5">
          <h1 class="display-3 text-white mb-3 animated slideInDown">
            Contact
          </h1>
          <nav aria-label="breadcrumb animated slideInDown" />
        </div>
      </div>
      {/* <!-- Page Header End --> */}

      {/* <!-- Contact Start --> */}
      <div
        class="container-fluid bg-light overflow-hidden px-lg-0"
        style={{margin: "6rem 0"}}
      >
        <div class="container contact px-lg-0">
          <div class="row g-0 mx-lg-0">
            <div
              class="col-lg-6 contact-text py-5 wow fadeIn"
              data-wow-delay="0.5s"
            >
              <div class="p-lg-5 ps-lg-0">
                <h6 class="text-primary">Contact Us</h6>
                <h1 class="mb-4">Feel Free To Contact Us</h1>
                <p class="mb-4">
                  Ask Us any questions you may have, and feel free
                  to give feedback on how we can improve user Experience.
                </p>
                <form>
                  <div class="row g-3">
                    <div class="col-md-6">
                      <div class="form-floating">
                        <input
                          // value={name}
                          type="text"
                          class="form-control"
                          id="name"
                          placeholder="Your Name"
                          onChange={e => setName(e.target.value)}
                        />
                        <label for="name">Your Name</label>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-floating">
                        <input
                          // value={email}
                          type="email"
                          class="form-control"
                          id="email"
                          placeholder="Your Email"
                          onChange={e => setEmail(e.target.value)}
                        />
                        <label for="email">Your Email</label>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-floating">
                        <input
                          // value={subject}
                          type="text"
                          class="form-control"
                          id="subject"
                          placeholder="Subject"
                          onChange={e => setSubject(e.target.value)}
                        />
                        <label for="subject">Subject</label>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-floating">
                        <textarea
                          // value={message}
                          class="form-control"
                          placeholder="Leave a message here"
                          id="message"
                          style={{height: "100px"}}
                          onChange={e => setMessage(e.target.value)}
                        />
                        <label for="message">Message</label>
                      </div>
                    </div>
                    <div class="col-12">
                      <button
                        class="btn btn-primary rounded-pill py-3 px-5"
                        type="button"
                        onClick={send}
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-lg-6 pe-lg-0" style={{minHeight: "400px"}}>
              <div class="position-relative h-100">
                <iframe
                  title='map'
                  class="position-absolute w-100 h-100"
                  style={{objectFit: "cover"}}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                  frameborder="0"
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Contact End --> */}

      <Footer />
      <MoveToTop />
    </div>
  );
};

export default Contact;
