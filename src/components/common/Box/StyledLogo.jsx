import { styled } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
const StyledLogoBox = styled.div`
    padding: 0 20px;
    #icons {
        font-size: 30px;
        color: #31be86;
        margin-right: 10px;
    }
    h2 {
        padding: 0;
        display: flex;
        align-items: center;
        color: #31be86;
        text-align: center;
        font-size: 1.4rem;
        margin: 0;
    }
`;

const StyledLogo = () => (
    <StyledLogoBox>
        <h2>
            <FontAwesomeIcon icon={faBars} id="icons" />
            TODOLIST
        </h2>
    </StyledLogoBox>
);

export default StyledLogo;
