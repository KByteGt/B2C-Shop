import style from './NavItem.module.css';
import { NavLink } from 'react-router-dom';
//import { Link } from 'react-router-dom';

const NavItem = (props) => {
    return(
        <li className={ style.NavItem}>
            <NavLink to={ props.url } exact activeClassName={ style.children }></NavLink>
        </li>
    );
}

export default NavItem;
