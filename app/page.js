<<<<<<< HEAD
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
=======
import Search from "@/components/Bar/Search";
import Bottom from "@/components/Buttons/Bottom";
import Cardsimple from "@/components/Card/Cardsimple";
import Cardville from "@/components/Card/Cardville";
import Carouselflow from "@/components/Carousel/Carouselflow";
import Case from "@/components/Heros/Case";
import Simple from "@/components/Heros/Simple";
import Texted from "@/components/Typed/Texted";
>>>>>>> c48826c (Version 10)

export default function Home() {
  return (
    <div className="">
      {/* SECTION BLOCK IMAGE */}
<<<<<<< HEAD
      <div className="w-full h-[87vh] flex items-center justify-center p-10">
=======
      <div className="w-full h-[80vh] flex items-center justify-center p-10">
>>>>>>> c48826c (Version 10)
        <div className="h-full rounded-lg overflow-hidden bg-cover bg-center w-full bg-[url('/img/back.jpg')]">
          <div className="bg-gradient-to-r from-[#000000af] to-[#0000000e] p-5 h-full w-full flex items-center">
            <div className="pl-5">
              <Texted />
              <p className="text-lg  text-orange-200 relative">
                Trouvez quelques-uns des meilleurs conseils de nos partenaires
                <br /> et amis dans toute la ville.
              </p>
<<<<<<< HEAD
              {/* <Search /> */}
              <Research />
=======
              <Search />
>>>>>>> c48826c (Version 10)
            </div>
          </div>
          <Bottom />
        </div>
      </div>

<<<<<<< HEAD
      {/* INSCRIPTION */}
      <div className="relative w-5/6 mx-auto lg:py-8 lg:px-20 p-3 rounded-2xl bg-gradient-to-r from-orange-600 to-[#ff9677] flex items-center justify-between flex-col lg:flex-row my-12">
        <div className="block text-center mb-5 lg:text-left lg:mb-0">
          <h2 className="font-manrope text-4xl text-white font-semibold mb-5 lg:mb-2">
            Inscription
          </h2>
          <p className="text-xl text-indigo-100">
          Les membres obtiennent toujours nos meilleurs prix une fois connectés
          </p>
        </div>
        <Link href="#" className="flex items-center gap-2 bg-white rounded-full shadow-sm text-lg text-orange-600 font-semibold py-4 px-8 transition-all duration-500">
          Se connecter
          <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.75 7L16.4167 7M11.8333 12.5L16.6852 7.64818C16.9907 7.34263 17.1435 7.18985 17.1435 7C17.1435 6.81015 16.9907 6.65737 16.6852 6.35182L11.8333 1.5" stroke="#ff9677" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            </path>
          </svg>
        </Link>
      </div>

      {/* EVENEMENT CONTAINER */}
      <div className="my-12 border-b-2 border-orange-300 pb-5 relative">
=======
      {/* EVENEMENT CONTAINER */}
      <div className="my-12 border-b-2 border-orange-300 pb-5">
>>>>>>> c48826c (Version 10)
        <div className="m-auto flex flex-col items-center my-5">
          <span className="text-4xl text-orange-600 mb-3 bg-orange-100 py-2 px-5 rounded-full">- Les dernières annonces -</span>
          <span className="text-xl text-gray-600">Vibrez sur les évènements du moments</span>
        </div>
<<<<<<< HEAD
        <div className="w-5/6 mx-auto mb-4">
          <SlideEven />
=======
        <div className="px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Cardsimple />
          <Cardsimple />
          <Cardsimple />
>>>>>>> c48826c (Version 10)
        </div>
        {/* BOUTON VOIR PLUS */}
        <div className="flex items-center justify-center">
          <a href="#" className="bg-green-800 text-white transition-colors cursor-pointer hover:bg-green-700 text-md flex items-center justify-center px-4 py-2 rounded-full mx-auto mt-3 gap-2">
            <i className="fa-solid fa-plus"></i>
            Voir toutes les annonces
          </a>
        </div>
      </div>

<<<<<<< HEAD
      {/* HERO ANOUCEMENT */}
      <HeroDoneone />

=======
>>>>>>> c48826c (Version 10)
      {/* SECTION HERO CASE */}
      <Case />

      {/* BLOCK VILLE CONTAINER */}
<<<<<<< HEAD
      <div className="w-5/6 mx-auto my-12 border-b-2 border-green-300 pb-5">
=======
      <div className="my-12 border-b-2 border-green-300 pb-5">
>>>>>>> c48826c (Version 10)
        <div className="m-auto flex flex-col items-center my-5">
          <span className="text-4xl text-green-600 mb-3 bg-green-100 py-2 px-5 rounded-full">- Explorez toutes les villes -</span>
          <span className="text-xl text-gray-600">Vibrez sur les évènements du moments</span>
        </div>
        <div className="px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Cardville />
          <Cardville />
          <Cardville />
        </div>
        {/* BOUTON VOIR PLUS */}
        <div className="flex items-center justify-center">
          <a href="#" className="bg-orange-800 text-white transition-colors cursor-pointer hover:bg-orange-700 text-md flex items-center justify-center px-4 py-2 rounded-full mx-auto mt-3 gap-2"><i className="fa-solid fa-plus"></i>Voir toutes les villes</a>
        </div>
      </div>

<<<<<<< HEAD
      {/* SECTION HERO */}
      <HeroSection />

      {/* SECTION CAROUSEL FLOW */}
      <Carouselflow />

      {/* SECTION HERO STATS */}
      <SectionStat />

      {/* SECTION HERO TEXTE */}
      <HeroDonetwo />
=======
      {/* SECTION CAROUSEL FLOW */}
      <Carouselflow />

      {/* SECTION HERO TEXTE */}
      <Simple />
>>>>>>> c48826c (Version 10)
    </div >
  );
}
