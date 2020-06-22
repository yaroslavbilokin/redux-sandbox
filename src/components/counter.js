import React from 'react';
import { connect } from 'react-redux';

const Counter = ({ counter, inc, dec, rnd }) => {
    return (
        <div className="jumbotron">
            <h2>{counter}</h2>
            <button onClick={inc} id="inc" className="btn btn-primary btn-lg">INC</button>
            <button onClick={dec} id="dec" className="btn btn-primary btn-lg">DEC</button>
            <button onClick={rnd} id="rnd" className="btn btn-primary btn-lg">RND</button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        counter: state
    };
};

export default connect(mapStateToProps)(Counter);