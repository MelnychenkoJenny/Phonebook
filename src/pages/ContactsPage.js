import { AmountContacts, ContactsContainer, Container, EmptyText, MainTitle, Title } from 'components/App/App.styled';
import { ContactForm } from 'components/ContactForm';
import { Contacts } from 'components/Contacts';
import { Error } from 'components/Error/Error';
import { Filter } from 'components/Filter';
import { Loader } from 'components/Loader/Loader';
import { useSelector } from 'react-redux';
import { useFetchContactsQuery } from 'redux/Contacts/contactsApi';
import { selectFilter } from 'redux/selectors';

export default function ContactsPage() {
  const {
        data: contacts = [],
        isFetching: isLoading,
        error,
      } = useFetchContactsQuery();
    
      const filter = useSelector(selectFilter);

      const getFilteredContacts = () => {
        const normalizedFilter = filter.toLowerCase();
        return contacts.filter(contact =>
          contact.name.toLowerCase().includes(normalizedFilter)
        );
      };
    
      const visibleContacts = getFilteredContacts();
    
  return (
    <Container>
       <MainTitle>Телефонна книга</MainTitle>
       {isLoading && !error && <Loader />}
      <ContactForm />
      <ContactsContainer>
      {error ? (
    <Error>{error}</Error>
  ) : (
    <div>
      <Title>Мої контакти</Title>
      <AmountContacts>
        Загальна кількість контактів: {contacts.length}
      </AmountContacts>
      <Filter />
      {visibleContacts.length ? (
        <Contacts contacts={visibleContacts} />
      ) : (
        <EmptyText>Не знайдено жодного контакту</EmptyText>
      )}
    </div>
  )}
      </ContactsContainer>
    </Container>
  );
}

