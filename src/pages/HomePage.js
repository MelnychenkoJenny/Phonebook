import {
  ContainerHomePage,
  ContentHomePage,
  IconBox,
  LinkStyle,
  MainTitle,
  TextHomePage,
} from './HomePage.styled';
import { BsPhoneVibrate, BsPen, BsPeople } from 'react-icons/bs';
import { Footer } from 'components/Footer/Footer';

export default function HomePage() {

  return (
    <ContainerHomePage>
      <ContentHomePage>
        <MainTitle>Телефонна книга</MainTitle>
        <TextHomePage>
          Вітаємо на сайті. Цей сайт дозволяє вам зберігати та управляти своїми
          контактами.
        </TextHomePage>
        <TextHomePage>
          Щоб розпочати потрібно
          <LinkStyle to="/register">Зареєструватись</LinkStyle>, а якщо вже маєш
          свій профіль, то ось <LinkStyle to="/login">Вхід</LinkStyle>
        </TextHomePage>
        <IconBox>
          <BsPhoneVibrate /> <BsPen /> <BsPeople />
        </IconBox>
      </ContentHomePage>
      <Footer />
    </ContainerHomePage>
  );
}
