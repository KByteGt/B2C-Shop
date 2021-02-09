import { useEffect, useState} from 'react';
import { Container, Row, Col, Card, Breadcrumb, Button, ListGroup, ListGroupItem  } from 'react-bootstrap';
import ItemCard from '../../components/Item/ItemCard';
import ItemInfo from '../../components/Item/ItemInfo';
import api from '../../axios';
import PopularItems from '../PopularItems/PopularItems';

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
        avgStars: 0,
        firstOccurrences: '',
        lastOccurrences: '',
        occurrences: 0
    })

    //Function add Item to localstorege
    let addItemCart = (id) => {
        let itemsCart = localStorage.getItem('itemsCart');
        let idsList = [];

        if(itemsCart){
            idsList = JSON.parse(itemsCart);
            idsList.push(id);
            idsList = Array.from(new Set(idsList));
        } else idsList.push(id);
            
        localStorage.setItem('itemsCart', JSON.stringify(idsList));
    }

    //ComponentDidMount
    useEffect( () => {
        //Consume API
        api.get('/item/get?id=' + itemId)
            .then( response => {
                let item = response.data.data;

                setItemState({
                    id: item.itemId,
                    name: item.item.name,
                    description: item.item.description,
                    type: item.item.type,
                    rarity: item.item.rarity,
                    series: item.item.series,
                    cost: item.item.cost,
                    imgIcon: item.item.images.icon,
                    imgFeatured: item.item.images.featured,
                    avgStars: item.item.ratings.avgStars,
                    firstOccurrences: item.itemOccurrences.firstOccurrences,
                    lastOccurrences: item.itemOccurrences.lastOccurrences,
                    occurrences: item.itemOccurrences.occurrences
                });

            })
            .catch( err => {
                console.log(" **Error: " + err);
            });
    })

    let itemSeries = (itemState.series === null) ?  "Fortnite" : itemState.series;
    const buttonText = (itemState.cost == 0) ? "Buy for free now" : "Buy for Q " + itemState.cost;

    //Render
    return (
        <Container>
            <br/>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/catalogue">Catalogue</Breadcrumb.Item>
                <Breadcrumb.Item active>{itemState.name}</Breadcrumb.Item>
            </Breadcrumb>

            <Row>
                <Col xs={12} md={3}>
                
                    <Button size="lg" block onClick={ () =>  addItemCart(itemId) }>{buttonText}</Button>

                    <br/>
                    {/* Component ItemCard whit params */}
                    <ItemCard 
                        img = { itemState.imgIcon} 
                        description = { itemState.description }
                        name = { itemState.name }
                        rarity = { itemState.rarity }
                        stars = { itemState.avgStars }
                    />
                </Col>

                <Col xs={12} md={9}>
                    {/* Componet ItemInfo whit params */}
                    <ItemInfo 
                        id = { itemId }
                        name = { itemState.name }
                        type = { itemState.type }
                        rarity = { itemState.rarity }
                        series = { itemSeries }
                        ocurrences = {itemState.occurrences }
                        firstOccurrences = { itemState.firstOccurrences }
                        lastOccurrences = { itemState.lastOccurrences }
                        img = { itemState.imgFeatured }
                    />
                </Col>

            </Row>

            <br/>

            <PopularItems/>
            
        </Container>
    );
}

export default ItemDetail;