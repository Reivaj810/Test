"use client";
import { Navbar, Toolbar } from "@/components/molecules";
import { CollaboratorsSection, Footer, Header, OurBenefits } from "@/components/templates";
import { getCookie } from "@/utils/getCookie";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [token, setToken] = useState<string | null>("");

  useEffect(() => {
    const tokenValue = getCookie("$token");
    setToken(tokenValue);
    if (!tokenValue) {
      router.push("/login");
    }
  }, []);

  if (!token) {
    return <main className="min-h-screen bg-white"></main>;
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Toolbar />
      <Header />
      <CollaboratorsSection />
      <OurBenefits />
      <Footer />
    </main>
  );
}
