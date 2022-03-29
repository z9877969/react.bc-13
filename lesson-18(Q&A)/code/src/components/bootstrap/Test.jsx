import { Row, Button, Col } from "react-bootstrap";

const Test = () => {
  return (
    <Row>
      {/* <Col md={6}> */}
      <Row as={Col} md={6}>
        <Button  variant="primary">Button #1</Button>
        <Button md={6} variant="secondary" className="mx-4">Button #2</Button>
        <Button  variant="success">Button #3</Button>
      </Row>
      {/* </Col> */}
    </Row>
  );
};

export default Test;

// {/* <ul className="row">
//   <li className="col-3">Content</li>
//   <li className="col-3">Content</li>
//   <li className="col-3">Content</li>
//   <li className="col-3">Content</li>
// </ul>; */}
