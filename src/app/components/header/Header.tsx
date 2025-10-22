"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

export default function Header() {
  const [title, setTitle] = useState("Tayspark");
  const [drawer, setDrawer] = useState(false);
  const currentPath = usePathname();

  useEffect(() => {
    setTitle(document.title);
    setDrawer(false);
  }, [currentPath]);

  return (
    <nav className="flex items-center justify-start md:justify-center bg-green-700 py-2 sm:py-4 px-6">
      <button className="sm:hidden" onClick={() => setDrawer(true)}>
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

      <ul
        data-open={drawer}
        className="transition-transform flex gap-4 flex-col fixed h-full p-8 w-60 bg-green-950 top-0 left-0 bottom-0 data-[open=false]:-translate-x-full"
      >
        <div className="flex items-end justify-end">
          <button className="font-bold" onClick={() => setDrawer(false)}>
            X
          </button>
        </div>
        <li className="">
          <Link
            href="/"
            data-active={currentPath === "/"}
            className="data-[active=true]:underline"
          >
            Pagina Inicial
          </Link>
        </li>
        <li className="">
          <Link
            href="/cursos"
            data-active={currentPath === "/cursos"}
            className="data-[active=true]:underline"
          >
            Cursos
          </Link>
        </li>
        <li className="">
          <Link href="/blog" target="_blanck">
            Blog de Noticias
          </Link>
        </li>
      </ul>

      <h1 className="sm:hidden px-4">{title}</h1>
    </nav>
  );
}
