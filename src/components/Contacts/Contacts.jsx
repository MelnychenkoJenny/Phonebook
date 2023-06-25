import { formattedNumber } from 'components/calc/numberFormatted';
import { toast } from 'react-toastify';
import { useDeleteContactsMutation } from 'redux/Contacts/contactsApi';
import { ContactsList, ContactsItem, ButtonDelete } from './Contacts.styled';

export const Contacts = ({ contacts }) => {
  // const dispatch = useDispatch();
  const [deleteContact] =  useDeleteContactsMutation()

const handleDeleteContact = (id) => {
  deleteContact(id)
  toast.success('Новий контакт додано');
}
 
  return (
    <ContactsList>
      {contacts.map(({ id, name, number }) => (
        <ContactsItem key={id}>
          <p>{name}</p>
          <p>{formattedNumber(number)}</p>
          <ButtonDelete onClick={() => handleDeleteContact(id)}>
            Видалити
          </ButtonDelete>
        </ContactsItem>
      ))}
    </ContactsList>
  );
};