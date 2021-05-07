import { useEffect, useState } from 'react';
import { Container, Breadcrumb, Row, Col, Card, ListGroup, Button, Form} from 'react-bootstrap';
import { config } from '../../config';
import axios from 'axios'
import style from './ShoppingCart.module.css';

const ShoppingCart = (props) => {

    //State
    const [invoiceState, setInvoiceState] = useState({});
    const [amountState, setAmountState] = useState(0);
    const [itemsState, setItemsState] = useState([]);
    const [clientState, setClientState] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });

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

                axios({
                    method: 'GET',
                    url: config.url.itemsApi+'/item/'+item
                })
                .then( response => {
                    let request = response.data.item;
                    let item = {
                        id: request.id,
                        name: request.name,
                        description: request.description,
                        cost: request.cost
                    }

                    totalCost += item.cost;
                    itemsList.push(item)
                    
                    setItemsState([...itemsList]);
                    setAmountState(totalCost);

                })
                .catch( err => {
                    console.log(" **Request error: " + err);
                });
            });          
        }

    }, []);

    let makePay = (event) => {
        if(amountState !== 0 && clientState.firstName !== '' && clientState.lastName !== '' && clientState.email !== '') {
            console.log(" Making the pay... Q" + amountState)

            let itemsList = JSON.parse(localStorage.getItem('itemsCart') || '[]');
            const data = {
                items: itemsList,
                client: clientState
            }

            axios({
                method: 'POST',
                url: config.url.checkoutApi+'/purchase',
                data: data,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then( response => {
                console.log(response.data);
                console.log("Client: ", data)

                localStorage.clear();

                setInvoiceState(response.data);

                setAmountState(0);
                setItemsState([]);
                setClientState({
                    firstName: '',
                    lastName: '',
                    email: ''
                });

                alert('Thanks, enjoy your new items!!!');
            })
            .catch( err => {
                console.log(err);
                alert('Sorry, but your purchase has been declined :(');
            })

            
        } else {
            console.log(" ** Faltan datos de contacto...")
        }
    }

    const handleInputChange = (event) => {
        setClientState({
            ...clientState,
            [event.target.name] : event.target.value
        })
    }

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

    const invoiceDetail = (invoiceState.invoice) ? <ListGroup.Item key={invoiceState.invoice}><strong>Your Invoice ID: </strong> {invoiceState.invoice_id}</ListGroup.Item> : '' ;
    
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
                            {invoiceDetail}
                        </ListGroup>
                    </Card>
                    <br/>
                </Col>

                <Col xs={12} md={4}>

                    <Form >
                        <Form.Group controlId="formName">
                            <Row>
                                <Col>
                                    <Form.Label>First name</Form.Label>
                                    <Form.Control type="text" name="firstName" placeholder="Jonh" onChange={handleInputChange}/>
                                </Col>
                                <Col>
                                    <Form.Label>Last name</Form.Label>
                                    <Form.Control type="text" name="lastName" placeholder="Doe" onChange={handleInputChange}/>
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group controlId="formEmail">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Jonh@f-shop.gt" onChange={handleInputChange}/>
                        </Form.Group>

                        <Form.Group>
                        <div className={style.card}>
                            <p>Total amount</p>
                            <h1>{ totalAmount }</h1>
                            <Button variant="success" size="lg" block onClick={makePay}>Pay now</Button>
                        </div>
                        </Form.Group>

                    </Form>
                </Col>
            </Row>
            <br/>
        </Container>
        );
}

export default ShoppingCart;