import {Jumbotron, Button, Container } from 'react-bootstrap';
import style from './Home.module.css'
const Home = (props) => {
    return(
        <>
        <Jumbotron>
            <Container>
                <h1>Hello, world!</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac velit tortor. Integer non lorem sed nunc congue feugiat et eleifend tortor. Ut vulputate urna mi, et accumsan purus placerat id. 
                </p>
                <p>
                    <Button variant="primary">Learn more</Button>
                </p>
            </Container>
        </Jumbotron>
        <Container>
            <h1>Most Popular Products</h1>
        </Container>
        </>
    )
}

export default Home;