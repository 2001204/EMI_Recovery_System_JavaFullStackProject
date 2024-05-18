import AdminNavigationbar from "./AdminNavigationbar";
import { Card } from 'react-bootstrap';
import "./AdminPage.css";
import Photo from './Photo.jpg';
import Image4 from './Image4.jpg';
import Image7 from './Image7.jpg';

export default function AdminPage() {
    return (
        <>
            <AdminNavigationbar />
            <section className="main-hero-section">
                <div className="hero-left-side">
                    <h1>Emi Recovery System is the best Agency for Loan Handling</h1>
                    <p>
                        👉We rebuild your trust in service by our transparent processes and live updates.
                        We’ve built our business on trust and are committed to giving you an honest and genuine service experience every time you book a service with our Agency.👈
                    </p>
                    <div className="button-group"></div>
                </div>
                <div className="hero-right-side">
                    <img src={Photo} alt="heropageImg" style={{ height: '550px' }} />
                </div>
            </section>

            <Card style={{ height: '530px', textAlign: 'center' }}>
                <Card.Img variant="top" src={Image7} style={{ height: '380px', width: '750px', textAlign: 'center', marginLeft: '22rem', marginTop: '20px' }} />
                <Card.Body>
                    <Card.Text style={{ width: '750px', textAlign: 'center', marginLeft: '22rem' }}>
                        👉Customers can also bring in their vehicle for servicing at the nearest AutoAce car repair workshop.
                        We also provide doorstep car services along with doorstep Vehicle repair. We value your time and ensure fast delivery of your Vehicle.👈
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />

            <section className="bsb-service-7 py-5 py-xl-8">
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col-12 col-md-10 col-lg-8 col-xl-7">
                            <h3 className="fs-5 mb-2 text-secondary text-center text-uppercase">Services</h3>
                            <h2 className="display-5 mb-5 mb-xl-9 text-center">We offer premier services where excellence meets affordability.</h2>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        {[{
                            title: 'Add Service Center..',
                            description: 'You Can Enroll Service Center On Our Website To Avail Best Services'
                        }, {
                            title: 'View Booking..',
                            description: 'Admin Can View Booking Done By User On Website..'
                        }, {
                            title: 'View Feedback..',
                            description: 'Admin Can View Feedback Regarding Service Center..'
                        }].map((item, index) => (
                            <div key={index} className={`col-12 col-md-4 p-0 ${index !== 0 ? 'border-top border-bottom border-start border-end' : ''}`}>
                                <div className="card border-0 bg-transparent">
                                    <div className="card-body text-center p-5">
                                        <h4 className="fw-bold text-uppercase mb-4">{item.title}</h4>
                                        <p className="mb-4 text-secondary">{item.description}</p>
                                        <a href="#!" className="fw-bold text-decoration-none link-primary">
                                            Learn More
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
