import React from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import Lib from '../LibContainer';
import { addFavoriteGame, removeFavoriteGame, selectFavorites } from './favoriteSlice';
import { selectGames, selectStatus } from '../Home/homeSlice';
import { useAppSelector, useAppDispatch } from '../../app/hooks';

const FavContainer = (props) => {
    const dispatch = useAppDispatch();
    const favorites = useAppSelector(selectFavorites);
    const games = useAppSelector(selectGames);
    const status = useAppSelector(selectStatus);
    const favoriteGames = games.filter((item) => favorites.includes(+item.id));

    return (
        <Lib games={favoriteGames} status={status} />
    );
};


export default FavContainer;
