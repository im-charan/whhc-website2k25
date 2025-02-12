import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import comingsoon from "../../assets/technozarre2k25/events/comingsoon.png"
import etreasure_bg from "../../assets/technozarre2k25/events/etreasure_bg.jpg"
import scifi_bg from "../../assets/technozarre2k25/events/scifi_bg.png"
import python_bg from "../../assets/technozarre2k25/events/python_bg.png"
import sqlize_bg from "../../assets/technozarre2k25/events/sqlize_bg.png"
import lucky_bg from "../../assets/technozarre2k25/events/lucky_bg.png"
import zero_bg from "../../assets/technozarre2k25/events/zero_bg.png"
import code_bg from "../../assets/technozarre2k25/events/code_bg.png"
import etreasure from "../../assets/technozarre2k25/events/etreasure.png"
import scifi from "../../assets/technozarre2k25/events/scifi.png"
import python from "../../assets/technozarre2k25/events/python.png"
import sqlize from "../../assets/technozarre2k25/events/sqlize.png"
import lucky from "../../assets/technozarre2k25/events/lucky.png"
import zero from "../../assets/technozarre2k25/events/zero.png"
import code from "../../assets/technozarre2k25/events/code.png"
import bidtocode from "../../assets/technozarre2k25/events/bidtocode.jpeg"
import sih_bg from "../../assets/technozarre2k25/workshops/sih_bg.png"

import { Button } from "react-bootstrap";


const TechnicalEvents = () => {
  const [isFlipped1, setIsFlipped1] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);
  const [isFlipped3, setIsFlipped3] = useState(false);
  const [isFlipped4, setIsFlipped4] = useState(false);
  const [isFlipped5, setIsFlipped5] = useState(false);
  const [isFlipped6, setIsFlipped6] = useState(false);
  const [isFlipped7, setIsFlipped7] = useState(false);
  const [isFlipped8, setIsFlipped8] = useState(false);

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
  const handleClick8 = () => {
    setIsFlipped8(!isFlipped8);
  }

  return (
    <div>
      <div>
        <div style={{color: 'white', fontSize:'45px', fontWeight:'700', textAlign:'center'}}>
          <text className="technozarre-subtitle">
            TECHNICAL EVENTS
          </text>
        </div>

        <div className="flip-card-wrapper" >
          <div className="flip-card">
            <ReactCardFlip isFlipped={isFlipped1} flipDirection="horizontal" flipSpeedBackToFront={1.5} flipSpeedFrontToBack={1.5}>
              <div className="flip-card" onClick={handleClick1} style={{backgroundImage: `url(${scifi})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',display: 'flex', flexDirection: 'column', justifyContent: 'space-between',height:'100',}}>
              <div className='register-button' style={{marginTop: 'auto', textAlign: 'center',padding:'10px 0'}}>
                </div>
              </div>
              <div className="flip-card" onClick={handleClick1} style={{backgroundImage: `url(${scifi_bg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',display: 'flex', flexDirection: 'column', justifyContent: 'space-between',height:'100',}}>
              <div style={{textAlign: 'center'}}>
              <p className="technozarre-back-header" style={{color: 'white', marginTop:'10px',}}>Sci-Fi Debate</p>
            </div>
            <div className="technozarre-back" style={{fontSize: '15px', flex: 1, color: 'white',overflowY:'auto'}}>
            
              <p style={{color:'white'}}>🚀🗣️ Ready to journey into the future? Join us for the "SCI-FI DEBATE"! 🛸✨</p>
              <p style={{color:'white'}}>Dive into quirky, mind-bending topics like 🤖 "Should robots have voting rights?" or ⏳ "Is time travel ethical?" Get ready to showcase your creativity and logic in a battle of wits that’s out of this world! 🌌🎙️
              </p>
              <p style={{color:'white'}}>Bring your best arguments, futuristic flair, and a dash of imagination to impress our judges and your peers. Are you ready to debate the possibilities of tomorrow? 🌠⚖️
              </p>      
            </div>
            <br />
            <div className='register-button' style={{marginTop: 'auto', textAlign: 'center',padding:'10px 0'}}>
            <Button className="register-button" style={{width: '200px',textAlign: 'center', backgroundColor:'black',borderColor:'#dde67b', fontWeight:'600'}} 
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
            <ReactCardFlip isFlipped={isFlipped2} flipDirection="horizontal" flipSpeedBackToFront={1.5} flipSpeedFrontToBack={1.5}>
              <div className="flip-card" onClick={handleClick2} style={{backgroundImage: `url(${python})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
              </div>
              <div className="flip-card" onClick={handleClick2} style={{backgroundImage: `url(${python_bg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',display: 'flex', flexDirection: 'column', justifyContent: 'space-between',height:'100',}}>
              <div style={{textAlign: 'center'}}>
              <p className="technozarre-back-header" style={{color: 'white', marginTop:'10px',}}>Python Puzzle Hunt</p>
            </div>
            <div className="technozarre-back" style={{fontSize: '15px', flex: 1, color: 'white',overflowY:'auto'}}>
            
              <p style={{color:'white'}}>🐍💻 Get ready to unleash your inner coder in the "PYTHON PUZZLE HUNT"! 🧩✨</p>
              <p style={{color:'white'}}>Put your Python skills to the ultimate test as you crack codes, decode clues, and tackle creative challenges designed to spark your problem-solving genius! 🕵️‍♂️🔍 Whether you're a seasoned coder or a curious beginner, this engaging puzzle hunt will keep you on your toes and your mind racing! 🧠⚡
              </p>
              <p style={{color:'white'}}>Do you have what it takes to conquer the challenges and emerge as the ultimate Python problem-solver? Let the hunt begin! 🎯🐍
              </p>      
            </div>
            <br />
            <div className='register-button' style={{marginTop: 'auto', textAlign: 'center',padding:'10px 0'}}>
            <Button className="register-button" style={{width: '200px',textAlign: 'center', backgroundColor:'black',borderColor:'#7bd4e6', fontWeight:'600'}} 
              onClick={()=>{
                window.open('https://forms.gle/KwMGMWc182gycvMU7','_blank');
              }}
              >
                Register</Button>
                </div>
              </div>
            </ReactCardFlip>
          </div>

          <div className="flip-card">
            <ReactCardFlip isFlipped={isFlipped3} flipDirection="horizontal" flipSpeedBackToFront={1.5} flipSpeedFrontToBack={1.5}>
              <div className="flip-card" onClick={handleClick3} style={{backgroundImage: `url(${sqlize})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
              </div>
              <div className="flip-card" onClick={handleClick3} style={{backgroundImage: `url(${sqlize_bg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',display: 'flex', flexDirection: 'column', justifyContent: 'space-between',height:'100',}}>
              <div style={{textAlign: 'center'}}>
              <p className="technozarre-back-header" style={{color: 'white', marginTop:'10px',}}>SQLize</p>
            </div>
            <div className="technozarre-back" style={{fontSize: '15px', flex: 1, color: 'white',overflowY:'auto'}}>
            
              <p style={{color:'white'}}>📊💡 Ready to query your way to the top? Join us for "SQLIZE" – the ultimate SQL showdown! 🖥️✨</p>
              <p style={{color:'white'}}>Dive into an exciting competition where your SQL skills will be put to the test with intricate problems and creative challenges. 🧑‍💻🔍 Perfect for beginners and novices, this event is designed to boost your confidence and showcase your potential in database wizardry! 🗂️⚡
              </p>
              <p style={{color:'white'}}>Whether you're joining to learn, compete, or simply have fun, "SQLIZE" promises an engaging experience for all. Are you ready to show off your querying skills? 🚀💻
              </p>      
            </div>
            <br />
            <div className='register-button' style={{marginTop: 'auto', textAlign: 'center',padding:'10px 0'}}>
            <Button className="register-button" style={{width: '200px',textAlign: 'center', backgroundColor:'black',borderColor:'#0aa1a1', fontWeight:'600'}} 
              onClick={()=>{
                window.open('https://forms.gle/fXcdpp5RE4K4PZEz9','_blank');
              }}
              >
                Register</Button>
                </div>
                </div>
            </ReactCardFlip>
          </div>

          <div className="flip-card">
            <ReactCardFlip isFlipped={isFlipped4} flipDirection="horizontal" flipSpeedBackToFront={1.5} flipSpeedFrontToBack={1.5}>
              <div className="flip-card" onClick={handleClick4} style={{backgroundImage: `url(${lucky})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
              </div>
              <div className="flip-card" onClick={handleClick4} style={{backgroundImage: `url(${lucky_bg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',display: 'flex', flexDirection: 'column', justifyContent: 'space-between',height:'100',}}>
              <div style={{textAlign: 'center'}}>
              <p className="technozarre-back-header" style={{color: 'white', marginTop:'10px',}}>Lucky Bhasker</p>
            </div>
            <div className="technozarre-back" style={{fontSize: '15px', flex: 1, color: 'white',overflowY:'auto'}}>
            
              <p style={{color:'white'}}>💸📈 Step into the thrilling world of stocks with "LUCKY BHASKER - Stock Market Challenge"! 🤑✨</p>
              <p style={{color:'white'}}>Gear up to test your investment instincts as teams receive an initial sum of virtual money and a sneak peek into potential companies. 📊💼 Strategize, analyze, and take calculated risks across multiple rounds, each filled with intriguing clues to guide your decisions. 💡📜
              </p>
              <p style={{color:'white'}}>The goal? Build the biggest portfolio and claim victory as the ultimate stock market master! Whether you're a seasoned market enthusiast or a curious beginner, this challenge guarantees excitement, strategy, and a taste of the financial thrill. 💵🎯
              </p>      
            </div>
            <br />
            <div className='register-button' style={{marginTop: 'auto', textAlign: 'center',padding:'10px 0'}}>
            <Button className="register-button" style={{width: '200px',textAlign: 'center', backgroundColor:'black',borderColor:'#e27b28', fontWeight:'600'}} 
              onClick={()=>{
                window.open('https://forms.gle/wahf3pX5FdU368gBA','_blank');
              }}
              >
                Register</Button>
                </div>
              </div>
            </ReactCardFlip>
          </div>

          <div className="flip-card">
            <ReactCardFlip isFlipped={isFlipped5} flipDirection="horizontal" flipSpeedBackToFront={1.5} flipSpeedFrontToBack={1.5}>
              <div className="flip-card" onClick={handleClick5} style={{backgroundImage: `url(${zero})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
              </div>
              <div className="flip-card" onClick={handleClick5} style={{backgroundImage: `url(${zero_bg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',display: 'flex', flexDirection: 'column', justifyContent: 'space-between',height:'100',}}>
              <div style={{textAlign: 'center'}}>
              <p className="technozarre-back-header" style={{color: 'white', marginTop:'10px',}}>Zero Day Attack</p>
            </div>
            <div className="technozarre-back" style={{fontSize: '15px', flex: 1, color: 'white',overflowY:'auto'}}>
            
              <p style={{color:'white'}}>🛡️💻 Are you ready to defend and attack in the ultimate cybersecurity showdown? Join "ZERO DAY ATTACK"! 🕵️‍♂️⚡</p>
              <p style={{color:'white'}}>This event blends the excitement of a bug hunt with the thrill of capture the flag as participants take on a series of intense "war games." 🐞🎯 Hone your problem-solving, exploit-hunting, and critical thinking skills to conquer challenges that test your cybersecurity prowess. 🔒✨
              </p>
              <p style={{color:'white'}}>Whether you're a budding ethical hacker or a seasoned defender of the web, "ZERO DAY ATTACK" will push you to your limits. Will you emerge victorious? 🌐🏆
              </p>      
            </div>
            <br />
            <div className='register-button' style={{marginTop: 'auto', textAlign: 'center',padding:'10px 0'}}>
            <Button className="register-button" style={{width: '200px',textAlign: 'center', backgroundColor:'black',borderColor:'maroon', fontWeight:'600'}} 
              onClick={()=>{
                window.open('https://forms.gle/dcrLkewFV6imJaxo7','_blank');
              }}
              >
                Register</Button>
                </div>
          </div>
          
            </ReactCardFlip>
          </div>

          <div className="flip-card">
            <ReactCardFlip isFlipped={isFlipped6} flipDirection="horizontal" flipSpeedBackToFront={1.5} flipSpeedFrontToBack={1.5}>
              <div className="flip-card" onClick={handleClick6} style={{backgroundImage: `url(${etreasure})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
              </div>
              <div className="flip-card" onClick={handleClick6} style={{backgroundImage: `url(${etreasure_bg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',display: 'flex', flexDirection: 'column', justifyContent: 'space-between',height:'100',}}>
              <div style={{textAlign: 'center'}}>
              <p className="technozarre-back-header" style={{color: 'white', marginTop:'10px',}}>E Treasure Hunt</p>
            </div>
            <div className="technozarre-back" style={{fontSize: '15px', flex: 1, color: 'white',overflowY:'auto'}}>
            
              <p style={{color:'white'}}>🏴‍☠️💻 Set sail on a digital adventure with the "E TREASURE HUNT"! 🌟✨</p>
              <p style={{color:'white'}}>Form your team and dive into a thrilling journey where every PDF hides cryptic clues leading to the next challenge. 🗂️🔍 Solve riddles, crack codes, and unlock secrets as you race against time to uncover the final treasure. 🕵️‍♀️💡
              </p>
              <p style={{color:'white'}}>With each challenge more intriguing than the last, this event promises excitement, teamwork, and a true test of your problem-solving skills. Will your team conquer the quest and claim the ultimate treasure? 🏆⚡
              </p>      
            </div>
            <br />
            <div className='register-button' style={{marginTop: 'auto', textAlign: 'center',padding:'10px 0'}}>
            <Button className="register-button" style={{width: '200px',textAlign: 'center', backgroundColor:'black',borderColor:'green', fontWeight:'600'}} 
              onClick={()=>{
                window.open('https://forms.gle/BJSdS4fvXrz5oaPr6','_blank');
              }}
              >
                Register</Button>
                </div>
              </div>
            </ReactCardFlip>
          </div>

          <div className="flip-card">
            <ReactCardFlip isFlipped={isFlipped7} flipDirection="horizontal" flipSpeedBackToFront={1.5} flipSpeedFrontToBack={1.5}>
              <div className="flip-card" onClick={handleClick7} style={{backgroundImage: `url(${code})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
              </div>
              <div className="flip-card" onClick={handleClick7} style={{backgroundImage: `url(${code_bg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',display: 'flex', flexDirection: 'column', justifyContent: 'space-between',height:'100',}}>
              <div style={{textAlign: 'center'}}>
              <p className="technozarre-back-header" style={{color: 'white', marginTop:'10px',}}>Code in the Dark</p>
            </div>
            <div className="technozarre-back" style={{fontSize: '15px', flex: 1, color: 'white',overflowY:'auto'}}>
            
              <p style={{color:'white'}}>🌌💻 Step into the thrilling world of "CODE IN THE DARK"! 🌟⚡</p>
              <p style={{color:'white'}}>Test your coding skills like never before as you tackle the challenge of recreating a webpage or solving a problem entirely from memory. 🧑‍💻🚀 No previews, no second chances—just pure skill, creativity, and your coding instincts under pressure! 🖥️🕶️
              </p>
              <p style={{color:'white'}}>With the clock ticking and the stakes high, can you craft the perfect solution in the dark? Prove your prowess and claim the title of the ultimate coding master! 💡🏆
              </p>      
            </div>
            <br />
            <div className='register-button' style={{marginTop: 'auto', textAlign: 'center',padding:'10px 0'}}>
            <Button className="register-button" style={{width: '200px',textAlign: 'center', backgroundColor:'black',borderColor:'#e2624b', fontWeight:'600'}} 
              onClick={()=>{
                window.open('https://forms.gle/KC1ZAjKzVDtDri7N9','_blank');
              }}
              >
                Register</Button>
                </div>
                </div>
            </ReactCardFlip>
          </div>

          <div className="flip-card">
            <ReactCardFlip isFlipped={isFlipped8} flipDirection="horizontal" flipSpeedBackToFront={1.5} flipSpeedFrontToBack={1.5}>
              <div className="flip-card" onClick={handleClick8} style={{backgroundImage: `url(${bidtocode})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
              </div>
              <div className="flip-card" onClick={handleClick8} style={{backgroundImage: `url(${sih_bg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',display: 'flex', flexDirection: 'column', justifyContent: 'space-between',height:'100',}}>
              <div style={{textAlign: 'center'}}>
              <p className="technozarre-back-header" style={{color: 'white', marginTop:'10px',}}>Bid to Code</p>
            </div>
            <div className="technozarre-back" style={{fontSize: '15px', flex: 1, color: 'white',overflowY:'auto'}}>
            
              <p style={{color:'white'}}>💸💻 Ready to outbid, outcode, and outsmart? Join "BID TO CODE" – the ultimate strategic coding challenge! 🎯⚡</p>
              <p style={{color:'white'}}>Put your confidence and problem-solving skills to the test as you bid on how quickly you can solve DSA-based or web development problems. ⏳🧑‍💻 The lower you bid, the tougher the challenge! It’s a race against time, where strategy meets coding excellence.
              </p>
              <p style={{color:'white'}}>Can you back up your bold bids with skill and deliver under pressure? Rise to the occasion, and let your code speak louder than words! 💡🏆
              </p>      
            </div>
            <br />
            <div className='register-button' style={{marginTop: 'auto', textAlign: 'center',padding:'10px 0'}}>
            <Button className="register-button" style={{width: '200px',textAlign: 'center', backgroundColor:'black',borderColor:'red', fontWeight:'600'}} 
              onClick={()=>{
                window.open('https://forms.gle/aiupcwEPuRwBhEv97','_blank');
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

export default TechnicalEvents;