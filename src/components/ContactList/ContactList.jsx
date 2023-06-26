import { Ul, Li, Button, P } from './ContactList.styled'
import { useDispatch, useSelector } from "react-redux";
import {  deleteContact } from 'Redux/contactsSlice';
import { getContacts } from 'Redux/selectors'; 

export const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);

    return (
        <Ul>
        {contacts.map(({name, number, id}) => (
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