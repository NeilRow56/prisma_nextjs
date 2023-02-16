import UserCard from "@/components/UserCard";
import prisma from "@/lib/prisma";

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

export default async function usersPage() {
  const userList = await getUsers();

  console.log(userList);
  return (
    <div className="space-y-4 p-4 text-slate-800">
      <h1 className="p-4 text-2xl font-bold">User List</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <UserCard userList={userList} />
      </div>
    </div>
  );
}
