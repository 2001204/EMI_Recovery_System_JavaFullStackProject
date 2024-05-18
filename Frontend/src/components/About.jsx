/* About.jsx*/

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Alert, Container, Card, Col, Row } from "react-bootstrap";
import { Navigationbar } from "./Navigationbar";
import GauravImage from "./images/Gaurav.jpeg";
import PujaImage from "./images/Puja.jpg";
import ShubhamImage from "./images/Shubham.jpeg";
import UrmilaImage from "./images/Urmila.jpg";
// import Image41 from "./images/Image41.jpg"


const data = [
  {
    id: 1,
    name: "Mr. Shubham Khade",
    rollNo: "230940520082",
    image: ShubhamImage,
    desc: "A seasoned project manager with a proven track record of successfully leading teams to deliver complex projects on time and within budget. He excels at fostering collaboration and ensuring clear communication among team members.",
  },
  {
    id: 2,
    name: "Ms. Urmila Nagdive",
    rollNo: "230940520091",
    image: UrmilaImage,
    desc: "A passionate and detail-oriented developer who brings creativity and innovation to every project. Known for her strong problem-solving skills and dedication to delivering high-quality results.",
  },
  { id: 3, name: "Mrs. Puja Nikam", 
  rollNo: "230940520060", 
  image: PujaImage,
  desc: "An experienced designer with a keen eye for aesthetics and user experience. Her ability to blend functionality with visual appeal ensures that every interface she designs is both beautiful and intuitive.",
},
  {
    id: 4,
    name: "Mr. Gaurav Nikalje",
    rollNo: "230940520020",
    image: GauravImage,
    desc: "A skilled QA engineer who is committed to ensuring the reliability and functionality of every product. His attention to detail and thorough testing procedures help to identify and resolve issues before they impact end-users.",
  },
];

export function About() {

   const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  }; 

  return (
    <div>
     
        <Navigationbar /><br></br>
        <div class="slide">
        <img src="https://www.kotak.com/content/dam/Kotak/herosliderbanner/Investment.png" class="card-img" alt="..." />
        <div style={{ paddingTop: '120px', paddingLeft: "20px" }} class="card-img-overlay  text-align-center">
          <h1 class="card-title text-dark">Here is Something About Us</h1>
          <h4 class="card-text text-dark">Let us help you make the most of our services experience</h4>
        </div>
      </div><br></br><br></br>

      <div >
    <h1 style={{fontWeight: "bold", textAlign: "center", animation: "zoomIn 1s ease-in-out"}}>Driven By Commitment Powered By Humans</h1>
</div>
<br />

<div class="container" style={{}}>
<div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="col">
        <div class="card h-100">
            <img src="https://www.fusionbposervices.com/wp-content/uploads/2021/06/group-2@2x.jpg" class="card-img-top" alt="..."/>
            <div class="card-body" style={{border: "black"}}>
                <h3 class="card-title" style={{fontWeight:"bold"}}>Value Driven</h3>
                <h6>We thrive to create human connect with each of our interactions. It allows us to keep customer concerns in focus and attend to their needs with mutual understanding.</h6>
            </div>
        </div>
    </div>
    <div class="col">
        <div class="card h-100">
            <img src="https://www.fusionbposervices.com/wp-content/uploads/2021/06/group-4@2x-1.jpeg" class="card-img-top" alt="..."/>
            <div class="card-body">
                <h3 class="card-title" style={{fontWeight:"bold"}}>
                    Global Outlook,
                    Local Approach
                </h3>
                <h6>At Money-Magnet, we foster a culture of collaboration. It helps us merge varied ideas into a unique whole to deliver solutions that can make an impact on the local level and stand out on the global scale.</h6>
            </div>
        </div>
    </div>
    <div class="col">
        <div class="card h-100">
            <img src="https://www.fusionbposervices.com/wp-content/uploads/2021/06/group-5@2x.jpg" class="card-img-top" alt="..."/>
            <div class="card-body">
                <h3 class="card-title" style={{fontWeight:"bold"}}>
                    Human Connect
                    Meets Technology
                </h3>
                <h6>We ensure a superior CX delivery across all touchpoints by equipping our agents with pioneering AI-enabled tools and train them to approach customers with empathy. It helps us deliver a hi-tech hi-touch experience – creating a formula for excellence powered by human connect.</h6>
            </div>
        </div>
    </div>
</div>
</div>
<br />
<br />

        <div><br></br>
        <h1 style={{fontWeight: "bold", textAlign: "center", animation: "zoomIn 1s ease-in-out"}}>---------Our Team---------</h1>
        <div className="w-3/4 m-auto">
        <div className="mt-20">
        <Slider {...settings}>
        {data.map((d) => (
           
          <div className="bg-white h-[450px] text-black rounded-xl " class="card h-100 text-bg-light"  style={{ marginRight: '10px', height: "100%" }}>
            <div className="h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center" >
              <img src={d.image} alt=" " className="h-44 g-4 w-44 rounded-full"/>
            </div>
            <div className="h-100 flex flex-col bg-indigo-500 gap-4 p-4" class="card h-100" >
              <div class="card-body h-100" >
              <p className="text-xl font-semibold" class="card-title" style={{textAlign:"center", fontWeight: "bold"}} >{d.name}</p>
              <p class="card-text" >{d.desc}</p>
              </div>
            </div>
            

          </div>
          

        ))}
        </Slider>

        

        </div>
        </div>
        </div>
    
    </div>
  );
}