'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {

    const currentPath = usePathname()

  return (
    <nav className="flex items-center justify-center bg-green-700">
      <ul className="flex p-4 gap-10">
        <li>
          <Link href="/" data-active={currentPath === '/'} className='data-[active=true]:underline'>Pagina Inicial</Link>
        </li>
        <li>
          <Link href="/cursos" data-active={currentPath === '/cursos'} className='data-[active=true]:underline'>Cursos</Link>
        </li>
        <li>
          <Link href="/blog" target="_blanck">
            Blog de Noticias
          </Link>
        </li>
      </ul>
    </nav>
  );
}
