import { useEffect, useState} from 'react';
import loadingGift from '../../assets/img/loading.gif';
import { CardColumns, Image } from 'react-bootstrap';
import ItemCatalogue from '../../components/Item/ItemCatalogue';
import {config} from '../../config';
import axios from 'axios';

const CatalogueItems = (props) => {

        //State
        const [itemsState, setItemsState] = useState({
            items: [], 
            error: false
        });

        useEffect( () => {
            //Consume API
            axios({
                method: 'GET',
                url: config.url.itemsApi+'/item/items'
            })
            .then( response => {

                let itemsInfo = response.data.items;

                console.log(itemsInfo)
                
                itemsInfo = itemsInfo.map( item => ({
                    id: item.id,
                    name: item.name,
                    description: item.description,
                    type: item.type,
                    rarity: item.rarity,
                    img: item.imgIcon,
                    series: item.series,
                    cost: item.cost
                }));

                setItemsState({ items: [...itemsInfo], error: false });
            })
            .catch( err => {
                console.log("Error: " + err)
                setItemsState({ items: [], error: true })
            });
        }, []);

        let items = null;
        if(itemsState.error){
            items = <div className="text-center"><Image src={loadingGift} style={{width: "50px"}}/></div>;
        } else {
            items = itemsState.items.map( (item, index) => {
                return <ItemCatalogue 
                            key = { item.id }
                            id = { item.id }
                            name = { item.name }
                            description = { item.description }
                            type = { item.type }
                            rarity = { item.rarity }
                            img = { item.img }
                            series = { item.series }
                            cost= { item.cost }
                        />
            });
        }
        //Render
        return (
            <CardColumns>
                {items}
            </CardColumns>
        );
}

export default CatalogueItems;