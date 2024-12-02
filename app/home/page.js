import Bottom from "@/components/Buttons/Bottom";
import Cardville from "@/components/Card/Cardville";
import Carouselflow from "@/components/Carousel/Carouselflow";
import Case from "@/components/Heros/Case";
import Texted from "@/components/Typed/Texted";
import Research from "@/components/Bar/Research"
import HeroSection from "@/components/Heros/HeroSection";
import SlideEven from "@/components/Slider/SlideEven";
import HeroDonetwo from "@/components/Heros/HeroDonetwo";
import HeroDoneone from "@/components/Heros/HeroDoneone";
import Link from "next/link";
import SectionStat from "@/components/Stats/SectionStat";

export default function Home() {
  return (
    <div className="">
      <div className="w-5/6 mx-auto py-10">
        <Research />
      </div>

      {/* INSCRIPTION */}
      <div id="hero" className="relative w-5/6 mx-auto lg:py-4 lg:px-20 p-2 rounded-xl bg-gradient-to-r from-[#1b5c16] to-[#73ad54] flex items-center justify-between flex-col lg:flex-row my-6">
        <div className="block text-center mb-5 lg:text-left lg:mb-0">
          <h2 className="font-manrope text-2xl sm:text-3xl text-white font-semibold mb-1 sm:mb-5 lg:mb-2">
            Inscription
          </h2>
          <p className="text-lg sm:text-xl text-indigo-100">
            Les membres obtiennent toujours nos meilleurs prix une fois connectés
          </p>
        </div>
        <Link href="/auth/login" className="flex items-center gap-2 bg-white rounded-full shadow-sm text-lg text-[#1b5c16] font-semibold py-1 sm:py-4 px-8 transition-all duration-500">
          Se connecter
          <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.75 7L16.4167 7M11.8333 12.5L16.6852 7.64818C16.9907 7.34263 17.1435 7.18985 17.1435 7C17.1435 6.81015 16.9907 6.65737 16.6852 6.35182L11.8333 1.5" stroke="#1b5c16" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            </path>
          </svg>
        </Link>
      </div>

      {/* SECTION BLOCK IMAGE */}
      <div className="w-5/6 mx-auto md:h-96 flex items-center justify-center">
        <div className="h-full rounded-lg overflow-hidden bg-cover bg-center w-full bg-[url('/img/back.jpg')]">
          <div className="bg-white md:bg-transparent md:bg-gradient-to-r from-[#000000af] to-[#0000000e] md:p-5 h-full w-full flex items-center">
            <div className="md:pl-5">
              <Texted />
            </div>
          </div>
        </div>
      </div>

      {/* EVENEMENT CONTAINER */}
      <div className="w-5/6 mx-auto pb-5 relative mt-5">
        <div className="m-auto flex flex-col my-5">
          <span className="text-xl sm:text-4xl text-gray-800 sm:mb-3 mb-1 font-medium">Les dernières annonces</span>
          <span className="text-lg sm:text-xl text-gray-400">Vibrez sur les évènements du moments</span>
        </div>
        <div className="mb-4">
          <SlideEven />
        </div>
        {/* BOUTON VOIR PLUS */}
        <div className="flex items-center justify-center">
          <a href="#" className="border border-green-800 text-green-800 transition-colors cursor-pointer hover:bg-green-700 hover:text-white text-md flex items-center justify-center px-4 py-2 rounded-lg mx-auto mt-3">
            Voir toutes les annonces
          </a>
        </div>
      </div>

      <div>

      </div>

      {/* SECTION HERO CASE */}
      <Case />

      {/* BLOCK VILLE CONTAINER */}
      <div className="w-5/6 mx-auto my-12">
        <div className="m-auto flex flex-col my-5">
          <span className="text-xl md:text-4xl font-medium text-gray-900 mb-3">Explorez toutes les villes</span>
          <span className="text-xl text-gray-600">Vibrez sur les évènements du moments</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Cardville />
          <Cardville />
          <Cardville />
        </div>
        {/* BOUTON VOIR PLUS */}
        <div className="flex items-center justify-center mt-3">
          <a href="#" className="border border-orange-800 bg-white text-orange-700  transition-colors cursor-pointer hover:bg-orange-700 hover:text-white text-md flex items-center justify-center px-4 py-2 rounded-lg mx-auto gap-2">Voir toutes les villes</a>
        </div>
      </div>

      {/* SECTION HERO */}
      <HeroSection />

      {/* HERO ANOUCEMENT */}
      <HeroDoneone />

      {/* SECTION HERO STATS */}
      <SectionStat />

      {/* SECTION HERO TEXTE */}
      <HeroDonetwo />
    </div >
  );
}
