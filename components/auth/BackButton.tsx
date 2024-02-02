"use client";

import Link from "next/link";
import { Button } from "../ui/button";

export function BackButton({ href, label }: { label: string; href: string }) {
  return (
    <Button variant={"link"} size={"sm"} asChild className="font-normal w-full">
      <Link href={href}>{label}</Link>
    </Button>
  );
}
