"use client";
import { Roboto } from "next/font/google";
import { Button, Input } from "../atoms";
import Image from "next/image";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const roboto = Roboto({ weight: "700", subsets: ["cyrillic"] });

export const LoginCard = () => {
  const [formData, setFormData] = useState({ Username: "", Password: "" });
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);

    const apiUrl = "https://gozip-api.azurewebsites.net/api/Auth";

    try {
      setIsLoading(true)
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Error al realizar la solicitud");
      }

      const token = await response.text();

      console.log("Token:", token);
      if (token) {
        const cookieString = `$token=${token}`;
        document.cookie = cookieString;
        setIsLoading(false)
        router.push("/");
      }
    } catch (error) {
      setIsError(true);
      setIsLoading(false)
      console.error("Error:", error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form
      className="w-[500px] border border-black/30 p-12 rounded-lg"
      onSubmit={handleSubmit}
    >
      <h1 className={`text-black font-bold text-2xl mb-2 ${roboto.className}`}>
        Inicia sesión
      </h1>
      <p className="text-black">Introduce los siguientes datos</p>
      <div className="mt-4 flex flex-col space-y-4">
        <Input
          type="text"
          name="Username"
          title="Correo"
          placeholder="Ingresa tu correo electrónico"
          value={formData.Username || ""}
          onChange={handleInputChange}
        />
        <Input
          type="password"
          name="Password"
          title="Contraseña"
          placeholder="Ingresa tu contraseña"
          value={formData.Password || ""}
          onChange={handleInputChange}
        />
      </div>
      
      {isError && <p className="-mb-10 text-rose-700">La contraseña o el correo ingresados son inválidos. Por favor, inténtalo nuevamente.</p>}

      <Button disabled={isLoading} className="mt-10 mb-5 disabled:cursor-wait" variant="secondary" type="submit">
        Iniciar sesión
      </Button>

      <p className="text-black mb-4">
        ¿Aún no tienes cuenta?
        <Link
          href={"/register"}
          className={`hover:cursor-pointer text-base hover:text-black/60 ${roboto.className}`}
        >
          {" "}
          Regístrate
        </Link>
      </p>

      <Image
        src="https://i.postimg.cc/pV4tKTwW/Landscape.png"
        width={400}
        height={100}
        alt="Casas"
      />
    </form>
  );
};
