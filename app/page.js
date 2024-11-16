import Bottom from "@/components/Buttons/Bottom";
import Cardsimple from "@/components/Card/Cardsimple";
import Cardville from "@/components/Card/Cardville";
import Carouselflow from "@/components/Carousel/Carouselflow";
import Case from "@/components/Heros/Case";
import Simple from "@/components/Heros/Simple";
import Texted from "@/components/Typed/Texted";
import Research from "@/components/Bar/Research"
import HeroSection from "@/components/Heros/HeroSection";
import SlideEven from "@/components/Slider/SlideEven";

export default function Home() {
  return (
    <div className="">
      {/* SECTION BLOCK IMAGE */}
      <div className="w-full h-[80vh] flex items-center justify-center p-10">
        <div className="h-full rounded-lg overflow-hidden bg-cover bg-center w-full bg-[url('/img/back.jpg')]">
          <div className="bg-gradient-to-r from-[#000000af] to-[#0000000e] p-5 h-full w-full flex items-center">
            <div className="pl-5">
              <Texted />
              <p className="text-lg  text-orange-200 relative">
                Trouvez quelques-uns des meilleurs conseils de nos partenaires
                <br /> et amis dans toute la ville.
              </p>
              {/* <Search /> */}
              <Research />
            </div>
          </div>
          <Bottom />
        </div>
      </div>

      {/* EVENEMENT CONTAINER */}
      <div className="my-12 border-b-2 border-orange-300 pb-5 relative">
        <div className="m-auto flex flex-col items-center my-5">
          <span className="text-4xl text-orange-600 mb-3 bg-orange-100 py-2 px-5 rounded-full">- Les dernières annonces -</span>
          <span className="text-xl text-gray-600">Vibrez sur les évènements du moments</span>
        </div>
        <div className="w-full mb-4">
          <SlideEven />
        </div>
        {/* BOUTON VOIR PLUS */}
        <div className="flex items-center justify-center">
          <a href="#" className="bg-green-800 text-white transition-colors cursor-pointer hover:bg-green-700 text-md flex items-center justify-center px-4 py-2 rounded-full mx-auto mt-3 gap-2">
            <i className="fa-solid fa-plus"></i>
            Voir toutes les annonces
          </a>
        </div>
      </div>

      {/* SECTION HERO CASE */}
      <Case />

      {/* BLOCK VILLE CONTAINER */}
      <div className="my-12 border-b-2 border-green-300 pb-5">
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

      {/* SECTION HERO */}
      <HeroSection />

      {/* SECTION CAROUSEL FLOW */}
      <Carouselflow />

      {/* SECTION HERO TEXTE */}
      <Simple />
    </div >
  );
}
