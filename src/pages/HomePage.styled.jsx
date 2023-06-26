import { Container } from 'components/App/App.styled';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';


const slideIn = keyframes` from {
  transform: translateY(100%);
}
to {
  transform: translateY(0);
}` 


export const ContainerHomePage = styled(Container)`
padding-top: 40px;
  padding-bottom: 40px;
background-color: ${({ theme: { colors } }) => colors.bgAlfa};

animation: ${slideIn} 0.35s ease-out forwards;
transform: translateY(100%);
`

export const MainTitle = styled.h1`
  margin-bottom: 20px;
  font-size: 34px;
  text-shadow: ${({ theme: { colors } }) => colors.textShadowDark};
  @media screen and (min-width: 768px) {
    margin: 0px auto 20px 0px;

    
  }
  @media screen and (min-width: 1200px) {
    margin: 0px auto 10px 80px;
    font-size: 40px;
  }
`;
export const TextHomePage = styled.p`
margin-bottom: 15px;
font-size: 20px;
text-align: center;
`
export const IconBox = styled.div`

margin-top: 20px;
display: flex;
gap: 20px;

& > svg {
    width: 80px;
    height: 80px;
}
`

export const LinkStyle = styled(Link)`
display: inline-block;
  position: relative;
  font-size: 20px;
  font-weight: 600;
  transition: text-shadow 0.3s ease;
  text-shadow: rgba(130, 130, 130, 0.5) 4px 2px 3px;
  &:hover {
    text-shadow: rgba(130, 130, 130, 0.5) 4px 2px 3px;
  }
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: transparent;
    transition: background-color 0.3s ease;
    background-color: #684c4c;
  }

  }
`;