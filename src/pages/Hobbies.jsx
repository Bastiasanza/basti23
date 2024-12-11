import Carousel from 'react-bootstrap/Carousel';

function Hobbies () {
    return (
        <>        
          <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/originals/f8/44/9f/f8449fdbadae5f8708d58a71c77dacba.gif"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5 style={{ color: 'white' }}>Playing Basketball</h5>
          <p style={{ color: 'white' }}>Basketball is my first hobby. I enjoy the excitement of the game, whether it's shooting hoops, improving my skills, or playing with friends. The fast-paced nature and teamwork involved make it both challenging and rewarding.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/originals/8a/6d/3d/8a6d3d749c0f380665264a4a04f3d29c.gif"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5 style={{ color: 'white' }}>Biking</h5>
          <p style={{ color: 'white' }}> Biking is my second hobby, a refreshing escape that combines fitness and adventure. I enjoy exploring new trails, feeling the wind against my face, and pushing my limits.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/originals/15/07/49/1507493c6b0c797a8a812586df0b2659.gif"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5 style={{ color: 'white' }}> Playing Mobile Legends Bang Bang</h5>
          <p style={{ color: 'white' }}>
          My third hobby is playing Mobile Legends: Bang Bang, a multiplayer online battle arena (MOBA) game. It involves strategic teamwork, skill mastery, and real-time competitive gameplay.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </>

        
    )
}

export default Hobbies;