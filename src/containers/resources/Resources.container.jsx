import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setBgClassName } from '../../actions/app.actions';

import styles from './Resources.module.scss';

const Resources = (props) => {
    useEffect(() => {
        props.setBgClassName('bgBlue');
    }, []);

    return (
        <div>
            Resources
        </div>
    );
};

Resources.propTypes = {
    setBgClassName: PropTypes.func,
};

export default connect(null, { setBgClassName })(Resources);
