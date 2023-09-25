import React from 'react';
import img from './front1.jpg';
import img1 from './logoimage.png';
import { Row, Col, Container } from 'react-bootstrap';


function Home() {
  return <>
    <div>
      <img src={img} />
    </div>
    <Container>
      {/* First Row */}
      <Row>
        <Col xs={1}>
          <img src={img1} width={120} height={100} />
        </Col>
        <Col>
         <p>The Election Commission of India is an autonomous
          constitutional authority responsible for administering election processes
          in India. The body administers elections to the Lok Sabha, Rajya Sabha, State Legislative Assemblies in India,
          and the offices of the President and Vice President in the country. The Election Commission operates under the authority of
          Constitution per Article 324, and subsequently enacted Representation of the People Act.</p> 
        </Col>
      </Row>
    </Container><br/><br/><br/><br/>
    <footer style={{backgroundColor:"black"}}> <p style={{textAlign:"center",color:"white"}}>&copy;Copyright Election Commission of India</p></footer>
  </>
}
export default Home