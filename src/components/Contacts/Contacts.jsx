import { toast } from 'react-toastify';
import { useDeleteContactsMutation } from 'redux/Contacts/contactsApi';
import { ContactsList, ContactsItem, ButtonDelete, Phone } from './Contacts.styled';
import { BiPhoneCall } from 'react-icons/bi';

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
          
          <Phone href={`tel:${number}`}><BiPhoneCall/>{number}</Phone>

          <ButtonDelete onClick={() => handleDeleteContact(id)}>
            Видалити
          </ButtonDelete>
        </ContactsItem>
      ))}
    </ContactsList>
  );
};
