import { BsFillSuitHeartFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import styled, {keyframes} from 'styled-components';

const heartbeat = keyframes`
0% {
    transform: scale(1);
  }
  20% {
    transform: scale(1.25);
  }
  40% {
    transform: scale(1.5);
  }
`;

export const HeartIcon = styled(BsFillSuitHeartFill)`
animation: ${heartbeat} 1s infinite;
`
export const FooterStyle = styled.footer`

padding: 15px;
display: flex;
    justify-content: center;
    gap: 10px;
    align-items: center;
background-color: ${({ theme: { colors } }) => colors.bgAlfa};
// @media screen and (min-width: 768px) {
//     width: 50%;

//   }
//   @media screen and (min-width: 1200px) {
//     padding-left: 30px;
//     padding-right: 30px;
//   }
`
export const SocialLink = styled(Link)`
&>svg {
    width: 20px;
    height: 20px;
    transition: color 0.3s ease, transform 0.3s ease;
}
& > svg:hover {
    fill: ${({ theme: { colors } }) => colors.border};
    transform: scale(1.5);
}
`
