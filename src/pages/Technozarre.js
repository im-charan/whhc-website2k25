import React from "react";
import Navigation from '../components/Navigation'
import Timer from "../components/Team/Timer";



const Technozarre = () => {
  
  return (
    <div>
      <Navigation />
      {/* <h2>This is Technozarre 2025</h2>
       */}
      <div className="technozzare-page">
        <Timer />
      </div>
    </div>
  )

}

export default Technozarre;