import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { HomeIcon } from "lucide-react";

export default function Navbar() {
  return (
    <div className="bg-zinc-100 py-2 border-b border-s-zinc-200 fixed w-full z-10 top-0">
      <div className="px-6 flex items-center justify-between">
        <Link href="/">
          <HomeIcon />
        </Link>
        <Link className={buttonVariants()} href="/sign-in">
          Sign In
        </Link>
      </div>
    </div>
  );
}
