import {
  Button,
  FormStyle,
  InputGroup,
  InputLabel,
  Input,
  ErrorMessageStyle,
} from 'components/ContactForm/ContacrForm.styled';
import { nanoid } from 'nanoid';
import { CiLogin } from 'react-icons/ci';
import { BsEyeSlash, BsEye } from 'react-icons/bs';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/Auth/operationsAuth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BtnVisiblePassword, ContainerLogInPage } from './LogInPage.styled';
import { Title } from 'components/App/App.styled';
import { useState } from 'react';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Пошта латиницею, має містити @ та текст після')
    .required("Пошта обов'язкова!"),
  password: yup
    .string()
    .required("Пароль обов'язковий!")
    .min(5, 'Пароль має бути не менше 5 цифр')
    .max(12, 'Пароль не повинен перевищувати 12 цифр'),
});

const passwordId = nanoid();
const emailId = nanoid();

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = ({ email, password }) => {
    const dataLogIn = { email, password };

    dispatch(logIn(dataLogIn))
      .unwrap()
      .then(({ user: { name } }) => {
        reset();
        return toast.success(
          `Вітаємо, ${name} у твоїй особистій телефонній книзі.`
        );
      })
      .catch(() =>
        toast.error('Упс. Пошта або пароль не вірні. Спробуйте ще раз. 🙄')
      );
  };
  const togglePasswordVisible = () => setPasswordVisible(!passwordVisible);

  return (
    <ContainerLogInPage>
      <FormStyle onSubmit={handleSubmit(onSubmit)}>
        <Title>Вхід в систему</Title>
        <InputGroup>
          <InputLabel htmlFor={emailId}>Пошта</InputLabel>
          <Input
          autoFocus
            type="email"
            name="email"
            id={emailId}
            {...register('email')}
            title="Пошта обов'язково латиницею, має містити @ та текст після. Наприклад: poshta@gameil.com"
          />
          {errors.email && (
            <ErrorMessageStyle>{errors.email?.message}</ErrorMessageStyle>
          )}
        </InputGroup>
        <InputGroup>
          <InputLabel htmlFor={passwordId}>Пароль</InputLabel>
          <Input
          type={passwordVisible ? 'text' : 'password'}
            name="password"
            id={passwordId}
            {...register('password')}
            title="Пароль має складатись від 5 до 12 символів"
          />
          {errors.password && (
            <ErrorMessageStyle>{errors.password?.message}</ErrorMessageStyle>
          )}
          <BtnVisiblePassword type='button' onClick={togglePasswordVisible} data-shown={passwordVisible}>{passwordVisible ? <BsEye /> : <BsEyeSlash/>}</BtnVisiblePassword>
        </InputGroup>
        <Button type="submit">
          Вхід
          <CiLogin />
        </Button>
      </FormStyle>
    </ContainerLogInPage>
  );
}
