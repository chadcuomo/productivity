import { useState } from "react";
import { type NextPage } from "next";
import Head from "next/head";
import HabitItem from "../components/HabitItem";
import NoteItem from "../components/NoteItem";
import TaskItem from "../components/TaskItem";
import { PlusIcon } from '@heroicons/react/24/solid';
import Heading from "../components/Heading";
import TaskList from "../components/TaskList";
import NotesList from "../components/NotesList";

// import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "../utils/api";
import TaskModal from "../components/TaskModal";
import NoteModal from "../components/NoteModal";

const Home: NextPage = () => {
  const [taskModalOpen, setTaskModalOpen] = useState(false)
  const [noteModalOpen, setNoteModalOpen] = useState(false)
  const { data: notes, isLoading: isNotesLoading } = api.note.getAll.useQuery()
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <main>Loading...</main>;
  }

  console.log(notes)

  return (
    <div className="p-3">
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
      </Head>
      <div className="max-w-screen-lg">
        <Heading headingText={`Welcome ${session?.user.name}`}/>
        <div className="md:flex md:justify-between md:space-x-5">
          {session ? (
            <>
             <TaskList titleText="Unassigned Tasks" setOpen={setTaskModalOpen} />
             <NotesList titleText="Note Archive" notes={notes} setOpen={setNoteModalOpen} />
            </>
          ) : (
            <button onClick={() => signIn("discord")}>Login with Discord</button>
          )}
        </div>
      </div>
      {session && (
        <button onClick={() => signOut()}>
        Logout
      </button>
      )}
      <TaskModal open={taskModalOpen} setOpen={setTaskModalOpen} />
      <NoteModal open={noteModalOpen} setOpen={setNoteModalOpen} />
    </div> 
  );
};

export default Home;

// const AuthShowcase: React.FC = () => {
//   const { data: sessionData } = useSession();

//   const { data: secretMessage } = api.example.getSecretMessage.useQuery(
//     undefined, // no input
//     { enabled: sessionData?.user !== undefined },
//   );

//   return (
//     <div className="flex flex-col items-center justify-center gap-4">
//       <p className="text-center text-2xl text-white">
//         {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
//         {secretMessage && <span> - {secretMessage}</span>}
//       </p>
//       <button
//         className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
//         onClick={sessionData ? () => void signOut() : () => void signIn()}
//       >
//         {sessionData ? "Sign out" : "Sign in"}
//       </button>
//     </div>
//   );
// };
