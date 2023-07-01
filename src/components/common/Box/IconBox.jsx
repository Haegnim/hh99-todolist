import { styled } from 'styled-components';

const IconBox = styled.div`
    display: flex;
    justify-content: space-between;

    &.ListUl {
        width: 100%;
        height: 100%;
        position: relative;
        justify-content: flex-end;
        .id-box {
            width: 30px;
            height: 30px;
            position: absolute;
            top: 11px;
            left: 11px;
            border-radius: 15px;
            font-size: 20px;
            /* margin-right: 16px; */
        }
        .icon-box {
            position: absolute;
            top: 12px;
            right: 4px;
            #check-icon {
                height: 24px;
                margin-right: 16px;
                margin-bottom: 0;
            }
            #delete-icon {
                height: 24px;
            }
        }
    }
    .icon-box > #check-icon {
        height: 16px;
        fill: ${(props) => props.isdonecolor};
        margin-right: 8px;
        margin-bottom: 1px;
    }
    .icon-box > #check-icon:hover,
    .icon-box > #check-icon:focus {
        fill: #31af7f;
    }
    .icon-box > #delete-icon {
        fill: #b5b5b5;
        height: 16px;
        margin-bottom: 1px;
    }
    .icon-box > #delete-icon:hover,
    .icon-box > #delete-icon:focus {
        fill: #ff3232;
    }
`;

export default IconBox;
