import {Card, CardGroup} from "react-bootstrap";
import one from '../../assets/cicada2024/1.jpeg';
import two from '../../assets/cicada2024/2.jpeg';
import three from '../../assets/cicada2024/3.jpeg';
import four from '../../assets/cicada2024/4.jpeg';
import five from '../../assets/cicada2024/5.jpeg';
import six from '../../assets/cicada2024/6.jpeg';


const Cicada = () => {

  return (
    <div>
      <div>
        <CardGroup>
          <Card style={{border: 'none', backgroundColor: 'transparent', marginLeft: '5px', marginRight: '5px'}}>
            <Card.Img src={one} style={{}} className="photogallery-card"/>
          </Card>
          <Card style={{border: 'none', backgroundColor: 'transparent',marginLeft: '5px', marginRight: '5px'}}>
            <Card.Img src={two} style={{}} className="photogallery-card"/>
          </Card>
          <Card style={{border: 'none', backgroundColor: 'transparent',marginLeft: '5px', marginRight: '5px'}}>
          <Card.Img src={three} style={{}} className="photogallery-card"/>
            </Card>
          </CardGroup>
      </div>
      <div>
        <CardGroup>
          <Card style={{border: 'none', backgroundColor: 'transparent', marginLeft: '5px', marginRight: '5px'}}>
            <Card.Img src={four} style={{}} className="photogallery-card"/>
          </Card>
          <Card style={{border: 'none', backgroundColor: 'transparent',marginLeft: '5px', marginRight: '5px'}}>
            <Card.Img src={five} style={{}} className="photogallery-card"/>
          </Card>
          <Card style={{border: 'none', backgroundColor: 'transparent',marginLeft: '5px', marginRight: '5px'}}>
          <Card.Img src={six} style={{}} className="photogallery-card"/>
            </Card>
          </CardGroup>
      </div>
      <div style={{ justifyContent: 'center', marginTop: '30px'}}>
        <div className="home-aboutustext">
          <div style={{paddingRight: '2%', paddingLeft: '2%',paddingTop: '2%', paddingBottom: '2%'}}>
            <p className="home-paragraphtext">
            Organized by the White Hat Hackers Club, Cicada 2024 took inspiration from the legendary Cicada 3301, testing participants 
            across cryptography, coding, and steganography! The enthusiasm was electric, with a diverse crowd from schools and colleges competing in three challenging events.
            </p>
            <p className="home-paragraphtext">
            Cicada 2024 brought together 148 participants from top colleges and schools, testing their skills in coding,
             debugging, and cryptography. From 57 coders racing against time in the Python Puzzle Hunt, to 55 participants showcasing their
              debugging expertise in Hit the Bug, and 36 brilliant minds tackling cryptographic puzzles in the Cicada 3301 Challenge, the 
              event was a celebration of talent and problem-solving. Thank you to everyone for making Cicada 2024 an unforgettable experience!
            </p>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Cicada;