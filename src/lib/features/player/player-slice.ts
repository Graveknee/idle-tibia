import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
	value: PlayerState;
};

type PlayerState = {
	level: number;
	experience: number;
};

const initialState = {
	value: {
		level: 1,
		experience: 0,
	} as PlayerState,
} as InitialState;

export const player = createSlice({
	name: "player",
	initialState,
	reducers: {},
});

export const {} = player.actions;
export default player.reducer;
