import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import styles from './MainLayout.module.scss';

import Header from '../components/header/Header.component';
import Footer from '../components/footer/Footer.component';

const MainLayout = props => (
    <div className={`d-flex flex-column align-content-around ${styles.wrapper} ${props.bgClassName}`}>
        <Header />

        <Container fluid className={`${styles.container} flex-grow-1`}>
            {props.children}
        </Container>

        <Footer />
    </div>
);

MainLayout.propTypes = {
    bgClassName: PropTypes.string,
    children: PropTypes.node,
};

const mapStateToProps = state => ({
    bgClassName: state.app.bgClassName,
});

export default connect(mapStateToProps)(MainLayout);
