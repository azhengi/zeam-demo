import React from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import GameCard from '../GameCard';

const LibContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const RowWithStyle = styled(Row)`
    width: 80%;
`;

const Lib = (props) => {
    const { games } = props;
    return (
        <LibContainer>
            <RowWithStyle justify="center" gutter={[8, 8]} >
                {
                    games.map((item) => (
                        <Col key={item.id} span={4} lg={4}>
                            <GameCard key={item.id} {...item} />
                        </Col>
                    ))
                }
            </RowWithStyle>
        </LibContainer>
    );
};

export default Lib;