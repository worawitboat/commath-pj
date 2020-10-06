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
import { getElimination } from "../functions/function";

function Elimination() {
  const navigate = useNavigate();
  const [a00, seta00] = useState();
  const [a01, seta01] = useState();
  const [a02, seta02] = useState();
  const [a10, seta10] = useState();
  const [a11, seta11] = useState();
  const [a12, seta12] = useState();
  const [a20, seta20] = useState();
  const [a21, seta21] = useState();
  const [a22, seta22] = useState();

  const [b1, setb1] = useState();
  const [b2, setb2] = useState();
  const [b3, setb3] = useState();

  const [x0, setx0] = useState();
  const [x1, setx1] = useState();
  const [x2, setx2] = useState();


  const back = () => {
    navigate("/");
  };

  const generate = () => {
    const data = {
      A:[[a00,a01,a02],[a10,a11,a12],[a20,a21,a22]],
      b:[b1,b2,b3]
      
    };
    getElimination(data).then((res) => {
      setx0(res[0])
      setx1(res[1])
      setx2(res[2])
    });
  };

  return (
    <div>
      <Row style={{ marginTop: "5%" }}>
        <Col sm="4"></Col>
        <Col sm="4">
          <Card style={{ alignItems: "center" }}>
            <Row style={{ marginTop: "50px" }}>
              <Col>
                <h3>A</h3>
              </Col>
              <Col style={{ marginLeft: "350px" }}>
                <h3>B</h3>
              </Col>
            </Row>

            <Row>
              <div className="text-center">
                <Row>
                  <Input
                    style={{
                      marginTop: "20px",
                      marginBottom: "20px",
                      width: 100,
                    }}
                    value={a00}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                    onChange={(e) => seta00(e.target.value)}
                  />
                  <Input
                    style={{
                      marginLeft: "20px",
                      marginTop: "20px",
                      marginBottom: "20px",
                      width: 100,
                    }}
                    value={a01}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                    onChange={(e) => seta01(e.target.value)}
                  />
                  <Input
                    style={{
                      marginLeft: "20px",
                      marginTop: "20px",
                      marginBottom: "20px",
                      width: 100,
                    }}
                    value={a02}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                    onChange={(e) => seta02(e.target.value)}
                  />
                </Row>

                <Row>
                  <Input
                    style={{
                      marginTop: "20px",
                      marginBottom: "20px",
                      width: 100,
                    }}
                    value={a10}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                    onChange={(e) => seta10(e.target.value)}
                  />
                  <Input
                    style={{
                      marginLeft: "20px",
                      marginTop: "20px",
                      marginBottom: "20px",
                      width: 100,
                    }}
                    value={a11}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                    onChange={(e) => seta11(e.target.value)}
                  />
                  <Input
                    style={{
                      marginLeft: "20px",
                      marginTop: "20px",
                      marginBottom: "20px",
                      width: 100,
                    }}
                    value={a12}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                    onChange={(e) => seta12(e.target.value)}
                  />
                </Row>

                <Row>
                  <Input
                    style={{
                      marginTop: "20px",
                      marginBottom: "20px",
                      width: 100,
                    }}
                    value={a20}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                    onChange={(e) => seta20(e.target.value)}
                  />
                  <Input
                    style={{
                      marginLeft: "20px",
                      marginTop: "20px",
                      marginBottom: "20px",
                      width: 100,
                    }}
                    value={a21}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                    onChange={(e) => seta21(e.target.value)}
                  />
                  <Input
                    style={{
                      marginLeft: "20px",
                      marginTop: "20px",
                      marginBottom: "20px",
                      width: 100,
                    }}
                    value={a22}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                    onChange={(e) => seta22(e.target.value)}
                  />
                </Row>
              </div>

              <div className="text-center" style={{ marginLeft: "100px" }}>
                <Row>
                  <Input
                    style={{
                      marginLeft: "20px",
                      marginTop: "20px",
                      marginBottom: "20px",
                      width: 100,
                    }}
                    value={b1}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                    onChange={(e) => setb1(e.target.value)}
                  />
                </Row>
                <Row>
                  <Input
                    style={{
                      marginLeft: "20px",
                      marginTop: "20px",
                      marginBottom: "20px",
                      width: 100,
                    }}
                    value={b2}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                    onChange={(e) => setb2(e.target.value)}
                  />
                </Row>
                <Row>
                  <Input
                    style={{
                      marginLeft: "20px",
                      marginTop: "20px",
                      marginBottom: "20px",
                      width: 100,
                    }}
                    value={b3}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                    onChange={(e) => setb3(e.target.value)}
                  />
                </Row>
              </div>
            </Row>
            <h4 style={{ marginBottom: "10px" }}>x0: {x0}</h4>
            <h4 style={{ marginBottom: "10px" }}>x1: {x1}</h4>
            <h4 style={{ marginBottom: "10px" }}>x2: {x2}</h4>
            <Row style={{ marginBottom: "30px" }}>
              <Col sm="8">
                <Button onClick={generate} color="primary">
                  <div style={{ width: 300 }}>
                    <h3 style={{ marginTop: "10px" }}>คำนวณ</h3>
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

        <Col sm="4"></Col>
      </Row>
    </div>
  );
}
export default Elimination;
