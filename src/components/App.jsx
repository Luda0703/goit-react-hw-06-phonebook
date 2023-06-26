import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

import { Container, H1, H2, P } from './Container.styled';

export function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? [];
  })
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const visibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
 
  const filterChange = (e) => {
    setFilter(e.target.value)
  }

  const  deleteContacts = (id) => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id))
  }

  const addContact = data => {
    data.id = nanoid();
    const nameToLowerCase = data.name.toLowerCase();

    if(
      contacts.find(
        contact => contact.name.toLowerCase() === nameToLowerCase || 
        contact.number === data.number)
    ) {
      alert(`${data.name}  ${data.number} is already in contacts`);
      return;
    }
    setContacts(prevContacts => [...prevContacts, data]);

  }

  return (
    <Container>
        <H1>Phonebook</H1>
        <ContactForm onSubmit={addContact}/>
        <H2>Contacts  {contacts.length}</H2>
        <Filter value={filter} onChange={filterChange}/>
        {contacts.length ? (
        <ContactList 
        contacts={visibleContacts()} 
        onDeletContacts={deleteContacts}
        />
        ) : (
          <P>No contacts in phonebook</P>
        )} 
      </Container>
  );
  
}


// export class App extends Component {
//   state = {
//     contacts: [
//       {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//       {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//       {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//       {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
//     ],
//     filter: '',
    
//   }

//   componentDidMount() {
//    const contacts = localStorage.getItem('contacts');
//    const parsedContacts = JSON.parse(contacts);

//    if(parsedContacts) {
//     this.setState({contacts: parsedContacts});
//    }
//   }

//   componentDidUpdate(_, prevState) {
//     const stateContacts = this.state.contacts;
//     if(stateContacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(stateContacts));
//     }
//   }

//   filterChange = e => {
//     this.setState({filter: e.target.value})
//   }

//   visibleContacts = () => {
//     const { filter, contacts } = this.state;
//     const normalizedFilter = filter.toLowerCase();

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   }

//   addContact = data => {
//     data.id = nanoid();
//     const nameToLowerCase = data.name.toLowerCase();

//     if (
//       this.state.contacts.find(
//         contact => contact.name.toLowerCase() === nameToLowerCase || 
//         contact.number === data.number)
//     ) {
//       alert(`${data.name}  ${data.number} is already in contacts`);
//       return;
//     }

//     this.setState(prevState => ({
//       contacts: [data, ...prevState.contacts],
//     }));
//   }

//   deleteContacts = id => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== id),
//     }));
//   };

//   render() {
//     const { contacts, filter } = this.state;

//     const visibleFilter = this.visibleContacts();
//     return (
//       <Container>
//         <H1>Phonebook</H1>
//         <ContactForm onSubmit={this.addContact}/>
//         <H2>Contacts  {contacts.length}</H2>
//         <Filter value={filter} onChange={this.filterChange}/>
//         {contacts.length ? (
//         <ContactList 
//         contacts={visibleFilter} 
//         onDeletContacts={this.deleteContacts}
//         />
//         ) : (
//           <P>No contacts in phonebook</P>
//         )} 
//       </Container>
//     )
//   }
// };
