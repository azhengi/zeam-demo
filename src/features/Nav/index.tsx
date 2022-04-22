import React, { useState, useEffect } from 'react';
import { Menu, MenuProps, message } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import styled, { createGlobalStyle } from 'styled-components';
import { fetchNavList } from './navAPI';

const NavListWrap = styled.div`
    width: 100%;
    background: rgba(28, 28, 28, 0.6);
    position: fixed;
    top: 0;
    z-index: 1030;
`;

const NavItem = styled.div``;

const MenuWrap = styled(Menu)`
`;

const DownArrowIcon = styled(DownOutlined)`
    position: absolute;
    top: 50%;
    right: 16px;
    width: 10px;
    color: rgba(0, 0, 0, 0.85);
    transform: translateY(-50%);
    transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
`;

const InjectAntSelectStyle = createGlobalStyle`
    &&& {
        .ant-menu-submenu-popup {
            width: 100%;
            background: rgba(14, 14, 14, 0.85);
            backdrop-filter: blur(15px);
            .ant-menu-sub {
                display: flex;
                width: 100%;
                min-height: 223px;
            }
        }
    }
`;

const REDIRECT_HOST = 'https://www.bezoge.com';
const IMG_URL = `https://www.bezoge.com/_next/image`;


const ImageWrapWithStyle = styled.div`
    :hover {
        color: #ffc93d;
        cursor: pointer;
        img {
            transition: .3s;
            transform: scale(1.1);
            color: #ffc93d;
        }
    }
`;

const ImageNameBar = styled.div`
    margin-top: 20px;
    height: 20px;
    line-height: 20px;
`;

const ImageWrap = (props) => {
    const { name, uri } = props;

    const imgURL = `${IMG_URL}?url=${encodeURIComponent(
        `https://bezoge.nftendo.net${uri}`
    )}&w=1920&q=75`;

    return (
        <ImageWrapWithStyle>
            <div style={{ position: 'relative', width: '220px', height: '140px' }}>
                <img 
                    src={imgURL} 
                    style={{ position: 'absolute', width: '100%', height: '100%', borderRadius: '20px' }}
                />
            </div>
            <ImageNameBar>
                {name}
            </ImageNameBar>
        </ImageWrapWithStyle>
    );
};

interface NavProps {}

const Nav: React.FC<NavProps> = () => {
    const [lev, setLev] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetchNavList();
                if (response?.data?.attributes) {
                    const { Lev0 } = response?.data?.attributes;
                    setLev(() => Lev0);
                }
            } catch (err) {
                message.error('fetch nav Network error');
            }
        })();
    }, []);

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click', e.item.props.url);
        const aLink = document.createElement('a');
        aLink.setAttribute('href', REDIRECT_HOST + '/' + e?.item?.props?.url);
        aLink.setAttribute('target', '_blank');
        aLink.click();
    };

    return (
        <>
            <InjectAntSelectStyle />
            <NavListWrap>
                <MenuWrap onClick={onClick} mode="horizontal" theme="dark">
                    {lev.map((item) => (
                        <Menu.SubMenu
                            key={item.Heading}
                            title={item.Heading}
                            popupOffset={[0, 0]}
                            mode="horizontal"
                        >
                            <Menu.ItemGroup title={item.SubHeading1}>
                                {item.ColumnLinks1.map((linkItem) => (
                                    <Menu.Item
                                        key={linkItem.label + '-sub'}
                                        url={linkItem.url}
                                    >
                                        {linkItem.label}
                                    </Menu.Item>
                                ))}
                            </Menu.ItemGroup>
                            <Menu.ItemGroup title={item.SubHeading2}>
                                {item.ColumnLinks2.map((linkItem) => (
                                    <Menu.Item
                                        key={linkItem.label + '-sub'}
                                        url={linkItem.url}
                                    >
                                        {linkItem.label}
                                    </Menu.Item>
                                ))}
                            </Menu.ItemGroup>

                            {item?.ImageLink1?.MediaUpload?.data?.attributes
                                ?.url ? (
                                <Menu.ItemGroup>
                                    <ImageWrap
                                        uri={
                                            item?.ImageLink1?.MediaUpload?.data
                                                ?.attributes?.url
                                        }
                                        name={item?.ImageLink1?.ImageName}
                                    />
                                </Menu.ItemGroup>
                            ) : null}

                            {item?.ImageLink2?.MediaUpload?.data?.attributes
                                ?.url ? (
                                <Menu.ItemGroup style={{ marginLeft: '20px' }}>
                                    <ImageWrap
                                        uri={
                                            item?.ImageLink2?.MediaUpload?.data
                                                ?.attributes?.url
                                        }
                                        name={item?.ImageLink2?.ImageName}
                                    />
                                </Menu.ItemGroup>
                            ) : null}
                        </Menu.SubMenu>
                    ))}
                </MenuWrap>
            </NavListWrap>
        </>
    );
};

export default React.memo(Nav);
