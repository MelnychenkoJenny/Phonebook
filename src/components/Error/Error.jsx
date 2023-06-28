import { ContainerError } from './Error.styled';
import EmptyImg from './errorImg.png';

export const Error = ({ error }) => {
  return (
    <ContainerError>
      <p style={{textAlign: 'center',}}>
       Упс... Щось пішло не по плану. {error} Спробуйте пізніше. 🙄
      </p>
      <img
        src={EmptyImg}
        alt="emptyImageCat"
        style={{
          width: '170px',
        }}
      />
    </ContainerError>
  );
};
