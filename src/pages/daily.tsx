import { type NextPage } from "next";
import Head from "next/head";
import { useState } from "react";

import Heading from "../components/Heading";
import NavBar from "../components/NavBar";
import NoteModal from "../components/NoteModal";
import NotesList from "../components/NotesList";
import TaskList from "../components/TaskList";
import TaskModal from "../components/TaskModal";
import { api } from "../utils/api";

const Daily: NextPage = () => {
  const { data: tasks, isLoading } = api.task.getAssigned.useQuery()
  const [taskModalOpen, setTaskModalOpen] = useState(false)
  const [noteModalOpen, setNoteModalOpen] = useState(false)

  const { data: notes, isLoading: isNotesLoading } = api.note.getAll.useQuery()
  const today = new Date().getDate();

  const filteredNotes = notes?.filter(note => note.createdAt.getDate() === today)

  console.log(filteredNotes)

  return (
    <div className="w-full flex flex-wrap justify-center">
      <NavBar />
      <div className="w-full max-w-screen-lg mt-10">
        <Heading headingText="Today" />
        <div className="md:flex md:justify-between md:space-x-5">
          <TaskList titleText="Tasks" tasks={tasks} setOpen={setTaskModalOpen} />
          <NotesList titleText="Notes" notes={filteredNotes} setOpen={setNoteModalOpen} />
        </div>
      </div>
      <TaskModal open={taskModalOpen} setOpen={setTaskModalOpen} />
      <NoteModal open={noteModalOpen} setOpen={setNoteModalOpen} />
    </div> 
  );
};

export default Daily;