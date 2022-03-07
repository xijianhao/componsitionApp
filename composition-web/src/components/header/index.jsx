import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./style.less";

const Index = () => {
  return (
    <div className="header">
      <Container fluid="xxl">
        <Row className="header-row">
          <Col sm>作文分享网</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Index;
