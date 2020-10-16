import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <section>
            <div className="footer-container pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 px-5">
                            <div>
                                <h2>Let us handle your<br></br> project, professionally.</h2>
                                <p className="mt-3 text-secondary" style={{ fontSize: '16px' }}>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                            </div>
                        </div>
                        <div className="col-md-7 px-3">
                            <div>
                                <form>
                                    <div className="form-group">
                                        <input style={{height:'50px'}} placeholder="Your email address" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="form-group">
                                        <input style={{height:'50px'}} placeholder="Your name / company's name" type="text" className="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div className="form-group">
                                        <textarea style={{height:'200px'}} placeholder="Your message" className="form-control"></textarea>
                                    </div>
                                    <button style={{backgroundColor:'#111430'}} type="submit" className="btn text-white">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="text-center mt-5 text-secondary">Copy right by orange lab {new Date().getFullYear()}</p>
            </div>
        </section>
    );
};

export default Footer;