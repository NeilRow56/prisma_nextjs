"use client";
import Link from "next/link";

const UserCard = ({ userList }) => {
  //   async function deleteTodo(id) {
  //     const res = await fetch(`/api/todos/${id}`, { method: "DELETE" });
  //     const data = await res.json();

  //     console.log(data);
  //     router.refresh();
  //   }

  return userList.map((user) => (
    <div key={user.id} className="relative  bg-slate-200 p-4">
      <button className="absolute top-4 right-4">X</button>
      <div className="space-y-2">
        <h1 className="text-2xl">{user.name}</h1>
        <p>{user.email}</p>
      </div>
      <div className="mt-4 text-right">
        <Link
          href={`/user-list/${user.id}`}
          type="submit"
          className="primary-button "
        >
          Detail
        </Link>
      </div>
    </div>
  ));
};

export default UserCard;
