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
          <div style={{}}>
            <br />
            <br />
            <text style={{color: 'white', fontSize: '45px', fontWeight: '700'}}>About The Department</text>
            <br />
            <br />
            <br />

          <p className="home-departmenttext">Our club is based out of the <text style={{color: 'purple'}}>DCSE, SRM Vadapalani, Chennai</text>. Our department boasts a renowned faculty known for their 
          <text style={{color: 'purple'}}> expertise in a wide range of fields</text>. A substantial portion of our esteemed faculty members bring extensive experience,
          with many having dedicated over a decade to their respective fields. Our research initiatives revolve around crucial
          domains such as <text style={{color: 'purple'}}>network security, cryptography, wireless sensor networks, data mining, and cloud computing</text>. This steadfast
          dedication to research is exemplified by the productive contributions of both our faculty and students, as they continually
          showcase and publish their work at esteemed national and international conferences.
          </p>
          </div>
        </div>
        <div>
          <br />
          <br />
          <hr
            style={{
            borderTop: '1px solid lightgrey',
            width: '5%', // Adjust width as needed
            margin: '0 auto', // Centers the hr
            }}
            />
        </div>
        <div style={{ textAlign: 'center', marginLeft: '5%', marginRight: '5%'}}>
            <br />
            <br />
            <text style={{color: 'white', fontSize: '45px', fontWeight: '700'}}>About Us</text>
            <br />
            <br />
            <br />
          <div className="home-aboutustext">
            <div style={{paddingRight: '2%', paddingLeft: '2%',paddingTop: '2%', paddingBottom: '2%'}}>
            <p >
            <text style={{color: 'purple'}}>White Hat Hackers Club</text> is a student-driven technical organization headquartered at SRMIST, 
            Vadapalani Campus. The club’s primary objective is to inspire students to delve into the realm of 
            cybersecurity and ethical hacking, equipping them with the essential skills for success in this field. We
            welcome students from diverse backgrounds and skill levels, ranging from beginners to advanced, to refine
            their abilities. Our main goal is to establish a space where like-minded individuals can initiate discussions
            about ethical hacking and cybersecurity, leveraging their knowledge to drive meaningful progress.
            </p>
            </div>
          </div>
        </div>
        <div>
        <br />
          <br />
          <hr
            style={{
            borderTop: '1px solid lightgrey',
            width: '5%', // Adjust width as needed
            margin: '0 auto', // Centers the hr
            }}
            />
        </div>
        <div>
          <div style={{ textAlign: 'center', marginLeft: '5%', marginRight: '5%'}}>
            <br />
            <br />
            <text style={{color: 'white', fontSize: '45px', fontWeight: '700'}} >What we do</text>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;