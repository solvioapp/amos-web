import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setBgClassName } from '../../actions/app.actions';

import styles from './Proposals.module.scss';

const Proposals = (props) => {
    useEffect(() => {
        props.setBgClassName('bgBlue');
    }, []);

    return (
        <div>
            Proposals
        </div>
    );
};

Proposals.propTypes = {
    setBgClassName: PropTypes.func,
};

export default connect(null, { setBgClassName })(Proposals);
