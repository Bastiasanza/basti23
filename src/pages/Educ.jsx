import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

function Educ() {
    return (
        <>
           <h1 className='text-center'>Educ</h1>
           <Row style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '50px'}}>
           <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://yt3.googleusercontent.com/ytc/AL5GRJWYcpB0tuVnDjoN4TIL5xjMRgf4Ch8WNlrK3QY4=s900-c-k-c0x00ffffff-no-rj" />
            <Card.Body>
                <Card.Title>Naga Central School 2</Card.Title>
                <Card.Text>
                I graduated from Naga Central School 2 on March 27, 2015. It was a significant milestone in my academic journey, marking the completion of my elementary education. This achievement laid the foundation for my future learning experiences and personal growth..
                </Card.Text>
                <Button variant="primary"></Button>
            </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://unc.neolms.eu/files/86109/1200px-University_of_Nueva_Caceres_Seal(6).png?lmsauth=0d3e8d79854064302d3a29dc0243b9cba24f367f" />
            <Card.Body>
                <Card.Title>University of Nueva Caceres</Card.Title>
                <Card.Text>
                I graduated high school from the University of Nueva Caceres on May 27, 2019. This achievement was a key step in my educational journey, paving the way for future opportunities and personal growth.
                </Card.Text>
                <Button variant="primary"></Button>
            </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://aims.ncf.edu.ph/assets/images/ncfi-logo.png" />
            <Card.Body>
                <Card.Title>Naga College Foundation Inc.</Card.Title>
                <Card.Text>
                I am currently pursuing a Bachelor of Science in Information System at Naga College Foundation Inc.. This program is equipping me with the skills and knowledge needed to excel in the field of technology and information management.
                </Card.Text>
                <Button variant="primary"></Button>
            </Card.Body>
            </Card>
            </Row>

        </>
    )
}

export default Educ