import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Button } from "react-bootstrap";
import bgmi_bg from "../../assets/technozarre2k25/events/bgmi_bg.png"
import valo_bg from "../../assets/technozarre2k25/events/valo_bg.png"
import fifa_bg from "../../assets/technozarre2k25/events/fifa_bg.png"
import bgmi from "../../assets/technozarre2k25/events/bgmi.png"
import valo from "../../assets/technozarre2k25/events/valo.png"
import fifa from "../../assets/technozarre2k25/events/fifa.png"

const GamingEvents = () =>{
  const [isFlipped1, setIsFlipped1] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);
  const [isFlipped3, setIsFlipped3] = useState(false);

  const handleClick1 = () => {
    setIsFlipped1(!isFlipped1);
  }
  const handleClick2 = () => {
    setIsFlipped2(!isFlipped2);
  }
  const handleClick3 = () => {
    setIsFlipped3(!isFlipped3);
  }


  return (
    <div>
      <div>
        <div style={{color: 'white', fontSize:'45px', fontWeight:'700', textAlign:'center'}}>
          <text className="technozarre-subtitle">
            GAMING EVENTS
          </text>
        </div>

        <div className="flip-card-wrapper" >
          <div className="flip-card">
            <ReactCardFlip isFlipped={isFlipped1} flipDirection="horizontal" flipSpeedBackToFront={1.5} flipSpeedFrontToBack={1.5}>
            <div className="flip-card" onClick={handleClick1} style={{backgroundImage: `url(${bgmi})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
              </div>
              <div className="flip-card" onClick={handleClick1} style={{backgroundImage: `url(${bgmi_bg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',display: 'flex', flexDirection: 'column', justifyContent: 'space-between',height:'100',}}>
              <div style={{textAlign: 'center'}}>
              <p className="technozarre-back-header" style={{color: 'white', marginTop:'10px',}}>BGMI</p>
            </div>
            <div className="technozarre-back" style={{fontSize: '15px', flex: 1, color: 'white',overflowY:'auto'}}>
              <p style={{color:'white'}}>🎮 Drop into "BGMI" - Where Only The Strongest Survive! 🔥</p>
              <p style={{color:'white'}}>Ready to dominate the battleground? Gear up, strategize, and outplay your opponents in intense combat! Show off your tactical skills and claim that chicken dinner! 🏆</p>
              <p style={{color:'white'}}>Squad up with your best teammates, perfect those rotations, and prove you're the ultimate survivors! From hot drops to final circles, every decision counts! 💪</p>     
            </div>
            <br />
            <div className='register-button' style={{marginTop: 'auto', textAlign: 'center',padding:'10px 0'}}>
            <Button className="register-button" style={{width: '200px',textAlign: 'center', backgroundColor:'black',borderColor:'#c19934', fontWeight:'600'}} 
              onClick={()=>{
                window.open('https://forms.gle/MXNcp7H3HUhvJhUg8','_blank');
              }}
              >
                Register</Button>
                </div>
              </div>
              
            </ReactCardFlip>
          </div>
          <div className="flip-card">
            <ReactCardFlip isFlipped={isFlipped2} flipDirection="horizontal" flipSpeedBackToFront={1.5} flipSpeedFrontToBack={1.5}>
            <div className="flip-card" onClick={handleClick2} style={{backgroundImage: `url(${valo})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
              </div>
              <div className="flip-card" onClick={handleClick2} style={{backgroundImage: `url(${valo_bg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',display: 'flex', flexDirection: 'column', justifyContent: 'space-between',height:'100',}}>
              <div style={{textAlign: 'center'}}>
              <p className="technozarre-back-header" style={{color: 'white', marginTop:'10px',}}>Valorant</p>
            </div>
            <div className="technozarre-back" style={{fontSize: '15px', flex: 1, color: 'white',overflowY:'auto'}}>
            
              <p style={{color:'white'}}>🎯 Enter "Valorant" - Where Precision Meets Strategy! 💥</p>
              <p style={{color:'white'}}>Ready to show your tactical genius? Lock in your agents and dominate the battlefield! From perfect utility to clutch plays, prove your team's worth in intense knockout matches!</p>
              <p style={{color:'white'}}>Coordinate the perfect execution, hold those sites like a wall, and clutch impossible rounds! Time to show why you're built differently! 🎮</p>      
            </div>
            <br />
            <div className='register-button' style={{marginTop: 'auto', textAlign: 'center',padding:'10px 0'}}>
            <Button className="register-button" style={{width: '200px',textAlign: 'center', backgroundColor:'black',borderColor:'red', fontWeight:'600'}} 
              onClick={()=>{
                window.open('https://forms.gle/EwqrgBZyrQa4cnWz5','_blank');
              }}
              >
                Register</Button>
                </div>
              </div>
            </ReactCardFlip>
          </div>
          <div className="flip-card">
            <ReactCardFlip isFlipped={isFlipped3} flipDirection="horizontal" flipSpeedBackToFront={1.5} flipSpeedFrontToBack={1.5}>
            <div className="flip-card" onClick={handleClick3} style={{backgroundImage: `url(${fifa})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
              </div>
              <div className="flip-card" onClick={handleClick3} style={{backgroundImage: `url(${fifa_bg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',display: 'flex', flexDirection: 'column', justifyContent: 'space-between',height:'100',}}>
              <div style={{textAlign: 'center'}}>
              <p className="technozarre-back-header" style={{color: 'white', marginTop:'10px',}}>FIFA</p>
            </div>
            <div className="technozarre-back" style={{fontSize: '15px', flex: 1, color: 'white',overflowY:'auto'}}>
            
              <p style={{color:'white'}}>⚽ Welcome to "FIFA" - Where Digital Dreams Score Goals! 🎮</p>
              <p style={{color:'white'}}>Think you've got the skills to dominate the virtual pitch? Show off your footwork, scoring prowess, and tactical genius in this ultimate football showdown!</p>
              <p style={{color:'white'}}>Master those skill moves, perfect your formations, and score bangers that'll be remembered! Time to become a digital football legend! ⭐</p>      
            </div>
            <br />
            <div className='register-button' style={{marginTop: 'auto', textAlign: 'center',padding:'10px 0'}}>
            <Button className="register-button" style={{width: '200px',textAlign: 'center', backgroundColor:'black',borderColor:'#6fc089', fontWeight:'600'}} 
              onClick={()=>{
                window.open('https://forms.gle/KCPVB3W5PH3gdJA59','_blank');
              }}
              >
                Register</Button>
                </div>
              </div>
            </ReactCardFlip>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GamingEvents;