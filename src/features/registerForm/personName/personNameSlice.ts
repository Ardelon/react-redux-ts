import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";

export interface PersonNameState {
	value: string;
}

const initialState: PersonNameState = {
	value: "",
};

export const personNameSlice = createSlice({
	name: "personName",
	initialState,
	reducers: {
		nameUpdate: (state, action: PayloadAction<string>) => {
			state.value = action.payload;
			console.log(state.value);
		},
	},
});

export const { nameUpdate } = personNameSlice.actions;
export const personName = (state: RootState) => state.personName.value;

export default personNameSlice.reducer;
