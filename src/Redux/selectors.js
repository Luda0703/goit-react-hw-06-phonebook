// import { filter } from "./filtersSlice";
// import { contacts } from "./contactsSlice";

// export const visibleContacts = () => {
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   }

export const getContacts = state => state.contacts;
export const getFilter = state => state.filter;