import React from 'react';
import { Row, Col, Skeleton } from 'antd';
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
    const { games, status } = props;
    return (
        <LibContainer>
            <RowWithStyle justify='center' gutter={[8, 8]} >
                {
                    status === 'DONE' ? games?.map((item) => (
                        <Col key={item.id} xs={12} md={8} lg={6} xl={5}>
                            <GameCard key={item.id} {...item} />
                        </Col>
                    )) : (
                        <Col span={24}>
                            <Skeleton paragraph active />
                        </Col>
                    )
                }
            </RowWithStyle>
        </LibContainer>
    );
};

export default Lib;