import prisma from "@/lib/prisma";

async function getUser(id) {
  const data = await prisma.user.findUnique({ where: { id: id } });

  return data;
}

export default async function DynamicUserPage({ params }) {
  const { id } = params;
  const user = await getUser(id);

  return (
    <div className="p-4 text-slate-100 md:w-[50vw] lg:w-[30vw]">
      <div key={user.id} className="bg-teal-800 p-4">
        <div className="space-y-2">
          <h1 className="text-2xl">{user.name}</h1>
          <p>{user.email}</p>
        </div>
      </div>
    </div>
  );
}
