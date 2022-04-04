import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styled, { css } from 'styled-components';
import { Layout, Row, Col, Carousel, Typography } from 'antd';
import { HeartFilled, HeartOutlined } from '@ant-design/icons';
import { addFavoriteGame, removeFavoriteGame, selectFavorites } from '../Favorite/favoriteSlice';
import { mockData } from './mock';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { fetchGame, SystemRequirement, GameDetail } from './gameInforAPI';

const { Header, Footer, Sider, Content } = Layout;

const LayoutWithStyle = styled(Layout)`
    background-color: transparent;
    color: #aaa;
`;

const withCommonCss = css`
    color: #aaa;
`;

const Title = styled(Typography.Title)`
    &&& {
        ${withCommonCss}
    }
`;

const Paragraph = styled(Typography.Paragraph)`
    &&& {
        ${withCommonCss}
        cursor: pointer;
    }
`;

const TitleWithRequirement = styled(Typography.Title)`
    &&& {
        color: #7a8288;
    }
`;
const TextWithRequirement = styled(Typography.Text)`
    &&& {
        color: #aaa;
    }
`;


const SystemRequirementContainer = (props: { requirements: SystemRequirement }) => {
    const { requirements } = props;
    return (
        <Row style={{ marginTop: '15px' }} gutter={[0,8]}>
            <Col md={24} xs={24} xl={12}>
                <TitleWithRequirement level={5}>
                    OS
                </TitleWithRequirement>
                <TextWithRequirement>
                    {requirements.os}
                </TextWithRequirement>
            </Col>
            <Col md={24} xs={24} xl={12}>
                <TitleWithRequirement level={5}>
                    Processor
                </TitleWithRequirement>
                <TextWithRequirement>
                    {requirements.processor}
                </TextWithRequirement>
            </Col>
            <Col md={24} xs={24} xl={12}>
                <TitleWithRequirement level={5}>
                    Memory
                </TitleWithRequirement>
                <TextWithRequirement>
                    {requirements.memory}
                </TextWithRequirement>
            </Col>
            <Col md={24} xs={24} xl={12}>
                <TitleWithRequirement level={5}>
                    Graphics
                </TitleWithRequirement>
                <TextWithRequirement>
                    {requirements.graphics}
                </TextWithRequirement>
            </Col>
            <Col md={24} xs={24} xl={12}>
                <TitleWithRequirement level={5}>
                    Storage
                </TitleWithRequirement>
                <TextWithRequirement>
                    {requirements.storage}
                </TextWithRequirement>
            </Col>
            <Col md={24} xs={24} xl={12}>
                <TitleWithRequirement level={5}>
                    Additional Notes
                </TitleWithRequirement>
                <TextWithRequirement>
                    Specifications may change during development
                </TextWithRequirement>
            </Col>
        </Row>
    );
};

const GameInfor = (props) => {
    const [gameData, setGameData] = useState<GameDetail>(mockData);
    const router = useRouter();
    const dispatch = useAppDispatch();
    const favorites = useAppSelector(selectFavorites);
    const id = router?.query?.id;
    const isLike = favorites.includes(+id);
    const { title, release_date, description, screenshots = [], minimum_system_requirements } = gameData;

    useEffect(() => {
        (async () => {
            if (id) {
                const response = await fetchGame({ id });
                if (response.success) {
                    setGameData(() => response.data);
                }
            }
        })();
    }, [id]);

    const handleClickLike = (event) => {
        event.stopPropagation();
        const actionFunc = isLike ? removeFavoriteGame : addFavoriteGame;
        dispatch(actionFunc(+id));
    }

    return (
        <LayoutWithStyle>
            <Content style={{ width: '80%', margin: '0 auto', marginTop: '20px' }}>
                <Row gutter={[8, 8]}>
                    <Col span={8}>
                        <Carousel autoplay dots={false}>
                            {
                                screenshots.map((item, index) => (
                                    <div key={`${index}-${item.image}`}>
                                        <div 
                                            style={{ position: 'relative', paddingBottom: '56%' }}
                                        >
                                            <img 
                                                src={item.image} 
                                                style={{  position: 'absolute', width: '100%', height: '100%' }}
                                            />
                                        </div>
                                    </div>
                                ))
                            }
                        </Carousel>
                        <SystemRequirementContainer requirements={minimum_system_requirements} />
                    </Col>
                    <Col span={16}>
                        <Title level={3}>
                            {title}
                        </Title>
                        <Paragraph onClick={handleClickLike}>
                            {
                                isLike ? (
                                    <HeartFilled style={{ color: '#eb2f96' }} />
                                ) : <HeartOutlined style={{ color: '#aaa' }} />
                            }
                        </Paragraph>
                        <Paragraph>
                            {release_date}
                        </Paragraph>
                        <Title level={5}>
                            About {title}
                        </Title>
                        <Paragraph
                            ellipsis={{ rows: 5, expandable: true, symbol: 'more' }}
                        >
                            {description}
                        </Paragraph>
                    </Col>
                </Row>
            </Content>
        </LayoutWithStyle>
    );
};


export default React.memo(GameInfor);