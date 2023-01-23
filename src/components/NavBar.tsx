import { type NextPage } from "next";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

interface NavBar {
  headingText: string
}
const NavBar: NextPage<NavBar> = () => {

  const { data: session, status } = useSession();
  
  return (
    <div className="w-full">
        <div className="bg-indigo-600 w-full p-5 flex justify-between text-white">
          <div className="flex gap-3">
            <h4 className="text-lg font-bold line-through pr-5">done.</h4>
            <Link className="pt-0.5" href={"/"}>Home</Link>
            <Link className="pt-0.5" href={"/daily"}>Daily</Link>
          </div>
        {session && (
          <button onClick={() => signOut()}>
          Logout
        </button>
        )}
        </div>
      </div>
  );
};

export default NavBar;