import { Dispatch, Fragment, SetStateAction, useRef, useState} from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/outline'
import { NextPage } from 'next'
import NoteModalForm from './NoteModalForm'
import TagModal from './TagModal'

interface NoteModal {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

const NoteModal: NextPage<NoteModal> = ({ open, setOpen }) => {
  const cancelButtonRef = useRef(null)
  const [tagModalOpen, setTagModalOpen] = useState(false)
  const [selectedTag, setSelectedTag] = useState(null)

  return (
    <>
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div>
                  <NoteModalForm setOpen={setTagModalOpen} setNoteModalOpen={setOpen} selectedTag={selectedTag} />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
    <TagModal open={tagModalOpen} setOpen={setTagModalOpen} selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
    </>
  )
}

export default NoteModal;