import { useEffect, useState} from 'react';
import loadingGift from '../../assets/img/loading.gif';
import { CardColumns, Image } from 'react-bootstrap';
import ItemCatalogue from '../../components/Item/ItemCatalogue';
import api from '../../axios';

const CatalogueItems = (props) => {

        //State
        const [itemsState, setItemsState] = useState({
            items: [], 
            error: false
        });

        useEffect( () => {
            //Consume API
            api.get('/store/get')
                .then( response => {

                    let itemsInfo = response.data.data;

                    console.log(itemsInfo)
                    
                    itemsInfo = itemsInfo.map( i => ({
                        id: i.itemId,
                        name: i.item.name,
                        description: i.item.description,
                        type: i.item.type,
                        rarity: i.item.rarity,
                        img: i.item.images.icon,
                        series: i.item.series,
                        cost: i.store.cost
                    }));
 
                    setItemsState({ items: [...itemsInfo], error: false });
                })
                .catch( err => {
                    console.log("Error: " + err)
                    setItemsState({ items: [], error: true })
                });
        }, []);

        let items = <></>
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