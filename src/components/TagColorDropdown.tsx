import { useEffect, useState } from 'react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Combobox } from '@headlessui/react'

const people = [
  {
    id: 1,
    name: 'red',
    color: 'bg-red-200'
  },
  {
    id: 2,
    name: 'blue',
    color: 'bg-cyan-200'
  },
  {
    id: 3,
    name: 'orange',
    color: 'bg-orange-200'
  },
  {
    id: 4,
    name: 'yellow',
    color: 'bg-yellow-200'
  },
  {
    id: 5,
    name: 'green',
    color: 'bg-lime-200'
  },
  {
    id: 6,
    name: 'purple',
    color: 'bg-purple-200'
  },
  {
    id: 7,
    name: 'gray',
    color: 'bg-slate-200'
  },
  // More users...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function TagColorDropdown({ selectedColor, setSelectedColor, setTagColor }) {
  const [query, setQuery] = useState('')
  // const [selectedColor, setSelectedColor] = useState(null)
  console.log('query', query)
  console.log('selected', selectedColor)

  const filteredPeople =
    query === ''
      ? people
      : people.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase())
        })

  useEffect(() => {
    setTagColor(selectedColor?.color)
  }, [selectedColor])

  return (
    <Combobox as="div" value={selectedColor} onChange={setSelectedColor}>
      <div className="relative">
        <Combobox.Input
          className={`w-full rounded-md border border-gray-300 ${selectedColor ? selectedColor.color : 'bg-white'} py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm`}
          onChange={(event) => setQuery(event.target.value)}
          displayValue={''}
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </Combobox.Button>

        {filteredPeople.length > 0 && (
          <Combobox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredPeople.map((person) => (
              <Combobox.Option
                key={person.id}
                value={person}
                className={({ active }) =>
                  classNames(
                    'relative cursor-default select-none py-2 pl-3 pr-9',
                    active ? 'bg-indigo-600 text-white' : 'text-gray-900'
                  )
                }
              >
                {({ active, selected }) => (
                  <>
                    <div className="flex items-center justify-center">
                      <div className={`h-6 w-6 flex-shrink-0 rounded-full ${person.color}`} />
                      {/* <span className={classNames('ml-3 truncate', selected && 'font-semibold')}>{person.name}</span> */}
                    </div>

                    {selected && (
                      <span
                        className={classNames(
                          'absolute inset-y-0 right-0 flex items-center pr-4',
                          active ? 'text-white' : 'text-indigo-600'
                        )}
                      >
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  )
}