/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { ReactNode } from 'react'
import { createPortal } from 'react-dom'

type ModalProps = {
  visible: boolean
  children: ReactNode
}

export function Modal({ children, visible }: ModalProps) {
  return createPortal(
    <dialog
      className={`transition-all duration-300 fixed top-0 left-0 flex justify-center items-center w-full h-full bg-black/[.80] ${
        visible ? 'visible opacity-100' : 'invisible opacity-0'
      }`}
    >
      <div
        className={`transition-all duration-300 overflow-y-auto relative flex flex-col items-center w-full max-w-[30rem] min-h-[15rem] py-6 px-8 rounded-lg bg-[#202024] ${
          visible ? 'translate-y-0 opacity-100' : '-translate-y-24 opacity-0'
        }`}
      >
        {children}
      </div>
    </dialog>,
    document.getElementById('modal')!
  )
}
