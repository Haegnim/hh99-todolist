import { styled } from 'styled-components';

const StyledTextAreaBox = styled.div`
    display: flex;
    flex-direction: column;
    textarea {
        width: 100%;
        height: 250px;
        padding: 15px;
        margin: 10px 0 10px 0;
        box-sizing: border-box;
        border: none;
        border-radius: 16px;
        outline: none;
        background: #edf1f3;
        resize: none;
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
        }
    }
    label {
        color: #fff;
        font-weight: 650;
        font-size: 16px;
    }
`;

const StyledTextArea = ({ value, onChange }) => (
    <StyledTextAreaBox>
        <label htmlFor="content">content</label>
        <textarea
            type="text"
            id="content"
            name="content"
            autoComplete="off"
            value={value}
            onChange={onChange}
        ></textarea>
    </StyledTextAreaBox>
);

export default StyledTextArea;
