import { type NextPage } from "next";
import { useState } from "react";
import { DocumentTextIcon } from "@heroicons/react/24/outline";
import { useQueryClient } from '@tanstack/react-query';

import ViewModal from "./ViewModal";
import { api } from "../utils/api";

interface Tasks {
  task: Task
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

const TaskItem: NextPage<Tasks> = ({task}) => {
  const [taskModalOpen, setTaskModalOpen] = useState(false)
  const utils = api.useContext();
  const updateTask = api.task.updateTask.useMutation({
    onSuccess() {
      utils.task.getUnassigned.invalidate()
      utils.task.getAssigned.invalidate()
    }
  });
  const deleteTask = api.task.deleteTask.useMutation({
    onSuccess() {
      utils.task.getUnassigned.invalidate()
      utils.task.getAssigned.invalidate()
    }
  });

  const deleteTaskFunction = (id) => {
    deleteTask.mutate({
      id: id
    })
    setTaskModalOpen(false)
    utils.task.getUnassigned.invalidate()
    utils.task.getAssigned.invalidate()
  }
  
  return (
    <>
     <div className="relative flex items-center" key={task.id}>
        <div className="flex h-5 items-center">
          <input
            id="candidates"
            aria-describedby="candidates-description"
            name="candidates"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            onChange={() => {
              updateTask.mutate({
                id: task.id,
                complete: true,
                assigned: false
              })
            }}
          />
        </div>
        <div className="ml-3 text-md w-full flex justify-between" >
          <div className="flex flex-wrap">
            <span className="text-gray-700 font-normal w-full flex gap-2" onClick={() => setTaskModalOpen(true)}>
              {task.name}
              {task.note && <DocumentTextIcon className="w-3.5" />}
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
      <ViewModal open={taskModalOpen} setOpen={setTaskModalOpen} task={task} isTask deleteItem={deleteTaskFunction} />
    </>
  );
};

export default TaskItem;
