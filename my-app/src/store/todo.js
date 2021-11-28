import { createSlice } from "@reduxjs/toolkit";

const getInitialState = () => [
  { id: 0, content: "Выполнить ДЗ 1", done: false },
  { id: 1, content: "Выполнить ДЗ 2", done: false },
  { id: 2, content: "Выполнить ДЗ 3", done: false },
  { id: 3, content: "Выполнить ДЗ 4", done: false },
];

const todoSlice = createSlice({
  name: "todo",
  initialState: getInitialState(),

  reducers: {
    add(items, action) {
      const item = {
        id: 1 + Math.max(0, ...items.map(item => item.id)),
        content: action.payload,
        done: false
      };

      items.push(item);
    },

    remove(items, action) {
      return items.filter((x) => x.id !== action.payload);
    },

    doneToggle(items, action) {
      const item = items.find((item) => item.id === action.payload);

      if(item) {
        item.done = !item.done;
      }
    }
  }
});

export const { add, remove, doneToggle } = todoSlice.actions;

export default todoSlice.reducer;
