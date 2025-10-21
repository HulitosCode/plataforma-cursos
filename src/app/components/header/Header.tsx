"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

export default function Header() {
  const currentPath = usePathname();

  return (
    <nav className="flex items-center justify-start md:justify-center bg-green-700 py-2 sm:py-4 px-6">
      <button className="sm:hidden">
        <Menu />
      </button>
      <ul className="flex gap-10">
        <li className="hidden sm:block">
          <Link
            href="/"
            data-active={currentPath === "/"}
            className="data-[active=true]:underline"
          >
            Pagina Inicial
          </Link>
        </li>
        <li className="hidden sm:block">
          <Link
            href="/cursos"
            data-active={currentPath === "/cursos"}
            className="data-[active=true]:underline"
          >
            Cursos
          </Link>
        </li>
        <li className="hidden sm:block">
          <Link href="/blog" target="_blanck">
            Blog de Noticias
          </Link>
        </li>
      </ul>

      <h1 className="sm:hidden">Tayspark</h1>
    </nav>
  );
}
