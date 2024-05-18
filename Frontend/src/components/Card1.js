import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image21 from "./images/Image21.jpg";
import Image22 from "./images/Image22.jpg";
import Image23 from "./images/Image23.jpg";
import "../CSS_Component/Card1.css"

const additionalData=[
  {
    cardTitle:"Effective Recovery Strategies",
    cardText:"Most of the debt recovery strategies often incur costs to the debt recovery firm and is a time consuming job. Some of the most sorted recovery methods can be adopted to speed up the debt recovery process.",
    image: Image21,
  },
  {
    cardTitle:"Asset Security",
    cardText:"It can serve as one of the most effective recovery tools, in case the debt falls due to any unavoidable reason.",
    image: Image22,
  },
  {
    cardTitle:"Personal Guarantee by Directors",
    cardText:"Directors must give the personal guarantee that gives direct access to the assets of the company and recovery can be made easier.",
    image: Image23,
  },
]

function GridExample() {
  return (
    <Row xs={1} md={3} className="row row-cols-1 row-cols-md-2 g-4">
      {additionalData.map((add, idx)  => (
        <Col key={idx}>
          <Card className="card1 , h-100">
            <Card.Img variant="top" src={add.image} />
            <Card.Body className="d-flex flex-column">
              <Card.Title style={{fontWeight: "bold", textAlign: "center"}}>{add.cardTitle}</Card.Title>
              <Card.Text className="flex-grow-1">{add.cardText}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default GridExample;