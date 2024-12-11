import '../about.css';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import profile from '../assets/profile.jpg';
import ListGroup from 'react-bootstrap/ListGroup';
import '../app.css';

function About() {
    return (
        <>
        <h1 className='text-center' style={{color:'BLACK'}}>About Me</h1>
            <Container>
                <Row className="justify-content-center"> 
                    <Col xs={6} md={4} className="d-flex justify-content-center align-items-center"> 
                        <Image src={profile} roundedCircle fluid width="200" height="200" />
                    </Col>
                </Row>
            </Container>
        <ListGroup id='list'>
        <ListGroup.Item style={{backgroundColor: 'transparent'}}><strong>NAME:</strong> Asanza, Basti Liam Villamor</ListGroup.Item>
        <ListGroup.Item style={{backgroundColor: 'transparent'}}><strong>LOCATION:</strong> # 34 Caimito St. Liboton Naga City</ListGroup.Item>
        <ListGroup.Item style={{backgroundColor: 'transparent'}}><strong>AGE:</strong> 21</ListGroup.Item>
        <ListGroup.Item style={{backgroundColor: 'transparent'}}><strong>STATUS:</strong> Single</ListGroup.Item>
        <ListGroup.Item style={{backgroundColor: 'transparent'}}><strong>BIRTHDAY:</strong> April 2, 2003</ListGroup.Item>
        </ListGroup>
        <h1>Skills:</h1>
        <img src='https://www.techicy.com/wp-content/uploads/2019/05/react-bootstrap.png' width='200px' />
        <img src='https://live.staticflickr.com/65535/49897062223_68f28bb074_b.jpg' width='300px' />
        <img src='https://tse4.mm.bing.net/th?id=OIP.JVt34lGxmm0GAGNNL_mwBgHaHa&pid=Api&P=0&h=220' width='300px' />
        <img src='https://tse3.mm.bing.net/th?id=OIP.jdQ0-zCqys8HUsVr1-EE6AHaEK&pid=Api&P=0&h=220' width='300px' />
        <img src='https://tse1.mm.bing.net/th?id=OIP.Tf4BFI6846neirVSebC0vAHaEi&pid=Api&P=0&h=220' width='300px' />
        </>
    );
}

export default About;
