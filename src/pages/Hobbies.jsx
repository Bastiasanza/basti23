import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import basketball from '../assets/round.jpg';
import biking from '../assets/round.jpg';
import ML from '../assets/round.jpg';

function ExampleCarouselImage({ text }) {
  return (
    <div
      style={{
        height: '400px',
        backgroundColor: '#ddd',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.5rem',
        color: '#333',
      }}
    >
      {text}
    </div>
  );
}

function Hobbies() {
  return (
    <>
      <h1 className='text-center'>Hobbies</h1>
      <Carousel>
        <Carousel.Item>
          <img src='src\assets\basketball.jpg' style={{height: '1300px'}}/>
          <Carousel.Caption>
            <h3>Playing Basketball</h3>
            <p>Basketball is my first hobby. I enjoy the excitement of the game, whether it's shooting hoops, improving my skills, or playing with friends. The fast-paced nature and teamwork involved make it both challenging and rewarding. It’s not just a sport for me; it’s a way to stay active, build connections, and have fun.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src='src\assets\biking.jpg' style={{height: '2500px'}}/>
          <Carousel.Caption>
            <h3>Biking</h3>
            <p>Biking is my second hobby, a refreshing escape that combines fitness and adventure. I enjoy exploring new trails, feeling the wind against my face, and pushing my limits. It’s a wonderful way to connect with nature, relieve stress, and maintain an active lifestyle while appreciating the beauty of the outdoors.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src='src\assets\ML.jpg' style={{height: '2500px'}}/>
          <Carousel.Caption>
            <h3>Playing Mobile Legends Bang Bang</h3>
            <p>My third hobby is playing Mobile Legends: Bang Bang, a multiplayer online battle arena (MOBA) game. It involves strategic teamwork, skill mastery, and real-time competitive gameplay. Enjoying it reflects a keen interest in e-sports and gaming culture, offering excitement, challenges, and opportunities to connect with friends and other players worldwide.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Hobbies;
