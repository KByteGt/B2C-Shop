import { useEffect, useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import api from '../../axios';

const ItemDetail = (props) => {
    const itemId = props.match.params.itemId;
    //State
    const [itemState, setItemState] = useState({
        id: '',
        name: '',
        description: '',
        type: '',
        rarity: '',
        series: '',
        cost: 0,
        imgIcon: '',
        imgFeatured: '',
        imgBackground: '',
        avgStars: 0,
        firstOccurrences: '',
        lastOccurrences: '',
        occurrences: 0
    })

    //ComponentDidMount
    useEffect( () => {
        //Consume API
        api.get('/item/get?id=' + itemId)
            .then( response => {

            })
            .catch( err => {

            });
    })

    //Render
    return (
        <Container>
            <Row>
                <Col>
                    <h1>Item Detail</h1>
                </Col>
                <Col>
                    <h1>Id: {itemId}</h1>
                </Col>
            </Row>
            
        </Container>
    );
}

export default ItemDetail;