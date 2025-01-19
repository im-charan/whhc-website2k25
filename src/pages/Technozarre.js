import React from "react";
import Timer from "../components/Technozarre/Timer";
import Workshops from "../components/Technozarre/Workshops";
import banner from "../assets/technozarre2k25/banner.png";
import Navigation from "../components/Navigation";

const Technozarre = () => {

  return (
    <div>
      <div className="technozarre-banner" style={{backgroundImage: `url(${banner})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',}}>
        <div >
          <Navigation />
        </div>
      </div>
      <div className="technozarre-page" style={{background: 'linear-gradient(180deg,rgb(0, 0, 0), rgb(13, 0, 21))', height: '100%'}}>
          <Timer />
          <Workshops />
      </div>
    </div>
  )

}

export default Technozarre;