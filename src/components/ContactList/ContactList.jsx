// import PropTypes from "prop-types";
import { Ul, Li, Button, P } from './ContactList.styled'
import { useDispatch, useSelector } from "react-redux";
import {  deleteContact } from 'Redux/contactsSlice';
// import { visibleContacts } from 'Redux/selectors';
import { getContacts, getFilter  } from 'Redux/selectors'; 

// import { useState } from 'react';
// import { contacts } from "Redux/contactsSlice";
// import { filters } from "Redux/filtersSlice";

export const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    
  const visibleContacts = [
    ...contacts.filter(contact => contact.name.toLowerCase().includes(filter)),
  ];
// const visibleContacts = () => {
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   }

    // const contacts = useSelector(visibleContacts);

    return (
        <Ul>
        {visibleContacts.map(({name, number, id}) => (
            <Li key={id}>
               <P>{name}: {number}</P>
               <Button 
               type="button"
               onClick={() => dispatch(deleteContact(id))}
               >Delete
               </Button>
            </Li>
        ))}
        </Ul>
    );
}

// ContactList.propTypes = {
//     contacts: PropTypes.arrayOf(
//         PropTypes.shape({
//             name: PropTypes.string.isRequired,
//             number: PropTypes.string.isRequired,
//             id: PropTypes.string.isRequired
//         })
//     ).isRequired,
//     onDeletContacts: PropTypes.func.isRequired,
// }