import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { FolderOpenOutlined, ArrowLeftOutlined } from '@ant-design/icons';

const NavWithStyle = styled.nav`
    border-bottom: 1px solid rgba(28,28,28,.6);
    text-shadow: 1px 1px 1px rgb(0 0 0 / 30%);
    z-index: 1030;
    height: 54px;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    background-color: #272b30;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 30px;
    padding-right: 30px;
`;

const ArrowIcon = styled(ArrowLeftOutlined)`
    font-size: 30px;
    color: rgba(255, 255, 255, .5);
    &:hover {
        color: #fff;
        cursor: pointer;
    }
`;

const FolderIcon = styled(FolderOpenOutlined)`
    display: inline-flex;
    font-size: 30px;
    color: rgba(255, 255, 255, .5);

    &:hover {
        color: #fff;
        cursor: pointer;
    }
`;

interface HeaderProps {};

const Header: React.Fc<HeaderProps> = () => {
    const router = useRouter();

    return (
        <NavWithStyle>
            {
                router.route !== '/' ? (
                    <ArrowIcon onClick={() => router.back()} />
                ) : <div />
            }            
            <img src="/freetogame-logo.png" height="45" alt="Free to Game" />
            <FolderIcon onClick={() => router.push('/favorite')} />
        </NavWithStyle>
    );
};

export default React.memo(Header);