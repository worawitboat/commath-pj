import React, { useState } from "react";
import {
  CardTitle,
  CardText,
  Row,
  Col,
  Button,
  Card,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";
import "../App.css";
import { getB2s } from "../functions/function";
import { useNavigate } from "react-router-dom";

function B2s() {
  const navigate = useNavigate();
  const [bit2string, setBit2string] = useState();
  const [result, setResult] = useState("");
  const generate = () => {
    getB2s(bit2string).then((res) => {
      setResult(res);
    });
  };
  
  const back = () => {
    navigate("/");
  }

  return (
    <div class="body">
      <Row style={{ marginTop: "15%" }}>
        <Col sm="2"></Col>
        <Col sm="8">
          <div>
            <Row>
              <Col sm="2"></Col>
              <Col sm="8">
                <Card style={{ alignItems: "center" }}>
                  <CardTitle>
                    <h2 style={{ marginTop: "10px" }}>เลขฐาน 2</h2>
                  </CardTitle>
                  <Input
                    style={{
                      marginTop: "20px",
                      marginBottom: "20px",
                      width: 500,
                    }}
                    value={bit2string}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                    onChange={(e) => setBit2string(e.target.value)}
                  />
                  <h4>ผลลัพธ์: {result}</h4>
                  <Row>
                    <Col sm="8">
                      <Button onClick={generate} color="primary">
                        <div style={{ width: 300 }}>
                          <h3 style={{ marginTop: "10px" }}>แปลง</h3>
                        </div>
                      </Button>
                    </Col>
                    <Col sm="4">
                      <Button onClick={back} color="secondary">
                        <div style={{ width: 100 }}>
                          <h3 style={{ marginTop: "10px" }}>กลับ</h3>
                        </div>
                      </Button>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col sm="2"></Col>
            </Row>
          </div>
        </Col>
        <Col sm="2"></Col>
      </Row>
    </div>
  );
}

export default B2s;
