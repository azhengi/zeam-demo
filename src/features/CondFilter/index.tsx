import React, { useState, useEffect } from 'react';
import { Select, Space, Typography } from 'antd';
import styled, { createGlobalStyle } from 'styled-components';
import { genres, sortOpts, platformOpts } from './constant';

const { Option } = Select;

const FilterContainer = styled.div`
    width: 100%;
`;

const SelectWithStyle = styled(Select)`
    .custom_drapdown {
        color: #aaa
    }
`;

const InjectAntSelectStyle = createGlobalStyle`
    &&& .ant-select-item-option-active:not(.ant-select-item-option-disabled) {
        color: #fff;
        text-decoration: none;
        background-color: #272b30 !important;
    }

    &&& .ant-select-item.ant-select-item-option {
        color: #fff;
    }

    &&& .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
        background-color: transparent;
    }
`;

interface SelectLabelProps {
    name: string;
    values: Array<{ label: string; value: string; }>
};

const SelectWithLabel: React.FC<SelectLabelProps> = (props) => {
    const { name = '类型', values, handleSelect } = props;
    return (
        <Space>
            <Typography.Text style={{ color: '#7a8288' }}>
                {name}
            </Typography.Text>
            <SelectWithStyle
                style={{ minWidth: '100px', color: '#e9ecef' }}
                dropdownStyle={{ backgroundColor: '#3a3f44' }}
                bordered={false}
                options={values}
                placeholder={'ALL'}
                onChange={handleSelect}
            />
        </Space>
    )
};

interface Props {
    genres: SelectLabelProps;
    fetchGames: any;
}

const CondFilter: React.FC<Props> = (props) => {
    const { fetchGames } = props;
    const [query, setQuery] = useState({});

    useEffect(() => {
        const keys = Object.keys(query);
        fetchGames(query);
    }, [query]);

    const handleSelect = (name: string, value: string) => {
        const nextState = JSON.parse(JSON.stringify(query));
        if (!value) {
            delete nextState[name];
            setQuery(() => nextState);
            return;
        }
        
        setQuery(() => {
            return Object.assign(nextState, { [name]: value });
        });
    };

    return (
        <>
            <InjectAntSelectStyle />
            <FilterContainer>
                <Space>
                    <SelectWithLabel
                        name={'Platform'}
                        values={platformOpts}
                        handleSelect={(selected) => handleSelect('platform', selected)}
                    />
                    <SelectWithLabel
                        name={'Genres'}
                        values={genres}
                        handleSelect={(selected) => handleSelect('category', selected)}
                    />
                    <SelectWithLabel
                        name={'Sort by'}
                        values={sortOpts}
                        handleSelect={(selected) => handleSelect('sort-by', selected)}
                    />
                </Space>
            </FilterContainer>
        </>
    )
};

export default CondFilter;