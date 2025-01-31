import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import comingsoon from "../../assets/technozarre2k25/events/comingsoon.png"
import staytuned from "../../assets/technozarre2k25/events/staytuned.png"
import research from "../../assets/technozarre2k25/workshops/Research.jpeg"
import research_bg from "../../assets/technozarre2k25/workshops/research_bg.jpg"
import { Button } from "react-bootstrap";

const NontechEvents = () => {
  const [isFlipped1, setIsFlipped1] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);
  const [isFlipped3, setIsFlipped3] = useState(false);
  const [isFlipped4, setIsFlipped4] = useState(false);
  const [isFlipped5, setIsFlipped5] = useState(false);

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
  const handleClick5 = () => {
    setIsFlipped5(!isFlipped5);
  }


  return (
    <div>
      <div>
        <div style={{color: 'white', fontSize:'45px', fontWeight:'700', textAlign:'center'}}>
          <text className="technozarre-subtitle">
            NON-TECHNICAL EVENTS
          </text>
        </div>
      <div className="flip-card-wrapper" >
        <div className="flip-card">
        <ReactCardFlip isFlipped={isFlipped1} flipDirection="horizontal" flipSpeedBackToFront={1.5} flipSpeedFrontToBack={1.5}>
          <div className="flip-card" onClick={handleClick1} style={{backgroundImage: `url(${comingsoon})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
          </div>
          <div className="flip-card" onClick={handleClick1} style={{backgroundImage: `url(${staytuned})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',display: 'flex', flexDirection: 'column', justifyContent: 'space-between',height:'100',}}>
          <div style={{textAlign: 'center'}}>
              <p className="technozarre-back-header" style={{color: 'white', marginTop:'10px',}}>Pickle Ball</p>
            </div>
            <div className="technozarre-back" style={{fontSize: '15px', flex: 1, color: 'white',overflowY:'auto'}}>
            
              <p style={{color:'white'}}>🎾 Join the Sport Everyone’s Talking About! 🎉</p>
              <p style={{color:'white'}}>Pickleball mixes the best of tennis, ping-pong, and badminton into one fast, fun, and strategic game! Easy to learn and perfect for all skill levels, it’s all about smashing, dinking, and having a blast.  </p>
              <p style={{color:'white'}}>Grab a paddle, hit the court, and show off your skills at #Technozarre’25. Whether you’re a pro or a beginner, pickleball is your ticket to excitement and victory! 🏆💪🎯</p>      
              {/* <p style={{color:'white'}}>🚀 Workshop Highlights:</p>
              <p style={{color:'white'}}>•⁠  ⁠🧠 Expert-led sessions on the research process </p>
              <p style={{color:'white'}}>•⁠  ⁠📑 Step-byy-step guide to writing and structuring your paper</p>
              <p style={{color:'white'}}>•⁠  ⁠🚀 Tips for publishing in reputed journals</p>
              <p style={{color:'white'}}>•⁠  🤝 Networking with fellow researchers</p> */}
            </div>
            <br />
            <div className='center' style={{marginTop: 'auto', textAlign: 'center',padding:'10px 0'}}>
              <Button  style={{width: '200px',textAlign: 'center'}} 
                onClick={()=>{
                  window.open('https://docs.google.com/forms/d/e/1FAIpQLSeR3mZ3W5lUlcHu-EhA-KbJIQZ2afwELEMBHhxgxMUBq1O3uw/viewform','_blank');
                }}
                disabled className="bg-gray-400 text-white py-2 px-4 rounded" >
                  Registrations Closed</Button>
            </div>
          </div>
        </ReactCardFlip>
      </div>
          <div className="flip-card">
            <ReactCardFlip isFlipped={isFlipped2} flipDirection="horizontal" flipSpeedBackToFront={1.5} flipSpeedFrontToBack={1.5}>
            <div className="flip-card" onClick={handleClick2} style={{backgroundImage: `url(${comingsoon})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
            </div>
            <div className="flip-card" onClick={handleClick2} style={{backgroundImage: `url(${staytuned})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',display: 'flex', flexDirection: 'column', justifyContent: 'space-between',height:'100',}}>
            <div style={{textAlign: 'center'}}>
                <p className="technozarre-back-header" style={{color: 'white', marginTop:'10px',}}>Cine Connect</p>
              </div>
              <div className="technozarre-back" style={{fontSize: '15px', flex: 1, color: 'white',overflowY:'auto'}}>
              
                <p style={{color:'white'}}>🎬 “Cine Connect” – Where Movie Buffs Turn Detectives! 🔍</p>
                <p style={{color:'white'}}>Think you know your favorite movies and shows inside out? Spot hidden connections between iconic pictures, test your pop culture knowledge, and unravel cinematic mysteries like a pro.</p>
                <p style={{color:'white'}}>Challenge your inner film geek and see if you’ve got what it takes to crack the code! 🎥✨</p>      
              </div>
              <br />
              <div className='center' style={{marginTop: 'auto', textAlign: 'center',padding:'10px 0'}}>
                <Button  style={{width: '200px',textAlign: 'center'}} 
                  onClick={()=>{
                    window.open('https://docs.google.com/forms/d/e/1FAIpQLSeR3mZ3W5lUlcHu-EhA-KbJIQZ2afwELEMBHhxgxMUBq1O3uw/viewform','_blank');
                  }} >
                    Registrations Closed</Button>
              </div>
            </div>
          </ReactCardFlip>
          </div>
          <div className="flip-card">
            <ReactCardFlip isFlipped={isFlipped3} flipDirection="horizontal" flipSpeedBackToFront={1.5} flipSpeedFrontToBack={1.5}>
            <div className="flip-card" onClick={handleClick3} style={{backgroundImage: `url(${comingsoon})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
            </div>
            <div className="flip-card" onClick={handleClick3} style={{backgroundImage: `url(${staytuned})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',display: 'flex', flexDirection: 'column', justifyContent: 'space-between',height:'100',}}>
            <div style={{textAlign: 'center'}}>
                <p className="technozarre-back-header" style={{color: 'white', marginTop:'10px',}}>Whisper Challenge</p>
              </div>
              <div className="technozarre-back" style={{fontSize: '15px', flex: 1, color: 'white',overflowY:'auto'}}>
              
                <p style={{color:'white'}}>🤫 Join the “Whisper Challenge” – Where Lip-Reading Becomes Your Superpower! 🎧</p>
                <p style={{color:'white'}}>Put on your headphones and try to decode the secret message just by watching your teammates’ lips. Pass it along and see how far the whispers can go in this hilarious team game!</p>
                <p style={{color:'white'}}>Test your lip-reading skills and enjoy the fun twists of this unpredictable challenge! 👄👀</p>      
              </div>
              <br />
              <div className='center' style={{marginTop: 'auto', textAlign: 'center',padding:'10px 0'}}>
                <Button  style={{width: '200px',textAlign: 'center'}} 
                  onClick={()=>{
                    window.open('https://docs.google.com/forms/d/e/1FAIpQLSeR3mZ3W5lUlcHu-EhA-KbJIQZ2afwELEMBHhxgxMUBq1O3uw/viewform','_blank');
                  }} >
                    Registrations Closed</Button>
              </div>
            </div>
            </ReactCardFlip>
          </div>
          <div className="flip-card">
            <ReactCardFlip isFlipped={isFlipped4} flipDirection="horizontal" flipSpeedBackToFront={1.5} flipSpeedFrontToBack={1.5}>
            <div className="flip-card" onClick={handleClick4} style={{backgroundImage: `url(${comingsoon})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
            </div>
            <div className="flip-card" onClick={handleClick4} style={{backgroundImage: `url(${staytuned})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',display: 'flex', flexDirection: 'column', justifyContent: 'space-between',height:'100',}}>
            <div style={{textAlign: 'center'}}>
                <p className="technozarre-back-header" style={{color: 'white', marginTop:'10px',}}>Cine Connect</p>
              </div>
              <div className="technozarre-back" style={{fontSize: '15px', flex: 1, color: 'white',overflowY:'auto'}}>
              
                <p style={{color:'white'}}>🎬 “Cine Connect” – Where Movie Buffs Turn Detectives! 🔍</p>
                <p style={{color:'white'}}>Think you know your favorite movies and shows inside out? Spot hidden connections between iconic pictures, test your pop culture knowledge, and unravel cinematic mysteries like a pro.</p>
                <p style={{color:'white'}}>Challenge your inner film geek and see if you’ve got what it takes to crack the code! 🎥✨</p>      
              </div>
              <br />
              <div className='center' style={{marginTop: 'auto', textAlign: 'center',padding:'10px 0'}}>
                <Button  style={{width: '200px',textAlign: 'center'}} 
                  onClick={()=>{
                    window.open('https://docs.google.com/forms/d/e/1FAIpQLSeR3mZ3W5lUlcHu-EhA-KbJIQZ2afwELEMBHhxgxMUBq1O3uw/viewform','_blank');
                  }} >
                    Registrations Closed</Button>
              </div>
            </div>
            </ReactCardFlip>
          </div>
          <div className="flip-card">
            <ReactCardFlip isFlipped={isFlipped5} flipDirection="horizontal" flipSpeedBackToFront={1.5} flipSpeedFrontToBack={1.5}>
            <div className="flip-card" onClick={handleClick5} style={{backgroundImage: `url(${comingsoon})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
            </div>
            <div className="flip-card" onClick={handleClick5} style={{backgroundImage: `url(${staytuned})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',display: 'flex', flexDirection: 'column', justifyContent: 'space-between',height:'100',}}>
            <div style={{textAlign: 'center'}}>
                <p className="technozarre-back-header" style={{color: 'white', marginTop:'10px',}}>Cine Connect</p>
              </div>
              <div className="technozarre-back" style={{fontSize: '15px', flex: 1, color: 'white',overflowY:'auto'}}>
              
                <p style={{color:'white'}}>🏏 Take Charge at the “IPL Auction” – The Ultimate Cricket Manager Challenge! 💰</p>
                <p style={{color:'white'}}>Do you have what it takes to build a dream team? Strategically bid your budget to assemble the perfect 11-player squad, balancing star power and strategy. Manage your resources, outbid rivals, and claim the title of auction champion! 🏆⚖️</p>
                <p style={{color:'white'}}>Step into the action and show off your cricket management skills!</p>      
              </div>
              <br />
              <div className='center' style={{marginTop: 'auto', textAlign: 'center',padding:'10px 0'}}>
                <Button  style={{width: '200px',textAlign: 'center'}} 
                  onClick={()=>{
                    window.open('https://docs.google.com/forms/d/e/1FAIpQLSeR3mZ3W5lUlcHu-EhA-KbJIQZ2afwELEMBHhxgxMUBq1O3uw/viewform','_blank');
                  }} >
                    Registrations Closed</Button>
              </div>
            </div>
            </ReactCardFlip>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NontechEvents;