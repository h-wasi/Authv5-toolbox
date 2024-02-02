import { Poppins } from "next/font/google";

export const poppins = Poppins({ subsets: ["latin"], weight: ["600"] });

interface Props {
  label: string;
}

export function Header({ label }: Props) {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-start">
      <h1 className={`text-3xl font-semibold ${poppins.className}`}>🔐 Auth</h1>
      <p className="text-muted-foreground">{label}</p>
    </div>
  );
}
