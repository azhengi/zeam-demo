import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Card, Image } from 'antd';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';

const { Meta } = Card;

const MetaWithStyle = styled(Meta)`
    .ant-card-meta-title, .ant-card-meta-description {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .ant-card-meta-title {
        color: #AAA;
    }

    .ant-card-meta-description {
        color: #7A8288;
    }
`;

const SpanIcon = styled.span`
    color: #fff;
    background-color: #4799eb;
    border-radius: 4px;
`;

const Title = (props: { text: string; }) => {
    const { text } = props;
    return (
        <div>
            {text}
        </div>
    );
};

interface GameCardProps {
    title: string;
    thumbnail: string;
    short_description: string;
    game_url: string;
    genre: string;
    platform: string;
    publisher: string;
    developer: string;
    release_date: string;
    freetogame_profile_url: string;

    isLike?: boolean;
};

const GameCard: React.FC<GameCardProps> = (props) => {
    const { title, thumbnail, short_description, isLike = false } = props;
    return (
        <Card
            hoverable 
            cover={<Image src={thumbnail} loading='lazy' preview={false} />}
            bodyStyle={{ backgroundColor: '#32383e', padding: '20px', position: 'relative' }}
            bordered={false}
        >
            <MetaWithStyle title={<Title text={title} />} description={(
                <>
                    <div>
                        {short_description}
                    </div>
                    <div style={{ position: 'absolute', right: '6px', top: '10px' }}>
                        {
                            isLike ? <HeartFilled color='#aaa' /> : <HeartOutlined color='#aaa' />
                        }
                    </div>
                </>
            )} />
        </Card>
    );
};

export default React.memo(GameCard);