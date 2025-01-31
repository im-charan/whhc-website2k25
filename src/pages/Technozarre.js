import React from "react";
import Timer from "../components/Technozarre/Timer";
import Workshops from "../components/Technozarre/Workshops";
import banner from "../assets/technozarre2k25/banner.png";
import Navigation from "../components/Navigation";
import Events from "../components/Technozarre/Events";


const Technozarre = () => {

  return (
      <div>
          <div style={{backgroundColor: 'black'}}>
            <Navigation />
          </div>
        <div className="technozarre-banner" style={{backgroundImage: `url(${banner})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',}}>
        </div>
        <div className="technozarre-page" style={{background: 'linear-gradient(180deg,rgb(0, 0, 0), rgb(13, 0, 21))', height: '100%'}}>
            <div>
              <Timer />
            </div>
            <div style={{color: 'white', fontSize: '45px', fontWeight: '700', textAlign: 'center', }}>
              <text className="technozarre-title">WORKSHOPS</text>
            </div>
            <div>
              <Workshops />
            </div>
            <div style={{color: 'white', fontSize: '45px', fontWeight: '700', textAlign: 'center', }}>
              <text className="technozarre-title">EVENTS</text>
            </div>
            <div>
              <Events />
            </div>
        </div>
      </div>
    
  )

}

export default Technozarre;