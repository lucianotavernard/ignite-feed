import { useEffect, useState } from 'react'

import { api } from '../services/api'

import { Post } from '../components/Post'
import { Header } from '../components/Header'
import { SideBar } from '../components/SideBar'

type Post = {
  id: number
  author: {
    name: string
    role: string
    avatarUrl: string
  }
  content: Array<{ type: string; content: string }>
  publishedAt: string
}

export function Home() {
  const [posts, setPosts] = useState<Array<Post>>([])

  useEffect(() => {
    api.get('posts').then((response) => {
      setPosts(response.data)
    })
  }, [])

  return (
    <div className="w-100 min-h-screen bg-[#121214]">
      <Header />

      <main className="grid grid-cols-1 md:grid-cols-[16rem_1fr] gap-8 items-start max-w-[70rem] mt-8 mx-auto px-8">
        <SideBar />

        <section className="w-full md:flex-1">
          {posts.map((post) => (
            <Post
              id={post.id}
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </section>
      </main>
    </div>
  )
}
