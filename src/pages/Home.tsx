import { Post } from '../components/Post'
import { Header } from '../components/Header'
import { SideBar } from '../components/SideBar'

export function Home() {
  return (
    <div className="w-100 min-h-screen bg-[#121214]">
      <Header />

      <main className="grid grid-cols-1 md:grid-cols-[16rem_1fr] gap-8 items-start max-w-[70rem] mt-8 mx-auto px-8">
        <SideBar />

        <section className="w-full md:flex-1">
          <Post />
        </section>
      </main>
    </div>
  )
}
