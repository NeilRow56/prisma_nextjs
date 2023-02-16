import prisma from ".";

export async function getUsers() {
  try {
    const data = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    return data;
  } catch (error) {
    return { error };
  }
}
