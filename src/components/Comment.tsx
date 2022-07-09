import { useEffect, useMemo, useState } from 'react'

import { ThumbsUp, Trash } from 'phosphor-react'

import { format, formatDistanceToNow, parseISO } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { api } from '../services/api'

import { Avatar } from './Avatar'
import { Modal } from './Modal'

type CommentProps = {
  comment: {
    id: number
    author: {
      name: string
      role: string
      avatarUrl: string
    }
    content: string
    publishedAt: string
  }
  onDelete: (id: number) => void
}

export function Comment({ comment, onDelete }: CommentProps) {
  const { id, author, content, publishedAt } = comment

  const parsedPublishedAt = parseISO(publishedAt)

  const [totalApplauses, setTotalApplauses] = useState<number>(0)
  const [modalVisible, setModalVisible] = useState(false)

  async function handleCreateNewApplause() {
    const createApplause = {
      publishedAt: new Date().toISOString(),
      commentId: id,
      author
    }

    await api.post('applauses', createApplause)

    setTotalApplauses((prevTotalApplauses) => prevTotalApplauses + 1)
  }

  function handleRemoveApplause() {
    onDelete(id)
  }

  const publishedDateFormatted = useMemo(
    () =>
      format(parsedPublishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
      }),
    [parsedPublishedAt]
  )

  const publishedDateRelativeToNow = useMemo(
    () =>
      formatDistanceToNow(parsedPublishedAt, {
        locale: ptBR,
        addSuffix: true
      }),
    [parsedPublishedAt]
  )

  useEffect(() => {
    api.get('applauses').then((response) => {
      setTotalApplauses(response.data.length)
    })
  }, [])

  return (
    <>
      <div className="flex items-start gap-4 mt-4">
        <Avatar hasBorder src={author.avatarUrl} alt={author.name} />

        <div className="flex-1">
          <div className="p-4 rounded-lg bg-[#323238]">
            <header className="flex items-start justify-between">
              <div className="flex flex-col">
                <strong className="block font-bold text-sm text-[#E1E1E6]">
                  {author.name}
                </strong>

                <time
                  title={publishedDateFormatted}
                  dateTime={parsedPublishedAt.toISOString()}
                  className="text-xs text-[#8D8D99]"
                >
                  {publishedDateRelativeToNow}
                </time>
              </div>

              <button
                title="Deletar comentário"
                onClick={() => setModalVisible(true)}
              >
                <Trash size={24} className="text-[#8D8D99] hover:opacity-80" />
              </button>
            </header>

            <p className="mt-4 text-sm text-[#C4C4CC]">{content}</p>
          </div>

          <footer className="mt-4">
            <button
              onClick={() => handleCreateNewApplause()}
              className="flex items-center font-bold text-sm text-[#8D8D99] hover:text-[#00875F]"
            >
              <ThumbsUp size={20} />
              <span className="ml-2">Aplaudir</span>
              <span className="ml-1">•</span>
              <span className="ml-1">{totalApplauses}</span>
            </button>
          </footer>
        </div>
      </div>

      <Modal visible={modalVisible}>
        <h1 className="font-bold text-2xl text-[#E1E1E6]">
          Excluir comentário
        </h1>

        <p className="mt-6 text-base text-center text-[#C4C4CC]">
          Você tem certeza que gostaria de <br /> excluir este comentário?
        </p>

        <footer className="mt-6">
          <button
            title="Cancelar remoção"
            className="py-3 px-8 rounded font-bold text-sm text-white hover:opacity-80"
            onClick={() => setModalVisible(false)}
          >
            Cancelar
          </button>

          <button
            title="Confirmar remoção"
            className="py-3 px-8 rounded bg-[#29292E] font-bold text-sm text-[#F75A68] hover:opacity-80"
            onClick={() => handleRemoveApplause()}
          >
            Sim, excluir
          </button>
        </footer>
      </Modal>
    </>
  )
}
