import React from 'react';
import styled from 'styled-components';
import { Input } from 'antd';

const InputContainer = styled.div`
    width: 580px;
`;


interface SearchProps {
};

const SearchInput: React.FC<SearchProps> = () => {
    return (
        <InputContainer>
            <Input placeholder="Basic usage" />
        </InputContainer>
    );
};

export default React.memo(SearchInput);