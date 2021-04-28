import { Card, Badge, Image, Row, Col } from 'react-bootstrap';
import style from './Item.module.css'

const ItemInfo = (props) => {

    let img = (props.img === null) ? " " : <Col><div className={style.bg_img}><Image src={props.img} fluid/></div>
    
</Col>

    return (
        <Card>
            <Card.Header>Item Information </Card.Header>
            <Card.Body>
            <Row>
                <Col>
                    <Card.Title>{props.id}</Card.Title>
                    <Card.Text>
                        <strong>Name: </strong>{ props.name }
                        <br/>
                        <strong>Type: </strong>{ props.type }
                        <br/>
                        <strong>Rarity: </strong>{ props.rarity }
                        <br/>
                        <strong>Series: </strong>{ props.series }
                    </Card.Text>
                    <br/>
                    <Card.Title><Badge variant="secondary">{ props.ocurrences }</Badge> times ocurrences </Card.Title>
                    <Card.Text>
                        <strong>First ocurrences: </strong>{ props.firstOccurrences }
                        <br/>
                        <strong>Last ocurrences: </strong>{ props.lastOccurrences }
                    </Card.Text>
                </Col>
                {img}
            </Row>
                
            </Card.Body>
        </Card> 
    );
}

export default ItemInfo;