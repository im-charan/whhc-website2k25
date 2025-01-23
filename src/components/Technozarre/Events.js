import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import sih from "../../assets/technozarre2k25/workshops/Sih.jpeg"

const Events = () => {

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
    <div className="flip-card-wrapper" >
      <div className="flip-card">
        <ReactCardFlip isFlipped={isFlipped1} flipDirection="horizontal" flipSpeedBackToFront={1.5} flipSpeedFrontToBack={1.5}>
          <div className="flip-card" onClick={handleClick1} style={{backgroundImage: `url(${sih})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
          </div>
          <div className="flip-card" onClick={handleClick1} style={{backgroundColor: 'rgba(72, 3, 89, 0.46)'}}>
            <h2 style={{color: 'white', }}>Nothing</h2>
          </div>
        </ReactCardFlip>
      </div>

      <div className="flip-card">
        <ReactCardFlip isFlipped={isFlipped2} flipDirection="horizontal" flipSpeedBackToFront={1.5} flipSpeedFrontToBack={1.5}>
          <div className="flip-card" onClick={handleClick2} style={{backgroundImage: `url(${sih})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
          </div>
          <div className="flip-card" onClick={handleClick2} style={{backgroundColor: 'rgba(72, 3, 89, 0.46)'}}>
          </div>
        </ReactCardFlip>
      </div>

      <div className="flip-card">
        <ReactCardFlip isFlipped={isFlipped3} flipDirection="horizontal" flipSpeedBackToFront={1.5} flipSpeedFrontToBack={1.5}>
          <div className="flip-card" onClick={handleClick3} style={{backgroundImage: `url(${sih})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
          </div>
          <div className="flip-card" onClick={handleClick3} style={{backgroundColor: 'rgba(72, 3, 89, 0.46)'}}>
          </div>
        </ReactCardFlip>
      </div>

      <div className="flip-card">
        <ReactCardFlip isFlipped={isFlipped4} flipDirection="horizontal" flipSpeedBackToFront={1.5} flipSpeedFrontToBack={1.5}>
          <div className="flip-card" onClick={handleClick4} style={{backgroundImage: `url(${sih})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
          </div>
          <div className="flip-card" onClick={handleClick4} style={{backgroundColor: 'rgba(72, 3, 89, 0.46)'}}>
          </div>
        </ReactCardFlip>
      </div>
    </div>
  )
}

export default Events;