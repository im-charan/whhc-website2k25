import React from "react";
import Navigation from '../components/Navigation'
// import { Button } from "react-bootstrap";
import video from '../assets/home-video.mp4';
import WhatWeDoCard from "../components/Home/WhatWeDoCard";
import FlagShipEvent from "../components/Home/FlagshipEvent";
import Footer from "../components/Home/Footer";
const Home = () => {
  return (
    <div className="home">
      <div style={{backgroundColor: 'black'}}>
          <Navigation />
        </div>
      <div className="video-container">
        <video autoPlay muted loop id = 'home-video'>
          <source src={video} type="video/mp4"/>
        </video>
        

      </div>
      <div className="home-background">
        <div style={{ textAlign: 'center', marginLeft: '10%', marginRight: '10%'}}>
          <div style={{}}>
            <br />
            <br />
            <text style={{color: 'white', fontSize: '45px', fontWeight: '700'}}>About The Department</text>
            <br />
            <br />
          <p className="home-paragraphtext">Our club is based out of the <text style={{color: 'purple'}}>DCSE, SRM Vadapalani, Chennai</text>. Our department boasts a renowned faculty known for their 
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
          <div className="home-aboutustext">
            <div style={{paddingRight: '2%', paddingLeft: '2%',paddingTop: '2%', paddingBottom: '2%'}}>
            <p className="home-paragraphtext">
            <text style={{color: 'purple'}}>White Hat Hackers Club</text> is a student-driven technical organization headquartered at  
            <text style={{color: 'purple'}}> SRMIST, Vadapalani Campus</text>. The club’s primary objective is to inspire students to delve into the realm of 
            <text style={{color: 'purple'}}> cybersecurity and ethical hacking</text>, equipping them with the essential skills for success in this field. We
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
            <br />
            <br />
            <p className="home-paragraphtext" style={{fontSize: '23px', textAlign: 'center'}}>
            Through our lineup of workshops and events, along with our online publications of articles on our website and social media,
            we aim to impart knowledge about the applications, advancements, and future prospects in the world of ethical hacking and cybersecurity.
            </p>
          </div>
          <div style={{ justifyContent: 'center', marginLeft: '10%', marginRight: '10%', marginTop: '50px'}}>
            <WhatWeDoCard />
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
          <br />
          <br />
          <br />
          <div style={{ textAlign: 'center', marginLeft: '5%', marginRight: '10%'}}>
            <FlagShipEvent />
          </div>
        </div>
        <div style={{ textAlign: 'center'}}>
          <div className="home-team">
            <div style={{textAlign: "center",  marginLeft: '30%', marginRight: '30%',paddingTop: '6%'}}>
              {/* <p className='home-paragraphtext' style={{color: 'white' , fontSize: '20px', fontWeight: '800'}}>
              WHHC is dedicated to growing its community of enthusiastic student developers with a focus on cybersecurity and
               ethical hacking. We strive to keep our members updated on the latest and advanced technologies, through our interactive
              workshops and informative publications. Our students gain exceptional insights through seminars featuring industry
              professionals. These events are made possible through the collaboration of various domains, including Technical, Operations,
              Content, PR and Design. Their collaboration, dedication and invaluable inputs result in flawlessly executed events.
              </p> */}
            </div>
          </div>
        </div>
        <div >
          <br />
          <br />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Home;