import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

export const setPlayer = createAction<PlayerState>("player/SET_PLAYER");
export const createPlayer = createAsyncThunk(
	"player/CREATE_PLAYER",
	async () => {
		try {
			const response = await fetch("/api/player/create", { method: "POST" });
			const createdPlayer = await response.json();
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
