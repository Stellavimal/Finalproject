import React from 'react';
import img from './front1.jpg';
import img1 from './logoimage.png';
import Card from 'react-bootstrap/Card';

function Home() {
  return <>
  <div>
<img src={img}/>
</div>
<div>
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img1} />
      <Card.Body>
      </Card.Body>
    </Card>
  
</div>
<div>
<Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Elcetion of India </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  
</div>

</>
}
export default Home