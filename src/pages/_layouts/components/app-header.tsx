import { Link } from 'react-router-dom'

export function AppHeader() {
  return (
    <header className="flex items-center justify-between bg-terracota-red px-11 py-3 text-zinc-300">
      <div className="max-w-40">
        <Link to="/" className="text-sm font-normal hover:text-zinc-50 transition-colors duration-200">
          “Ovo não briga com pedra, mas lambuza!”
        </Link>
      </div>

      <nav className="space-x-15 flex items-center">
        <Link to="/conflitos" className="font-light  hover:text-zinc-50 transition-colors duration-200">
          Conflitos
        </Link>
        <Link to="/deslocamentos-compulsorios-agrovilas" className="font-light max-w-52 text-center flex  hover:text-zinc-50 transition-colors duration-200">
          Deslocamentos compulsórios agrovilas
        </Link>
        <Link to="/deslocamentos-compulsorios-permanente" className="font-light max-w-52 text-center flex  hover:text-zinc-50 transition-colors duration-200">
          Deslocamentos compulsórios permanentes
        </Link>
        <Link to="/entidades-representativas" className="font-light  hover:text-zinc-50 transition-colors duration-200">
          Entidades representativas
        </Link>
        <Link to="/ancestralidade" className="font-light  hover:text-zinc-50 transition-colors duration-200">
          Ancestralidade
        </Link>
      </nav>

    </header>
  )
}