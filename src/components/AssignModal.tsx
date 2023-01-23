import { Dispatch, Fragment, SetStateAction, useRef, useState} from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/outline'
import { NextPage } from 'next'
import NoteModalForm from './NoteModalForm'
import TagModal from './TagModal'
import ViewModalForm from './ViewModalForm'
import { api } from '../utils/api'

interface AssignModal {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

const AssignModal: NextPage<AssignModal> = ({ open, setOpen, setViewOpen, task }) => {
  const cancelButtonRef = useRef(null)
  const utils = api.useContext();
  const updateTask = api.task.updateTask.useMutation({
    onSuccess() {
      utils.task.getUnassigned.invalidate()
      utils.task.getAssigned.invalidate()
      setOpen(false)
      setViewOpen(false)
    }
  });

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
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xs sm:p-6">
                <div className="flex gap-5 flex-wrap justify-center">
                  <h1 className='w-full text-center'>Move to daily task list?</h1>
                  <button
                    onClick={() => {
                      updateTask.mutate({
                        id: task.id,
                        complete: false,
                        assigned: true
                      })
                    }}
                    type="button"
                    className="inline-flex items-center rounded border border-transparent bg-indigo-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Confirm
                  </button>
                  <button
                  type="button"
                  className="inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
    </>
  )
}

export default AssignModal;