import React, { useEffect, useMemo } from 'react';
import styled from "styled-components";
import { Input, Button, Row, Col } from 'antd';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import SearchInput from '../SearchInput';
import GameCard from '../GameCard';
import CondFilter from '../CondFilter';
import Lib from '../LibContainer';
import {
    getGameList,
    selectGames,
} from './homeSlice';

const LibContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const RowWithStyle = styled(Row)`
    width: 80%;
`;

const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Hr = styled.hr`
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 0;
    border-top: 1px solid rgba(94,84,84,.1);
`;

interface LibProps {
};

const useGamesOrCategories = () => {
    const games = useAppSelector(selectGames);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getGameList());
    }, []);

    return { games };
};

const Home: React.FC<LibProps> = () => {
    const dispatch = useAppDispatch();
    const { games } = useGamesOrCategories();

    const fetchGames = (params) => dispatch(getGameList(params));

    return (
        <>
            <CondFilter fetchGames={fetchGames} />
            <Hr />
            <Lib games={games} />
        </>
    );
};

export default Home;