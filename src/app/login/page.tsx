import LoginForm from "@/components/auth/login-form";

export default function LoginPage() {

  return (
    <main className="md:h-screen flex justify-center items-center mt-[-30px]">
      <div className="md:w-[680px] md:h-[450px] flex justify-between gap-4 bg-neutral-100 rounded-3xl p-4">
        <div className="md:w-1/2 bg-green-200 rounded-2xl">
            img
        </div>
        <div className="md:w-1/2">
            <LoginForm />
        </div>
      </div>
    </main>
  );
}