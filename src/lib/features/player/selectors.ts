import { RootState } from "../../store";

export const selectPlayer = (state: RootState) => state.player.player;
