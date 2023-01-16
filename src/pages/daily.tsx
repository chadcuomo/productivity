import { type NextPage } from "next";
import Head from "next/head";

import Heading from "../components/Heading";
import NotesList from "../components/NotesList";
import TaskList from "../components/TaskList";
// import Link from "next/link";
// import { signIn, signOut, useSession } from "next-auth/react";

// import { api } from "../utils/api";

const Daily: NextPage = () => {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <div className="p-3">
      <div className="max-w-screen-lg">
        <Heading headingText="Today" />
        <div className="md:flex md:justify-between md:space-x-5">
          <TaskList titleText="Tasks" />
          <NotesList titleText="Notes" />
        </div>
      </div>
    </div> 
  );
};

export default Daily;