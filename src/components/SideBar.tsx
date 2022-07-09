import { PencilLine } from 'phosphor-react'

import bgSidebar from '../assets/background.png'

import { Avatar } from './Avatar'

export function SideBar() {
  return (
    <aside className="rounded-md bg-[#202024] overflow-hidden mb-4 md:mb-0">
      <img className="w-full" src={bgSidebar} />

      <div className="flex items-center justify-center -mt-7 flex-col space-y-1 pb-4 border-b border-[#323238]">
        <Avatar
          hasBorder
          src="https://avatars.githubusercontent.com/u/19474041?v=4"
          alt="Luciano Tavernard"
        />

        <h2 className="font-bold text-md text-white">Luciano Tavernard</h2>
        <span className="text-sm text-[#8D8D99]">Dev Full-Stack</span>
      </div>

      <footer className="flex items-center justify-center px-3 py-5">
        <button className="hover:bg-[#00875F] hover:text-white transition-colors flex items-center justify-center border-2 border-[#00875F] rounded-md text-sm p-2 space-x-1 text-[#00875F]">
          <PencilLine size={20} className="mr-2" />
          <span>Editar seu perfil</span>
        </button>
      </footer>
    </aside>
  )
}
