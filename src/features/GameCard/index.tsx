import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { Button, Card, Image } from 'antd';
import { HeartOutlined, HeartFilled, PictureOutlined } from '@ant-design/icons';
import { addFavoriteGame, removeFavoriteGame, selectFavorites } from '../Favorite/favoriteSlice';
import { useAppSelector, useAppDispatch } from '../../app/hooks';


const { Meta } = Card;

const MetaWithStyle = styled(Meta)`
    .ant-card-meta-title, .ant-card-meta-description {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .ant-card-meta-title {
        color: #AAA;
        text-align: left;
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
    id: number;
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
};

const GameCard: React.FC<GameCardProps> = (props) => {
    const { id, title, thumbnail, short_description } = props;
    const router = useRouter();
    const dispatch = useAppDispatch();
    const favorites = useAppSelector(selectFavorites);
    const isLike = favorites.includes(id);

    const handleClick = (event) => {
        event.stopPropagation();
        const actionFunc = isLike ? removeFavoriteGame : addFavoriteGame;
        dispatch(actionFunc(id));
    };

    const handleClickPush = () => {
        router.push(`/game/${id}`);
    };

    return (
        <Card
            hoverable 
            cover={<Image src={thumbnail} loading='lazy' preview={false} placeholder />}
            bodyStyle={{ backgroundColor: '#32383e', padding: '20px', position: 'relative' }}
            onClick={handleClickPush}
            bordered={false}
        >
            <MetaWithStyle title={<Title text={title} />} description={(
                <>
                    <div>
                        {short_description}
                    </div>
                    <div 
                        style={{ position: 'absolute', right: '6px', top: '10px' }}
                        onClick={handleClick}
                    >
                        {
                            isLike ? <HeartFilled style={{ color: '#eb2f96' }} /> : <HeartOutlined style={{ color: '#aaa' }} />
                        }
                    </div>
                </>
            )} />
        </Card>
    );
};

export default React.memo(GameCard);