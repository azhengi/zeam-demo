import React from 'react';
import { Select, Space, Typography } from 'antd';
import styled, { createGlobalStyle } from 'styled-components';

const { Option } = Select;

const FilterContainer = styled.div`
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

const _values = [
    { label: '全部', value: '' },
    { label: 'Jack', value: 'Jack' },
    { label: 'Jack2', value: 'Jack2' },
    { label: 'Jack3', value: 'Jack3' },
];

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
    const { genres, fetchGames } = props;

    const sortOpts = [
        { label: 'Release Date', value: 'release-date' },
    ];

    const platformOpts = [
        {
            label: 'Windows(PC)',
            value: 'Windows'
        },
        {
            label: 'Browser(Web)',
            value: 'Browser'
        },
    ];


    const handleSelect = (name: string, value: string) => {
        console.log("")
        fetchGames({[name]: value});
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
                        name={'Genre'}
                        values={genres}
                        handleSelect={(selected) => handleSelect('genre', selected)}
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