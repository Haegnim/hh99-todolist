import { styled } from 'styled-components';
import TodoInsertContainer from '../../containers/TodoInsertContainer';
import TodoListContainer from '../../containers/TodoListContainer';
import HeadersContainer from '../../containers/HeadersContainer.jsx';

const TodoTemplateBlock = styled.div`
    max-width: 1200px;
    min-width: 800px;
    height: 100%;
    background: #edf1f3;

    height: 90vh;
    margin-top: 50px;
    overflow: hidden;
    border-radius: 25px;
    box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.1);
    /* backdrop-filter: blur(5px);
    background: rgba(255, 255, 255, 0.2);
    border-left: 2px solid rgba(255, 255, 255, 0.3);
    border-top: 2px solid rgba(255, 255, 255, 0.3); */
    > div {
        display: flex;
        justify-content: space-between;
    }
`;

const TodoTemplate = () => (
    <TodoTemplateBlock>
        <HeadersContainer />
        <div>
            <TodoInsertContainer />
            <TodoListContainer />
        </div>
    </TodoTemplateBlock>
);

export default TodoTemplate;
