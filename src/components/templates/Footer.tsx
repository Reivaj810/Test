import { Roboto } from "next/font/google";
import Image from "next/image";

const roboto = Roboto({ weight: "700", subsets: ["cyrillic"] });

export const Footer = () => {
  return (
    <div className='bg-black w-full h-64 pt-10 pl-40 flex space-x-24'>
        <div>
            <Image src={"/Landing/GoZipBlack.png"} width={100} height={50} alt="GoZIP Logo" />
            <div className="flex space-x-4 mt-5">
                <Image className="hover:cursor-pointer hover:scale-110" src={"/Landing/Instagram.png"} width={35} height={35} alt="Instagram Logo" />
                <Image className="hover:cursor-pointer hover:scale-110" src={"/Landing/Facebook.png"} width={35} height={35} alt="Facebook Logo" />
            </div>
        </div>
        <div className="flex space-x-24 mt-3">
            <div className='text-white flex flex-col space-y-2'>
                <h1 className={`uppercase mb-2 text-sm ${roboto.className}`}>Acerca de GoZIP</h1>
                <a className="text-sm hover:cursor-pointer">Nuestra Historia</a>
                <a className="text-sm hover:cursor-pointer">Nuestros beneficios</a>
                <a className="text-sm hover:cursor-pointer">Contacto</a>
            </div>

            <div className='text-white flex flex-col space-y-2'>
                <h1 className={`uppercase mb-2 text-sm ${roboto.className}`}>Explorar</h1>
                <a className="text-sm hover:cursor-pointer">Propiedades</a>
                <a className="text-sm hover:cursor-pointer">Inversiones Inmobiliarias</a>
                <a className="text-sm hover:cursor-pointer">Crédito</a>
            </div>

            <div className='text-white flex flex-col space-y-2'>
                <h1 className={`uppercase mb-2 text-sm ${roboto.className}`}>Nuestra Comunidad</h1>
                <a className="text-sm hover:cursor-pointer">Clientes y Colaboradores</a>
                <a className="text-sm hover:cursor-pointer">Corredores</a>
                <a className="text-sm hover:cursor-pointer">Inmobiliarias</a>
            </div>
        </div>
    </div>
  )
}
