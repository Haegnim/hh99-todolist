import React, { useState } from 'react';
import { styled } from 'styled-components';
import BackBut from '../common/Button/BackButton';
import TitleBox from '../common/Box/TitleBox';
import ContentBox from '../common/Box/ContentBox';
import DetailIconBox from '../common/Box/DetailIconBox';
import StyledInput from '../common/Input/StyledInput';
import StyledTextArea from '../common/Input/StyledTextArea';
import StyledButton from '../common/Button/StyledButton';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteItem, toggleItem } from '../../redux/modules/todos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faReply, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as Check } from '../../lib/assets/check.svg';
import { ReactComponent as Trash } from '../../lib/assets/trash.svg';

const TodoDetailBlock = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #edf1f3;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const DetailPage = styled.div`
    width: 85vw;
    max-width: 750px;
    padding: 13px 12px 36px 12px;
    margin-bottom: 120px;
    background-color: #31be86;

    border-radius: 32px;
    box-shadow: 0px 0px 10px #e8e8e8;
    position: relative;

    background-color: #fff;

    .id-num {
        font-size: 18px;
        font-weight: 500;
        /* padding: 0 23px; */
        margin-bottom: 10px;
        line-height: 0;
        color: #31be86;
    }
    #pen {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 31px;
        transform: translate(24px, 49px);
        color: #b5b5b5;
        &:hover {
            color: #31be86;
        }
    }
    form {
        display: none;
        &.active {
            display: block;
        }
    }
`;

const TodoDetail = ({ todo }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    try {
        let isdoneIconColor = `#b5b5b5`;
        todo.isDone ? (isdoneIconColor = '#31af7f') : (isdoneIconColor = '#b5b5b5');
        return (
            <TodoDetailBlock key={todo.id}>
                <DetailPage>
                    <Link to="/">
                        <BackBut>
                            <FontAwesomeIcon icon={faReply} id="icon-reply" />
                            이전
                        </BackBut>
                    </Link>

                    <TitleBox>
                        {todo.title} <span className="id-num">NO.{todo.id}</span>
                    </TitleBox>
                    <ContentBox>{todo.content}</ContentBox>
                    <form>
                        <StyledInput />
                        <StyledTextArea />
                        <StyledButton />
                    </form>
                    <FontAwesomeIcon icon={faPenToSquare} id="pen" />
                    <DetailIconBox isdoneColor={isdoneIconColor}>
                        <Check
                            id="icon-heart"
                            // style={{ fill: isdoneIconColor }}
                            onClick={() => {
                                dispatch(toggleItem(todo.id));
                            }}
                        ></Check>
                        <Trash
                            id="icon-Xmark"
                            onClick={() => {
                                dispatch(deleteItem(todo.id));
                            }}
                        />
                    </DetailIconBox>
                </DetailPage>
            </TodoDetailBlock>
        );
    } catch (e) {
        navigate('/');
    }
};

export default TodoDetail;
