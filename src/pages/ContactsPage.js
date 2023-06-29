import {
  AmountContacts,
  ContactsContainer,
  EmptyText,
  Title,
} from 'components/App/App.styled';
import { ContactForm } from 'components/ContactForm';
import { Contacts } from 'components/Contacts';
import { Error } from 'components/Error/Error';
import { Filter } from 'components/Filter';
import { Loader } from 'components/Loader/Loader';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useFetchContactsQuery } from 'redux/Contacts/contactsApi';
import { selectFilter } from 'redux/selectors';
import { ContainerContactsPage } from './ContactsPage.styled';

export default function ContactsPage() {
  const {
    refetch,
    data: contacts = [],
    isFetching: isLoading,
    isLoading: isFirstLoading,
    error,
  } = useFetchContactsQuery();
  useEffect(() => {
    refetch();
  }, [refetch]);

  const filter = useSelector(selectFilter);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getFilteredContacts();

  return (
    <ContainerContactsPage>
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
            {visibleContacts.length && !isFirstLoading ? (
              <Contacts contacts={visibleContacts} />
            ) : (
              <EmptyText>Не знайдено жодного контакту</EmptyText>
            )}
          </div>
        )}
      </ContactsContainer>
    </ContainerContactsPage>
  );
}
