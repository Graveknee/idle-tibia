import { prisma } from "@/db";

export const createPlayerInDb = async () => {
	try {
		const createdPlayer = await prisma.player.create({
			data: {
				level: 1,
				experience: 0,
			},
		});
		return createdPlayer;
	} catch (error) {
		console.error(error);
		throw error;
	}
};
