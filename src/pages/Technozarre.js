import React from "react";
import Navigation from '../components/Navigation'
import Timer from "../components/Technozarre/Timer";



const Technozarre = () => {
  
  return (
    <div>
      <Navigation />
      {/* <h2>This is Technozarre 2025</h2>
       */}
      <div className="technozarre-page" style={{backgroundColor: '#110017', height: '100vh'}}>
        <Timer />
      </div>
    </div>
  )

}

export default Technozarre;