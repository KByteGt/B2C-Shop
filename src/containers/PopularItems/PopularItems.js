import { useEffect, useState} from 'react';
//import { CardDeck } from 'react-bootstrap'
import CardDeck from '../../components/CardDeck/CardDeck'
import Item from '../../components/Item/Item';
import api from '../../axios';

const PopularItems = (props) => {

        //State
        const [itemsState, setItemsState] = useState({
            items: [], 
            error: false
        });

        useEffect( () => {
            //Consume API
            api.get('/items/popular')
                .then( response => {
                    let itemsInfo = response.data.entries[1].entries
                    itemsInfo = itemsInfo.map( item => ({
                        id: item.identifier,
                        name: item.name,
                        description: item.description,
                        type: item.type,
                        rarity: item.rarity,
                        img: item.images.transparent
                    }));

                    itemsInfo = itemsInfo.filter( item => item.name !== "Randomize")

                    setItemsState({ items: [...itemsInfo], error: false });
                })
                .catch( err => {
                    setItemsState({ items: [], error: true })
                });
        }, []);

        let items = <></>
        if(itemsState.error){
            items = <p>Loading ...</p>
        } else {
            items = itemsState.items.map( (item, index) => {
                return <Item 
                            key = { item.id }
                            id = { item.id }
                            name = { item.name }
                            description = { item.description }
                            type = { item.type }
                            rarity = { item.rarity }
                            img = { item.img }
                        />
            });
        }
        //Render
        return (
            <CardDeck
                title = "Most Popular Items">
                {items}
            </CardDeck>
        );
}

export default PopularItems;