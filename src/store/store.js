import { createSlice, configureStore } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
const uuid = () => uuidv4().slice(0, 8);
const programs = [
  { active: true, name: "برنامه اول", id: uuid() },
  { active: true, name: "برنامه دوم", id: uuid() },
  { active: false, name: "برنامه سوم", id: uuid() },
  { active: true, name: "برنامه چهارم", id: uuid() },
];
const initialState = {
  programs: programs,
  search: "",
};

const programSlice = createSlice({
  name: "program",
  initialState,
  reducers: {
    addProgram: (state, action) => {
      if (action.payload) {
        const newProgram = {
          active: true,
          name: action.payload,
          id: uuid(),
        };
        state.programs.push(newProgram);
      }
    },
    deleteProgram: (state, action) => {
      state.programs = state.programs.filter(
        (program) => program.id !== action.payload
      );
    },
    trigActivity: (state, action) => {
      const index = state.programs.findIndex(
        (program) => program.id === action.payload
      );
      state.programs[index].active = !state.programs[index].active;
    },
    programSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    programs: programSlice.reducer,
  },
});

export default store;
export const programActions = programSlice.actions;
