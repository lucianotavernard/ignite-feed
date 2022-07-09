import logoImg from '../assets/favicon.png'

export function Header() {
  return (
    <header className="flex justify-center items-center h-24 bg-[#202024]">
      <img src={logoImg} className="h-8" alt="Ignite Feed" />
      <strong className="ml-4 text-2xl text-[#E1E1E6]">Ignite Feed</strong>
    </header>
  )
}
