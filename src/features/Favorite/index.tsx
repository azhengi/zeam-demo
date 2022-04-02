import React from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import Lib from '../LibContainer';

const FavContainer = (props) => {
    const games = [];
    return (
        <Lib games={games} />
    );
};


export default FavContainer;
