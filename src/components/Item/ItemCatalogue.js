import { Card, Button } from 'react-bootstrap';
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from './Item.module.css'

const ItemCatalogue = (props) => {
    let itemId = props.id;
    let bg_style = style.bg_common

    switch(props.rarity){
        case "epic":
            bg_style = style.bg_epic
            break
        case "legendary":
            bg_style = style.bg_legendary
            break
        case "rare":
            bg_style = style.bg_rare
            break
        case "uncommon":
            bg_style = style.bg_uncommon
            break
        default:
            bg_style = style.bg_epic
            break
    }
    let subTitle = (props.series === null) ? props.type : props.type + " [" + props.series + "] ";
    let description = (props.description === "") ? "I don't have a description..." : props.description

    return (
        <div className="col mb-4">
            <Card style={{height: "100%"}}>
                <Card.Img variant="top" className={bg_style} src={ props.img } />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{subTitle}</Card.Subtitle>
                    <Card.Text>
                        { description }
                    </Card.Text>
                    <Button variant="primary">
                        Q{ props.cost } &nbsp; <FontAwesomeIcon icon={faCartPlus} style={{color: '#fff'}}/>
                    </Button>
                </Card.Body>
                <Card.Footer>
                    <Card.Link href={'/item/' + itemId }>View more.</Card.Link>
                </Card.Footer>
            </Card>
        </div>
    );
}

export default ItemCatalogue;