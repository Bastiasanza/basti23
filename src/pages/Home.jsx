import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Home() {
    return (
        <>
            {/* Hero Section */}
            <Container className="text-center my-5">
                <h1>Welcome to Our Service</h1>
                <p>Experience the best service tailored for you.</p>
                <Button variant="primary">Get Started</Button>
            </Container>

            {/* Features Section */}
            <Container className="my-5">
                <h2 className="text-center">Our Features</h2>
                <Row>
                    <Col md={3}>
                        <Card>
                            <Card.Img variant="top" src="https://tse2.mm.bing.net/th?id=OIP.3JaYWC3LjljC9jy5ROZOPAHaEJ&pid=Api&P=0&h=220" />
                            <Card.Body>
                                <Card.Title>About</Card.Title>
                                <Card.Text>
                                </Card.Text>
                                <Link to="/about">
                                    <Button variant="primary">Learn More</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <Card.Img variant="top" src="https://tse2.mm.bing.net/th?id=OIP.iQhUFMYfLK8tnEGcK4KqkQHaFj&pid=Api&P=0&h=220" />
                            <Card.Body>
                                <Card.Title>Hobbies</Card.Title>
                                <Card.Text>
                                </Card.Text>
                                <Link to="/hobbies">
                                    <Button variant="primary">Learn More</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <Card.Img variant="top" src="https://media.istockphoto.com/photos/cat-is-talking-over-the-old-phone-picture-id524556306?k=6&m=524556306&s=612x612&w=0&h=SSTJG_XijiKhBRHHpO55OryzCT-VA3m7zA1CpRfd7cY=" />
                            <Card.Body>
                                <Card.Title>Contact</Card.Title>
                                <Card.Text>
                                </Card.Text>
                                <Link to="/contact">
                                    <Button variant="primary">Learn More</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <Card.Img variant="top" src="https://tse1.mm.bing.net/th?id=OIP.k8T8zkQTtVP5UDnayfL84AHaHa&pid=Api&P=0&h=220" />
                            <Card.Body>
                                <Card.Title>Education</Card.Title>
                                <Card.Text>
                                </Card.Text>
                                <Link to="/Education">
                                    <Button variant="primary">Learn More</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            {/* Footer Section */}
            <footer className="text-center py-4">
                <p>© 2023 Your Company. All rights reserved.</p>
                <p>
                    <Link to="/about">About Us</Link> | 
                    <Link to="/contact">Contact</Link> | 
                    <Link to="/privacy">Privacy Policy</Link>
                </p>
            </footer>
        </>
    );
}

export default Home;