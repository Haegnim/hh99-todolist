import React from 'react';
import { styled } from 'styled-components';
import StyledToggle from '../components/common/Box/SytledToggleBox';
import StyledLogo from '../components/common/Box/StyledLogo';

const Header = styled.header`
    box-sizing: border-box;
    padding: 10px;
    margin: 10px;
    border-radius: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

function HeadersContainer() {
    return (
        <Header>
            <StyledLogo />
            <StyledToggle />
        </Header>
    );
}

export default HeadersContainer;
