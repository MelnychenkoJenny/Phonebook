// import { formattedNumber } from 'components/calc/numberFormatted';
import { toast } from 'react-toastify';
import { useDeleteContactsMutation } from 'redux/Contacts/contactsApi';
import { ContactsList, ContactsItem, ButtonDelete } from './Contacts.styled';

export const Contacts = ({ contacts }) => {
  const [deleteContact] = useDeleteContactsMutation();

  const handleDeleteContact = id => {
    deleteContact(id);
    toast.info('Контакт успішно видалено');
  };

  return (
    <ContactsList>
      {contacts.map(({ id, name, number }) => (
        <ContactsItem key={id}>
          <p>{name}</p>
          {/* <p>{formattedNumber(number)}</p> */}
          <a href={`tel:${number}`}>{number}</a>

          <ButtonDelete onClick={() => handleDeleteContact(id)}>
            Видалити
          </ButtonDelete>
        </ContactsItem>
      ))}
    </ContactsList>
  );
};
