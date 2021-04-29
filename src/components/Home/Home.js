import {Jumbotron, Button, Container } from 'react-bootstrap';
import PopularItems from '../../containers/PopularItems/PopularItems'
import style from './Home.module.css'
const Home = (props) => {
    return(
        <>
        <Jumbotron className={style.bg_hero}>
            <Container>
                <div className={style.hero_content}>
                    <h1>Hello, Fortniter!</h1>
                    <p >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac velit tortor. Integer non lorem sed nunc congue feugiat et eleifend tortor. Ut vulputate urna mi, et accumsan purus placerat id. 
                    </p>
                    <p>
                        <Button variant="primary">Learn more</Button>
                    </p>
                </div>
            </Container>
        </Jumbotron>
        <Container>

            <PopularItems />

        </Container>
        </>
    )
}

export default Home;