import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "./features/player/player-slice";
export const store = configureStore({
	reducer: {
		playerReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
