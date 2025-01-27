import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import comingsoon from "../../assets/technozarre2k25/events/comingsoon.png"
import staytuned from "../../assets/technozarre2k25/events/staytuned.png"

const Events = () => {

  const [isFlipped1, setIsFlipped1] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);
  const [isFlipped3, setIsFlipped3] = useState(false);
  const [isFlipped4, setIsFlipped4] = useState(false);
  const [isFlipped5, setIsFlipped5] = useState(false);
  const [isFlipped6, setIsFlipped6] = useState(false);
  const [isFlipped7, setIsFlipped7] = useState(false);
  const [isFlipped8, setIsFlipped8] = useState(false);
  const [isFlipped9, setIsFlipped9] = useState(false);
  const [isFlipped10, setIsFlipped10] = useState(false);
  const [isFlipped11, setIsFlipped11] = useState(false);
  const [isFlipped12, setIsFlipped12] = useState(false);
  const [isFlipped13, setIsFlipped13] = useState(false);
  const [isFlipped14, setIsFlipped14] = useState(false);
  const [isFlipped15, setIsFlipped15] = useState(false);
  const [isFlipped16, setIsFlipped16] = useState(false);
  const [isFlipped17, setIsFlipped17] = useState(false);
  const [isFlipped18, setIsFlipped18] = useState(false);

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
  const handleClick9 = () => {
    setIsFlipped9(!isFlipped9);
  }
  const handleClick10 = () => {
    setIsFlipped10(!isFlipped10);
  }
  const handleClick11 = () => {
    setIsFlipped11(!isFlipped11);
  }
  const handleClick12 = () => {
    setIsFlipped12(!isFlipped12);
  }
  const handleClick13 = () => {
    setIsFlipped13(!isFlipped13);
  }
  const handleClick14 = () => {
    setIsFlipped14(!isFlipped14);
  }
  const handleClick15 = () => {
    setIsFlipped15(!isFlipped15);
  }
  const handleClick16 = () => {
    setIsFlipped16(!isFlipped16);
  }
  const handleClick17 = () => {
    setIsFlipped17(!isFlipped17);
  }
  const handleClick18 = () => {
    setIsFlipped18(!isFlipped18);
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
              <div className="flip-card" onClick={handleClick1} style={{backgroundImage: `url(${comingsoon})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
              </div>
              <div className="flip-card" onClick={handleClick1} style={{backgroundImage: `url(${staytuned})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
              </div>
            </ReactCardFlip>
          </div>

          <div className="flip-card">
            <ReactCardFlip isFlipped={isFlipped2} flipDirection="horizontal" flipSpeedBackToFront={1.5} flipSpeedFrontToBack={1.5}>
              <div className="flip-card" onClick={handleClick2} style={{backgroundImage: `url(${comingsoon})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
              </div>
              <div className="flip-card" onClick={handleClick2} style={{backgroundImage: `url(${staytuned})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
              </div>
            </ReactCardFlip>
          </div>

          <div className="flip-card">
            <ReactCardFlip isFlipped={isFlipped3} flipDirection="horizontal" flipSpeedBackToFront={1.5} flipSpeedFrontToBack={1.5}>
              <div className="flip-card" onClick={handleClick3} style={{backgroundImage: `url(${comingsoon})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
              </div>
              <div className="flip-card" onClick={handleClick3} style={{backgroundImage: `url(${staytuned})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
              </div>
            </ReactCardFlip>
          </div>

          <div className="flip-card">
            <ReactCardFlip isFlipped={isFlipped4} flipDirection="horizontal" flipSpeedBackToFront={1.5} flipSpeedFrontToBack={1.5}>
              <div className="flip-card" onClick={handleClick4} style={{backgroundImage: `url(${comingsoon})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
              </div>
              <div className="flip-card" onClick={handleClick4} style={{backgroundImage: `url(${staytuned})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
              </div>
            </ReactCardFlip>
          </div>

          <div className="flip-card">
            <ReactCardFlip isFlipped={isFlipped5} flipDirection="horizontal" flipSpeedBackToFront={1.5} flipSpeedFrontToBack={1.5}>
              <div className="flip-card" onClick={handleClick5} style={{backgroundImage: `url(${comingsoon})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
              </div>
              <div className="flip-card" onClick={handleClick5} style={{backgroundImage: `url(${staytuned})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
              </div>
            </ReactCardFlip>
          </div>

          <div className="flip-card">
            <ReactCardFlip isFlipped={isFlipped6} flipDirection="horizontal" flipSpeedBackToFront={1.5} flipSpeedFrontToBack={1.5}>
              <div className="flip-card" onClick={handleClick6} style={{backgroundImage: `url(${comingsoon})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
              </div>
              <div className="flip-card" onClick={handleClick6} style={{backgroundImage: `url(${staytuned})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
              </div>
            </ReactCardFlip>
          </div>

          <div className="flip-card">
            <ReactCardFlip isFlipped={isFlipped7} flipDirection="horizontal" flipSpeedBackToFront={1.5} flipSpeedFrontToBack={1.5}>
              <div className="flip-card" onClick={handleClick7} style={{backgroundImage: `url(${comingsoon})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
              </div>
              <div className="flip-card" onClick={handleClick7} style={{backgroundImage: `url(${staytuned})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
              </div>
            </ReactCardFlip>
          </div>

          <div className="flip-card">
            <ReactCardFlip isFlipped={isFlipped8} flipDirection="horizontal" flipSpeedBackToFront={1.5} flipSpeedFrontToBack={1.5}>
              <div className="flip-card" onClick={handleClick8} style={{backgroundImage: `url(${comingsoon})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
              </div>
              <div className="flip-card" onClick={handleClick8} style={{backgroundImage: `url(${staytuned})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
              </div>
            </ReactCardFlip>
          </div>
        </div>
      </div>

      <div>
        <div style={{color: 'white', fontSize:'45px', fontWeight:'700', textAlign:'center'}}>
          <text className="technozarre-subtitle">
            NON-TECHNICAL EVENTS
          </text>
        </div>

        <div className="flip-card-wrapper" >
          <div className="flip-card">
            <ReactCardFlip isFlipped={isFlipped9} flipDirection="horizontal" flipSpeedBackToFront={1.5} flipSpeedFrontToBack={1.5}>
              <div className="flip-card" onClick={handleClick9} style={{backgroundImage: `url(${comingsoon})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
              </div>
              <div className="flip-card" onClick={handleClick9} style={{backgroundImage: `url(${staytuned})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
              </div>
            </ReactCardFlip>
          </div>

          <div className="flip-card">
            <ReactCardFlip isFlipped={isFlipped10} flipDirection="horizontal" flipSpeedBackToFront={1.5} flipSpeedFrontToBack={1.5}>
              <div className="flip-card" onClick={handleClick10} style={{backgroundImage: `url(${comingsoon})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
              </div>
              <div className="flip-card" onClick={handleClick10} style={{backgroundImage: `url(${staytuned})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
              </div>
            </ReactCardFlip>
          </div>

          <div className="flip-card">
            <ReactCardFlip isFlipped={isFlipped11} flipDirection="horizontal" flipSpeedBackToFront={1.5} flipSpeedFrontToBack={1.5}>
              <div className="flip-card" onClick={handleClick11} style={{backgroundImage: `url(${comingsoon})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
              </div>
              <div className="flip-card" onClick={handleClick11} style={{backgroundImage: `url(${staytuned})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
              </div>
            </ReactCardFlip>
          </div>

          <div className="flip-card">
            <ReactCardFlip isFlipped={isFlipped12} flipDirection="horizontal" flipSpeedBackToFront={1.5} flipSpeedFrontToBack={1.5}>
              <div className="flip-card" onClick={handleClick12} style={{backgroundImage: `url(${comingsoon})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
              </div>
              <div className="flip-card" onClick={handleClick12} style={{backgroundImage: `url(${staytuned})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
              </div>
            </ReactCardFlip>
          </div>

          <div className="flip-card">
            <ReactCardFlip isFlipped={isFlipped13} flipDirection="horizontal" flipSpeedBackToFront={1.5} flipSpeedFrontToBack={1.5}>
              <div className="flip-card" onClick={handleClick13} style={{backgroundImage: `url(${comingsoon})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
              </div>
              <div className="flip-card" onClick={handleClick13} style={{backgroundImage: `url(${staytuned})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
              </div>
            </ReactCardFlip>
          </div>

          <div className="flip-card">
            <ReactCardFlip isFlipped={isFlipped14} flipDirection="horizontal" flipSpeedBackToFront={1.5} flipSpeedFrontToBack={1.5}>
              <div className="flip-card" onClick={handleClick14} style={{backgroundImage: `url(${comingsoon})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
              </div>
              <div className="flip-card" onClick={handleClick14} style={{backgroundImage: `url(${staytuned})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
              </div>
            </ReactCardFlip>
          </div>

          <div className="flip-card">
            <ReactCardFlip isFlipped={isFlipped15} flipDirection="horizontal" flipSpeedBackToFront={1.5} flipSpeedFrontToBack={1.5}>
              <div className="flip-card" onClick={handleClick15} style={{backgroundImage: `url(${comingsoon})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
              </div>
              <div className="flip-card" onClick={handleClick15} style={{backgroundImage: `url(${staytuned})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
              </div>
            </ReactCardFlip>
          </div>
        </div>
      </div>

      <div>
        <div style={{color: 'white', fontSize:'45px', fontWeight:'700', textAlign:'center'}}>
          <text className="technozarre-subtitle">
            GAMING EVENTS
          </text>
        </div>

        <div className="flip-card-wrapper" >
          <div className="flip-card">
            <ReactCardFlip isFlipped={isFlipped16} flipDirection="horizontal" flipSpeedBackToFront={1.5} flipSpeedFrontToBack={1.5}>
              <div className="flip-card" onClick={handleClick16} style={{backgroundImage: `url(${comingsoon})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
              </div>
              <div className="flip-card" onClick={handleClick16} style={{backgroundImage: `url(${staytuned})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
              </div>
            </ReactCardFlip>
          </div>

          <div className="flip-card">
            <ReactCardFlip isFlipped={isFlipped17} flipDirection="horizontal" flipSpeedBackToFront={1.5} flipSpeedFrontToBack={1.5}>
              <div className="flip-card" onClick={handleClick17} style={{backgroundImage: `url(${comingsoon})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
              </div>
              <div className="flip-card" onClick={handleClick17} style={{backgroundImage: `url(${staytuned})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
              </div>
            </ReactCardFlip>
          </div>

          <div className="flip-card">
            <ReactCardFlip isFlipped={isFlipped18} flipDirection="horizontal" flipSpeedBackToFront={1.5} flipSpeedFrontToBack={1.5}>
              <div className="flip-card" onClick={handleClick18} style={{backgroundImage: `url(${comingsoon})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
              </div>
              <div className="flip-card" onClick={handleClick18} style={{backgroundImage: `url(${staytuned})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
              </div>
            </ReactCardFlip>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Events;