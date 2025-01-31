import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import sih from "../../assets/technozarre2k25/workshops/sih.png"
import research from "../../assets/technozarre2k25/workshops/research.png"
import comingsoon from "../../assets/technozarre2k25/events/comingsoon.png"
import staytuned from "../../assets/technozarre2k25/events/staytuned.png"
import sih_bg from "../../assets/technozarre2k25/workshops/sih_bg.png"
import research_bg from "../../assets/technozarre2k25/workshops/research_bg.png"
import quantum_computing from "../../assets/technozarre2k25/workshops/quantum_computing.png"
import quantum_computing_bg from "../../assets/technozarre2k25/workshops/quantum_computing_bg.png"


import { Button } from "react-bootstrap";


const Workshops = () => {

  const [isFlipped1, setIsFlipped1] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);
  const [isFlipped3, setIsFlipped3] = useState(false);
  const [isFlipped4, setIsFlipped4] = useState(false);

  const handleClick1 = () => {
    setIsFlipped1(!isFlipped1);
  }
  const handleClick2 = () => {
    setIsFlipped2(!isFlipped2);
  }
  const handleClick3 = () => {
    setIsFlipped3(!isFlipped3);
  }
  const handleClick4 = () => {
    setIsFlipped4(!isFlipped4);
  }

  return (
    <section className="flip-card-wrapper" id="workshops" >
      <div className="flip-card">
        <ReactCardFlip isFlipped={isFlipped1} flipDirection="horizontal" flipSpeedBackToFront={1.5} flipSpeedFrontToBack={1.5}>
          <div className="flip-card" onClick={handleClick1} style={{backgroundImage: `url(${sih})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
          </div>
          <div className="flip-card" onClick={handleClick1} style={{backgroundImage: `url(${sih_bg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',display: 'flex', flexDirection: 'column', justifyContent: 'space-between',height:'100',}}>

            <div style={{textAlign: 'center'}}>
              <p className="technozarre-back-header" style={{color: 'white',marginTop:'10px'}}>SIH Workshop</p>
            </div>
            <div className="technozarre-back" style={{fontSize: '15px', flex: 1, color: 'white',overflowY:'auto'}}>
            

              <p style={{color:'white'}}>📅 Date: 20 January 2025</p>
              <p style={{color:'white'}}>🕒 Time: 10:30AM - 12:30PM</p>
              <p style={{color:'white'}}>🏢 Venue: Auditorium</p>

              
              <p style={{color:'white'}}>🔥 What’s in store?</p>
              <p style={{color:'white'}}>•⁠  ⁠🧠 Expert-led sessions on the working of a hackathon </p>
              <p style={{color:'white'}}>•⁠  ⁠🚀 Ignite your hackathon journey</p>
              <p style={{color:'white'}}>•⁠  ⁠🤝 Networking with like-minded enthusiasts</p>
              <p style={{color:'white'}}>•⁠  ⁠✨ Learning Experience</p>
              <p style={{color:'white'}}>Whether you’re a beginner or a tech enthusiast, this workshop is crafted to help you grow and innovate! 🤩</p>
            </div>
            <br />
            <div className="register-button" style={{marginTop: 'auto', textAlign: 'center',padding:'10px 0'}}>
            <Button className="register-button" style={{width: '250px',textAlign: 'center', backgroundColor:'black',borderColor: '#3c6094', fontWeight:'600'}} 
              onClick={()=>{
                window.open('https://docs.google.com/forms/d/e/1FAIpQLSeR3mZ3W5lUlcHu-EhA-KbJIQZ2afwELEMBHhxgxMUBq1O3uw/viewform','_blank');
              }}
              disabled>
                Registrations Closed</Button>
                </div>
          </div>
        </ReactCardFlip>
      </div>

      <div className="flip-card">
        <ReactCardFlip isFlipped={isFlipped2} flipDirection="horizontal" flipSpeedBackToFront={1.5} flipSpeedFrontToBack={1.5}>
          <div className="flip-card" onClick={handleClick2} style={{backgroundImage: `url(${research})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
          </div>
          <div className="flip-card" onClick={handleClick2} style={{backgroundImage: `url(${research_bg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',display: 'flex', flexDirection: 'column', justifyContent: 'space-between',height:'100',}}>
          <div style={{textAlign: 'center'}}>
              <p className="technozarre-back-header" style={{color: 'white', marginTop:'10px',}}>Cracking the Code</p>
            </div>
            <div className="technozarre-back" style={{fontSize: '15px', flex: 1, color: 'white',overflowY:'auto'}}>
            
              <p style={{color:'white'}}>🗓️Date: 21st January, 2025</p>
              <p style={{color:'white'}}>⏰Time: 10:00 AM to 2:30 PM</p>
              <p style={{color:'white'}}>🏢 Venue: CSE(ETECH) Lab, SRM Vadapalani</p>      
              <p style={{color:'white'}}>🚀 Workshop Highlights:</p>
              <p style={{color:'white'}}>•⁠  ⁠🧠 Expert-led sessions on the research process </p>
              <p style={{color:'white'}}>•⁠  ⁠📑 Step-by-step guide to writing and structuring your paper</p>
              <p style={{color:'white'}}>•⁠  ⁠🚀 Tips for publishing in reputed journals</p>
              <p style={{color:'white'}}>•⁠  🤝 Networking with fellow researchers</p>
            </div>
            <br />
            <div className="register-button" style={{marginTop: 'auto', textAlign: 'center',padding:'10px 0'}}>
            <Button className="register-button" style={{width: '250px',textAlign: 'center', backgroundColor:'black',borderColor: '#3c6094', fontWeight:'600'}} 
              onClick={()=>{
                window.open('https://docs.google.com/forms/d/e/1FAIpQLSeR3mZ3W5lUlcHu-EhA-KbJIQZ2afwELEMBHhxgxMUBq1O3uw/viewform','_blank');
              }}
              disabled>
                Registrations Closed</Button>
                </div>
          </div>
        </ReactCardFlip>
      </div>

      <div className="flip-card">
        <ReactCardFlip isFlipped={isFlipped3} flipDirection="horizontal" flipSpeedBackToFront={1.5} flipSpeedFrontToBack={1.5}>
          <div className="flip-card" onClick={handleClick3} style={{backgroundImage: `url(${quantum_computing})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
            </div>
          <div className="flip-card" onClick={handleClick3} style={{backgroundImage: `url(${quantum_computing_bg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',display: 'flex', flexDirection: 'column', justifyContent: 'space-between',height:'100',}}>
          <div style={{textAlign: 'center'}}>
              <p className="technozarre-back-header" style={{color: 'white', marginTop:'10px',}}>Entangled Minds</p>
            </div>
            <div className="technozarre-back" style={{fontSize: '15px', flex: 1, color: 'white',overflowY:'auto'}}>
            
              <p style={{color:'white'}}>🗓️Date: 13th and 14th February, 2025</p>
              <p style={{color:'white'}}>⏰Time: 9:00 AM to 2:30 PM</p>
              <p style={{color:'white'}}>🏢 Venue: CSE(ETECH) Lab, SRM Vadapalani</p>      
              <p style={{color:'white'}}>🚀 Workshop Highlights:</p>
              <p style={{color:'white'}}>•⁠  ⁠🧠 Expert-led sessions on the research process </p>
              <p style={{color:'white'}}>•⁠  ⁠📑 Step-by-step guide to writing and structuring your paper</p>
              <p style={{color:'white'}}>•⁠  ⁠🚀 Tips for publishing in reputed journals</p>
            </div>
            <div className="register-button" style={{marginTop: 'auto', textAlign: 'center',padding:'10px 0'}}>
            <Button className="register-button" style={{width: '200px',textAlign: 'center', backgroundColor:'black',borderColor: '#3c6094', fontWeight:'600'}} 
              onClick={()=>{
                window.open('https://forms.gle/gYWRpZ6bPZi5zwQA8','_blank');
              }}
              >
                Register</Button>
                </div>
          </div>
        </ReactCardFlip>
      </div>

      <div className="flip-card">
        <ReactCardFlip isFlipped={isFlipped4} flipDirection="horizontal" flipSpeedBackToFront={1.5} flipSpeedFrontToBack={1.5}>
          <div className="flip-card" onClick={handleClick4} style={{backgroundImage: `url(${comingsoon})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
          </div>
          <div className="flip-card" onClick={handleClick4} style={{backgroundImage: `url(${staytuned})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
          <div style={{textAlign: 'center'}}>
            </div>
            <div className="technozarre-back" style={{fontSize: '15px', flex: 1, color: 'white',overflowY:'auto'}}>
              </div>
          </div>
        </ReactCardFlip>
      </div>
    </section>
  )
}

export default Workshops;
