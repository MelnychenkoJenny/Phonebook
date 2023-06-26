import { ContainerHomePage, IconBox, LinkStyle, MainTitle, TextHomePage } from './HomePage.styled';
import { BsPhoneVibrate, BsPen, BsPeople } from 'react-icons/bs';


export default function HomePage() {
  return (
    <ContainerHomePage>
      <MainTitle>Телефонна книга</MainTitle>
      <TextHomePage>Вітаємо на сайті.
        Цей сайт дозволяє вам зберігати та управляти своїми контактами. 
      </TextHomePage>
      <TextHomePage>
      Щоб розпочати потрібно <LinkStyle to="/register">Зареєструватись</LinkStyle>, а якщо вже маєш свій
        профіль, то ось <LinkStyle to="/login">Вхід</LinkStyle>

      </TextHomePage>
<IconBox><BsPhoneVibrate/> <BsPen/> <BsPeople/></IconBox>
    </ContainerHomePage>


  );
}
