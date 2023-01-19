import { CalendarDaysIcon, TagIcon } from "@heroicons/react/24/outline";
import { NextPage } from "next";
import { useState } from "react";
import { api } from "../utils/api";
import TagColorDropdown from "./TagColorDropdown";

const TagModalForm: NextPage = () => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [tag, setTag] = useState("");
  const [tagColor, setTagColor] = useState("");
  const [selectedColor, setSelectedColor] = useState(null)

  const { data: tags, isLoading: isTagsLoading } = api.tag.getAll.useQuery()

  console.log('tags', tags)

  console.log('tagColor', tagColor)

  const createTag = api.tag.createTag.useMutation();

  return (
    <>
    <h2 className="text-xl font-medium text-zinc-700">Tags</h2>
    <form
      className="flex flex-wrap gap-2 pt-4"
      onSubmit={(event) => {
        event.preventDefault();
        createTag.mutate({
          name: tag,
          color: tagColor,
        });
        setTitle("");
        setNote("");
        setTag("");
        setTagColor("");
      }}
    >
      <div className="flex gap-2">
      <input
        type="text"
        value={tag}
        placeholder="Create a new tag"
        minLength={2}
        maxLength={100}
        onChange={(event) => setTag(event.target.value)}
        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      />
      <TagColorDropdown selectedColor={selectedColor} setSelectedColor={setSelectedColor} setTagColor={setTagColor} />
      <button
          type="submit"
          className="inline-flex items-center rounded border border-transparent bg-indigo-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Add
        </button>
      </div>
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
        <TagIcon className="w-5" />
        <button
          type="button"
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

export default TagModalForm;