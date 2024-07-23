"use client";
import { SignOutButton } from "@clerk/nextjs";
import { useToast } from "../ui/use-toast";
import Link from "next/link";

function SignOutLink() {
  const { toast } = useToast();
  const handleLogout = () => {
    toast({ description: "Logging Out..." });
  };
  return (
    <SignOutButton>
      <Link href="/" className="w-full text-left" onClick={handleLogout}>
        登出
      </Link>
    </SignOutButton>
  );
}
export default SignOutLink;
