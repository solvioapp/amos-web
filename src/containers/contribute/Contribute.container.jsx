import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setBgClassName } from '../../actions/app.actions';

import styles from './Contribute.module.scss';

const Contribute = (props) => {
    useEffect(() => {
        props.setBgClassName('bgGreen');
    }, []);

    return (
        <div>
            Review page
        </div>
    );
};

Contribute.propTypes = {
    setBgClassName: PropTypes.func,
};

export default connect(null, { setBgClassName })(Contribute);
