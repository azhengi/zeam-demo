import React from 'react';
import styled from 'styled-components';
import { Button, Row, Col } from 'antd';
import GameCard from '../GameCard';

const RowWithStyle = styled(Row)`
    width: 80%;
    margin: 0 auto;
`;

interface LibProps {
};

const GameLib: React.FC<LibProps> = () => {
    return (
        <>
            <RowWithStyle justify="center">
                <Col span={4}>
                    <GameCard />
                </Col>
                <Col span={4}>col-6</Col>
                <Col span={4}>col-6</Col>
                <Col span={4}>col-6</Col>
                <Col span={4}>col-6</Col>
                <Col span={4}>col-6</Col>
            </RowWithStyle>
        </>
    );
};

export default GameLib;