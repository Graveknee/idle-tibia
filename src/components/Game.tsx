"use client";

import { createPlayer } from "@/lib/features/player/actions";
import { selectPlayer } from "@/lib/features/player/selectors";
import { AppDispatch } from "@/lib/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Game() {
	const dispatch = useDispatch<AppDispatch>();
	const player = useSelector(selectPlayer);

	// useEffect(() => {
	// 	const playerId = localStorage.getItem("playerId");
	// 	if (playerId) {
	// 		dispatch({ type: "LOAD_PLAYER", payload: playerId });
	// 		console.log("playerId", playerId);
	// 	} else {
	// 		dispatch({ type: "CREATE_PLAYER" });
	// 		console.log("Creating player");
	// 	}
	// }, [dispatch]);

	useEffect(() => {
		dispatch(createPlayer());
		console.log("Creating player");
	}, [dispatch]);

	return (
		<div>
			<p>Welcome, {player.id}</p>
			<p>
				Level: {player.level} | Experience: {player.experience}
			</p>
		</div>
	);
}

export default Game;
