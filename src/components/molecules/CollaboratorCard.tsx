import { Roboto } from "next/font/google";
import Image from "next/image"

const roboto = Roboto({ weight: "500", subsets: ["cyrillic"] });

type CollaboratorCardProps = {
    src: string;
    alt: string;
    name: string;
    totalDevelopments: number;
    width: number;
    height: number;
}

export const CollaboratorCard = ({src, alt, name, totalDevelopments, width, height}:CollaboratorCardProps) => {
  return (
    <div className="flex flex-col items-center">
        <Image className="hover:cursor-pointer hover:scale-110" src={src} width={width} height={height} alt={alt} />
        <h3 className={`text-black mt-8 hover:text-black/60 hover:cursor-pointer ${roboto.className}`}>{name}</h3>
        <p className="text-black hover:text-black/60 hover:cursor-pointer"><span>{totalDevelopments}</span> Desarrollos</p>
    </div>
  )
}
