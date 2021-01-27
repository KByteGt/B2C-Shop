import style from './NavItems.module.css';
import NavItem from './NavItem/NavItem';

const NavItems = (props) => {
    return(
        <ul className={style.NavItems}>
            <NavItem url="/">Home</NavItem>
            <NavItem url="/about">About us</NavItem>
            <NavItem url="/products">Products</NavItem>
        </ul>
    );
}

export default NavItems;