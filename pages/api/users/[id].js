import prisma from "@/lib/prisma";

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === "DELETE") {
    await prisma.user.delete({ where: { id: id } });

    res.status(200).json({ message: "user deleted" });
  }
}
