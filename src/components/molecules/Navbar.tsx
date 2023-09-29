import Image from "next/image";
import { Button } from "../atoms";
import { useRouter } from "next/navigation";
import Link from "next/link";

export const Navbar = () => {
  const router = useRouter();

  function deleteCookie(name: string) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }

  return (
    <div className="bg-main h-64 flex flex-col justify-between">
      <div className="flex justify-between items-center px-32 pt-10">
        <Image
          src={"/GoZIP_Logo.png"}
          width={100}
          height={30}
          alt="GoZIP Logo"
        />
        <div>
          <div className="flex space-x-10 items-center">
            <Link href={"/"} className="text-black uppercase cursor-pointer hover:text-black/50">
              Inicio
            </Link>
            <a className="text-black uppercase cursor-pointer hover:text-black/50">¿Qué buscas?</a>
            <Link
              href={"/developments"}
              className="text-black uppercase cursor-pointer hover:text-black/50"
            >
              Desarrolladoras
            </Link>
            <a className="text-black uppercase cursor-pointer hover:text-black/50">Contacto</a>
            <Button
            className="px-2"
              onClick={() => {
                deleteCookie("$token");
                router.push("/login");
              }}
              variant="primary"
            >
              Cerrar sesión
            </Button>
          </div>
        </div>
      </div>
      <div className="-mb-3">
        <Image
          src={"https://i.postimg.cc/pV4tKTwW/Landscape.png"}
          width={500}
          height={100}
          alt="Casas"
        />
      </div>
    </div>
  );
};
