import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as {
	prisma: PrismaClient | undefined;
};

export const prisma =
	globalForPrisma.prisma ??
	new PrismaClient({
		log: ["query"],
	});

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

// export const createPlayer = async () => {
// 	const player = await prisma.player.create({
// 		data: {
// 			level: 1,
// 			experience: 0,
// 		},
// 	});
// 	return player;
// };
