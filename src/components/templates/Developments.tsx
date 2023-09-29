import { Roboto } from "next/font/google";
import { CollaboratorCard } from "../molecules";
import { Button } from "../atoms";

const roboto = Roboto({ weight: "700", subsets: ["cyrillic"] });

export const Developments = () => {
  return (
    <section className="px-40 pb-14 mt-20 w-full flex flex-col">
      <h1 className={`text-black text-3xl ${roboto.className}`}>
        Nuestras Desarrolladoras
      </h1>
      <div className="grid grid-cols-6 gap-y-24 w-full mt-14">
        <CollaboratorCard
          src="/Collaborators/CTU.png"
          alt="CTU Logo"
          name="CTU"
          totalDevelopments={3}
          width={100}
          height={100}
        />
        <CollaboratorCard
          src="/Collaborators/Century21.png"
          alt="Century21 Logo"
          name="Century21"
          totalDevelopments={5}
          width={140}
          height={140}
        />
        <CollaboratorCard
          src="/Collaborators/Profit.png"
          alt="Profit Logo"
          name="Profit"
          totalDevelopments={2}
          width={140}
          height={140}
        />
        <CollaboratorCard
          src="/Collaborators/Tracia.png"
          alt="Tracia Logo"
          name="Tracia"
          totalDevelopments={1}
          width={140}
          height={140}
        />

        <CollaboratorCard
          src="/Collaborators/CTU.png"
          alt="CTU Logo"
          name="CTU"
          totalDevelopments={3}
          width={100}
          height={100}
        />
        <CollaboratorCard
          src="/Collaborators/Century21.png"
          alt="Century21 Logo"
          name="Century21"
          totalDevelopments={5}
          width={140}
          height={140}
        />
        <CollaboratorCard
          src="/Collaborators/Profit.png"
          alt="Profit Logo"
          name="Profit"
          totalDevelopments={2}
          width={140}
          height={140}
        />
        <CollaboratorCard
          src="/Collaborators/Tracia.png"
          alt="Tracia Logo"
          name="Tracia"
          totalDevelopments={1}
          width={140}
          height={140}
        />

        <CollaboratorCard
          src="/Collaborators/CTU.png"
          alt="CTU Logo"
          name="CTU"
          totalDevelopments={3}
          width={100}
          height={100}
        />
        <CollaboratorCard
          src="/Collaborators/Century21.png"
          alt="Century21 Logo"
          name="Century21"
          totalDevelopments={5}
          width={140}
          height={140}
        />
        <CollaboratorCard
          src="/Collaborators/Profit.png"
          alt="Profit Logo"
          name="Profit"
          totalDevelopments={2}
          width={140}
          height={140}
        />
        <CollaboratorCard
          src="/Collaborators/Tracia.png"
          alt="Tracia Logo"
          name="Tracia"
          totalDevelopments={1}
          width={140}
          height={140}
        />
      </div>
      <div className="w-full flex justify-center mt-14">
        <Button className="bg-black text-white px-10" variant="primary">
          Ver Mas
        </Button>
      </div>
    </section>
  );
};
