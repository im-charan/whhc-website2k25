import { Card, CardGroup } from "react-bootstrap";
import one from '../../assets/hackhorizons2024/hh1.JPG';
import two from '../../assets/hackhorizons2024/hh2.JPG';
import three from '../../assets/hackhorizons2024/hh3.JPG';
import five from '../../assets/hackhorizons2024/hh5.JPG';
import six from '../../assets/hackhorizons2024/hh6.JPG';
import seven from '../../assets/hackhorizons2024/hh7.JPG';


const Hackhorizons = () =>{

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
            <Card.Img src={seven} style={{}} className="photogallery-card"/>
          </Card>
        </CardGroup>
      </div>
      <div style={{paddingTop: '10px'}}>
        <CardGroup>
          <Card style={{border: 'none', backgroundColor: 'transparent', marginLeft: '5px', marginRight: '5px'}}>
            <Card.Img src={three} style={{}} className="photogallery-card"/>
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
            White Hat Hackers Club of Department of Computer Science and Engineering (Emerging Technologies), SRMIST Vadapalani has 
            proudly hosted "Hack Horizons," a 12-hour innovation marathon on October 24th-25th, 2024. With 83 teams from various reputed
             Engineering Institutions across the state.  This high-energy hackathon focused on problem statements related to Smart Cities,
              Women’s Safety, Smart Education, and Agriculture. Participants brought their best ideas to the table and the top teams were
               awarded for creativity, feasibility, and impact, making Hack Horizons not just a competition but a celebration of vision,
               skill, and collaborative change!
            </p>
            <p className="home-paragraphtext">

              The event kicked off with an inspiring keynote that set the tone for a day of intense ideation and coding. Each 
              team worked around the clock in the Bharat Ratna Dr. APJ Abdul Kalam Lab, transforming ideas into functional prototypes. 
              Judges praised the diverse range of solutions, from AI-driven educational tools to IoT-enabled city management applications.
               During the valedictory ceremony, winners and participants were commended for their dedication and innovative spirit. Hack 
               Horizons 2024 exemplified SRMIST's commitment to empowering the next generation of tech innovators
            </p>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Hackhorizons;