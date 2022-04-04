import React from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import Lib from '../LibContainer';
import { addFavoriteGame, removeFavoriteGame, selectFavorites } from './favoriteSlice';
import { selectGames } from '../Home/homeSlice';
import { useAppSelector, useAppDispatch } from '../../app/hooks';

const FavContainer = (props) => {
    const dispatch = useAppDispatch();
    const favorites = useAppSelector(selectFavorites);
    const games = useAppSelector(selectGames);
    const favoriteGames = games.filter((item) => favorites.includes(+item.id));

    return (
        <Lib games={favoriteGames} />
    );
};


export default FavContainer;
