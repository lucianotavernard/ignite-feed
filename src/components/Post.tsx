import { FormEvent, useMemo, useState } from 'react'

import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { Avatar } from './Avatar'
import { Comment } from './Comment'

type PostProps = {
  id: string
  author: {
    name: string
    role: string
    avatarUrl: string
  }
  content: Array<{ type: string; content: string }>
  publishedAt: Date
}

type Comment = {
  id: string
  author: {
    name: string
    role: string
    avatarUrl: string
  }
  content: string
  publishedAt: Date
  totalApplauses: number
}

export function Post({ id: postId, author, content, publishedAt }: PostProps) {
  const [newComment, setNewComment] = useState('')
  const [comments, setComments] = useState<Array<Comment>>([])

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault()

    const id = String(new Date().getTime())

    const createComment = {
      totalApplauses: 0,
      publishedAt: new Date(),
      content: newComment,
      postId: postId,
      author,
      id
    }

    setComments((prevComments) => [createComment, ...prevComments])
    setNewComment('')
  }

  function handleDeleteComment(commentId: string) {
    setComments((prevComments) =>
      prevComments.filter((comment) => comment.id !== commentId)
    )
  }

  const publishedDateFormatted = useMemo(
    () =>
      format(new Date(publishedAt), "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
      }),
    [publishedAt]
  )

  const publishedDateRelativeToNow = useMemo(
    () =>
      formatDistanceToNow(new Date(publishedAt), {
        locale: ptBR,
        addSuffix: true
      }),
    [publishedAt]
  )

  return (
    <article className="bg-[#202024] rounded-md w-full p-4 md:p-8 mb-5">
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
            dateTime={new Date(publishedAt).toISOString()}
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
