import { type NextPage } from "next";
import Head from "next/head";
import HabitItem from "../components/HabitItem";
import NoteItem from "../components/NoteItem";
import TaskItem from "../components/TaskItem";
import { PlusIcon } from '@heroicons/react/24/solid';
// import Link from "next/link";
// import { signIn, signOut, useSession } from "next-auth/react";

// import { api } from "../utils/api";

const Monthly: NextPage = () => {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <div className="p-3">
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
      </Head>
      <div className="max-w-screen-lg">
        <div className="bg-white rounded-lg px-8 py-6 text-center">
          <h1 className="text-2xl font-semibold text-zinc-700">This Month</h1>
          <h4 className="font-medium mt-2 text-zinc-700">January</h4>
        </div>
        <div className="md:flex md:justify-between md:space-x-5">
          <div className="mt-4 bg-white rounded-lg px-8 py-8 md:w-1/2">
            <div className="flex justify-between">
              <h2 className="text-xl font-medium text-zinc-700">Tasks</h2>
              <button className="border-dashed border-2 border-gray-400 p-1.5 rounded">
                <PlusIcon className="text-gray-500 h-4 w-4" />
              </button>
            </div>
            <fieldset className="space-y-8">
              <legend className="sr-only">Notifications</legend>
              <TaskItem date={'1/15/23'}/>
              <TaskItem date={null} />
            </fieldset>
          </div>
          <div className="mt-4 bg-white rounded-lg px-8 py-8 md:w-1/2">
            <div className="flex justify-between">
              <h2 className="text-xl font-medium text-zinc-700">Habits</h2>
              <button className="border-dashed border-2 border-gray-400 p-1.5 rounded">
                <PlusIcon className="text-gray-500 h-4 w-4" />
              </button>
            </div>
            <span className="col-span-2 flex items-center text-xs font-light pt-6">Run a mile</span>
            <div className="grid grid-cols-8 gap-2 pt-2 text-xs font-extralight">
              <span className="bg-red-200 rounded-md flex justify-center items-center h-5">1</span>
              <span className="bg-red-200 rounded-md flex justify-center items-center h-5">2</span>
              <span className="bg-red-200 rounded-md flex justify-center items-center h-5">3</span>
              <span className="bg-red-200 rounded-md flex justify-center items-center h-5">4</span>
              <span className="bg-red-200 rounded-md flex justify-center items-center h-5">5</span>
              <span className="bg-red-200 rounded-md flex justify-center items-center h-5">6</span>
              <span className="bg-red-200 rounded-md flex justify-center items-center h-5">7</span>
              <span className="bg-red-200 rounded-md flex justify-center items-center h-5">8</span>
              <span className="bg-red-200 rounded-md flex justify-center items-center h-5">9</span>
              <span className="bg-red-200 rounded-md flex justify-center items-center h-5">10</span>
              <span className="bg-red-200 rounded-md flex justify-center items-center h-5">11</span>
              <span className="bg-red-200 rounded-md flex justify-center items-center h-5">12</span>
              <span className="bg-red-200 rounded-md flex justify-center items-center h-5">13</span>
              <span className="bg-red-200 rounded-md flex justify-center items-center h-5">14</span>
              <span className="bg-red-200 rounded-md flex justify-center items-center h-5">15</span>
              <span className="bg-red-200 rounded-md flex justify-center items-center h-5">16</span>
              <span className="bg-red-200 rounded-md flex justify-center items-center h-5">17</span>
              <span className="bg-red-200 rounded-md flex justify-center items-center h-5">18</span>
              <span className="bg-red-200 rounded-md flex justify-center items-center h-5">19</span>
              <span className="bg-red-200 rounded-md flex justify-center items-center h-5">20</span>
              <span className="bg-red-200 rounded-md flex justify-center items-center h-5">21</span>
              <span className="bg-red-200 rounded-md flex justify-center items-center h-5">22</span>
              <span className="bg-red-200 rounded-md flex justify-center items-center h-5">23</span>
              <span className="bg-red-200 rounded-md flex justify-center items-center h-5">24</span>
              <span className="bg-red-200 rounded-md flex justify-center items-center h-5">25</span>
              <span className="bg-red-200 rounded-md flex justify-center items-center h-5">26</span>
              <span className="bg-red-200 rounded-md flex justify-center items-center h-5">27</span>
              <span className="bg-red-200 rounded-md flex justify-center items-center h-5">28</span>
              <span className="bg-red-200 rounded-md flex justify-center items-center h-5">29</span>
              <span className="bg-red-200 rounded-md flex justify-center items-center h-5">30</span>
              <span className="bg-red-200 rounded-md flex justify-center items-center h-5">31</span>
            </div>
            <span className="col-span-2 flex items-center text-xs font-light pt-6">Read</span>
            <div className="grid grid-cols-8 gap-2 pt-2 text-xs font-extralight">
              <span className="bg-blue-200 rounded-md flex justify-center items-center h-5">1</span>
              <span className="bg-blue-200 rounded-md flex justify-center items-center h-5">2</span>
              <span className="bg-blue-200 rounded-md flex justify-center items-center h-5">3</span>
              <span className="bg-blue-200 rounded-md flex justify-center items-center h-5">4</span>
              <span className="bg-blue-200 rounded-md flex justify-center items-center h-5">5</span>
              <span className="bg-blue-200 rounded-md flex justify-center items-center h-5">6</span>
              <span className="bg-blue-200 rounded-md flex justify-center items-center h-5">7</span>
              <span className="bg-blue-200 rounded-md flex justify-center items-center h-5">8</span>
              <span className="bg-blue-200 rounded-md flex justify-center items-center h-5">9</span>
              <span className="bg-blue-200 rounded-md flex justify-center items-center h-5">10</span>
              <span className="bg-blue-200 rounded-md flex justify-center items-center h-5">11</span>
              <span className="bg-blue-200 rounded-md flex justify-center items-center h-5">12</span>
              <span className="bg-blue-200 rounded-md flex justify-center items-center h-5">13</span>
              <span className="bg-blue-200 rounded-md flex justify-center items-center h-5">14</span>
              <span className="bg-blue-200 rounded-md flex justify-center items-center h-5">15</span>
              <span className="bg-blue-200 rounded-md flex justify-center items-center h-5">16</span>
              <span className="bg-blue-200 rounded-md flex justify-center items-center h-5">17</span>
              <span className="bg-blue-200 rounded-md flex justify-center items-center h-5">18</span>
              <span className="bg-blue-200 rounded-md flex justify-center items-center h-5">19</span>
              <span className="bg-blue-200 rounded-md flex justify-center items-center h-5">20</span>
              <span className="bg-blue-200 rounded-md flex justify-center items-center h-5">21</span>
              <span className="bg-blue-200 rounded-md flex justify-center items-center h-5">22</span>
              <span className="bg-blue-200 rounded-md flex justify-center items-center h-5">23</span>
              <span className="bg-blue-200 rounded-md flex justify-center items-center h-5">24</span>
              <span className="bg-blue-200 rounded-md flex justify-center items-center h-5">25</span>
              <span className="bg-blue-200 rounded-md flex justify-center items-center h-5">26</span>
              <span className="bg-blue-200 rounded-md flex justify-center items-center h-5">27</span>
              <span className="bg-blue-200 rounded-md flex justify-center items-center h-5">28</span>
              <span className="bg-blue-200 rounded-md flex justify-center items-center h-5">29</span>
              <span className="bg-blue-200 rounded-md flex justify-center items-center h-5">30</span>
              <span className="bg-blue-200 rounded-md flex justify-center items-center h-5">31</span>
            </div>
          </div>
        </div>
        <div className="mt-4 bg-white rounded-lg px-8 pt-8">
          <div className="flex justify-between pb-8">
            <h2 className="text-xl font-medium text-zinc-700">Notes</h2>
            <button className="border-dashed border-2 border-gray-400 p-1.5 rounded">
              <PlusIcon className="text-gray-500 h-4 w-4" />
            </button>
          </div>
            <NoteItem date={'1/15/23'} />
            <NoteItem date={'1/15/23'} />
            <NoteItem date={'1/15/23'} />
        </div>
      </div>
    </div>
  );
};

export default Monthly;