/* Services.jsx */

import "../CSS_Component/Service.css";
import { Navigationbar } from "./Navigationbar";
export default function Services() {
  return (
    <div>
      <Navigationbar /><br></br>

      <div class="slide">
        <img src="https://www.kotak.com/content/dam/Kotak/herosliderbanner/customer-service.png" class="card-img" alt="..." />
        <div style={{ paddingTop: '120px', paddingLeft: "20px" }} class="card-img-overlay text-align-center">
          <h1 class="card-title text-dark">We’re always here to help you</h1>
          <h4 class="card-text text-dark">Let us help you make the most of our services experience</h4>
          <button type="button" class="btn btn-danger btn-lg">Chat With us</button>
        </div>
      </div><br></br><br></br>

      <div class="container">
      <section>
        <h2 style={{fontWeight: "bold", textAlign: "center", animation: "zoomIn 1s ease-in-out"}}>Welcome to Customer Service @ EMI Recovery System</h2>
        <p style={{textAlign: "center", animation: "zoomIn 1s ease-in-out"}}>We value your relationship with us & are committed to fulfil all your banking needs! Here, you can find details about different ways to reach us, download important forms, as well as check out other important customer information.</p>
      </section>
      </div><br></br>


      <div class="container">
      <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img src="https://t4.ftcdn.net/jpg/06/60/89/29/240_F_660892990_vPlSKu3nJCKxFPz0CzzqEz61qgggEBfB.jpg" class="card-img" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Call us</h5>
        <p class="card-text">For quick reaponse to queries, call us on 1800-200-2000.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://t4.ftcdn.net/jpg/05/14/39/17/240_F_514391756_zIGTM7NRYXTirSOGbJviWmjeXTLl7Uco.jpg" class="card-img" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Chat with us</h5>
        <p class="card-text">You can ask us about queries related EMI calculations and Installments.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://t3.ftcdn.net/jpg/03/51/25/92/240_F_351259270_5vMK7uHjUIs1pXxzTJlOsEi8G0nU56s1.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Write to us</h5>
        <p class="card-text">Simply write to us and we will gwt back to you at the earliest
</p>
      </div>
    </div>
  </div>
  </div>
  </div>

    </div>
  );
};