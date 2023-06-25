import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Container } from 'components/App/App.styled';
import {
  Button,
  ErrorMessageStyle,
  FormStyle,
  InputGroup,
  InputLabel,
  Input,
} from 'components/ContactForm/ContacrForm.styled';
import { nanoid } from 'nanoid';
import { useForm } from 'react-hook-form';
import { MdAppRegistration } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { registerAuth } from 'redux/Auth/operationsAuth';

const schema = yup.object().shape({
  name: yup.string().required("Ім'я обов'язкове!"),
  email: yup
    .string()
    .email(
      "Пошта латиницею, має містити @ та текст після"
    )
    .required("Пошта обов'язкова!"),
  password: yup
    .string()
    .required("Пароль обов'язковий!")
    .min(7, 'Пароль має бути не менше 7 цифр')
    .max(12, 'Пароль не повинен перевищувати 12 цифр'),
});

const nameId = nanoid();
const passwordId = nanoid();
const emailId = nanoid();

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();

  const onSubmit = ({name, email, password}) => {
    const dataRegister = {name, email, password};
    dispatch(registerAuth(dataRegister))
    reset();
  };

  return (
    <Container >
      <FormStyle onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <InputLabel htmlFor={nameId}>Ім'я / Нік</InputLabel>
          <Input
            {...register('name')}
            type="text"
            name="name"
            id={nameId}
            title="Ім'я може містити літери та цифри, апостроф, тире та пробіли. Наприклад Адріан, Мерсер2, д'Артаньян"
          />
          {errors.name && (
            <ErrorMessageStyle>{errors.name?.message}</ErrorMessageStyle>
          )}
        </InputGroup>
        <InputGroup>
          <InputLabel htmlFor={emailId}>Пошта</InputLabel>
          <Input
            type="email"
            name="email"
            id={emailId}
            {...register('email')}
            title="Пошта обов'язково латиницею, має містити @ та текст після."
          />
          {errors.email && (
            <ErrorMessageStyle>{errors.email?.message}</ErrorMessageStyle>
          )}
        </InputGroup>
        <InputGroup>
          <InputLabel htmlFor={passwordId}>Пароль</InputLabel>
          <Input
            type="password"
            name="password"
            id={passwordId}
            {...register('password')}
            title="Пароль має складатись від 7 до 12 символів"
          />
          {errors.password && (
            <ErrorMessageStyle>{errors.password?.message}</ErrorMessageStyle>
          )}
        </InputGroup>
        <Button type="submit">
          Зареєструвати
          <MdAppRegistration />
        </Button>
      </FormStyle>
    </Container>
  );
}
