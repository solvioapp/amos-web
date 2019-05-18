import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import styles from './Header.module.scss';
import { ReactComponent as IconNotifications } from '../../styles/assets/icons/bell.svg';
import { ReactComponent as IconSettings } from '../../styles/assets/icons/settings.svg';
import { ReactComponent as IconUser } from '../../styles/assets/icons/user.svg';

const Header = () => (
    <header className={styles.header}>
        <div className={styles.logo}>Amos</div>
        <nav className={styles.links}>
            <NavLink activeClassName={styles.active} to="/review">Review</NavLink>
            <NavLink activeClassName={styles.active} to="/proposals">Proposals</NavLink>
            <NavLink activeClassName={styles.active} exact to="/">Search</NavLink>
        </nav>
        <nav className={styles.icons}>
            <NavLink activeClassName={styles.active} to="/notifications"><IconNotifications /></NavLink>
            <NavLink activeClassName={styles.active} to="/profile"><IconUser /></NavLink>
            <NavLink activeClassName={styles.active} to="/settings"><IconSettings /></NavLink>
        </nav>
    </header>
);

export default withRouter(Header);
