import {Container, Breadcrumb } from 'react-bootstrap';
import CatalogueItems from '../../containers/CatalogueItems/CatalogueItems';

const Products = (props) => {
    return(
        <Container>
            <br/>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Catalogue</Breadcrumb.Item>
            </Breadcrumb>

            <h1>Items</h1>
            <hr/>

            <CatalogueItems />
            
        </Container>
    )
}

export default Products;