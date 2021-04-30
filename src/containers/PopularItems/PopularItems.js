import { useEffect, useState} from 'react';
import CardDeck from '../../components/CardDeck/CardDeck'
import Item from '../../components/Item/Item';
import {config} from '../../config';
import axios from 'axios';

const PopularItems = (props) => {

        //State
        const [itemsState, setItemsState] = useState({
            items: [], 
            error: false
        });

        useEffect( () => {
            //Consume API
            axios({
                method: 'GET',
                url: config.url.itemsApi+'/items/popular'
            })
            .then( response => {
                let itemsInfo = response.data.items
                itemsInfo = itemsInfo.map( item => ({
                    id: item.id,
                    name: item.name,
                    description: item.description,
                    type: item.type,
                    rarity: item.rarity,
                    img: item.imgIcon
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