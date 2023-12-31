import { styled } from 'styled-components';

const StyledButtonBox = styled.div`
    width: 100%;
    text-align: right;
    button {
        width: 100%;
        height: 35px;
        padding: 0;
        margin-top: 10px;
        border: none;
        border-radius: 10px;
        background-color: #3dd191;
        color: #fff;
        font-weight: 700;
        font-size: 16px;
        transition: all 0.3s ease-in-out;
        box-shadow: 5px 5px 5px #1f9361, -5px -5px 5px #3edd99;
        &:hover {
            box-shadow: 2px 2px 5px #1f9361, 2px -2px 5px #3edd99;
            font-size: 14px;
        }
        &:active {
            box-shadow: inset 2px 2px 5px #1f9361, inset -2px -2px 5px #3edd99;
        }
    }
`;

const StyledButton = () => {
    return (
        <StyledButtonBox>
            <button>add</button>
        </StyledButtonBox>
    );
};

export default StyledButton;
