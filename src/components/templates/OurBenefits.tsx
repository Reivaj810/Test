import { Roboto } from "next/font/google";
import Image from "next/image";
import { Button } from "../atoms";

const roboto = Roboto({ weight: "500", subsets: ["cyrillic"] });

export const OurBenefits = () => {
  return (
    <section className="bg-white flex">
      <Image
        src={"/Landing/BenefitsImage.jpeg"}
        width={1200}
        height={500}
        alt="Edificio"
      />
      <div className="w-1/3 pt-12 pl-16 pr-12">
        <h3 className="text-black uppercase tracking-widest">
          Nuestros beneficios
        </h3>
        <h1 className={`text-black text-4xl mt-2 mb-5 ${roboto.className}`}>
          ¡Definimos nuestros beneficios basándonos en tus necesidades!
        </h1>
        <p className="text-black">
          Texto descriptivo mmod quae non nossitasit harcima dunt adi aut
          ipsapid enim consedi non- se sint fuga. Nam, venesti solupit ut
          peliquibus dellorem aut ullupta volup tat ilic totae. Itasinc tendene
          veratem adi bla conseq.
        </p>

        <Button className="px-10 mt-12" variant="primary">Ver beneficios</Button>
      </div>
    </section>
  );
};
