"use client";
import { useRouter } from "next/navigation";

import React from "react";
import FormInput from "./FormInput";

const UserInputForm = () => {
  const router = useRouter();
  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    const res = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
      }),
    });
    const data = await res.json();
    console.log(data);
    router.refresh();
    e.target.reset();
    router.push("/user-list");
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="w-[80vw] space-y-4 bg-gray-200 p-4 md:w-[40vw]"
    >
      <div className="flex flex-col gap-4">
        <label className="mb-4 text-left text-2xl font-bold text-slate-800">
          Name
        </label>
        <FormInput
          type="text"
          name="name"
          placeholder="please add your full name"
        />
      </div>
      <div className="flex flex-col gap-4">
        <label className="text-left text-2xl font-bold text-slate-800">
          Email
        </label>
        <FormInput
          name="email"
          type="email"
          placeholder="please add your email address"
        />
      </div>

      <div>
        <button type="submit" className="primary-button ">
          Add
        </button>
      </div>
    </form>
  );
};

export default UserInputForm;
