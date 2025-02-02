import React from "react";
import Navigation from "../components/Navigation";
import Technozarre2k24 from "../components/PhotoGallery/Technozarre2k24";
import Hackhorizons from "../components/PhotoGallery/Hackhorizons";
import Cicada from "../components/PhotoGallery/Cicada";
import Gitstarted from "../components/PhotoGallery/Gitstarted";
import Footer from "../components/Home/Footer";

const PhotoGallery = () => {

  return (
    <div>
      <div className="photogallery-bg">
        <Navigation />
        <div>
          <div style={{ textAlign: 'center', marginLeft: '10%', marginRight: '10%', paddingTop: '5%'}}>
            <text className='photogallery-text' style={{fontSize: '30px', fontWeight: '900'}}>HACK HORIZONS - CODE CREATE CONQUER!</text>
          </div>
          <div style={{ justifyContent: 'center', marginLeft: '10%', marginRight: '10%', marginTop: '30px'}}>
            <Hackhorizons />
          </div>
        </div>
        <div>
          <div style={{ textAlign: 'center', marginLeft: '10%', marginRight: '10%', paddingTop: '5%'}}>
            <text className='photogallery-text' style={{fontSize: '30px', fontWeight: '900'}}>CICADA</text>
          </div>
          <div style={{ justifyContent: 'center', marginLeft: '10%', marginRight: '10%', marginTop: '30px'}}>
            <Cicada />
          </div>
        </div>
        <div>
          <div style={{ textAlign: 'center', marginLeft: '10%', marginRight: '10%', paddingTop: '5%'}}>
            <text className='photogallery-text' style={{fontSize: '30px', fontWeight: '900'}}>GITSTARTED: YOUR PATH TO OPENSOURCE MASTERY</text>
          </div>
          <div style={{ justifyContent: 'center', marginLeft: '10%', marginRight: '10%', marginTop: '30px'}}>
            <Gitstarted />
          </div>
        </div>
        <div>
          <div style={{ textAlign: 'center', marginLeft: '10%', marginRight: '10%', paddingTop: '5%'}}>
            <text className='photogallery-text' style={{fontSize: '30px', fontWeight: '900'}}>TECHNOZARRE 2k24</text>
          </div>
          <div style={{ justifyContent: 'center', marginLeft: '10%', marginRight: '10%', marginTop: '30px'}}>
            <Technozarre2k24 />
          </div>
        </div>
        <div>
        <Footer />
      </div>
      </div>
    </div>
  
  )

}

export default PhotoGallery;