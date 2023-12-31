import './Home.css'
import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { FaAccessibleIcon } from "react-icons/fa6";

const Home = () => {
      let history = useHistory();
      const fakeData = [{
            'id': '1',
            'type': 'ONE TIME TICKET',
            'cost': '₹19',
            'img': 'https://i.ibb.co/VYBCS79/Group-33142.png'
      },
      {
            'id': '2',
            'type': 'ONE DAY PASS',
            'cost': '₹49',
            'img': 'https://i.ibb.co/g6KZmfS/Group-33143.png'
      },
      {
            'id': '3',
            'type': 'MONTHLY PASS',
            'cost': '₹300',
            'img': 'https://i.ibb.co/k9LftLr/Group-33144.png'
      },
      {
            'id': '4',
            'type': 'ANNUAL PASS',
            'cost': '₹300',
            'img': 'https://i.ibb.co/6nn6JnK/Group-33145.png'
      }
      ]
      const toggleToLogin = () => {
            history.push('/login')
      }

      return (
            <div className="main-container">
                  <div className="sub-container"></div>
                  <Container className="container">
                        <h2 className='title'>Book Now!</h2>
                        <Row>
                              {
                                    fakeData.map(pass => <Col sm>
                                          <div onClick={toggleToLogin} className="card-container">
                                                <img className='card' src={pass.img} alt="" />
                                                <div className="heading">
                                                      <h2>{pass.type}</h2>
                                                </div>
                                                <div className="btn">
                                                      <Button variant="warning" onClick={toggleToLogin}>Buy Now</Button>
                                                </div>
                                                <div className="price"><h1>{pass.cost}</h1></div>
                                          </div>
                                    </Col>)
                              }
                        </Row>
                        <div>
                        <h5 className='head'>Metro For You </h5>
                        <div class="container">
    <a href="#" class="feature">Station Retail Enquiry </a>
    <a href="#" class="feature">Commercial Shoot</a>
    <a href="#" class="feature">Covid-19 Update </a>
    <a href="#" class="feature">Train timings </a>
  </div>

                        </div>
                  </Container>

            </div>

      );
};

export default Home;