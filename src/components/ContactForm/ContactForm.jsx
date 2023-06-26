import { useState } from 'react';
import { Form, Label, Input, Button } from './ContactForm.styled';
import PropTypes from "prop-types";

export function ContactForm ({ onSubmit }) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

   
    const handelChange = e => {
        const { name, value } = e.currentTarget;
        switch (name) {
          case 'name':
            setName(value)
            break;
          case 'number':
            setNumber(value)
            break;
          default:
            return;
        }
      };

    const handelSubmit = (e) => {
        e.preventDefault();
        onSubmit({name, number});
        reset();

    }

    const reset = () =>{
        setName('');
        setNumber('');
    }


    return (
        <Form onSubmit={handelSubmit}>
            <Label > Name
                <Input
                type="text"
                value={name}
                onChange={handelChange}
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                />
            </Label>
            <Label > Phone number
                <Input
                type="tel"
                value={number}
                onChange={handelChange}
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

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}


