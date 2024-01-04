import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

export const setPlayer = createAction<PlayerState>("player/SET_PLAYER");
export const createPlayer = createAsyncThunk(
	"player/CREATE_PLAYER",
	async () => {
		console.log("Reached Thunk");
		try {
			console.log("Creating player in actions");
			const response = await fetch("/api/player/create", { method: "POST" });
			const createdPlayer = await response.json();
			console.log(createdPlayer.id);
			return createdPlayer;
		} catch (error) {
			console.log("Error in actions");
			throw error;
		}
	}
);
export const loadPlayer = createAction<string>("LOAD_PLAYER");

export type PlayerState = {
	level: number;
	experience: number;
};
