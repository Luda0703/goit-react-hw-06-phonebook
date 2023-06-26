// import { useState } from 'react';
import { Form, Label, Input, Button } from './ContactForm.styled';
// import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from 'Redux/contactsSlice';
import { getContacts } from 'Redux/selectors'; 
// import Notiflix from 'notiflix'


export function ContactForm () {
    // const [name, setName] = useState('');
    // const [number, setNumber] = useState('');
   

    const dispatch = useDispatch();

    const contacts = useSelector(getContacts)

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = e.target.elements.name.value;
        const number = e.target.elements.number.value;

    // if (contacts.some(({ name }) => name === name)) {
    //   return alert(`${name} is already in contacts`);
    // }

    dispatch(addContact(name, number));
    form.reset();
        
      };

    //   const reset = () => {
    //     setName('');
    //     setNumber('');
    // }

    //   const addNewContact = data => {
    //     const normalizedName = data.name.toLowerCase();
    
    //     if (
    //        contactsFind.find(item => item.name.toLowerCase() === normalizedName)
    //     ) {
    //       return Notiflix.Notify.info(`${data.name} is already in contacts!`);
    //     }
    
    //     dispatch(addContact(data));
    //     Notiflix.Notify.failure('New contact has been added to your phonebook');
    //   };

    

    // const handelChange = e => {
    //     const { name, value } = e.currentTarget;
    //     switch (name) {
    //       case 'name':
    //         setName(value)
    //         break;
    //       case 'number':
    //         setNumber(value)
    //         break;
    //       default:
    //         return;
    //     }
    //   };

    // const handelSubmit = (e) => {
    //     e.preventDefault();
    //     onSubmit({name, number});
    //     reset();

    // }

   


    return (
        <Form onSubmit={handleSubmit}>
            <Label > Name
                <Input
                type="text"
                value={contacts.name}
                // onChange={handelChange}
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                />
            </Label>
            <Label > Phone number
                <Input
                type="tel"
                value={contacts.number}
                // onChange={handelChange}
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                />
            </Label>
            <Button type='submit'>Add contact</Button>
        </Form>
    )
}

// ContactForm.propTypes = {
//     onSubmit: PropTypes.func.isRequired
// }


