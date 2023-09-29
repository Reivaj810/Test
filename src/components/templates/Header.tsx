import { Roboto } from "next/font/google";
import { useJsApiLoader, GoogleMap } from "@react-google-maps/api";
import Image from "next/image";

const roboto = Roboto({ weight: "500", subsets: ["cyrillic"] });

export const Header = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyDSTm-T4O4mQ6rudpgF6vTPwSu7bLTeuCE",
  });

  const containerStyle = {
    width: "100%",
    height: "800px",
  };

  const center = {
    lat: 28.635743,
    lng: -106.077667,
  };

  if (!isLoaded) {
    return <></>;
  }

  return (
    <section className="px-40 mt-8">
      <div className="w-64 mb-4">
        <h1 className={`text-black text-3xl ${roboto.className}`}>
          Encuentra los mejores lugares...
        </h1>
      </div>
      <div className="flex space-x-8">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
        ></GoogleMap>
        <Image src={"/Landing/CenturyAnnouncement.png"} width={232} height={652} alt="Century 21 Announcement" />
      </div>
    </section>
  );
};
