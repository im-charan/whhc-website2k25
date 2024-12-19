import React from "react";
import Navigation from '../components/Navigation'
import img1 from '../assets/logo-home.png';
import { Button } from "react-bootstrap";
import video from '../assets/home-video.mp4';




const Home = () => {
  return (
    <div text-align="center">
        <Navigation />
      <div className="home">
        <video autoPlay muted loop id = 'home-video'>
          <source src={video} type="video/mp4"/>
        </video>
        <div className="home-imagebox">
          {/* <img src={img1} alt="../assets/logo-home.png" className="logo-home"/> */}
        </div>
        <div style={{textAlign: "center", marginTop: '25px'}}>
          {/* <text style={{color: 'white' , fontSize: '80px', fontWeight: '700'}}>White Hat Hackers</text>
          <br />
          <text style={{color: 'white' , fontSize: '80px', fontWeight: '700'}}>Club</text> */}
        </div>
        <div style={{textAlign: "center", marginTop: '35px'}}>
          {/* <text style={{color: 'grey', fontSize: '25px'}}>SRM Institute of Science and Technology</text>
          <br />
          <text style={{color: 'grey', fontSize: '25px'}}>Department of Computer Science and Engineering</text> */}
        </div>
        <div style={{textAlign: "center", marginTop: '50px' , display: 'flex',justifyContent: 'center'}}>
          <div className="home-button-style" style={{marginRight: '10px'}}>
            <Button size="lg" className="home-button">About Us</Button>
          </div>
          <div className="home-button-style" style={{marginLeft: '10px'}}>
            <Button size="lg" className="home-button">About the Dept</Button>
          </div>
        </div>
      </div>
      <div className="home-background">
        <div style={{ textAlign: 'center', marginLeft: '10%', marginRight: '10%'}}>
          <div style={{marginTop: '50px'}}>
          <text style={{color: 'white', fontSize: '50px', fontWeight: '700'}}>About The Department</text>
          <br />
          <p className="home-departmenttext">Our club is based out of the DCSE, SRM Vadapalani, Chennai. Our department boasts a renowned faculty known for their
          expertise in a wide range of fields. A substantial portion of our esteemed faculty members bring extensive experience,
          with many having dedicated over a decade to their respective fields. Our research initiatives revolve around crucial
          domains such as network security, cryptography, wireless sensor networks, data mining, and cloud computing. This steadfast
          dedication to research is exemplified by the productive contributions of both our faculty and students, as they continually
          showcase and publish their work at esteemed national and international conferences.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;