import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import HomeContainer from '../features/Home';

import styles from "../styles/Home.module.css";

const Title = styled.h1`
    font-size: 50px;
    color: ${({ theme }) => theme.colors.primary};
`;

const IndexPage: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>FREETOGAME</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Title>
                zeam-demo
            </Title>
            <HomeContainer />
        </div>
    );
};

export default IndexPage;
