"use client";
import HeroSection from "@/components/NewHero";
import Mob from "@/components/3mob";
import Cardx from "@/components/Card";
import Compare from "@/components/Compare";
import Holder from "@/components/Holder";
import More from "@/components/More";
import TokenRenum from "@/components/TokenRenum";
import Roadmap from "@/components/Roadmap";
import Tokenomics from "@/components/Tokenomics";
import FAQ from "@/components/FAQ";
import Innovative from "@/components/Innovative";
import Footer from "@/components/Footer2";
import Nav from "@/components/Nav";
import MegaHero from "@/components/MegaHero";
export default function Home() {
  return (
    <div className="w-full h-full bg-black text-white flex-col">
      <Nav />
      <MegaHero />
      <Innovative />
      <Mob />
      <Cardx />
      <Compare />
      <Holder />
      <More />
      <TokenRenum />
      <Roadmap />
      <Tokenomics />
      <FAQ />

      <Footer />
    </div>
  );
}
