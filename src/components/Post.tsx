import { Avatar } from './Avatar'
import { Comment } from './Comment'

export function Post() {
  return (
    <article className="bg-[#202024] rounded-md w-full p-8 mb-5">
      <header className="flex justify-between mb-5">
        <div className="flex">
          <Avatar
            hasBorder
            src="https://avatars.githubusercontent.com/u/19474041?v=4"
            alt="Luciano Tavernard"
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
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare
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
        <Comment />
      </div>
    </article>
  )
}
