import { NextPage } from "next";
import { useState } from "react";
import { api } from "../utils/api";
import { CalendarDaysIcon, TagIcon, TrashIcon } from "@heroicons/react/24/outline";

const ViewModalForm: NextPage = ({ setOpen, selectedTag, task, isTask }) => {
  // const [task, setTask] = useState("");
  const [note, setNote] = useState("");
  const [tag, setTag] = useState("");
  const [tagColor, setTagColor] = useState("");

  const createTask = api.task.createTask.useMutation();

  return (
    <>
    <form
      className="flex flex-wrap gap-2 pt-4"
      onSubmit={(event) => {
        event.preventDefault();
        createTask.mutate({
          name: task,
          note,
          tag: selectedTag.tag,
          tagColor: selectedTag.tagColor,
        });
        setTask("");
        setNote("");
        setTag("");
        setTagColor("");
      }}
    >
       <div className="relative flex items-center w-full" key={task.id}>
        {isTask &&(
          <div className="flex h-5 items-center">
            <input
              id="candidates"
              aria-describedby="candidates-description"
              name="candidates"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
          </div>
        )}
        <div className={`${isTask &&'ml-3'} text-md w-full flex justify-between`} >
          <div className="flex flex-wrap w-full">
            <span className="text-gray-700 font-normal w-full flex gap-2">
              {task.name}
            </span>
            <span className="text-gray-500 font-light text-xs">
              {task.date}
            </span>
            
          </div>
          {task.tagColor && (
            <span className={`inline-flex items-center rounded ${task.tagColor} px-2 py-0.5 text-xs font-medium text-gray-800 max-h-6`}>
              {task.tag}
            </span>
          )}
         
        </div>
      </div>
      {task.note && (
        <div className="pt-3 text-sm text-gray-600">
          <span>
            {task.note}
          </span>
        </div>
      )}
      <div className="flex w-full gap-3 justify-end pt-5">
        {isTask && <CalendarDaysIcon className="w-5"/>}
        <TrashIcon className="w-5" />
        <button
          type="submit"
          className="inline-flex items-center rounded border border-transparent bg-indigo-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Save
        </button>
        <button
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

export default ViewModalForm;