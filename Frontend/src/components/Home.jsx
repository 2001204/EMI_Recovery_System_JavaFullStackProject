/* Home.jsx */

import React from "react";
import Slider from "./Slider";
import Card1 from "./Card1";
import  Card2  from "./Card2";
//import Footer from "./Footer/Footer"
import { Navigationbar } from "./Navigationbar";
//import Footer from "./Footer/Footer";

export function Home() {
  return (
    <>
    <Navigationbar/><br></br>
      
      <Slider/><br></br>
      <div style={{ backgroundColor: "lightgray", radius: "30px" }}  className="curved-div" ><br></br>
      <h3 style={{fontWeight: "bold", textAlign: "center", animation: "zoomIn 1s ease-in-out"}}>Advantages of Retaining a Third Party Collection Agency</h3><br></br><br></br>
      <div class="container"><Card2/><br></br></div>
      </div><br></br>

      <div style={{ backgroundColor: "lightgray" }} className="curved-div" ><br></br>
      <div class="container"><Card1/><br></br></div>
      </div>
    </>
  );
}