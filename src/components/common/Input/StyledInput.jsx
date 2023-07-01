import { styled } from 'styled-components';

const StyledInputBox = styled.div`
    display: flex;
    flex-direction: column;
    input {
        width: 100%;
        height: 32px;
        padding: 12px;
        margin: 10px 0 10px 0;
        box-sizing: border-box;
        border: none;
        border-radius: 25px;
        outline: none;
        background: #edf1f3;
        font-size: 1rem;
        color: #668591;
        font-weight: 650;
        transition: all 0.2s ease-in-out;
        box-shadow: 5px 5px 5px #1f9361, -5px -5px 5px #3edd99;

        &:hover {
            box-shadow: 2px 2px 5px #1f9361, 2px -2px 5px #3edd99;
        }
        &:focus {
            box-shadow: inset 2px 2px 3px #1f9361, inset -2px -2px 3px #fff;
            background-color: #f7f7f7;
            /* border: 2px solid #3edd99; */
        }
    }
    label {
        color: #fff;
        font-weight: 650;
        font-size: 16px;
    }
`;

const StyledInput = ({ value, onChange }) => (
    <StyledInputBox>
        <label htmlFor="title">title</label>
        <input
            type="text"
            id="title"
            name="title"
            autoComplete="off"
            value={value}
            onChange={onChange}
        />
    </StyledInputBox>
);

export default StyledInput;
