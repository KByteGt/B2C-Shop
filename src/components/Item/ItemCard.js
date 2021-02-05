import { Card } from 'react-bootstrap';
import style from './Item.module.css'
import { faStar as starFill} from "@fortawesome/free-solid-svg-icons";
import { faStar as starUnFill} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ItemCard = (props) => {

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

    return (
        <Card>
            <Card.Img variant="top" className={bg_style} src={ props.img } />
            <blockquote className="blockquote mb-0 card-body">
            <p>{ props.description}</p>
            <footer className="blockquote-footer">
                <small className="text-muted">
                { props.name }
                </small>
            </footer>
            </blockquote>
            <Card.Footer>
                <div>
                <FontAwesomeIcon icon={starFill} className={style.star}/>
                <FontAwesomeIcon icon={starFill} className={style.star}/>
                <FontAwesomeIcon icon={starFill} className={style.star}/>
                <FontAwesomeIcon icon={starUnFill} className={style.star}/>
                <FontAwesomeIcon icon={starUnFill} className={style.star}/>
                <span className="text-muted"> - { props.stars}</span>
                </div>
            </Card.Footer>
        </Card>
    );
}

export default ItemCard;