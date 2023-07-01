import { styled } from 'styled-components';
import StyledInput from '../common/Input/StyledInput';
import StyledTextArea from '../common/Input/StyledTextArea';
import StyledButton from '../common/Button/StyledButton';
import StyledLogo from '../common/Box/StyledLogo';
import { useState } from 'react';
const TodoInsertBlock = styled.div`
    width: 304px;
    height: 100%;
    /* background: #31be86; */
    margin-top: 17px;
    border-radius: 0 25px 0 0 / 0 25px 0 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    form {
        height: 55vh;
        padding: 25px;
        border-radius: 15px;
        background: #edf1f3;
        margin: 0 20px 0 30px;
        box-shadow: inset 3px 3px 5px #1f9361, inset -3px -3px 5px #3dd191;
        background-color: #31be86;
        color: #fff;
    }
`;

const TodoInsert = ({ onInsertHandler }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const onTitleChangeHandler = (e) => setTitle(e.target.value);
    const onContentChangeHandler = (e) => setContent(e.target.value);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        // 유효성 검사
        if (title === '' || content === '') return;
        // reducer에 데이터 보내기
        onInsertHandler({ title, content });
        //Input Data 초기화
        setTitle('');
        setContent('');
    };

    return (
        <TodoInsertBlock>
            <form onSubmit={onSubmitHandler}>
                <StyledInput value={title} onChange={onTitleChangeHandler} />
                <StyledTextArea value={content} onChange={onContentChangeHandler} />
                <StyledButton />
            </form>
        </TodoInsertBlock>
    );
};

export default TodoInsert;
