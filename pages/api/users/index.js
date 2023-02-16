import prisma from "@/lib/prisma";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const data = req.body;

      await prisma.user.create({
        data,
      });

      res.status(200).json({ message: "New user created" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}
