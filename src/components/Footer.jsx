import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/footer.css";

function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col>
            <div className="footer-text__title">Felisity</div>
            <div className="footer-text__body">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
              eiusmod tempor incididunt ut labore.
            </div>
          </Col>
          <Col>
            <div className="footer-text__title">Quick links</div>
            <ul className="footer-list">
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#home">Services</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
              <li>
                <a href="#download">Download</a>
              </li>
            </ul>
          </Col>
          <Col>
            <div className="footer-text__title">Newsletter</div>
            <div className="footer-text__body">
              Subscribe to get latest updates and new on whiskers
            </div>
            <div className="footer-input">
              <input type="text" name="email" placeholder="Email id" />
              <div className="footer-input__icon">
                <ion-icon name="paper-plane-outline" />
              </div>
            </div>
          </Col>
        </Row>
        <div className="copyright">Coded by Sharad kumar</div>
      </Container>
    </footer>
  );
}

export default Footer;
