import { type NextPage } from "next";
import { useState } from "react";
import { api } from "../utils/api";
import ViewModal from "./ViewModal";

import moment from "moment";

interface Notes {
  note: Note
}

interface Note {
  name: string
  id: number
  date: string
  note: string
  tag: string
  tagColor: string
}

const NoteItem: NextPage<Notes> = ({ note }) => {
  const [taskModalOpen, setTaskModalOpen] = useState(false)
  const utils = api.useContext();
  const deleteNote = api.note.deleteNote.useMutation({
    onSuccess() {
      utils.note.getAll.invalidate()
    }
  });

  const deleteNoteFunction = (id) => {
    deleteNote.mutate({
      id: id
    })
    setTaskModalOpen(false)
  }

  const date = moment(note.createdAt).format("MM/DD/YYYY")

  console.log(date)

  return (
    <>
     <div className="relative flex flex-wrap items-center pb-12" key={note.id} onClick={() => setTaskModalOpen(true)}>
        <div className="text-md w-full flex justify-between">
          <label htmlFor="candidates" className="text-gray-700 font-normal">
            {note.name}
          </label>
          <span className={`inline-flex items-center rounded ${note.tagColor} px-2 py-0.5 text-xs font-medium text-gray-800`}>
            {note.tag}
          </span>
        </div>
        <span className="text-gray-700 font-light text-xs pt-2 w-full">
          {date}
        </span>
        <div className="pt-3 text-xs font-light text-gray-600">
          <span>
            {note.note}
          </span>
        </div>
      </div>
      <ViewModal open={taskModalOpen} setOpen={setTaskModalOpen} task={note} deleteItem={deleteNoteFunction} />
    </>
  );
};

export default NoteItem;