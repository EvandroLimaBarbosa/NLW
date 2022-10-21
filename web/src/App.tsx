import React, { useState, useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import CreateAdBanner from "./components/CreateAdBanner";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import GameBanner from "./components/GameBanner";

import "./styles/main.css";

import logoImg from "./assets/logo-nwl-esports.svg";
import CreateAdModal from "./components/CreateAdModal";
import axios from "axios";
interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

function App() {
  const [games, setGames] = useState<Game[]>([]);
  const [lenghtBanners, setLenghtBanners] = useState(5);
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    slides: {
      perView: lenghtBanners,
      spacing: 25,
    },
    created() {
      setLoaded(true);
    },
  });

  useEffect(() => {
    axios("http://localhost:3333/games").then((response) => {
      setGames(response.data);
      setLenghtBanners(6);
    });
  }, []);

  return (
    // Layout

    <div className="max-w-[1344px] mx-auto flex flex-col justify-around items-center my-20 ">
      <img src={logoImg} alt=""></img>

      <h1 className="text-6xl font-black text-white mt-20">
        Seu
        <span className="text-transparent bg-nlw-gradient bg-clip-text">
          {" "}
          duo{" "}
        </span>
        está aqui.
      </h1>

      {/* Area dos jogos */}
      <div className="max-w-[1500px] relative">
      <div
        ref={sliderRef}
        className={`max-w-[1344px] items-center navigation-wrapper keen-slider mt-16 relative block`}
      >
        {games.map((game) => {
          return (
            <GameBanner
              key={game.id}
              title={game.title}
              bannerUrl={game.bannerUrl}
              adsCount={game._count.ads}
            />
          );
        })}
      </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={currentSlide === instanceRef.current.slides.length - lenghtBanners}
            />
          </>
        )}
      </div>

      <Dialog.Root>
          <CreateAdBanner />
          <CreateAdModal />
      </Dialog.Root>
    </div>
  );
}

function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  const disabeld = props.disabled ? " fill-gray-400 " : "fill-white";

  return (
    <svg
      onClick={props.onClick}
      className={`absolute w-10 h-10 arrow cursor-pointer ${
        props.left ? " left-10" : " left-auto right-2"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}

export default App;
