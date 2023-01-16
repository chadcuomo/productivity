import { type NextPage } from "next";

const HabitItem: NextPage = () => {
  return (
    <div className="flex justify-center items-center rounded bg-red-200 text-sm font-normal text-zinc-700 h-12">
      <span className="">Run a mile</span>
    </div>
  );
};

export default HabitItem;