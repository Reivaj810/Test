import { Roboto } from "next/font/google";
import { Button } from "../atoms";
import { CollaboratorCard } from "../molecules";

const roboto = Roboto({ weight: "500", subsets: ["cyrillic"] });

export const CollaboratorsSection = () => {
  return (
    <section className="w-full bg-gray-light mt-14">
      <div className="pt-12 px-40 pb-24 flex">
        <div className=" w-96">
          <h3 className="text-black uppercase tracking-widest">
            Nuestros colaboradores
          </h3>
          <h1 className={`text-black text-3xl mt-2 mb-5 ${roboto.className}`}>
            Trabajamos con las mejores inmobilarias...
          </h1>
          <Button className="px-10" variant="primary">
            Ver más
          </Button>
        </div>
        <div className="flex w-full ml-56 justify-between mt-12">
          <CollaboratorCard
            src="/Collaborators/CTU.png"
            alt="CTU Logo"
            name="CTU"
            totalDevelopments={3}
            width={80}
            height={80}
          />
          <CollaboratorCard
            src="/Collaborators/Century21.png"
            alt="Century21 Logo"
            name="Century21"
            totalDevelopments={5}
            width={120}
            height={120}
          />
          <CollaboratorCard
            src="/Collaborators/Profit.png"
            alt="Profit Logo"
            name="Profit"
            totalDevelopments={2}
            width={120}
            height={120}
          />
          <CollaboratorCard
            src="/Collaborators/Tracia.png"
            alt="Tracia Logo"
            name="Tracia"
            totalDevelopments={1}
            width={120}
            height={120}
          />
        </div>
      </div>
    </section>
  );
};
