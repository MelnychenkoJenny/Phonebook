import styled from 'styled-components';

export const Container = styled.div`
position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 15px;
  padding-right: 15px;
`;



export const Title = styled.h2`
  text-align: center;
  margin-bottom: 10px;
  text-shadow: ${({ theme: { colors } }) => colors.textShadowDark};
  @media screen and (min-width: 1200px) {
    font-size: 24px;
  }
`;

export const ContactsContainer = styled.div`
  margin-top: 20px;
  background-color: ${({ theme: { colors } }) => colors.bgAlfa};
  padding: 15px;
  text-align: center;
  border-radius: 10px;
  box-shadow: ${({ theme: { colors } }) => colors.shadow};
  @media screen and (min-width: 768px) {
    min-width: 420px;
    margin: 20px auto 0px 0px;
  }
  @media screen and (min-width: 1200px) {
    min-width: 600px;
  }
`;

export const AmountContacts = styled.p`
  @media screen and (min-width: 1200px) {
    font-size: 18px;
  }
`;

export const EmptyText = styled.p`
  @media screen and (min-width: 1200px) {
    font-size: 18px;
  }
`;
