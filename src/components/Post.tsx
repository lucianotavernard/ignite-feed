import { FormEvent, useEffect, useMemo, useState } from 'react'

import { format, formatDistanceToNow, parseISO } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { api } from '../services/api'

import { Avatar } from './Avatar'
import { Comment } from './Comment'

type PostProps = {
  id: number
  author: {
    name: string
    role: string
    avatarUrl: string
  }
  content: Array<{ type: string; content: string }>
  publishedAt: string
}

type Comment = {
  id: number
  author: {
    name: string
    role: string
    avatarUrl: string
  }
  content: string
  publishedAt: string
}

export function Post({ id, author, content, publishedAt }: PostProps) {
  const parsedPublishedAt = parseISO(publishedAt)

  const [newComment, setNewComment] = useState('')
  const [comments, setComments] = useState<Array<Comment>>([])

  async function handleCreateNewComment(event: FormEvent) {
    event.preventDefault()

    const createComment = {
      publishedAt: new Date().toISOString(),
      content: newComment,
      postId: id,
      author
    }

    await api.post('comments', createComment)

    setComments((prevComments) => [
      { id: prevComments.length + 1, ...createComment },
      ...prevComments
    ])
  }

  function handleDeleteComment(id: number) {
    api.delete(`comments/${id}`)

    setComments((prevComments) =>
      prevComments.filter((comment) => comment.id !== id)
    )
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
    api.get('comments').then((response) => {
      setComments(response.data)
    })
  }, [])

  return (
    <article className="bg-[#202024] rounded-md w-full p-8 mb-5">
      <header className="flex justify-between mb-5">
        <div className="flex">
          <Avatar hasBorder src={author.avatarUrl} alt={author.name} />

          <div className="flex flex-col justify-center ml-4">
            <strong className="font-bold text-base text-white">
              {author.name}
            </strong>

            <span className="text-sm text-[#8D8D99]">{author.role}</span>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <time
            title={publishedDateFormatted}
            dateTime={parsedPublishedAt.toISOString()}
            className="text-sm text-[#8D8D99]"
          >
            {publishedDateRelativeToNow}
          </time>
        </div>
      </header>

      <div className="text-base pb-7 border-b border-[#323238]">
        {content.map((line, index) =>
          line.type === 'paragraph' ? (
            <p key={index} className="text-[#C4C4CC]">
              {line.content}
            </p>
          ) : (
            <p key={index} className="text-[#C4C4CC]">
              <a className="text-[#00875F] hover:text-emerald-600" href="#">
                {line.content}
              </a>
            </p>
          )
        )}
      </div>

      <form onSubmit={handleCreateNewComment} className="mt-4">
        <h2 className="mb-4 font-bold text-base text-white">
          Deixe seu comentário
        </h2>

        <textarea
          value={newComment}
          onChange={(event) => setNewComment(event.target.value)}
          className="w-full rounded-md border border-[#00875F] bg-[#121214] resize-none text-[#C4C4CC] p-3 placeholder:text-[#323238]"
          placeholder="Deixe seu comentário"
        ></textarea>

        <footer>
          <button
            type="submit"
            className="bg-[#00875F] hover:bg-emerald-600 px-6 py-2 text-white rounded-md mt-2"
          >
            Publicar
          </button>
        </footer>
      </form>

      {!!comments.length && (
        <div className="mt-7">
          {comments.map((comment) => (
            <Comment
              key={comment.id}
              comment={comment}
              onDelete={handleDeleteComment}
            />
          ))}
        </div>
      )}
    </article>
  )
}
