import { createSlice, nanoid } from "@reduxjs/toolkit";

const contacts = []

 const contactsSlice = createSlice({
  name: "contacts",
  initialState: contacts,
  reducers: {
    addContacts: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            text,
            id: nanoid(),
            completed: false,
          },
        };
      },
    },
    deleteContacts(state, action) {
      const index = state.findIndex(task => task.id === action.payload);
      state.splice(index, 1);
    },
    toggleContacts(state, action) {
      for (const task of state) {
        if (task.id === action.payload) {
          task.completed = !task.completed;
          break;
        }
      }
    },
  },
});

export const { addContacts, deleteContacts, toggleContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
