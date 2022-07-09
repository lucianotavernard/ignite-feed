import { PencilLine, ThumbsUp, Trash } from 'phosphor-react'

import logoSvg from '../assets/favicon.svg'
import sidebarSvg from '../assets/background.svg'

export function Home() {
  return (
    <div className="w-100 min-h-screen bg-[#121214]">
      <header className="flex justify-center items-center h-24 bg-[#202024]">
        <img src={logoSvg} className="h-8" alt="Ignite Feed" />
        <strong className="ml-4 text-2xl text-[#E1E1E6]">Ignite Feed</strong>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-[16rem_1fr] gap-8 items-start max-w-[70rem] mt-8 mx-auto px-8">
        <aside className="rounded-md bg-[#202024] overflow-hidden mb-4 md:mb-0">
          <img className="w-full" src={sidebarSvg} />

          <div className="flex items-center justify-center -mt-7 flex-col space-y-1 pb-4 border-b border-[#323238]">
            <img
              className="w-14 p-0.5 rounded-lg border-2 border-[#00875F]"
              src="https://avatars.githubusercontent.com/u/19474041?v=4"
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

        <section className="w-full md:flex-1">
          <article className="bg-[#202024] rounded-md w-full p-8 mb-5">
            <header className="flex justify-between mb-5">
              <div className="flex">
                <img
                  className="w-14 p-0.5 rounded-lg border-2 border-[#00875F]"
                  src="https://avatars.githubusercontent.com/u/19474041?v=4"
                />

                <div className="flex flex-col justify-center ml-4">
                  <span className="font-bold text-base text-white">
                    Luciano Tavernard
                  </span>

                  <span className="text-sm text-[#8D8D99]">Dev Full-Stack</span>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <time
                  title={'ok'}
                  dateTime="2022-05-10 20:00:00"
                  className="text-sm text-[#8D8D99]"
                >
                  Públicado há 1h
                </time>
              </div>
            </header>

            <div className="text-base pb-7 border-b border-[#323238]">
              <p className="text-[#C4C4CC]">Fala galeraa</p>

              <p className="text-[#C4C4CC]">
                Acabei de subir mais um projeto no meu portifa. É um projeto que
                fiz no NLW Return, evento da Rocketseat. O nome do projeto é
                DoctorCare
              </p>

              <a className="text-[#00875F] hover:text-emerald-600" href="#">
                jane.design/doctorcare
              </a>

              <a className="text-[#00875F] hover:text-emerald-600" href="#">
                #novoprojeto #nlw #rocketseat
              </a>
            </div>

            <form className="mt-4">
              <h2 className="mb-4 font-bold text-base text-white">
                Deixe seu comentário
              </h2>

              <textarea
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

            <div className="mt-7">
              <div className="flex gap-4 mt-4">
                <img
                  className="w-14 h-14 p-0.5 rounded-lg border-2 border-[#00875F]"
                  src="https://avatars.githubusercontent.com/u/19474041?v=4"
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
                        <Trash
                          size={24}
                          className="text-[#8D8D99] hover:opacity-80"
                        />
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
            </div>
          </article>
        </section>
      </main>
    </div>
  )
}
