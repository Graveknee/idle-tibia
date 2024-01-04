import { createPlayerInDb } from "@/lib/services/playerService";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
<<<<<<< HEAD
=======
	console.log("Reached API");
>>>>>>> 44f66668bc444cbc76c04037ed7eb2af60e152d9
	if (req.method === "POST") {
		try {
			const player = await createPlayerInDb();
			res.status(200).json(player);
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: "API: Failed to create player" });
		}
	} else {
		res.status(405).json({ error: "API: Method not allowed" });
	}
}
