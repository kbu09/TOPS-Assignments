import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Helmet } from 'react-helmet'


function Home() {
    return (
        <>
            <Helmet>

                <script src="Website/js/main.js"></script>
                <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
                <script src="Website/lib/wow/wow.min.js"></script>
                <script src="Website/lib/easing/easing.min.js"></script>
                <script src="Website/lib/waypoints/waypoints.min.js"></script>
                <script src="Website/lib/counterup/counterup.min.js"></script>
                <script src="Website/lib/owlcarousel/owl.carousel.min.js"></script>
                <script src="Website/lib/tempusdominus/js/moment.min.js"></script>
                <script src="Website/lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js"></script>



            </Helmet>

            <Header />
            <div className="container-xxl position-relative p-0">
                <div className="container-xxl py-5 bg-dark hero-header mb-5">
                    <div className="container my-5 py-5">
                        <div className="row align-items-center g-5">
                            <div className="col-lg-6 text-center text-lg-start">
                                <h1 className="display-3 text-white animated slideInLeft">Enjoy Our<br />Delicious Meal</h1>
                                <p className="text-white animated slideInLeft mb-4 pb-2">Tempor erat elitr rebum at clita. Diam
                                    dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed
                                    stet lorem sit clita duo justo magna dolore erat amet</p>
                                <a href className="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft">Book A
                                    Table</a>
                            </div>
                            <div className="col-lg-6 text-center text-lg-end overflow-hidden">
                                <img className="img-fluid" src="Website/img/hero.png" alt />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>

                {/* Service Start */}
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="row g-4">
                            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="service-item rounded pt-3">
                                    <div className="p-4">
                                        <i className="fa fa-3x fa-user-tie text-primary mb-4" />
                                        <h5>Master Chefs</h5>
                                        <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                                <div className="service-item rounded pt-3">
                                    <div className="p-4">
                                        <i className="fa fa-3x fa-utensils text-primary mb-4" />
                                        <h5>Quality Food</h5>
                                        <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                                <div className="service-item rounded pt-3">
                                    <div className="p-4">
                                        <i className="fa fa-3x fa-cart-plus text-primary mb-4" />
                                        <h5>Online Order</h5>
                                        <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                                <div className="service-item rounded pt-3">
                                    <div className="p-4">
                                        <i className="fa fa-3x fa-headset text-primary mb-4" />
                                        <h5>24/7 Service</h5>
                                        <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Service End */}
                {/* About Start */}
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="row g-5 align-items-center">
                            <div className="col-lg-6">
                                <div className="row g-3">
                                    <div className="col-6 text-start">
                                        <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.1s" src="Website/img/about-1.jpg" />
                                    </div>
                                    <div className="col-6 text-start">
                                        <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.3s" src="Website/img/about-2.jpg" style={{ marginTop: '25%' }} />
                                    </div>
                                    <div className="col-6 text-end">
                                        <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.5s" src="Website/img/about-3.jpg" />
                                    </div>
                                    <div className="col-6 text-end">
                                        <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.7s" src="Website/img/about-4.jpg" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <h5 className="section-title ff-secondary text-start text-primary fw-normal">About Us</h5>
                                <h1 className="mb-4">Welcome to <i className="fa fa-utensils text-primary me-2" />Restoran</h1>
                                <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet
                                    diam et eos erat ipsum et lorem et sit, sed stet lorem sit.</p>
                                <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet
                                    diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna
                                    dolore erat amet</p>
                                <div className="row g-4 mb-4">
                                    <div className="col-sm-6">
                                        <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                                            <h1 className="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">15
                                            </h1>
                                            <div className="ps-4">
                                                <p className="mb-0">Years of</p>
                                                <h6 className="text-uppercase mb-0">Experience</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                                            <h1 className="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">50
                                            </h1>
                                            <div className="ps-4">
                                                <p className="mb-0">Popular</p>
                                                <h6 className="text-uppercase mb-0">Master Chefs</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a className="btn btn-primary py-3 px-5 mt-2" href>Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* About End */}
                {/* Menu Start */}
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                            <h5 className="section-title ff-secondary text-center text-primary fw-normal">Food Menu</h5>
                            <h1 className="mb-5">Most Popular Items</h1>
                        </div>
                        <div className="tab-class text-center wow fadeInUp" data-wow-delay="0.1s">
                            <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
                                <li className="nav-item">
                                    <a className="d-flex align-items-center text-start mx-3 ms-0 pb-3 active" data-bs-toggle="pill" href="#tab-1">
                                        <i className="fa fa-coffee fa-2x text-primary" />
                                        <div className="ps-3">
                                            <small className="text-body">Popular</small>
                                            <h3 className="mt-n1 mb-0">Menu</h3>

                                            {/* <h6 className="mt-n1 mb-0">Breakfast</h6> */}
                                        </div>
                                    </a>
                                </li>
                                {/* <li className="nav-item">
                                    <a className="d-flex align-items-center text-start mx-3 pb-3" data-bs-toggle="pill" href="#tab-2">
                                        <i className="fa fa-hamburger fa-2x text-primary" />
                                        <div className="ps-3">
                                            <small className="text-body">Special</small>
                                            <h6 className="mt-n1 mb-0">Launch</h6>
                                        </div>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="d-flex align-items-center text-start mx-3 me-0 pb-3" data-bs-toggle="pill" href="#tab-3">
                                        <i className="fa fa-utensils fa-2x text-primary" />
                                        <div className="ps-3">
                                            <small className="text-body">Lovely</small>
                                            <h6 className="mt-n1 mb-0">Dinner</h6>
                                        </div>
                                    </a>
                                </li> */}
                            </ul>
                            <div className="tab-content">
                                <div id="tab-1" className="tab-pane fade show p-0 active">
                                    <div className="row g-4">
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="Website/img/menu-1.jpg" alt style={{ width: 80 }} />
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span className="text-primary"><i class="fa-solid fa-indian-rupee-sign"></i>115</span>
                                                    </h5>
                                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo
                                                        diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="Website/img/menu-2.jpg" alt style={{ width: 80 }} />
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span className="text-primary"><i class="fa-solid fa-indian-rupee-sign"></i>115</span>
                                                    </h5>
                                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo
                                                        diam</small>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="Website/img/menu-4.jpg" alt style={{ width: 80 }} />
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span className="text-primary">$115</span>
                                                    </h5>
                                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo
                                                        diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="Website/img/menu-5.jpg" alt style={{ width: 80 }} />
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span className="text-primary">$115</span>
                                                    </h5>
                                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo
                                                        diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="Website/img/menu-6.jpg" alt style={{ width: 80 }} />
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span className="text-primary">$115</span>
                                                    </h5>
                                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo
                                                        diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="Website/img/menu-7.jpg" alt style={{ width: 80 }} />
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span className="text-primary">$115</span>
                                                    </h5>
                                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo
                                                        diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="Website/img/menu-8.jpg" alt style={{ width: 80 }} />
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span className="text-primary">$115</span>
                                                    </h5>
                                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo
                                                        diam</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="tab-2" className="tab-pane fade show p-0">
                                    <div className="row g-4">
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="Website/img/menu-1.jpg" alt style={{ width: 80 }} />
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span className="text-primary">$115</span>
                                                    </h5>
                                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo
                                                        diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="Website/img/menu-2.jpg" alt style={{ width: 80 }} />
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span className="text-primary">$115</span>
                                                    </h5>
                                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo
                                                        diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="Website/img/menu-3.jpg" alt style={{ width: 80 }} />
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span className="text-primary">$115</span>
                                                    </h5>
                                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo
                                                        diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="Website/img/menu-4.jpg" alt style={{ width: 80 }} />
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span className="text-primary">$115</span>
                                                    </h5>
                                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo
                                                        diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="Website/img/menu-5.jpg" alt style={{ width: 80 }} />
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span className="text-primary">$115</span>
                                                    </h5>
                                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo
                                                        diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="Website/img/menu-6.jpg" alt style={{ width: 80 }} />
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span className="text-primary">$115</span>
                                                    </h5>
                                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo
                                                        diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="Website/img/menu-7.jpg" alt style={{ width: 80 }} />
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span className="text-primary">$115</span>
                                                    </h5>
                                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo
                                                        diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="Website/img/menu-8.jpg" alt style={{ width: 80 }} />
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span className="text-primary">$115</span>
                                                    </h5>
                                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo
                                                        diam</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="tab-3" className="tab-pane fade show p-0">
                                    <div className="row g-4">
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="Website/img/menu-1.jpg" alt style={{ width: 80 }} />
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span className="text-primary">$115</span>
                                                    </h5>
                                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo
                                                        diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="Website/img/menu-2.jpg" alt style={{ width: 80 }} />
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span className="text-primary">$115</span>
                                                    </h5>
                                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo
                                                        diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="Website/img/menu-3.jpg" alt style={{ width: 80 }} />
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span className="text-primary">$115</span>
                                                    </h5>
                                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo
                                                        diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="Website/img/menu-4.jpg" alt style={{ width: 80 }} />
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span className="text-primary">$115</span>
                                                    </h5>
                                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo
                                                        diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="Website/img/menu-5.jpg" alt style={{ width: 80 }} />
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span className="text-primary">$115</span>
                                                    </h5>
                                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo
                                                        diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="Website/img/menu-6.jpg" alt style={{ width: 80 }} />
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span className="text-primary">$115</span>
                                                    </h5>
                                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo
                                                        diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="Website/img/menu-7.jpg" alt style={{ width: 80 }} />
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span className="text-primary">$115</span>
                                                    </h5>
                                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo
                                                        diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="Website/img/menu-8.jpg" alt style={{ width: 80 }} />
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span className="text-primary">$115</span>
                                                    </h5>
                                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo
                                                        diam</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Menu End */}
                {/* Reservation Start */}
                <div className="container-xxl py-5 px-0 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="row g-0">
                        <div className="col-md-6">
                            <div className="video">
                                <button type="button" className="btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                                    <span />
                                </button>
                            </div>
                        </div>
                        <div className="col-md-6 bg-dark d-flex align-items-center">
                            <div className="p-5 wow fadeInUp" data-wow-delay="0.2s">
                                <h5 className="section-title ff-secondary text-start text-primary fw-normal">Reservation</h5>
                                <h1 className="text-white mb-4">Book A Table Online</h1>
                                <form >
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" name='YourName' id="name" placeholder="Your Name" />
                                                <label htmlFor="name">Your Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="email" className="form-control" name='YourEmail' id="email" placeholder="Your Email" />
                                                <label htmlFor="email">Your Email</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating date" id="date3" data-target-input="nearest">
                                                <input type="text" className="form-control " name='datetime' id="datetime" placeholder="Date & Time" data-target="#date3" data-toggle="datetimepicker" />
                                                <label>Date &amp; Time</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <select className="form-select" id="select1" name='selectPeople'>
                                                    <option >People 1</option>
                                                    <option >People 2</option>
                                                    <option >People 3</option>
                                                </select>
                                                <label htmlFor="select1">No Of People</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea className="form-control" name='SpecialRequest' placeholder="Special Request" id="message" style={{ height: 100 }} defaultValue={""} />
                                                <label htmlFor="message">Special Request</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary w-100 py-3" type="submit">Book Now</button>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="videoModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content rounded-0">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Youtube Video</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                16:9 aspect ratio
                                <div className="ratio ratio-16x9">
                                    <iframe className="embed-responsive-item" src id="video" allowFullScreen allowscriptaccess="always" allow="autoplay" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Reservation Start */}
                {/* Team Start */}
                <div className="container-xxl pt-5 pb-3">
                    <div className="container">
                        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                            <h5 className="section-title ff-secondary text-center text-primary fw-normal">Team Members</h5>
                            <h1 className="mb-5">Our Master Chefs</h1>
                        </div>
                        <div className="row g-4">
                            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="team-item text-center rounded overflow-hidden">
                                    <div className="rounded-circle overflow-hidden m-4">
                                        <img className="img-fluid" src="Website/img/team-1.jpg" alt />
                                    </div>
                                    <h5 className="mb-0">Full Name</h5>
                                    <small>Designation</small>
                                    <div className="d-flex justify-content-center mt-3">
                                        <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-facebook-f" /></a>
                                        <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-twitter" /></a>
                                        <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-instagram" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                <div className="team-item text-center rounded overflow-hidden">
                                    <div className="rounded-circle overflow-hidden m-4">
                                        <img className="img-fluid" src="Website/img/team-2.jpg" alt />
                                    </div>
                                    <h5 className="mb-0">Full Name</h5>
                                    <small>Designation</small>
                                    <div className="d-flex justify-content-center mt-3">
                                        <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-facebook-f" /></a>
                                        <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-twitter" /></a>
                                        <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-instagram" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                <div className="team-item text-center rounded overflow-hidden">
                                    <div className="rounded-circle overflow-hidden m-4">
                                        <img className="img-fluid" src="Website/img/team-3.jpg" alt />
                                    </div>
                                    <h5 className="mb-0">Full Name</h5>
                                    <small>Designation</small>
                                    <div className="d-flex justify-content-center mt-3">
                                        <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-facebook-f" /></a>
                                        <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-twitter" /></a>
                                        <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-instagram" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                                <div className="team-item text-center rounded overflow-hidden">
                                    <div className="rounded-circle overflow-hidden m-4">
                                        <img className="img-fluid" src="Website/img/team-4.jpg" alt />
                                    </div>
                                    <h5 className="mb-0">Full Name</h5>
                                    <small>Designation</small>
                                    <div className="d-flex justify-content-center mt-3">
                                        <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-facebook-f" /></a>
                                        <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-twitter" /></a>
                                        <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-instagram" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Team End */}



                {/* Testimonial Start */}
                <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="container">
                        <div className="text-center">
                            <h5 className="section-title ff-secondary text-center text-primary fw-normal">Testimonial</h5>
                            <h1 className="mb-5">Our Clients Say!!!</h1>
                        </div>
                        <div className="owl-carousel testimonial-carousel">
                            <div className="testimonial-item bg-transparent border rounded p-4">
                                <i className="fa fa-quote-left fa-2x text-primary mb-3" />
                                <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore
                                    diam</p>
                                <div className="d-flex align-items-center">
                                    <img className="img-fluid flex-shrink-0 rounded-circle" src="Website/img/testimonial-1.jpg" style={{ width: 50, height: 50 }} />
                                    <div className="ps-3">
                                        <h5 className="mb-1">Client Name</h5>
                                        <small>Profession</small>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-item bg-transparent border rounded p-4">
                                <i className="fa fa-quote-left fa-2x text-primary mb-3" />
                                <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore
                                    diam</p>
                                <div className="d-flex align-items-center">
                                    <img className="img-fluid flex-shrink-0 rounded-circle" src="Website/img/testimonial-2.jpg" style={{ width: 50, height: 50 }} />
                                    <div className="ps-3">
                                        <h5 className="mb-1">Client Name</h5>
                                        <small>Profession</small>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-item bg-transparent border rounded p-4">
                                <i className="fa fa-quote-left fa-2x text-primary mb-3" />
                                <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore
                                    diam</p>
                                <div className="d-flex align-items-center">
                                    <img className="img-fluid flex-shrink-0 rounded-circle" src="Website/img/testimonial-3.jpg" style={{ width: 50, height: 50 }} />
                                    <div className="ps-3">
                                        <h5 className="mb-1">Client Name</h5>
                                        <small>Profession</small>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-item bg-transparent border rounded p-4">
                                <i className="fa fa-quote-left fa-2x text-primary mb-3" />
                                <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore
                                    diam</p>
                                <div className="d-flex align-items-center">
                                    <img className="img-fluid flex-shrink-0 rounded-circle" src="Website/img/testimonial-4.jpg" style={{ width: 50, height: 50 }} />
                                    <div className="ps-3">
                                        <h5 className="mb-1">Client Name</h5>
                                        <small>Profession</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Testimonial End */}
            </div>

            <Footer />

        </>

    )
}

export default Home