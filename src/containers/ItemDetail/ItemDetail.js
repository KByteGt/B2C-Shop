import { useEffect, useState} from 'react';
import { Container, Row, Col, Breadcrumb, Button } from 'react-bootstrap';
import ItemCard from '../../components/Item/ItemCard';
import ItemInfo from '../../components/Item/ItemInfo';
import PopularItems from '../PopularItems/PopularItems';
import axios from 'axios';
import { config } from '../../config';

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
        console.log("Adding item in local storage...")
        
        alert('thanks, Item added to the cart :)');
    }

    //ComponentDidMount
    useEffect( () => {
        //Consume API
        axios({
            method: 'GET',
            url: config.url.itemsApi+'/item/'+itemId
        })
        .then( response => {
            let item = response.data.item;

            setItemState({
                id: item.id,
                name: item.name,
                description: item.description,
                type: item.type,
                rarity: item.rarity,
                series: item.series,
                cost: item.cost,
                imgIcon: item.imgIcon,
                imgFeatured: item.imgFeatured,
                avgStars: item.avgStars,
                firstOccurrences: item.firstOccurrences,
                lastOccurrences: item.lastOccurrences,
                occurrences: item.occurrences
            });

        })
        .catch( err => {
            console.log(" **Error: " + err);
        });
    })

    let itemSeries = (itemState.series === null) ?  "Fortnite" : itemState.series;
    const buttonText = (itemState.cost === 0) ? "Buy for free now" : "Buy for Q " + itemState.cost;

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