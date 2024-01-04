import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createPlayer, loadPlayer } from "./actions";

type InitialState = {
	player: PlayerState;
};

type PlayerState = {
	id: string | null;
	level: number;
	experience: number;
};

const initialState: InitialState = {
	player: {
		id: null,
		level: 1,
		experience: 0,
	},
};

const player = createSlice({
	name: "player",
	initialState,
	reducers: {
		setPlayer: (state, action: PayloadAction<PlayerState>) => {
			state.player = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(createPlayer.fulfilled, (state, action) => {
			if (action.payload) {
				state.player.id = action.payload.id;
			} else {
				console.log("No player returned from createPlayerAsync");
			}
		});
		builder.addCase(createPlayer.rejected, (state, action) => {
			console.error(action.error);
		});
		builder.addCase(loadPlayer, (state, action: PayloadAction<string>) => {
			state.player.id = action.payload;
		});
	},
});

export const { setPlayer } = player.actions;
export default player.reducer;
