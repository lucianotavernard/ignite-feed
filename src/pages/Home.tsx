import { Post } from '../components/Post'
import { Header } from '../components/Header'
import { SideBar } from '../components/SideBar'

type Post = {
  id: string
  author: {
    name: string
    role: string
    avatarUrl: string
  }
  content: Array<{ type: string; content: string }>
  publishedAt: Date
}

export function Home() {
  const post = {
    id: String(new Date().getTime()),
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/19474041?v=4',
      name: 'Luciano Tavernard',
      role: 'Dev Full-Stack'
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋'
      },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      {
        type: 'link',
        content: 'jane.design/doctorcare'
      }
    ],
    publishedAt: new Date()
  }

  return (
    <div className="w-100 min-h-screen bg-[#121214]">
      <Header />

      <main className="grid grid-cols-1 md:grid-cols-[16rem_1fr] gap-8 items-start max-w-[70rem] mt-8 mx-auto px-8">
        <SideBar />

        <section className="w-full md:flex-1">
          <Post
            id={post.id}
            key={post.id}
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
          />
        </section>
      </main>
    </div>
  )
}
