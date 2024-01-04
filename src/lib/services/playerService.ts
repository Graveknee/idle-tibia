import { prisma } from "@/db";

export const createPlayerInDb = async () => {
	try {
		const createdPlayer = await prisma.player.create({
			data: {
				level: 1,
				experience: 0,
			},
		});
		console.log(createdPlayer.id);
		return createdPlayer;
	} catch (error) {
		console.error(error);
		throw error;
	}
};
