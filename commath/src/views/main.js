import React from "react";
import { CardTitle, CardText, Row, Col, Button, Card } from "reactstrap";
import "../App.css";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Main() {
  const navigate = useNavigate();

  const nextPage = (page) => {
    navigate("/"+page);
  }

  return (
    <div>
      <h1 className="text-center" style={{ marginTop: "5%" }}>
        เลือกบท
      </h1>
      <Row style={{ marginTop: "5%" }}>
        <Col sm="2"></Col>

        <Col sm="8">
          <div className="text-center">
            <Row>
              <Col sm="6">
                <Card>
                  <CardTitle>
                    <h3 style={{ marginTop: "10px" }}>บทที่ 1</h3>
                  </CardTitle>
                  <CardText>
                    <h4>แปลงเลขฐาน 2</h4>
                  </CardText>
                 
                    <Button onClick={()=>{nextPage("b2s")}} color="primary">
                      <h3 style={{ marginTop: "10px" }}>เริ่ม</h3>
                    </Button>
                  
                </Card>
              </Col>

              <Col sm="6">
                <Card>
                  <CardTitle>
                    <h3 style={{ marginTop: "10px" }}>บทที่ 2</h3>
                  </CardTitle>
                  <CardText>
                    <h4>Elimination phase and Back subsituation</h4>
                  </CardText>
                  <Button onClick={()=>{nextPage("elimination")}} color="primary">
                    <h3 style={{ marginTop: "10px" }}>เริ่ม</h3>
                  </Button>
                </Card>
              </Col>
            </Row>

            <Row className="text-center" style={{ marginTop: "20px" }}>
              <Col sm="6">
                <Card>
                  <CardTitle>
                    <h3 style={{ marginTop: "10px" }}>บทที่ 3</h3>
                  </CardTitle>
                  <CardText>
                    <h4>.</h4>
                  </CardText>
                  <Button disabled>
                    <h3 style={{ marginTop: "10px" }}>เริ่ม</h3>
                  </Button>
                </Card>
              </Col>

              <Col sm="6">
                <Card>
                  <CardTitle>
                    <h3 style={{ marginTop: "10px" }}>บทที่ 4</h3>
                  </CardTitle>
                  <CardText>
                    <h4>.</h4>
                  </CardText>
                  <Button disabled>
                    <h3 style={{ marginTop: "10px" }}>เริ่ม</h3>
                  </Button>
                </Card>
              </Col>
            </Row>
          </div>
        </Col>
        <Col sm="2"></Col>
      </Row>
    </div>
  );
}

export default Main;
