import { CalendarDaysIcon, TagIcon } from "@heroicons/react/24/outline";
import { NextPage } from "next";
import { useState } from "react";
import { api } from "../utils/api";

const NoteModalForm: NextPage = ({ setOpen, selectedTag, setNoteModalOpen}) => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [tag, setTag] = useState("");
  const [tagColor, setTagColor] = useState("");
  const utils = api.useContext();

  const createTask = api.note.createNote.useMutation({
    onSuccess() {
      utils.note.getAll.invalidate()
    }
  });

  return (
    <>
    <h2 className="text-xl font-medium text-zinc-700">Add a note</h2>
    <form
      className="flex flex-wrap gap-2 pt-4"
      onSubmit={(event) => {
        event.preventDefault();
        createTask.mutate({
          name: title,
          note,
          tag: selectedTag.tag,
          tagColor: selectedTag.tagColor,
        });
        setTitle("");
        setNote("");
        setTag("");
        setTagColor("");
        setNoteModalOpen(false)
      }}
    >
      <input
        type="text"
        value={title}
        placeholder="Note Title"
        minLength={2}
        maxLength={100}
        onChange={(event) => setTitle(event.target.value)}
        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      />
      <textarea
        value={note}
        placeholder="Notes"
        minLength={2}
        rows={6}
        maxLength={500}
        onChange={(event) => setNote(event.target.value)}
        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      />
      <div className="flex w-full gap-3 justify-end">
        <TagIcon className="w-5" onClick={() => setOpen(true)} />
        <button
          type="submit"
          className="inline-flex items-center rounded border border-transparent bg-indigo-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Save
        </button>
        <button
          onClick={() => setNoteModalOpen(false)}
          type="button"
          className="inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
          Cancel
        </button>
      </div>
    </form>
    </>
  );
}; 

export default NoteModalForm;