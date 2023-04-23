import React from 'react'

export default function Contact() {
  return (
    <>
     <div className="bg-light py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-0"><a href="index.html">Home</a> <span className="mx-2 mb-0">/</span> <strong className="text-black">Contact</strong></div>
        </div>
      </div>
    </div>  

    <div className="site-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="h3 mb-3 text-black">Get In Touch</h2>
          </div>
          <div className="col-md-6 ml-auto">
            <div className="p-4 border mb-3 text-center">
              <span className="d-block text-primary h6 text-uppercase">India</span>
              <p className="mb-0">A-43 Sector 16, Noida(201301), UP , India</p>
              <p className="mb-0">9873848046</p>
              <p className="mb-0">vishankchauhan@gmail.com</p>
            <div className="mapouter my-5"><div className="gmap_canvas"><iframe width="100%" height="505px" id="gmap_canvas" src="https://maps.google.com/maps?q=a-43%20sector%2016%20Noida%20India&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe></div></div>
            </div>
          </div>
          <div className="col-md-6">
            <form action="#" method="post">
              
              <div className="p-3 p-lg-5 border">
                <div className="form-group row">
                  <div className="col-md-12">
                    <label for="name" className="text-black">Full Name <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" id="name" name="name"/>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-12">
                    <label for="email" className="text-black">Email <span className="text-danger">*</span></label>
                    <input type="email" className="form-control" id="email" name="email" placeholder=""/>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-12">
                    <label for="phone" className="text-black">Phone Number </label>
                    <input type="text" className="form-control" id="phone" name="phone"/>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-12">
                    <label for="subject" className="text-black">Subject </label>
                    <input type="text" className="form-control" id="subject" name="subject"/>
                  </div>
                </div>

                <div className="form-group row">
                  <div className="col-md-12">
                    <label for="message" className="text-black">Message </label>
                    <textarea name="message" id="message" cols="30" rows="7" className="form-control"></textarea>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-lg-12">
                    <input type="submit" className="btn btn-primary btn-lg btn-block" value="Send Message"/>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
