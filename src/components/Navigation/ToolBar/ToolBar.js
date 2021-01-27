import style from './ToolBar.module.css';
import NavItems from '../NavItems/NavItems';

const ToolBar = (props) => {
    return(
        <div className={style.ToolBar}>
            <nav>
                <h3>Logo</h3>
                <NavItems/>
            </nav>
        </div>
    );
}

export default ToolBar;