import { ThumbsUp, Trash } from 'phosphor-react'

import { Avatar } from './Avatar'

export function Comment() {
  return (
    <div className="flex items-start gap-4 mt-4">
      <Avatar
        src="https://avatars.githubusercontent.com/u/19474041?v=4"
        alt="Luciano Tavernard"
      />

      <div className="flex-1">
        <div className="p-4 rounded-lg bg-[#323238]">
          <header className="flex items-start justify-between">
            <div className="flex flex-col">
              <strong className="block font-bold text-sm text-[#E1E1E6]">
                Luciano Tavernard
              </strong>

              <time
                title="06 de Junho de 2022 às 15h30"
                dateTime="2022-06-06 15:33:00"
                className="text-xs text-[#8D8D99]"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} className="text-[#8D8D99] hover:opacity-80" />
            </button>
          </header>

          <p className="mt-4 text-sm text-[#C4C4CC]">
            Muito bom Devon, parabéns!!
          </p>
        </div>

        <footer className="mt-4">
          <button className="flex items-center font-bold text-sm text-[#8D8D99] hover:text-[#00875F]">
            <ThumbsUp size={20} />
            <span className="ml-2">Aplaudir</span>
            <span className="ml-1">•</span>
            <span className="ml-1">01</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
