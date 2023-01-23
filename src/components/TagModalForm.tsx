import { CalendarDaysIcon, TagIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
// import { TagIcon } from "@heroicons/react/24/solid";
import { NextPage } from "next";
import { useState } from "react";
import { api } from "../utils/api";
import TagColorDropdown from "./TagColorDropdown";

const TagModalForm: NextPage = ({selectedTag, setSelectedTag, setOpen}) => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [tag, setTag] = useState("");
  const [tagColor, setTagColor] = useState("");
  const [selectedColor, setSelectedColor] = useState(null)
  const utils = api.useContext();

  const { data: tags, isLoading: isTagsLoading } = api.tag.getAll.useQuery()

  console.log('tags', tags)

  console.log('tagColor', tagColor)

  console.log('selectedTag', selectedTag)

  const createTag = api.tag.createTag.useMutation({
    onSuccess() {
      utils.tag.getAll.invalidate()
    }
  });

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
        placeholder="Create a tag"
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
      <div className="w-full py-3">
        {tags?.map(tag => (
          <div className="flex justify-between py-3 w-full">
            <div className="flex gap-2">
              <div className="flex h-5 items-center">
                <input
                  id="candidates"
                  aria-describedby="candidates-description"
                  name="candidates"
                  type="radio"
                  onChange={() => setSelectedTag({tag: tag.name, tagColor: tag.color})}
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
              </div>
              <TagIcon className="w-5" />
              <span className={`inline-flex items-center rounded ${tag.color} px-2 py-0.5 text-xs font-medium text-gray-800 max-h-6`}>
                {tag.name}
              </span>
            </div>
            <div className="flex gap-2">
              <PencilIcon className="w-5" />
              <TrashIcon className="w-5" />
            </div>
          </div>
        ))}
      </div>
      <div className="flex w-full gap-3 justify-end">
        <button
          onClick={() => setOpen(false)}
          type="button"
          className="inline-flex items-center rounded border border-transparent bg-indigo-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Save
        </button>
        <button
          onClick={() => setOpen(false)}
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