import { useEffect, useState } from 'react';
import { Container, Breadcrumb, Row, Col, Card, ListGroup, Button } from 'react-bootstrap';
import api from '../../axios';
import style from './ShoppingCart.module.css';

const ShoppingCart = (props) => {

    //State
    const [amountState, setAmountState] = useState(0);
    const [itemsState, setItemsState] = useState([]);

    //API request
    useEffect( () => {
        //Get items from local storage
        let idsCart = localStorage.getItem('itemsCart');
        let idsList = [];
        let itemsList = [];
        let totalCost = 0;

        if(idsCart){
            idsList = JSON.parse(idsCart);

            idsList.forEach(item => {
                api.get('/item/get?id=' + item)
                    .then( response => {
                        let request = response.data.data;
                        let item = {
                            id: request.itemId,
                            name: request.item.name,
                            description: request.item.description,
                            cost: request.item.cost
                        }

                        totalCost += item.cost;
                        itemsList.push(item)
                        
                        setItemsState(itemsList);
                        setAmountState(totalCost);

                    })
                    .catch( err => {
                        console.log(" **Request error: " + err);
                    });
            });          
        }
        
        if(itemsList){
            console.log(itemsList)
            //setItemsState(itemsList);
            //setAmountState(totalCost);
        }

    }, []);

    let makePay = () => {
        if(amountState !== 0) {
            console.log(" Making the pay... Q" + amountState)

            localStorage.clear();

            setAmountState(0);
            setItemsState([]);
        }
    }

    /*if(itemsList.length !== 0){
        setItemsState(itemsList);
        setAmountState(totalCost);
    }*/

    //Helpers

    const totalAmount = (amountState === 0) ? "Free" : "Q" + amountState;
    const totalItems = (itemsState.length === 0) ? "No items in the cart" : "Total items: " + itemsState.length;
    let itemsListGroup = itemsState.map( (item, index) => {
        return (
            <ListGroup.Item key={ item.id }>
                <strong>{ item.name}</strong>, {item.description} [ Q{item.cost} ]
            </ListGroup.Item>
        );
    });
    
    //Render
    return(
        <Container>
            <br/>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Shopping cart</Breadcrumb.Item>
            </Breadcrumb>

            <h1>Shopping Cart</h1>
            <hr/>
            <Row>
                <Col xs={12} md={8}>
                    <Card>
                        <Card.Header>{ totalItems }</Card.Header>
                        <ListGroup>
                            {itemsListGroup}
                        </ListGroup>
                    </Card>
                </Col>

                <Col xs={12} md={4}>
                    <div className={style.card}>
                    <p>Total amount</p>
                        <h1>{ totalAmount }</h1>
                        <Button variant="success" size="lg" block onClick={ () => makePay()}>Pay now</Button>
                    </div>
                </Col>
            </Row>
            <br/>
        </Container>
        );
}

export default ShoppingCart;