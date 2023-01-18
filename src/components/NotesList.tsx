import { type NextPage } from "next";
import { PlusIcon } from "@heroicons/react/24/solid";

import NoteItem from "./NoteItem";
import { Dispatch, SetStateAction } from "react";

interface NotesList {
  titleText: string
  notes: Note[]
  setOpen: Dispatch<SetStateAction<boolean>>
}

interface Note {
  name: string
  id: number
  date: string
  note: string
  tag: string
  tagColor: string
}
const NotesList: NextPage<NotesList> = ({ titleText, notes, setOpen }) => {
  return (
    <div className="mt-4 bg-white rounded-lg px-8 pt-8 md:w-2/3">
      <div className="flex justify-between pb-8">
        <h2 className="text-xl font-medium text-zinc-700">{titleText}</h2>
        <button className="border-dashed border-2 border-gray-400 p-1.5 rounded">
          <PlusIcon className="text-gray-500 h-4 w-4" onClick={() => setOpen(true)}/>
        </button>
      </div>
      {notes?.map(note => (
        <NoteItem note={note} />
      ))}
    </div>
  );
};

export default NotesList;