import { Roboto } from "next/font/google";
import { Button, Input } from "../atoms";
import Image from "next/image";
import Link from "next/link";

const roboto = Roboto({ weight: "700", subsets: ["cyrillic"] });

export const RegisterCard = () => {
  return (
    <form className="w-[500px] border border-black/30 p-12 rounded-lg">
      <h1 className={`text-black font-bold text-2xl mb-2 ${roboto.className}`}>
        Regístrate
      </h1>
      <p className="text-black">Introduce los siguientes datos</p>
      <div className="mt-4 flex flex-col space-y-4">
        <Input title="Nombre" placeholder="Ingresa tu nombre" />
        <Input
          title="Apellido paterno"
          placeholder="Ingresa tu apellido paterno"
        />
        <Input
          title="Apellido materno"
          placeholder="Ingresa tu apellido materno"
        />
        <Input title="Celular" placeholder="Ingresa tu número telefónico" />
        <Input
          type="email"
          title="Correo"
          placeholder="Ingresa tu correo electrónico"
        />
        <Input
          type="password"
          title="Contraseña"
          placeholder="Ingresa tu contraseña"
        />
      </div>
      <Button className="mt-10 mb-5" variant="secondary">
        Crear cuenta
      </Button>
      <p className="text-black mb-4">
        ¿Ya tienes una cuenta?
        <Link href={"/login"}
          className=
          {`hover:cursor-pointer text-base hover:text-black/60 ${roboto.className}`}>{" "}
          Inicia sesión
        </Link>

      </p>

      <Image
        src={"https://i.postimg.cc/pV4tKTwW/Landscape.png"}
        width={400}
        height={100}
        alt="Casas"
      />
    </form>
  );
};
