import UserInputForm from "@/components/UserInputForm";

export default function RegisterPage() {
  return (
    <section className="container mx-auto text-center">
      <h1 className="mt-24 text-4xl font-bold text-teal-700">
        Register New User
      </h1>
      <div className="grid grid-cols-1 place-items-center">
        <UserInputForm />
      </div>
    </section>
  );
}
