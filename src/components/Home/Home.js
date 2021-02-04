import {Jumbotron, Button, Container } from 'react-bootstrap';
import PopularItems from '../../containers/PopularItems/PopularItems'
import style from './Home.module.css'
const Home = (props) => {
    return(
        <>
        <Jumbotron>
            <Container>
                <h1>Hello, Fortniter!</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac velit tortor. Integer non lorem sed nunc congue feugiat et eleifend tortor. Ut vulputate urna mi, et accumsan purus placerat id. 
                </p>
                <p>
                    <Button variant="primary">Learn more</Button>
                </p>
            </Container>
        </Jumbotron>
        <Container>

            <PopularItems />

            <h1>Explore Rarity</h1>
            <hr />
                
            <h1>Lorem Impsun Dolor sit me.</h1>
            <Button>Shop</Button>

        </Container>
        </>
    )
}

export default Home;