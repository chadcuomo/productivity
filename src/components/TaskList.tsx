import { type NextPage } from "next";
import { PlusIcon } from "@heroicons/react/24/solid";

import TaskItem from "./TaskItem";
import { Dispatch, SetStateAction } from "react";
import { api } from "../utils/api";

interface TaskList {
  titleText: string
  setOpen: Dispatch<SetStateAction<boolean>>
  tasks: Task[]
}

interface Task {
  assigned: boolean
  complete: boolean
  date: string
  id: number
  name: string
  note: string
  tag: string
  tagColor: string
} 
const TaskList: NextPage<TaskList> = ({ titleText, setOpen, tasks }) => {
  return (
    <div className="mt-4 bg-white rounded-lg px-8 py-8 md:w-1/2">
      <div className="flex justify-between">
        <h2 className="text-xl font-medium text-zinc-700">{titleText}</h2>
        <button className="border-dashed border-2 border-gray-400 p-1.5 rounded">
          <PlusIcon className="text-gray-500 h-4 w-4" onClick={() => setOpen(true)}/>
        </button>
      </div>
      <fieldset className="space-y-8">
        <legend className="sr-only">Notifications</legend>
        {tasks ? tasks.map(task => (
          !task.complete && (
          <TaskItem task={task} />
        ))) :
        (
          <div>Add a task</div>
        )
        }
      </fieldset>
    </div>
  );
};

export default TaskList;