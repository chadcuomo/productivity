import { type NextPage } from "next";

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
          />
        </div>
        <div className="ml-3 text-md w-full flex justify-between">
          <div className="flex flex-wrap">
            <label htmlFor="candidates" className="text-gray-700 font-normal w-full">
              {task.name}
            </label>
            <span className="text-gray-500 font-light text-xs">
              {task.date}
            </span>
          </div>
          <span className={`inline-flex items-center rounded ${task.tagColor} px-2 py-0.5 text-xs font-medium text-gray-800 max-h-6`}>
            {task.tag}
          </span>
        </div>
      </div>
    </>
  );
};

export default TaskItem;
