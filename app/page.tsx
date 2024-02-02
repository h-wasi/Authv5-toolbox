import { Button } from "@/components/ui/button";
import { poppins } from "./layout";
import { LoginButton } from "../components/auth/login-button";
export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <div className="space-y-6">
        <h1
          className={`text-6xl font-semibold text-white drop-shadow-md ${poppins.className}`}
        >
          🔐 Auth
        </h1>
        <p className="text-white text-lg text-center">
          A simple Authentication service
        </p>
        <div className="flex justify-center">
          <LoginButton>
            <Button variant={"secondary"} size={"lg"}>
              Sign In
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
