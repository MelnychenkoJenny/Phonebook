import { ContainerError } from './Error.styled';
import EmptyImg from './errorImg.png';

export const Error = ({ error }) => {
  return (
    <ContainerError>
      <p style={{textAlign: 'center',}}>
        Ooops... Something went wrong. {error} Try again later. 🙄
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
