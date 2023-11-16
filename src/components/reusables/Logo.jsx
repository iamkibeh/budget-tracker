import styled from '@emotion/styled';


const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #2c3e50;
    color: #fff;
    font-size: 10px;
    font-weight: bold;
    // style each word in the logo differently
    span {
        color: #e74c3c;
    }
    
`;

const Logo = () => {
    return (
        <LogoWrapper>
            Ex<span>Track</span>
        </LogoWrapper>
    );
};

export default Logo;
