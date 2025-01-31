import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import comingsoon from "../../assets/technozarre2k25/events/comingsoon.png"
import staytuned from "../../assets/technozarre2k25/events/staytuned.png"
import cine_connect_bg from "../../assets/technozarre2k25/events/cine_connect_bg.png"
import ipl_bg from "../../assets/technozarre2k25/events/ipl_bg.png"
import whisper_bg from "../../assets/technozarre2k25/events/whisper_bg.png"
import pickleball_bg from "../../assets/technozarre2k25/events/pickleball_bg.png"
import picture_bg from "../../assets/technozarre2k25/events/picture_bg.png"
import treasure_bg from "../../assets/technozarre2k25/events/treasure_bg.png"
import scribble_bg from "../../assets/technozarre2k25/events/scribble_bg.png"

import { Button } from "react-bootstrap";


const NontechEvents = () => {
  const [isFlipped1, setIsFlipped1] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);
  const [isFlipped3, setIsFlipped3] = useState(false);
  const [isFlipped4, setIsFlipped4] = useState(false);
  const [isFlipped5, setIsFlipped5] = useState(false);
  const [isFlipped6, setIsFlipped6] = useState(false);
  const [isFlipped7, setIsFlipped7] = useState(false);

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
  const handleClick6 = () => {
    setIsFlipped6(!isFlipped6);
  }
  const handleClick7 = () => {
    setIsFlipped7(!isFlipped7);
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
              <div className="flip-card" onClick={handleClick1} style={{backgroundImage: `url(${comingsoon})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',display: 'flex', flexDirection: 'column', justifyContent: 'space-between',height:'100',}}>
              <div className='register-button' style={{marginTop: 'auto', textAlign: 'center',padding:'10px 0'}}>
                </div>
              </div>
              <div className="flip-card" onClick={handleClick1} style={{backgroundImage: `url(${ipl_bg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',display: 'flex', flexDirection: 'column', justifyContent: 'space-between',height:'100',}}>
              <div style={{textAlign: 'center'}}>
              <p className="technozarre-back-header" style={{color: 'white', marginTop:'10px',}}>IPL Auction</p>
            </div>
            <div className="technozarre-back" style={{fontSize: '15px', flex: 1, color: 'white',overflowY:'auto'}}>
            
              <p style={{color:'white'}}>🏏 Take Charge at the “IPL Auction” – The Ultimate Cricket Manager Challenge! 💰</p>
              <p style={{color:'white'}}>Do you have what it takes to build a dream team? Strategically bid your budget to assemble the perfect 11-player squad, balancing star power and strategy. Manage your resources, outbid rivals, and claim the title of auction champion! 🏆⚖️
              </p>
              <p style={{color:'white'}}>Step into the action and show off your cricket management skills!
              </p>      
            </div>
            <br />
            <div className='register-button' style={{marginTop: 'auto', textAlign: 'center',padding:'10px 0'}}>
            <Button className="register-button" style={{width: '200px',textAlign: 'center', backgroundColor:'black',borderColor:'#e6a57d', fontWeight:'600'}} 
              onClick={()=>{
                window.open('https://forms.gle/vLdkjnAbPAsAoz2D7','_blank');
              }}
              >
                Register</Button>
                </div>
          </div>
          
            </ReactCardFlip>
          </div>

          <div className="flip-card">
            <ReactCardFlip isFlipped={isFlipped2} flipDirection="horizontal" flipSpeedBackToFront={1.5} flipSpeedFrontToBack={1.5}>
              <div className="flip-card" onClick={handleClick2} style={{backgroundImage: `url(${comingsoon})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
              </div>
              <div className="flip-card" onClick={handleClick2} style={{backgroundImage: `url(${whisper_bg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',display: 'flex', flexDirection: 'column', justifyContent: 'space-between',height:'100',}}>
              <div style={{textAlign: 'center'}}>
              <p className="technozarre-back-header" style={{color: 'white', marginTop:'10px',}}>Whisper Challenge</p>
            </div>
            <div className="technozarre-back" style={{fontSize: '15px', flex: 1, color: 'white',overflowY:'auto'}}>
            
              <p style={{color:'white'}}>🤫 Join the “Whisper Challenge” – Where Lip-Reading Becomes Your Superpower! 🎧</p>
              <p style={{color:'white'}}>Put on your headphones and try to decode the secret message just by watching your teammates’ lips. Pass it along and see how far the whispers can go in this hilarious team game!
              </p>
              <p style={{color:'white'}}>Test your lip-reading skills and enjoy the fun twists of this unpredictable challenge! 👄👀
              </p>      
            </div>
            <br />
            <div className='register-button' style={{marginTop: 'auto', textAlign: 'center',padding:'10px 0'}}>
            <Button className="register-button" style={{width: '200px',textAlign: 'center', backgroundColor:'black',borderColor:'#db9600', fontWeight:'600'}} 
              onClick={()=>{
                window.open('https://forms.gle/neqYkijQGYdNoDSS9','_blank');
              }}
              >
                Register</Button>
                </div>
              </div>
            </ReactCardFlip>
          </div>

          <div className="flip-card">
            <ReactCardFlip isFlipped={isFlipped3} flipDirection="horizontal" flipSpeedBackToFront={1.5} flipSpeedFrontToBack={1.5}>
              <div className="flip-card" onClick={handleClick3} style={{backgroundImage: `url(${comingsoon})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
              </div>
              <div className="flip-card" onClick={handleClick3} style={{backgroundImage: `url(${cine_connect_bg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',display: 'flex', flexDirection: 'column', justifyContent: 'space-between',height:'100',}}>
              <div style={{textAlign: 'center'}}>
              <p className="technozarre-back-header" style={{color: 'white', marginTop:'10px',}}>Cine Connect</p>
            </div>
            <div className="technozarre-back" style={{fontSize: '15px', flex: 1, color: 'white',overflowY:'auto'}}>
            
              <p style={{color:'white'}}>🎬 “Cine Connect” – Where Movie Buffs Turn Detectives! 🔍</p>
              <p style={{color:'white'}}>Think you know your favorite movies and shows inside out? Spot hidden connections between iconic pictures, test your pop culture knowledge, and unravel cinematic mysteries like a pro.
              </p>
              <p style={{color:'white'}}>Challenge your inner film geek and see if you’ve got what it takes to crack the code! 🎥✨              </p>      
            </div>
            <br />
            <div className='register-button' style={{marginTop: 'auto', textAlign: 'center',padding:'10px 0'}}>
            <Button className="register-button" style={{width: '200px',textAlign: 'center', backgroundColor:'black',borderColor:'pink', fontWeight:'600'}} 
              onClick={()=>{
                window.open('https://forms.gle/47F3uJeLy7vUTtb4A','_blank');
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
              <div className="flip-card" onClick={handleClick4} style={{backgroundImage: `url(${pickleball_bg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',display: 'flex', flexDirection: 'column', justifyContent: 'space-between',height:'100',}}>
              <div style={{textAlign: 'center'}}>
              <p className="technozarre-back-header" style={{color: 'white', marginTop:'10px',}}>Pickleball</p>
            </div>
            <div className="technozarre-back" style={{fontSize: '15px', flex: 1, color: 'white',overflowY:'auto'}}>
            
              <p style={{color:'white'}}>🎾 Join the Sport Everyone’s Talking About! 🎉</p>
              <p style={{color:'white'}}>Pickleball mixes the best of tennis, ping-pong, and badminton into one fast, fun, and strategic game! Easy to learn and perfect for all skill levels, it’s all about smashing, dinking, and having a blast.
              </p>
              <p style={{color:'white'}}>Whether you’re a pro or a beginner, pickleball is your ticket to excitement and victory! 🏆💪
              </p>      
            </div>
            <br />
            <div className='register-button' style={{marginTop: 'auto', textAlign: 'center',padding:'10px 0'}}>
            <Button className="register-button" style={{width: '200px',textAlign: 'center', backgroundColor:'black',borderColor:'#a1815c', fontWeight:'600'}} 
              onClick={()=>{
                window.open('https://forms.gle/Af3v1LTtYpCRxfHw5','_blank');
              }}
              >
                Register</Button>
                </div>
              </div>
            </ReactCardFlip>
          </div>

          <div className="flip-card">
            <ReactCardFlip isFlipped={isFlipped5} flipDirection="horizontal" flipSpeedBackToFront={1.5} flipSpeedFrontToBack={1.5}>
              <div className="flip-card" onClick={handleClick5} style={{backgroundImage: `url(${comingsoon})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
              </div>
              <div className="flip-card" onClick={handleClick5} style={{backgroundImage: `url(${picture_bg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',display: 'flex', flexDirection: 'column', justifyContent: 'space-between',height:'100',}}>
              <div style={{textAlign: 'center'}}>
              <p className="technozarre-back-header" style={{color: 'white', marginTop:'10px',}}>Picture Perfect</p>
            </div>
            <div className="technozarre-back" style={{fontSize: '15px', flex: 1, color: 'white',overflowY:'auto'}}>
            
              <p style={{color:'white'}}>📸 Unleash Your Inner Photographer at "Picture Perfect"! 🎨</p>
              <p style={{color:'white'}}>Got an eye for beauty? Show us how you see the world through your unique lens! Tell captivating stories with just one click and let your creativity shine in this thrilling photography showcase! ✨🌟
              </p>
              <p style={{color:'white'}}>Whether you're a pro with a DSLR or a smartphone photography genius, this is your moment to capture magic! Frame those perfect moments, play with light and shadows, and show us the world through your creative eyes! 🌈
              </p>      
            </div>
            <br />
            <div className='register-button' style={{marginTop: 'auto', textAlign: 'center',padding:'10px 0'}}>
            <Button className="register-button" style={{width: '200px',textAlign: 'center', backgroundColor:'black',borderColor:'red', fontWeight:'600'}} 
              onClick={()=>{
                window.open('https://forms.gle/dLj1q5X61KaoCtjT8','_blank');
              }}
              >
                Register</Button>
                </div>
          </div>
          
            </ReactCardFlip>
          </div>

          <div className="flip-card">
            <ReactCardFlip isFlipped={isFlipped6} flipDirection="horizontal" flipSpeedBackToFront={1.5} flipSpeedFrontToBack={1.5}>
              <div className="flip-card" onClick={handleClick6} style={{backgroundImage: `url(${comingsoon})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
              </div>
              <div className="flip-card" onClick={handleClick6} style={{backgroundImage: `url(${treasure_bg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',display: 'flex', flexDirection: 'column', justifyContent: 'space-between',height:'100',}}>
              <div style={{textAlign: 'center'}}>
              <p className="technozarre-back-header" style={{color: 'white', marginTop:'10px',}}>Treasure Hunt</p>
            </div>
            <div className="technozarre-back" style={{fontSize: '15px', flex: 1, color: 'white',overflowY:'auto'}}>
            
              <p style={{color:'white'}}>🗺️ Ready for the Ultimate "Treasure Hunt" Adventure? 🏃‍♀️</p>
              <p style={{color:'white'}}>Get ready to embark on an epic quest across campus! Put on your detective hats and join forces with your smartest friends for a thrilling treasure hunt that'll test your wits and teamwork! 🔍
              </p>
              <p style={{color:'white'}}>Race against time as you decode cryptic clues, solve challenging puzzles, and uncover hidden secrets at every turn! Think you have what it takes to crack the code and find the treasure? Gather your crew and let the adventure begin! 🎯
              </p>      
            </div>
            <br />
            <div className='register-button' style={{marginTop: 'auto', textAlign: 'center',padding:'10px 0'}}>
            <Button className="register-button" style={{width: '200px',textAlign: 'center', backgroundColor:'black',borderColor:'#5c85a1', fontWeight:'600'}} 
              onClick={()=>{
                window.open('https://forms.gle/X4v1utq8JQznhz3h7','_blank');
              }}
              >
                Register</Button>
                </div>
              </div>
            </ReactCardFlip>
          </div>

          <div className="flip-card">
            <ReactCardFlip isFlipped={isFlipped7} flipDirection="horizontal" flipSpeedBackToFront={1.5} flipSpeedFrontToBack={1.5}>
              <div className="flip-card" onClick={handleClick7} style={{backgroundImage: `url(${comingsoon})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
              </div>
              <div className="flip-card" onClick={handleClick7} style={{backgroundImage: `url(${scribble_bg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',display: 'flex', flexDirection: 'column', justifyContent: 'space-between',height:'100',}}>
              <div style={{textAlign: 'center'}}>
              <p className="technozarre-back-header" style={{color: 'white', marginTop:'10px',}}>Scribble</p>
            </div>
            <div className="technozarre-back" style={{fontSize: '15px', flex: 1, color: 'white',overflowY:'auto'}}>
            
              <p style={{color:'white'}}>✏️ Get Ready to "Scribble" - Where Art Meets Guesswork! 🎨</p>
              <p style={{color:'white'}}>Put your artistic skills to the test in this hilarious drawing and guessing game! Team up with friends and let your creativity shine as you race to sketch and solve! 🖌️
              </p>
              <p style={{color:'white'}}>Watch your teammates transform simple words into wild doodles and try to guess what on earth they're drawing! Whether you're the next Picasso or can barely draw a stick figure, this game is for everyone! Think fast, draw faster, and get ready for some seriously silly fun! ⚡
              </p>      
            </div>
            <br />
            <div className='register-button' style={{marginTop: 'auto', textAlign: 'center',padding:'10px 0'}}>
            <Button className="register-button" style={{width: '200px',textAlign: 'center', backgroundColor:'black',borderColor:'#c26456', fontWeight:'600'}} 
              onClick={()=>{
                window.open('https://forms.gle/qqrHDs2b63GJfr5y7','_blank');
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

export default NontechEvents;