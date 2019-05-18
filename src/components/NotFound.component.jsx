import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setBgClassName } from '../actions/app.actions';
import styles from './NotFound.module.scss';

const NotFound = (props) => {
    useEffect(() => {
        props.setBgClassName('bgDefault');
    }, []);

    return (
        <div className={styles.page}>
            <div className={styles.layout}>
                <h1 className="pt-5">Page not found</h1>
            </div>
        </div>
    );
};

NotFound.propTypes = {
    setBgClassName: PropTypes.func,
};

export default connect(null, { setBgClassName })(NotFound);
