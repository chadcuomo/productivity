import { NextPage } from "next";
import { useState } from "react";
import { api } from "../utils/api";
import { CalendarDaysIcon, TagIcon } from "@heroicons/react/24/outline";
import AssignModal from "./AssignModal";

const TaskModalForm: NextPage = ({ setOpen, selectedTag, setTaskModalOpen }) => {
  const [task, setTask] = useState("");
  const [note, setNote] = useState("");
  const [tag, setTag] = useState("");
  const [tagColor, setTagColor] = useState("");
  const [assignModalOpen, setAssignModalOpen] = useState(false);
  const utils = api.useContext();

  const createTask = api.task.createTask.useMutation({
    onSuccess() {
      utils.task.getUnassigned.invalidate();
    }
  });

  return (
    <>
    <h2 className="text-xl font-medium text-zinc-700">Add a task</h2>
    <form
      className="flex flex-wrap gap-2 pt-4"
      onSubmit={(event) => {
        event.preventDefault();
        createTask.mutate({
          name: task,
          note,
          tag: selectedTag?.tag,
          tagColor: selectedTag?.tagColor,
        });
        setTask("");
        setNote("");
        setTag("");
        setTagColor("");
        setTaskModalOpen(false)
      }}
    >
      <input
        type="text"
        value={task}
        placeholder="New Task"
        minLength={2}
        maxLength={100}
        onChange={(event) => setTask(event.target.value)}
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
      <button
          onClick={() => setAssignModalOpen(true)}
          type="button"
          className="inline-flex items-center rounded border border-transparent bg-indigo-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Assign
        </button>
      <div className="flex w-full gap-3 justify-end">
        <CalendarDaysIcon className="w-5"/>
        <TagIcon className="w-5" onClick={() => setOpen(true)} />
        <button
          type="submit"
          className="inline-flex items-center rounded border border-transparent bg-indigo-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Save
        </button>
        <button
          onClick={() => setTaskModalOpen(false)}
          type="button"
          className="inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Cancel
        </button>
      </div>
    </form>
    <AssignModal open={assignModalOpen} setOpen={setAssignModalOpen} />
    </>
  );
}; 

export default TaskModalForm;