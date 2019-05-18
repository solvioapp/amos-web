import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setBgClassName } from '../../actions/app.actions';

import styles from './Search.module.scss';

const Search = (props) => {
    useEffect(() => {
        props.setBgClassName('bgOrange');
    }, []);

    return (
        <div>
            Search
        </div>
    );
};

Search.propTypes = {
    setBgClassName: PropTypes.func,
};

export default connect(null, { setBgClassName })(Search);
