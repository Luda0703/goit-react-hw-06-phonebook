import { createSlice } from "@reduxjs/toolkit";
// import { nanoid } from 'nanoid';

 const contacts = []

 const contactsSlice = createSlice({
  name: "contacts",
  initialState: contacts,
  reducers: {
    deleteContact: (state, action) => {
    state.contacts = state.contacts.filter(el => [el.id] !== action.payload)
    },
    addContact: (state, action) => {
      return [...state, action.payload];
    // state.contacts = [...state.contacts, action.payload]
    // state.contacts.push(action.payload);
    }
    // addContact: {
    //   reducer(state, action) {
    //     return [...state.contacts, action.payload];
    //   },
    //   prepare(name, number) {
    //     return {
    //       payload: {
    //         id: nanoid(),
    //         name,
    //         number,
    //       },
    //     };
    //   },
    // },
    
    },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;


