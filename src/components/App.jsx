// import { useState, useEffect } from 'react';
// import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Container, H1, H2 } from './Container.styled';
// import {  deleteContact } from 'Redux/contactsSlice';
// import { filters, setStatusFilter } from 'Redux/filtersSlice';
// import {  contactsReducer } from '../Redux/contactsSlice'
// import { contacts } from "Redux/contactsSlice";
// import { filters } from "Redux/filtersSlice";


export function App() {
  // const [contacts, setContacts] = useState(() => {
  //   return JSON.parse(localStorage.getItem('contacts')) ?? [];
  // })
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const visibleContacts = () => {
  //   const normalizedFilter = filters.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // }
 
  // const filterChange = (e) => {
  //   setFilter(e.target.value)
  // }

  // const  deleteContacts = (id) => {
  //   setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id))
  // }

  // const addContact = data => {
  //   data.id = nanoid();
  //   const nameToLowerCase = data.name.toLowerCase();

  //   if(
  //     contacts.find(
  //       contact => contact.name.toLowerCase() === nameToLowerCase || 
  //       contact.number === data.number)
  //   ) {
  //     alert(`${data.name}  ${data.number} is already in contacts`);
  //     return;
  //   }
  //   setContacts(prevContacts => [...prevContacts, data]);

  // }

  return (
    <Container>
        <H1>Phonebook</H1>
        <ContactForm />
        <H2>Contacts </H2>
        <Filter  />
        <ContactList />
      </Container>
  );

  // return (
  //   <Container>
  //       <H1>Phonebook</H1>
  //       <ContactForm onSubmit={addContact}/>
  //       <H2>Contacts  {contacts.length}</H2>
  //       <Filter value={filter} onChange={filterChange}/>
  //       {contacts.length ? (
  //       <ContactList 
  //       contacts={visibleContacts()} 
  //       onDeletContacts={deleteContacts}
  //       />
  //       ) : (
  //         <P>No contacts in phonebook</P>
  //       )} 
  //     </Container>
  // );
  
}


