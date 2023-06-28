import React from 'react';
import { nanoid } from 'nanoid';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import {
  FormStyle,
  Input,
  InputGroup,
  InputLabel,
  Button,
  ErrorMessageStyle,
} from './ContacrForm.styled';
import { phoneRegExp } from 'components/calc/phoneRegExp';
import { toast } from 'react-toastify';
import { withHookFormMask } from 'use-mask-input';
import {
  useAddContactsMutation,
  useFetchContactsQuery,
} from 'redux/Contacts/contactsApi';
import { IoPersonAddOutline } from 'react-icons/io5';
import 'react-toastify/dist/ReactToastify.css';
import { Title } from 'components/App/App.styled';

const schema = yup.object().shape({
  name: yup.string().required("Ім'я обов'язкове!"),
  number: yup
    .string()
    .required("Номер обов'язковий!")
    // .matches(
    //   phoneRegExp,
    //   'Номер має складатись тільки з цифр. Приберіть лишні символи.'
    // )
    .min(7, 'Номер має бути не менше 7 цифр'),
});

const nameId = nanoid();
const numberId = nanoid();

export const ContactForm = () => {
  const { data: contacts = [] } = useFetchContactsQuery();
  const [addContacts] = useAddContactsMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = data => {
    addContact(data.name.trim(), data.number);

    const repeatName = contacts.some(
      el => el.name.toLowerCase() === data.name.trim().toLowerCase()
    );
    const repeatNumber = contacts.some(
      el => el.number.replace(/\D/g, '') === data.number.toLowerCase()
    );
    if (repeatName || repeatNumber) {
      return;
    }

    reset();
  };
  const addContact = (name, number) => {
    const repeatName = contacts.some(
      el => el.name.toLowerCase() === name.toLowerCase()
    );
    const repeatNumber = contacts.some(
      el => el.number.replace(/\D/g, '') === number.toLowerCase()
    );

    if (repeatName) {
      return toast.error(
        `${name} вже є в контактах. Спробуйте ввести інше ім'я`
      );
    } else if (repeatNumber) {
      return toast.error(
        `Такий номер ${number} вже є в контактах. Спробуйте ввести інший`
      );
    }
    const contactItem = {
      createdAt: new Date(),
      name,
      number,
      id: nanoid(),
    };
    toast.success('Новий контакт додано');
    addContacts(contactItem);
  };

  return (
    <FormStyle onSubmit={handleSubmit(onSubmit)}>
      <Title>Створити контакт</Title>
      <InputGroup>
        <InputLabel htmlFor={nameId}>Ім'я</InputLabel>
        <Input
          {...register('name')}
          type="text"
          name="name"
          title="Name may contain letters and numbers, apostrophe, dash and spaces. For example Adrian, Jacob Mercer2, Charles de Batz de Castelmore d'Artagnan"
          // required
          id={nameId}
        />

        {errors.name && (
          <ErrorMessageStyle>{errors.name?.message}</ErrorMessageStyle>
        )}
      </InputGroup>
      <InputGroup>
        <InputLabel htmlFor={numberId}>Телефон</InputLabel>
        <Input
        {...withHookFormMask(register('number'), ['+99 (999) 999 99 99'])}
          // {...register('number')}
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          // required
          id={numberId}
        />
        {errors.number && (
          <ErrorMessageStyle>{errors.number?.message}</ErrorMessageStyle>
        )}
      </InputGroup>
      <Button type="submit">
        Додати контакт
        <IoPersonAddOutline />
      </Button>
    </FormStyle>
  );
};
