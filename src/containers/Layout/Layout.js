import React, { Component } from 'react';
import NavBar from '../../components/Navigation/NavBar/NavBar';
import style from './Layout.module.css';

class Layout extends Component {
    render() {
        return (
            <>
                <div>
                    <header className={style.header}>
                        <NavBar/>
                    </header>

                    <main className={style.content}>
                        { this.props.children }
                    </main>
                </div>
                <footer className={style.footer}>
                    <div className={style.copy}>
                        <p>2021 | KByteGt</p>
                    </div>
                </footer>
            </>
        );
    }
}

export default Layout;