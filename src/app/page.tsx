import { Metadata } from "next";
import PageCursos from "./cursos/page";

export const metadata: Metadata = {
  title: "Pagina Inicial",
};

export default function Home() {
  return <PageCursos />;
}
